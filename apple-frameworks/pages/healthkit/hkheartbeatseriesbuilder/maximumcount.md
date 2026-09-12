> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartbeatseriesbuilder/maximumcount](https://developer.apple.com/documentation/healthkit/hkheartbeatseriesbuilder/maximumcount)

# maximumCount (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum number of heartbeats you can add to the sample.

## Declaration

```swift
class var maximumCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

After reaching the maximum count, any attempt to call the [addHeartbeatWithTimeInterval(sinceSeriesStartDate:precededByGap:completion:)](addheartbeatwithtimeinterval%28sinceseriesstartdate_precededbygap_completion_%29.md) method fails.

## See Also

### Creating a Heartbeat Series Builder

- [init(healthStore:device:start:)](init%28healthstore_device_start_%29.md): Creates a new heartbeat series builder.

# maximumCount (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum number of heartbeats you can add to the sample.

## Declaration

```objectivec
@property (class, readonly) NSUInteger maximumCount;
```

<a id="Discussion"></a>

## Discussion

After reaching the maximum count, any attempt to call the [addHeartbeatWithTimeIntervalSinceSeriesStartDate:precededByGap:completion:](addheartbeatwithtimeinterval%28sinceseriesstartdate_precededbygap_completion_%29.md) method fails.

## See Also

### Creating a Heartbeat Series Builder

- [initWithHealthStore:device:startDate:](init%28healthstore_device_start_%29.md): Creates a new heartbeat series builder.
