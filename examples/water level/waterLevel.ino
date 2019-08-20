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
  Serial.print(((String("Water level")+String((moisture1.waterLevel())))));
  delay(100); 
}
