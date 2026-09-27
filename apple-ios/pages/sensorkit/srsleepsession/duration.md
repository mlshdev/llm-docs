> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensorkit/srsleepsession/duration

# duration (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```swift
var duration: TimeInterval { get }
```

<a id="discussion"></a>

## Discussion

Sleep session duration

Equal to 0 if endReason is SRSleepSessionEndReasonNoEndEvent

# duration (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSTimeInterval duration;
```

<a id="discussion"></a>

## Discussion

Sleep session duration

Equal to 0 if endReason is SRSleepSessionEndReasonNoEndEvent
