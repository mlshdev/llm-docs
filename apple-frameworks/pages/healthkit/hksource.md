> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksource](https://developer.apple.com/documentation/healthkit/hksource)

# HKSource (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object indicating the app or device that created a HealthKit sample

## Declaration

```swift
class HKSource
```

<a id="overview"></a>

## Overview

Sources include apps and devices that save data to the HealthKit store. Currently, HealthKit supports only the direct import of data from Bluetooth LE heart rate monitors. All other devices need a companion app to collect and save the data to HealthKit.

## Topics

### Getting the Current Source

- [default()](hksource/default%28%29.md): Returns a source object for the current app.

### Getting Property Data

- [bundleIdentifier](hksource/bundleidentifier.md): The source’s bundle identifier.
- [name](hksource/name.md): The source’s name.

### Initializers

- [init(coder:)](hksource/init%28coder_%29.md)

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
- [HKDevice](hkdevice.md): A device that generates data for HealthKit.
- [HKSourceQuery](hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.

# HKSource (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object indicating the app or device that created a HealthKit sample

## Declaration

```objectivec
@interface HKSource : NSObject
```

<a id="overview"></a>

## Overview

Sources include apps and devices that save data to the HealthKit store. Currently, HealthKit supports only the direct import of data from Bluetooth LE heart rate monitors. All other devices need a companion app to collect and save the data to HealthKit.

## Topics

### Getting the Current Source

- [defaultSource](hksource/default%28%29.md): Returns a source object for the current app.

### Getting Property Data

- [bundleIdentifier](hksource/bundleidentifier.md): The source’s bundle identifier.
- [name](hksource/name.md): The source’s name.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Sources and devices

- [HKSourceRevision](hksourcerevision.md): An object indicating the source of a HealthKit sample.
- [HKDevice](hkdevice.md): A device that generates data for HealthKit.
- [HKSourceQuery](hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.
