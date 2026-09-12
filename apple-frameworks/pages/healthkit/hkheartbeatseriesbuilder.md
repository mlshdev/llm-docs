> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartbeatseriesbuilder](https://developer.apple.com/documentation/healthkit/hkheartbeatseriesbuilder)

# HKHeartbeatSeriesBuilder (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A builder object for incrementally building a heartbeat series.

## Declaration

```swift
class HKHeartbeatSeriesBuilder
```

## Topics

### Creating a Heartbeat Series Builder

- [init(healthStore:device:start:)](hkheartbeatseriesbuilder/init%28healthstore_device_start_%29.md): Creates a new heartbeat series builder.
- [maximumCount](hkheartbeatseriesbuilder/maximumcount.md): The maximum number of heartbeats you can add to the sample.

### Adding Data

- [addHeartbeatWithTimeInterval(sinceSeriesStartDate:precededByGap:completion:)](hkheartbeatseriesbuilder/addheartbeatwithtimeinterval%28sinceseriesstartdate_precededbygap_completion_%29.md): Adds a heartbeat to the series.
- [addMetadata(\_:completion:)](hkheartbeatseriesbuilder/addmetadata%28__completion_%29.md): Adds metadata to the sample.

### Ending the Collection

- [finishSeries(completion:)](hkheartbeatseriesbuilder/finishseries%28completion_%29.md): Finalizes the series and returns the resulting heartbeat series sample.

### Initializers

- [init(healthStore:device:startDate:)](hkheartbeatseriesbuilder/init%28healthstore_device_startdate_%29.md)

## Relationships

### Inherits From

- [HKSeriesBuilder](hkseriesbuilder.md)

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

- [HKQuantitySeriesSampleBuilder](hkquantityseriessamplebuilder.md): A builder object for incrementally building a sample that contains multiple quantities.
- [HKHeartbeatSeriesSample](hkheartbeatseriessample.md): A sample that represents a series of heartbeats.

# HKHeartbeatSeriesBuilder (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A builder object for incrementally building a heartbeat series.

## Declaration

```objectivec
@interface HKHeartbeatSeriesBuilder : HKSeriesBuilder
```

## Topics

### Creating a Heartbeat Series Builder

- [initWithHealthStore:device:startDate:](hkheartbeatseriesbuilder/init%28healthstore_device_start_%29.md): Creates a new heartbeat series builder.
- [maximumCount](hkheartbeatseriesbuilder/maximumcount.md): The maximum number of heartbeats you can add to the sample.

### Adding Data

- [addHeartbeatWithTimeIntervalSinceSeriesStartDate:precededByGap:completion:](hkheartbeatseriesbuilder/addheartbeatwithtimeinterval%28sinceseriesstartdate_precededbygap_completion_%29.md): Adds a heartbeat to the series.
- [addMetadata:completion:](hkheartbeatseriesbuilder/addmetadata%28__completion_%29.md): Adds metadata to the sample.

### Ending the Collection

- [finishSeriesWithCompletion:](hkheartbeatseriesbuilder/finishseries%28completion_%29.md): Finalizes the series and returns the resulting heartbeat series sample.

## Relationships

### Inherits From

- [HKSeriesBuilder](hkseriesbuilder.md)

## See Also

### Series data

- [HKQuantitySeriesSampleBuilder](hkquantityseriessamplebuilder.md): A builder object for incrementally building a sample that contains multiple quantities.
- [HKHeartbeatSeriesSample](hkheartbeatseriessample.md): A sample that represents a series of heartbeats.
