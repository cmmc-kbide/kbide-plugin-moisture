#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include "CMMC_Moisture.h"

MOISTURE moisture1;


void setup()
{
  Serial.begin(115200);
  moisture1.begin(36);
}
void loop()
{
  Serial.print(((String("Soil moisture :")+String((moisture1.readAnalogValue())))));
  Serial.println(((String(" map value")+String((moisture1.mapValue((moisture1.readAnalogValue()), 0, 4095, 0, 100))))));
  delay(100);
}
