> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport/webusage](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/webusage)

# SRDeviceUsageReport.WebUsage (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes a user’s website usage.

## Declaration

```swift
class WebUsage
```

<a id="overview"></a>

## Overview

Each instance of this class represents a website in a particular app category. For more information, see [webUsageByCategory](webusagebycategory.md).

## Topics

### Timing Web Use

- [totalUsageTime](webusage/totalusagetime.md): The amount of web usage time that the report spans.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Analyzing Web Use

- [webUsageByCategory](webusagebycategory.md): The amount of time the user accesses domains per category.

# SRWebUsage (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes a user’s website usage.

## Declaration

```objectivec
@interface SRWebUsage : NSObject
```

<a id="overview"></a>

## Overview

Each instance of this class represents a website in a particular app category. For more information, see [webUsageByCategory](webusagebycategory.md).

## Topics

### Timing Web Use

- [totalUsageTime](webusage/totalusagetime.md): The amount of web usage time that the report spans.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Analyzing Web Use

- [webUsageByCategory](webusagebycategory.md): The amount of time the user accesses domains per category.
