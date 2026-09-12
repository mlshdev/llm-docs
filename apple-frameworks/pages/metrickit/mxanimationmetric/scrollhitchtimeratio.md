> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxanimationmetric/scrollhitchtimeratio](https://developer.apple.com/documentation/metrickit/mxanimationmetric/scrollhitchtimeratio)

# scrollHitchTimeRatio (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

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
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

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
