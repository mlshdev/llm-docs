> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxappresponsivenessmetric/histogrammedapplicationhangtime

# histogrammedApplicationHangTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

A histogram of the different durations of time in which the app is too busy to handle user interaction responsively.

> Use [HangTimeMetric](../hangtimemetric.md) instead.

## Declaration

```swift
var histogrammedApplicationHangTime: MXHistogram<UnitDuration> { get }
```

# histogrammedApplicationHangTime (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

A histogram of the different durations of time in which the app is too busy to handle user interaction responsively.

> Use [HangTimeMetric](../hangtimemetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) MXHistogram<NSUnitDuration *> * histogrammedApplicationHangTime;
```
