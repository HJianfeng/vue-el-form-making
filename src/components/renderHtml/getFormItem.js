export const girdTemplate = function(item) {
  let elCol = '';
  item.columns.forEach((col,colIndex) => {
    let colItemChildren = '';
    col.list.forEach(citem => {
      if(citem.type === 'blank') {
        colItemChildren += `
          <el-form-item label="${citem.name}" prop="${citem.model}" key="${citem.key}">
            <slot name="${citem.model}" :model="models"></slot>
          </el-form-item>
        `
      } else {
        colItemChildren += genetateFormItem(citem);
      }
    })
    elCol += `
      <el-col span="${col.span}">
        ${colItemChildren}
      </el-col>
    `
  });
  return `
    <el-row
      key="${item.key}"
      type="flex"
      gutter="${item.options.gutter ? item.options.gutter : 0}"
      justify="${item.options.justify}"
      align="${item.options.align}"
    >
      ${elCol}
    </el-row>
  `
}

export const genetateFormItem = function(widget) {
  const dataModel = `models[${widget.model}]`;
  const width = (widget.options.width || widget.options.width === 0)?`{width: '${widget.options.width}'}`:`''`;
  let formItem = '';
  if(widget.type === 'input') {
    if(widget.options.dataType == 'number' || widget.options.dataType == 'integer' || widget.options.dataType == 'float') {
      formItem = `
        <el-input 
            type="number"
            v-model.number="${dataModel}"
            placeholder="${widget.options.placeholder}"
            :style="${width}"
            :disabled="${widget.options.disabled}"
        ></el-input>`;
    } else {
      formItem = `
        <el-input 
            type="${widget.options.dataType}"
            v-model="${dataModel}"
            placeholder="${widget.options.placeholder}"
            :style="${width}"
            :disabled="${widget.options.disabled}"
        ></el-input>`;
    }
  } else if(widget.type === 'textarea') {
    formItem = `
      <el-input type="textarea" :rows="5"
        v-model="${dataModel}"
        placeholder="${widget.options.placeholder}"
        :style="${width}"
        :disabled="${widget.options.disabled}"
      ></el-input>
    `
  } else if(widget.type == 'number') {
    formItem = `<el-input-number 
        v-model="${dataModel}" 
        :style="${width}"
        :step="${widget.options.step}"
        controls-position="right"
        :disabled="${widget.options.disabled}"
        :min="${widget.options.min}"
        :max="${widget.options.max}"
      ></el-input-number>`
  } else if(widget.type === 'radio') {
    let radio = ``;
    const options = (widget.options.remote ? widget.options.remoteOptions : widget.options.options);
    options.forEach(item => {
      radio += `
        <el-radio
          :style="{display: ${widget.options.inline?'inline-block' : 'block'} }"
          :label="${item.value}">
          ${widget.options.remote?item.label:widget.options.showLabel ? item.label : item.value}
        </el-radio>
      `
    })
    formItem = `
    <el-radio-group v-model="${dataModel}"
      :style="${width}"
      :disabled="${widget.options.disabled}">
      ${radio}
    </el-radio-group>
    `
  } else if(widget.type === 'checkbox') {
    const options = (widget.options.remote ? widget.options.remoteOptions : widget.options.options);
    let checkbox = '';
    options.forEach(item => {
      checkbox += `
        <el-checkbox
          :style="{display: ${widget.options.inline?'inline-block' : 'block'} }"
          :label="${item.value}">
          ${widget.options.remote?item.label:widget.options.showLabel ? item.label : item.value}
        </el-checkbox>
      `
    })
    formItem = `
      <el-checkbox-group v-model="${dataModel}"
      :style="${width}"
      :disabled="${widget.options.disabled}"
      >${checkbox}</el-checkbox-group>
    `
  } else if(widget.type === 'time') {
    formItem = `
      <el-time-picker 
        v-model="${dataModel}"
        :is-range="${widget.options.isRange}"
        placeholder="${widget.options.placeholder}"
        start-placeholder="${widget.options.startPlaceholder}"
        end-placeholder="${widget.options.endPlaceholder}"
        :readonly="${widget.options.readonly}"
        :disabled="${widget.options.disabled}"
        :editable="${widget.options.editable}"
        :clearable="${widget.options.clearable}"
        :arrowControl="${widget.options.arrowControl}"
        :value-format="${widget.options.format}"
        :style="${width}"
      >
      </el-time-picker>
    `
  } else if(widget.type === 'date') {
    formItem = `
      <el-date-picker
        v-model="${dataModel}"
        type="${widget.options.type}"
        placeholder="${widget.options.placeholder}"
        start-placeholder="${widget.options.startPlaceholder}"
        end-placeholder="${widget.options.endPlaceholder}"
        :readonly="${widget.options.readonly}"
        :disabled="${widget.options.disabled}"
        :editable="${widget.options.editable}"
        :clearable="${widget.options.clearable}"
        value-format="${widget.options.timestamp ? 'timestamp' : widget.options.format}"
        format="${widget.options.format}"
        :style="${width}"
      ></el-date-picker>
    `
  } else if(widget.type === 'rate') {
    formItem = `
      <el-rate 
        v-model="${dataModel}"
        :max="${widget.options.max}"
        :disabled="${widget.options.disabled}"
        :allow-half="${widget.options.allowHalf}"
      ></el-rate>
    `
  } else if(widget.type === 'color') {
    formItem = `
      <el-color-picker 
        v-model="${dataModel}"
        :disabled="${widget.options.disabled}"
        :show-alpha="${widget.options.showAlpha}"
      ></el-color-picker>
    `
  } else if(widget.type === 'select') {
    const options = (widget.options.remote ? widget.options.remoteOptions : widget.options.options);
    let selectTemplate = '';
    options.forEach(item => {
      selectTemplate += `
      <el-option key="${item.value}" value="${item.value}" label="${(widget.options.showLabel || widget.options.remote)?item.label:item.value}"></el-option>
      `;
    })
    formItem = `
      <el-select
        v-model="${dataModel}"
        :disabled="${widget.options.disabled}"
        :multiple="${widget.options.multiple}"
        :clearable="${widget.options.clearable}"
        placeholder="${widget.options.placeholder}"
        :style="${width}"
        :filterable="${widget.options.filterable}"
      >
      ${selectTemplate}
      </el-select>
    `
  } else if(widget.type === 'switch') {
    formItem = `
      <el-switch
        v-model="${dataModel}"
        :disabled="${widget.options.disabled}"
      ></el-switch>
    `
  } else if(widget.type === 'slider') {
    formItem = `
      <el-slider 
        v-model="${dataModel}"
        :min="${widget.options.min}"
        :max="${widget.options.max}"
        :disabled="${widget.options.disabled}"
        :step="${widget.options.step}"
        :show-input="${widget.options.showInput}"
        :range="${widget.options.range}"
        :style="${width}"
      ></el-slider>
    `
  } else if(widget.type === 'editor') {
    formItem = `
    <vue-editor
        v-model="${dataModel}"
        :style="${width}"
      >
      </vue-editor>
    `
  } else if(widget.type === 'cascader') {
    formItem = `
      <el-cascader
        v-model="${dataModel}"
        :disabled="${widget.options.disabled}"
        :clearable="${widget.options.clearable}"
        placeholder="${widget.options.placeholder}"
        :style="${width}"
        :options="${widget.options.remoteOptions}"
      ></el-cascader>
    `
  } else if(widget.type === 'text') {
    formItem = `<span>{{${dataModel}}}</span>`
  }
  return `
  <el-form-item label="${widget.name}" prop="${widget.model}">
    ${formItem}
  </el-form-item>
`
}