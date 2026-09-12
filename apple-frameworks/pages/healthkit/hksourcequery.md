> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksourcequery](https://developer.apple.com/documentation/healthkit/hksourcequery)

# HKSourceQuery (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.

## Declaration

```swift
class HKSourceQuery
```

<a id="overview"></a>

## Overview

Source queries return a list of sources that have saved samples matching the specified sample types. Sources can be apps or devices (like Apple Watch or Bluetooth heart-rate monitors).

Source queries are immutable: Their properties are set when they are first created, and they can’t change.

## Topics

### Creating Source Queries

- [Executing Source Queries](executing-source-queries.md): Create and run source queries.
- [init(sampleType:samplePredicate:completionHandler:)](hksourcequery/init%28sampletype_samplepredicate_completionhandler_%29.md): Instantiates and returns a source query.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sources and devices

- [HKSourceQueryDescriptor](hksourcequerydescriptor.md): A query interface that uses Swift concurrency to read the apps and devices that produced the matching samples.
- [HKSourceRevision](hksourcerevision.md): An object indicating the source of a HealthKit sample.
- [HKSource](hksource.md): An object indicating the app or device that created a HealthKit sample
- [HKDevice](hkdevice.md): A device that generates data for HealthKit.

# HKSourceQuery (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.

## Declaration

```objectivec
@interface HKSourceQuery : HKQuery
```

<a id="overview"></a>

## Overview

Source queries return a list of sources that have saved samples matching the specified sample types. Sources can be apps or devices (like Apple Watch or Bluetooth heart-rate monitors).

Source queries are immutable: Their properties are set when they are first created, and they can’t change.

## Topics

### Creating Source Queries

- [Executing Source Queries](executing-source-queries.md): Create and run source queries.
- [initWithSampleType:samplePredicate:completionHandler:](hksourcequery/init%28sampletype_samplepredicate_completionhandler_%29.md): Instantiates and returns a source query.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

## See Also

### Sources and devices

- [HKSourceRevision](hksourcerevision.md): An object indicating the source of a HealthKit sample.
- [HKSource](hksource.md): An object indicating the app or device that created a HealthKit sample
- [HKDevice](hkdevice.md): A device that generates data for HealthKit.
