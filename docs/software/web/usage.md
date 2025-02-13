---
id: web-usage-software
title: Using the web interface
sidebar_label: Usage
---
:::caution
It has been reported that some of this information is out of date.

FIXME - Investigate and rewrite document to reflect the current web usage solution.
:::

Assuming your device is connected to a wireless network, push the User Button (that's the middle button on the T-Beam) until you get to the Network settings screen.

That screen will display four lines (example):

* WiFi: Software AP (Admin)
* IP: 192.168.42.123    (0/4)
* SSID: dogsRuleCatsDrool   - alternating with -    PWD: butDogsFearCats
* http://meshtastic.local

If you have just one Meshtastic device on your network, the easiest thing to do is to go the URL printed on the display. That URL should work provided that mDNS (aka ZeroConf) is not blocked on your local network. If you have more than one device or there's a problem with mDNS name resolution, you will have to refer to the device's IP address.


## Common Problems

### Problem: File not found: /static/index.html

Cause: This most likely means that the file system for the web server has not been loaded. You probably used esphome-flasher or some other GUI tool to flash the firmware.

Solutions:

Option 1) Flash the device with the `device-install.sh` script that comes packaged with the firmware zip file (you'll lose previous settings). Then follow the instructions under configuration to upload the web interface.

Option 2) Flash the device with the OTA update from within the Android application.

Option 3) Flash the device with the SPIFFS instructions in platform.io.

### Insufficient space to upload new files

Cause: Typically a small partition has been set aside from previous firmware installed on the module. Instructions for how to fix this can be found on the [ESP32-Partitions](/docs/software/web/web-partitions-software) page.
