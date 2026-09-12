> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit](https://developer.apple.com/documentation/hiddriverkit)

# HIDDriverKit

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Framework  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Develop drivers for human-interface devices, such as keyboards, pointing devices, and digitizers like pens and touch pads.

<a id="overview"></a>

## Overview

The HIDDriverKit framework provides C++ classes for developing drivers for human interface devices. HIDDriverKit uses the core types defined in [DriverKit](driverkit.md), and adds features specific to human interface device development.

Develop your driver with DriverKit and HIDDriverKit, and package it in an app that uses the [System Extensions](https://developer.apple.com/documentation/systemextensions) framework to install and upgrade the driver on the user’s Mac.

> **Note**

>  HIDDriverKit is available on macOS.

## Topics

### Essentials

- [com.apple.developer.driverkit.transport.hid](bundleresources/entitlements/com.apple.developer.driverkit.transport.hid.md): A Boolean value that indicates whether the driver communicates with human interface devices.
- [Handling Keyboard Events from a Human Interface Device](hiddriverkit/handling-keyboard-events-from-a-human-interface-device.md): Process keyboard-related data from a human interface device and dispatch events to the system.
- [Handling Stylus Input from a Human Interface Device](hiddriverkit/handling-stylus-input-from-a-human-interface-device.md): Process stylus-related input from a human interface device and dispatch events to the system.

### Samples

- [DriverKit sample code](driverkit/driverkit-sample-code.md): Explore projects that demonstrate how to write macOS device drivers with the DriverKit family of frameworks.

### Driver Interfaces

- [com.apple.developer.driverkit.family.hid.eventservice](bundleresources/entitlements/com.apple.developer.driverkit.family.hid.eventservice.md): A Boolean value that indicates whether the driver provides a HID-related event service to the system.
- [IOUserHIDEventDriver](hiddriverkit/iouserhideventdriver.md): A complete driver object that dispatches keyboard, digitizer, scrolling, and pointer events originating from a HID device.
- [IOUserHIDEventService](hiddriverkit/iouserhideventservice.md): A service that parses HID report data into elements that you can use to dispatch events.
- [IOHIDEventService](hiddriverkit/iohideventservice.md): The base class for implementing a device or operating system service that dispatches events to the system.

### Providers

- [com.apple.developer.driverkit.family.hid.device](bundleresources/entitlements/com.apple.developer.driverkit.family.hid.device.md): A Boolean value that indicates whether the driver provides a HID-related service to the system.
- [IOHIDInterface](hiddriverkit/iohidinterface.md): A provider object for a HID device’s interface.
- [IOUserUSBHostHIDDevice](hiddriverkit/iouserusbhosthiddevice.md): A provider object for USB devices that support HID interactions.
- [IOUserHIDDevice](hiddriverkit/iouserhiddevice.md): A provider object for devices that support interactions with users.
- [IOHIDDevice](hiddriverkit/iohiddevice.md): An object containing the low-level behavior for all HID device providers.

### Events

- [IOHIDDigitizerStylusData](hiddriverkit/iohiddigitizerstylusdata.md): A structure containing digitizer stylus data.
- [IOHIDDigitizerTouchData](hiddriverkit/iohiddigitizertouchdata.md): A structure containing the current digitizer touch data.

### HID Usage Tables

- [HID Usage Tables](hiddriverkit/hid-usage-tables.md): Identify the types of data that HID devices can report to your driver.
- [Match Criteria](hiddriverkit/match-criteria.md): Specify the criteria that the system uses to match your driver to a device.

### HID Device Data

- [IOHIDElement](hiddriverkit/iohidelement.md): An object that contains parsed information from a HID input report.
- [IOHIDDigitizerCollection](hiddriverkit/iohiddigitizercollection.md): A collection of elements that contain digitizer-related data.
- [com.apple.developer.hid.virtual.device](bundleresources/entitlements/com.apple.developer.hid.virtual.device.md): A Boolean value that indicates whether the driver creates a virtual HID device.
- [Low-Level Information](hiddriverkit/low-level-information.md): Understand the underlying structures that support HID drivers.

### Reference

- [HIDDriverKit Macros](hiddriverkit/hiddriverkit-macros.md)

### Macros

- [kIOHIDDeviceApprovedCarPlayDeviceKey](hiddriverkit/kiohiddeviceapprovedcarplaydevicekey.md)
- [kIOHIDDeviceCarPlayDeviceKey](hiddriverkit/kiohiddevicecarplaydevicekey.md)
- [kIOHIDDeviceHIDRMHashKey](hiddriverkit/kiohiddevicehidrmhashkey.md)
- [kIOHIDEventServicePropertiesRequiredForMatching](hiddriverkit/kiohideventservicepropertiesrequiredformatching.md)
- [kIOHIDEventServiceSensorControlOptionsKey](hiddriverkit/kiohideventservicesensorcontroloptionskey.md)
- [kIOHIDSupportedEventMaskKey](hiddriverkit/kiohidsupportedeventmaskkey.md)
- [kIOHIDSupportedKeyboardUsagePairsKey](hiddriverkit/kiohidsupportedkeyboardusagepairskey.md)
- [kIOHIDSupportedVendorUsagePairsKey](hiddriverkit/kiohidsupportedvendorusagepairskey.md)

### Enumeration Cases

- [kHIDUsage_GenDevControls_BatteryStrength](hiddriverkit/khidusage_gendevcontrols_batterystrength.md)
- [kHIDUsage_LED_BlueLEDChannel](hiddriverkit/khidusage_led_blueledchannel.md)
- [kHIDUsage_LED_GoodStatus](hiddriverkit/khidusage_led_goodstatus.md)
- [kHIDUsage_LED_GreenLEDChannel](hiddriverkit/khidusage_led_greenledchannel.md)
- [kHIDUsage_LED_IndicatorBlue](hiddriverkit/khidusage_led_indicatorblue.md)
- [kHIDUsage_LED_IndicatorOrange](hiddriverkit/khidusage_led_indicatororange.md)
- [kHIDUsage_LED_LEDIntensity](hiddriverkit/khidusage_led_ledintensity.md)
- [kHIDUsage_LED_RGB_LED](hiddriverkit/khidusage_led_rgb_led.md)
- [kHIDUsage_LED_RedLEDChannel](hiddriverkit/khidusage_led_redledchannel.md)
- [kHIDUsage_LED_SystemMicrophoneMute](hiddriverkit/khidusage_led_systemmicrophonemute.md)
- [kHIDUsage_LED_WarningStatus](hiddriverkit/khidusage_led_warningstatus.md)
- [kHIDUsage_Snsr_Biometric_HeartRate](hiddriverkit/khidusage_snsr_biometric_heartrate.md)
- [kHIDUsage_Snsr_Data_Biometric_HeartRate](hiddriverkit/khidusage_snsr_data_biometric_heartrate.md)
- [kHIDUsage_Snsr_Data_Hinge](hiddriverkit/khidusage_snsr_data_hinge.md)
- [kHIDUsage_Snsr_Data_Hinge_Angle](hiddriverkit/khidusage_snsr_data_hinge_angle.md)
- [kHIDUsage_Snsr_Motion_GravityVector](hiddriverkit/khidusage_snsr_motion_gravityvector.md)
- [kHIDUsage_Snsr_Motion_LinearAccelerometer](hiddriverkit/khidusage_snsr_motion_linearaccelerometer.md)
- [kHIDUsage_Snsr_Other_HingeAngle](hiddriverkit/khidusage_snsr_other_hingeangle.md)

### Enumerations

- [IOHIDServiceSensorControlOptions](hiddriverkit/iohidservicesensorcontroloptions.md)
