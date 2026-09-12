> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdevice/localidentifier](https://developer.apple.com/documentation/healthkit/hkdevice/localidentifier)

# localIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An identifier that uniquely identifies the device object on the hardware running this code.

## Declaration

```swift
var localIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

For example, Bluetooth peripherals that store data directly into HealthKit use the peripheral’s CoreBluetooth UUID. This ID is only valid on the current hardware running the app. For example, connecting the same Bluetooth device to an iPhone and an Apple Watch produces two different local identifiers. Similarly, updating a device changes the local identifier. Device objects with different local identifiers appear as separate devices in the HealthKit Store.

## See Also

### Accessing Data About a Device

- [udiDeviceIdentifier](udideviceidentifier.md): The device identifier portion of the US Food and Drug Administration’s Unique Device Identifier (UDI).
- [firmwareVersion](firmwareversion.md): An arbitrary string representing the current version of the firmware running on the device.
- [hardwareVersion](hardwareversion.md): An arbitrary string representing the hardware version of the device.
- [manufacturer](manufacturer.md): A string representing the device’s manufacturer.
- [model](model.md): A string representing the device’s model.
- [name](name.md): The user-facing name for the device.
- [softwareVersion](softwareversion.md): An arbitrary string representing the version of the software running on the device.

# localIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An identifier that uniquely identifies the device object on the hardware running this code.

## Declaration

```objectivec
@property (readonly, nullable) NSString * localIdentifier;
```

<a id="Discussion"></a>

## Discussion

For example, Bluetooth peripherals that store data directly into HealthKit use the peripheral’s CoreBluetooth UUID. This ID is only valid on the current hardware running the app. For example, connecting the same Bluetooth device to an iPhone and an Apple Watch produces two different local identifiers. Similarly, updating a device changes the local identifier. Device objects with different local identifiers appear as separate devices in the HealthKit Store.

## See Also

### Accessing Data About a Device

- [UDIDeviceIdentifier](udideviceidentifier.md): The device identifier portion of the US Food and Drug Administration’s Unique Device Identifier (UDI).
- [firmwareVersion](firmwareversion.md): An arbitrary string representing the current version of the firmware running on the device.
- [hardwareVersion](hardwareversion.md): An arbitrary string representing the hardware version of the device.
- [manufacturer](manufacturer.md): A string representing the device’s manufacturer.
- [model](model.md): A string representing the device’s model.
- [name](name.md): The user-facing name for the device.
- [softwareVersion](softwareversion.md): An arbitrary string representing the version of the software running on the device.
