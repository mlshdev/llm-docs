> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartbeatseriessample](https://developer.apple.com/documentation/healthkit/hkheartbeatseriessample)

# HKHeartbeatSeriesSample (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A sample that represents a series of heartbeats.

## Declaration

```swift
class HKHeartbeatSeriesSample
```

<a id="overview"></a>

## Overview

Use a [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md) to access the underlying heartbeat data.

The [HKHeartbeatSeriesSample](hkheartbeatseriessample.md) class is a subclass of the [HKSeriesSample](hkseriessample.md) class. These samples are immutable; you set the sample’s properties when you build them, and they can’t change.

<a id="Extend-Heartbeat-Samples"></a>

### Extend Heartbeat Samples

Like many HealthKit classes, you shouldn’t subclass the [HKHeartbeatSeriesSample](hkheartbeatseriessample.md) class. You may extend this class by adding metadata with custom keys to save related data used by your app.

For more information, see [addMetadata(\_:completion:)](hkheartbeatseriesbuilder/addmetadata%28__completion_%29.md).

## Topics

### Metadata

- [HKMetadataKeyAlgorithmVersion](hkmetadatakeyalgorithmversion.md): A key that indicates the version number of the algorithm used to calculate the sample’s value.

## Relationships

### Inherits From

- [HKSeriesSample](hkseriessample.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Series data

- [HKQuantitySeriesSampleBuilder](hkquantityseriessamplebuilder.md): A builder object for incrementally building a sample that contains multiple quantities.
- [HKHeartbeatSeriesBuilder](hkheartbeatseriesbuilder.md): A builder object for incrementally building a heartbeat series.

# HKHeartbeatSeriesSample (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A sample that represents a series of heartbeats.

## Declaration

```objectivec
@interface HKHeartbeatSeriesSample : HKSeriesSample
```

<a id="overview"></a>

## Overview

Use a [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md) to access the underlying heartbeat data.

The [HKHeartbeatSeriesSample](hkheartbeatseriessample.md) class is a subclass of the [HKSeriesSample](hkseriessample.md) class. These samples are immutable; you set the sample’s properties when you build them, and they can’t change.

<a id="Extend-Heartbeat-Samples"></a>

### Extend Heartbeat Samples

Like many HealthKit classes, you shouldn’t subclass the [HKHeartbeatSeriesSample](hkheartbeatseriessample.md) class. You may extend this class by adding metadata with custom keys to save related data used by your app.

For more information, see [addMetadata:completion:](hkheartbeatseriesbuilder/addmetadata%28__completion_%29.md).

## Topics

### Metadata

- [HKMetadataKeyAlgorithmVersion](hkmetadatakeyalgorithmversion.md): A key that indicates the version number of the algorithm used to calculate the sample’s value.

## Relationships

### Inherits From

- [HKSeriesSample](hkseriessample.md)

## See Also

### Series data

- [HKQuantitySeriesSampleBuilder](hkquantityseriessamplebuilder.md): A builder object for incrementally building a sample that contains multiple quantities.
- [HKHeartbeatSeriesBuilder](hkheartbeatseriesbuilder.md): A builder object for incrementally building a heartbeat series.
