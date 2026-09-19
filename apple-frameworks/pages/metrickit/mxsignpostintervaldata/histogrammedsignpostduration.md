> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxsignpostintervaldata/histogrammedsignpostduration

# histogrammedSignpostDuration (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

A histogram of the different time intervals of a custom metric event.

> Use [signpostDuration](../signpostintervalmetric/signpostduration.md) instead.

## Declaration

```swift
var histogrammedSignpostDuration: MXHistogram<UnitDuration> { get }
```

# histogrammedSignpostDuration (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

A histogram of the different time intervals of a custom metric event.

> Use [signpostDuration](../signpostintervalmetric/signpostduration.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) MXHistogram<NSUnitDuration *> * histogrammedSignpostDuration;
```
