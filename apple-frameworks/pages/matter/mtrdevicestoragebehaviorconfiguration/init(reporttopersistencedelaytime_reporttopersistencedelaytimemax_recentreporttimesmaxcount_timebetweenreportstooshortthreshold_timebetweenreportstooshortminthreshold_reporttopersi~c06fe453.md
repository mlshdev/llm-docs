> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevicestoragebehaviorconfiguration/init(reporttopersistencedelaytime:reporttopersistencedelaytimemax:recentreporttimesmaxcount:timebetweenreportstooshortthreshold:timebetweenreportstooshortminthreshold:reporttopersistencedelaymaxmultiplier:devicereportingexcessivelyintervalt-6xgqf

# init(reportToPersistenceDelayTime:reportToPersistenceDelayTimeMax:recentReportTimesMaxCount:timeBetweenReportsTooShortThreshold:timeBetweenReportsTooShortMinThreshold:reportToPersistenceDelayMaxMultiplier:deviceReportingExcessivelyIntervalThreshold:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

Create configuration with specified values. See description below for details, and the list of properties below for valid ranges of these values.

## Declaration

```swift
convenience init(reportToPersistenceDelayTime: TimeInterval, reportToPersistenceDelayTimeMax: TimeInterval, recentReportTimesMaxCount: Int, timeBetweenReportsTooShortThreshold: TimeInterval, timeBetweenReportsTooShortMinThreshold: TimeInterval, reportToPersistenceDelayMaxMultiplier: Double, deviceReportingExcessivelyIntervalThreshold: TimeInterval)
```

# configurationWithReportToPersistenceDelayTime:reportToPersistenceDelayTimeMax:recentReportTimesMaxCount:timeBetweenReportsTooShortThreshold:timeBetweenReportsTooShortMinThreshold:reportToPersistenceDelayMaxMultiplier:deviceReportingExcessivelyIntervalThreshold: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

Create configuration with specified values. See description below for details, and the list of properties below for valid ranges of these values.

## Declaration

```objectivec
+ (instancetype) configurationWithReportToPersistenceDelayTime:(NSTimeInterval) reportToPersistenceDelayTime reportToPersistenceDelayTimeMax:(NSTimeInterval) reportToPersistenceDelayTimeMax recentReportTimesMaxCount:(NSUInteger) recentReportTimesMaxCount timeBetweenReportsTooShortThreshold:(NSTimeInterval) timeBetweenReportsTooShortThreshold timeBetweenReportsTooShortMinThreshold:(NSTimeInterval) timeBetweenReportsTooShortMinThreshold reportToPersistenceDelayMaxMultiplier:(double) reportToPersistenceDelayMaxMultiplier deviceReportingExcessivelyIntervalThreshold:(NSTimeInterval) deviceReportingExcessivelyIntervalThreshold;
```
