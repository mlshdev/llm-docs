> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdevice](https://developer.apple.com/documentation/sensorkit/srdevice)

# SRDevice (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A representation of a device that provides sample data.

## Declaration

```swift
class SRDevice
```

<a id="overview"></a>

## Overview

This class supports iOS and watchOS devices.

## Topics

### Accessing Device Information

- [model](srdevice/model.md): The user-defined name of the device.
- [name](srdevice/name.md): The framework-defined name of the device.
- [systemName](srdevice/systemname.md): The device’s operating system.
- [systemVersion](srdevice/systemversion.md): The device’s operating system version.
- [productType](srdevice/producttype.md): A string that identifies the device used to save a sample.

### Accessing the Primary Device

- [current](srdevice/current.md): The device that runs the app.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting the Device

- [device](srfetchrequest/device.md): The device to query for sample data.

# SRDevice (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A representation of a device that provides sample data.

## Declaration

```objectivec
@interface SRDevice : NSObject
```

<a id="overview"></a>

## Overview

This class supports iOS and watchOS devices.

## Topics

### Accessing Device Information

- [model](srdevice/model.md): The user-defined name of the device.
- [name](srdevice/name.md): The framework-defined name of the device.
- [systemName](srdevice/systemname.md): The device’s operating system.
- [systemVersion](srdevice/systemversion.md): The device’s operating system version.
- [productType](srdevice/producttype.md): A string that identifies the device used to save a sample.

### Accessing the Primary Device

- [currentDevice](srdevice/current.md): The device that runs the app.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Selecting the Device

- [device](srfetchrequest/device.md): The device to query for sample data.
