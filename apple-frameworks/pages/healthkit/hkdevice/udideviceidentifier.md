> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdevice/udideviceidentifier](https://developer.apple.com/documentation/healthkit/hkdevice/udideviceidentifier)

# udiDeviceIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The device identifier portion of the US Food and Drug Administration’s Unique Device Identifier (UDI).

## Declaration

```swift
var udiDeviceIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

The UDI identifies medical devices. You can look up additional information about the device at [AccessGUDID](http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/GlobalUDIDatabaseGUDID/ucm444831.htm). For more information, see [FDA Unique Device Identification](http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/default.htm).

## See Also

### Accessing Data About a Device

- [firmwareVersion](firmwareversion.md): An arbitrary string representing the current version of the firmware running on the device.
- [hardwareVersion](hardwareversion.md): An arbitrary string representing the hardware version of the device.
- [localIdentifier](localidentifier.md): An identifier that uniquely identifies the device object on the hardware running this code.
- [manufacturer](manufacturer.md): A string representing the device’s manufacturer.
- [model](model.md): A string representing the device’s model.
- [name](name.md): The user-facing name for the device.
- [softwareVersion](softwareversion.md): An arbitrary string representing the version of the software running on the device.

# UDIDeviceIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The device identifier portion of the US Food and Drug Administration’s Unique Device Identifier (UDI).

## Declaration

```objectivec
@property (readonly, nullable) NSString * UDIDeviceIdentifier;
```

<a id="Discussion"></a>

## Discussion

The UDI identifies medical devices. You can look up additional information about the device at [AccessGUDID](http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/GlobalUDIDatabaseGUDID/ucm444831.htm). For more information, see [FDA Unique Device Identification](http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/default.htm).

## See Also

### Accessing Data About a Device

- [firmwareVersion](firmwareversion.md): An arbitrary string representing the current version of the firmware running on the device.
- [hardwareVersion](hardwareversion.md): An arbitrary string representing the hardware version of the device.
- [localIdentifier](localidentifier.md): An identifier that uniquely identifies the device object on the hardware running this code.
- [manufacturer](manufacturer.md): A string representing the device’s manufacturer.
- [model](model.md): A string representing the device’s model.
- [name](name.md): The user-facing name for the device.
- [softwareVersion](softwareversion.md): An arbitrary string representing the version of the software running on the device.
