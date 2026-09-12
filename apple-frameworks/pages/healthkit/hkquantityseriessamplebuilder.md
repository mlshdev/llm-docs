> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplebuilder](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplebuilder)

# HKQuantitySeriesSampleBuilder (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

A builder object for incrementally building a sample that contains multiple quantities.

## Declaration

```swift
class HKQuantitySeriesSampleBuilder
```

## Topics

### Creating a Quantity Series Builder

- [init(healthStore:quantityType:startDate:device:)](hkquantityseriessamplebuilder/init%28healthstore_quantitytype_startdate_device_%29.md): Creates a new quantity series builder.
- [quantityType](hkquantityseriessamplebuilder/quantitytype.md): The quantity type for the series.
- [startDate](hkquantityseriessamplebuilder/startdate.md): The starting date and time for the sample.
- [device](hkquantityseriessamplebuilder/device.md): The device providing the data.

### Adding Values

- [insert(\_:at:)](hkquantityseriessamplebuilder/insert%28__at_%29.md): Adds a new quantity to the series at the provided date and time.
- [insert(\_:for:)](hkquantityseriessamplebuilder/insert%28__for_%29.md): Adds a new quantity to the series with the provided date interval.

### Ending the Collection

- [discard()](hkquantityseriessamplebuilder/discard%28%29.md): Discards all previously collected data and invalidates the builder.
- [finishSeries(metadata:completion:)](hkquantityseriessamplebuilder/finishseries%28metadata_completion_%29.md): Finalizes the series and returns the resulting quantity samples.
- [finishSeries(metadata:endDate:completion:)](hkquantityseriessamplebuilder/finishseries%28metadata_enddate_completion_%29.md): Finalizes the series with the provided end date, and returns the resulting quantity samples.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Series data

- [HKHeartbeatSeriesBuilder](hkheartbeatseriesbuilder.md): A builder object for incrementally building a heartbeat series.
- [HKHeartbeatSeriesSample](hkheartbeatseriessample.md): A sample that represents a series of heartbeats.

# HKQuantitySeriesSampleBuilder (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

A builder object for incrementally building a sample that contains multiple quantities.

## Declaration

```objectivec
@interface HKQuantitySeriesSampleBuilder : NSObject
```

## Topics

### Creating a Quantity Series Builder

- [initWithHealthStore:quantityType:startDate:device:](hkquantityseriessamplebuilder/init%28healthstore_quantitytype_startdate_device_%29.md): Creates a new quantity series builder.
- [quantityType](hkquantityseriessamplebuilder/quantitytype.md): The quantity type for the series.
- [startDate](hkquantityseriessamplebuilder/startdate.md): The starting date and time for the sample.
- [device](hkquantityseriessamplebuilder/device.md): The device providing the data.

### Adding Values

- [insertQuantity:date:error:](hkquantityseriessamplebuilder/insert%28__at_%29.md): Adds a new quantity to the series at the provided date and time.
- [insertQuantity:dateInterval:error:](hkquantityseriessamplebuilder/insert%28__for_%29.md): Adds a new quantity to the series with the provided date interval.

### Ending the Collection

- [discard](hkquantityseriessamplebuilder/discard%28%29.md): Discards all previously collected data and invalidates the builder.
- [finishSeriesWithMetadata:completion:](hkquantityseriessamplebuilder/finishseries%28metadata_completion_%29.md): Finalizes the series and returns the resulting quantity samples.
- [finishSeriesWithMetadata:endDate:completion:](hkquantityseriessamplebuilder/finishseries%28metadata_enddate_completion_%29.md): Finalizes the series with the provided end date, and returns the resulting quantity samples.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Series data

- [HKHeartbeatSeriesBuilder](hkheartbeatseriesbuilder.md): A builder object for incrementally building a heartbeat series.
- [HKHeartbeatSeriesSample](hkheartbeatseriessample.md): A sample that represents a series of heartbeats.
