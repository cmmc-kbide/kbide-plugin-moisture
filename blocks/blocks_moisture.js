Blockly.Blocks["adc_pin_dummy_input"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Analog pin")
      .appendField(new Blockly.FieldDropdown([
        ["ADC1_CH0  (PIN36)", "36"],
        ["ADC1_CH1  (PIN37)", "37"],
        ["ADC1_CH2  (PIN38)", "38"],
        ["ADC1_CH3  (PIN39)", "39"],
        ["ADC1_CH4  (PIN32)", "32"],
        ["ADC1_CH5  (PIN33)", "33"],
        ["ADC1_CH6  (PIN34)", "34"],
        ["ADC1_CH7  (PIN35)", "35"],
        ["ADC2_CH0  (PIN04)", "4"],
        ["ADC2_CH1  (PIN00)", "0"],
        ["ADC2_CH2  (PIN02)", "2"],
        ["ADC2_CH3  (PIN15)", "15"],
        ["ADC2_CH4  (PIN13)", "13"],
        ["ADC2_CH5  (PIN12)", "12"],
        ["ADC2_CH6  (PIN14)", "14"],
        ["ADC2_CH7  (PIN27)", "27"],
        ["ADC2_CH8  (PIN25)", "25"],
        ["ADC2_CH9  (IO26)", "26"]
      ]), "PIN");
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["moisture_begin"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("moisture1", null, ["Plugin.Moisture"], ["Plugin.Moisture"]), "instance")
      .appendField("begin pin");
    this.appendValueInput("PIN")
      .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["moisture_read_digital"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("moisture1", null, ["Plugin.Moisture"], ["Plugin.Moisture"]), "instance")
      .appendField("read digital value");
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["moisture_read_analog"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("moisture1", null, ["Plugin.Moisture"], ["Plugin.Moisture"]), "instance")
      .appendField("read analog value");
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['moisture_map_value'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("moisture1", null, ["Plugin.Moisture"], ["Plugin.Moisture"]), "instance")
      .appendField("Map value (");
    this.appendValueInput("VALUE")
      .setCheck("Number");
    this.appendDummyInput()
      .appendField(", ")
      .appendField(new Blockly.FieldNumber(0), "fromLow")
      .appendField(", ")
      .appendField(new Blockly.FieldNumber(4095), "fromHigh")
      .appendField(", ")
      .appendField(new Blockly.FieldNumber(0), "toLow")
      .appendField(", ")
      .appendField(new Blockly.FieldNumber(100), "toHigh")
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['moisture_water_level'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("moisture1", null, ["Plugin.Moisture"], ["Plugin.Moisture"]), "instance")
      .appendField("water level (0-100)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};