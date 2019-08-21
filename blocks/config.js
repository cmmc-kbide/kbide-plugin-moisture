module.exports = [
    {
        name: "Moisture sensor",
        blocks: [
            'adc_pin_dummy_input',
            {
                xml:
                    `<block type="moisture_begin">
                        <value name="PIN">
                            <block type="adc_pin_dummy_input">
                            </block>
                        </value>
                    </block>`
            },
            'moisture_read_digital',
            'moisture_read_analog',
            {
                xml:
                    `<block type="moisture_map_value">
                        <value name="VALUE">
                            <block type="moisture_read_analog">
                            </block>
                        </value>
                    </block>`
            },
            'moisture_water_level'
        ]
    }
];