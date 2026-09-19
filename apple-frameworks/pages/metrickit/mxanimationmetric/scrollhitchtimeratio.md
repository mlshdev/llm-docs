> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxanimationmetric/scrollhitchtimeratio

# scrollHitchTimeRatio (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The ratio of the time spent hitching while scrolling.

> Use [HitchTimeMetric](../hitchtimemetric.md) instead.

## Declaration

```swift
var scrollHitchTimeRatio: Measurement<Unit> { get }
```

<a id="discussion"></a>

## Discussion

Hitches are user-perceivable animation issues, such as pauses or jumps that occur during scrolling.

> **Note**

>  This metric applies only to scrolling in UIScrollView.

# scrollHitchTimeRatio (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The ratio of the time spent hitching while scrolling.

> Use [HitchTimeMetric](../hitchtimemetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnit *> * scrollHitchTimeRatio;
```

<a id="discussion"></a>

## Discussion

Hitches are user-perceivable animation issues, such as pauses or jumps that occur during scrolling.

> **Note**

>  This metric applies only to scrolling in UIScrollView.
