> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdevice](https://developer.apple.com/documentation/healthkit/hkdevice)

# HKDevice (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A device that generates data for HealthKit.

## Declaration

```swift
class HKDevice
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)

<a id="overview"></a>

## Overview

Devices include Apple Watch, iPhone, and any other health or fitness peripherals that produce the sample data stored in HealthKit. Device objects are immutable: You set the device’s properties when you create the [HKDevice](hkdevice.md) object, and they cannot change.

## Topics

### Creating Device Objects

- [init(name:manufacturer:model:hardwareVersion:firmwareVersion:softwareVersion:localIdentifier:udiDeviceIdentifier:)](hkdevice/init%28name_manufacturer_model_hardwareversion_firmwareversion_softwareversion_localidentifier_udideviceidentifier_%29-3663q.md): Initializes a new device object.
- [local()](hkdevice/local%28%29.md): returns a device object that represents the current device.

### Accessing Data About a Device

- [udiDeviceIdentifier](hkdevice/udideviceidentifier.md): The device identifier portion of the US Food and Drug Administration’s Unique Device Identifier (UDI).
- [firmwareVersion](hkdevice/firmwareversion.md): An arbitrary string representing the current version of the firmware running on the device.
- [hardwareVersion](hkdevice/hardwareversion.md): An arbitrary string representing the hardware version of the device.
- [localIdentifier](hkdevice/localidentifier.md): An identifier that uniquely identifies the device object on the hardware running this code.
- [manufacturer](hkdevice/manufacturer.md): A string representing the device’s manufacturer.
- [model](hkdevice/model.md): A string representing the device’s model.
- [name](hkdevice/name.md): The user-facing name for the device.
- [softwareVersion](hkdevice/softwareversion.md): An arbitrary string representing the version of the software running on the device.

### Initializers

- [init(coder:)](hkdevice/init%28coder_%29.md)
- [init(name:manufacturer:model:hardwareVersion:firmwareVersion:softwareVersion:localIdentifier:UDIDeviceIdentifier:)](hkdevice/init%28name_manufacturer_model_hardwareversion_firmwareversion_softwareversion_localidentifier_udideviceidentifier_%29-6cari.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sources and devices

- [HKSourceQueryDescriptor](hksourcequerydescriptor.md): A query interface that uses Swift concurrency to read the apps and devices that produced the matching samples.
- [HKSourceRevision](hksourcerevision.md): An object indicating the source of a HealthKit sample.
- [HKSource](hksource.md): An object indicating the app or device that created a HealthKit sample
- [HKSourceQuery](hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.

# HKDevice (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A device that generates data for HealthKit.

## Declaration

```objectivec
@interface HKDevice : NSObject
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)

<a id="overview"></a>

## Overview

Devices include Apple Watch, iPhone, and any other health or fitness peripherals that produce the sample data stored in HealthKit. Device objects are immutable: You set the device’s properties when you create the [HKDevice](hkdevice.md) object, and they cannot change.

## Topics

### Creating Device Objects

- [initWithName:manufacturer:model:hardwareVersion:firmwareVersion:softwareVersion:localIdentifier:UDIDeviceIdentifier:](hkdevice/init%28name_manufacturer_model_hardwareversion_firmwareversion_softwareversion_localidentifier_udideviceidentifier_%29-3663q.md): Initializes a new device object.
- [localDevice](hkdevice/local%28%29.md): returns a device object that represents the current device.

### Accessing Data About a Device

- [UDIDeviceIdentifier](hkdevice/udideviceidentifier.md): The device identifier portion of the US Food and Drug Administration’s Unique Device Identifier (UDI).
- [firmwareVersion](hkdevice/firmwareversion.md): An arbitrary string representing the current version of the firmware running on the device.
- [hardwareVersion](hkdevice/hardwareversion.md): An arbitrary string representing the hardware version of the device.
- [localIdentifier](hkdevice/localidentifier.md): An identifier that uniquely identifies the device object on the hardware running this code.
- [manufacturer](hkdevice/manufacturer.md): A string representing the device’s manufacturer.
- [model](hkdevice/model.md): A string representing the device’s model.
- [name](hkdevice/name.md): The user-facing name for the device.
- [softwareVersion](hkdevice/softwareversion.md): An arbitrary string representing the version of the software running on the device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Sources and devices

- [HKSourceRevision](hksourcerevision.md): An object indicating the source of a HealthKit sample.
- [HKSource](hksource.md): An object indicating the app or device that created a HealthKit sample
- [HKSourceQuery](hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.
