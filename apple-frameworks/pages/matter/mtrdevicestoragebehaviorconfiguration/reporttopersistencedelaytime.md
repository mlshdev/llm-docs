> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicestoragebehaviorconfiguration/reporttopersistencedelaytime](https://developer.apple.com/documentation/matter/mtrdevicestoragebehaviorconfiguration/reporttopersistencedelaytime)

# reportToPersistenceDelayTime (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

If any of these properties are set to be out of the documented limits, these default values will be used to replace all of them:

## Declaration

```swift
var reportToPersistenceDelayTime: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

reportToPersistenceDelayTimeDefault (15) reportToPersistenceDelayTimeMaxDefault (20 \* 15) recentReportTimesMaxCountDefault (12) timeBetweenReportsTooShortThresholdDefault (15) timeBetweenReportsTooShortMinThresholdDefault (5) reportToPersistenceDelayMaxMultiplierDefault (10) deviceReportingExcessivelyIntervalThresholdDefault (5 \* 60)

# reportToPersistenceDelayTime (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

If any of these properties are set to be out of the documented limits, these default values will be used to replace all of them:

## Declaration

```objectivec
@property (nonatomic, assign) NSTimeInterval reportToPersistenceDelayTime;
```

<a id="discussion"></a>

## Discussion

reportToPersistenceDelayTimeDefault (15) reportToPersistenceDelayTimeMaxDefault (20 \* 15) recentReportTimesMaxCountDefault (12) timeBetweenReportsTooShortThresholdDefault (15) timeBetweenReportsTooShortMinThresholdDefault (5) reportToPersistenceDelayMaxMultiplierDefault (10) deviceReportingExcessivelyIntervalThresholdDefault (5 \* 60)
