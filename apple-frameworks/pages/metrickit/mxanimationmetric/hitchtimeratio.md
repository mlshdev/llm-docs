> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxanimationmetric/hitchtimeratio](https://developer.apple.com/documentation/metrickit/mxanimationmetric/hitchtimeratio)

# hitchTimeRatio (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The ratio of time spent hitching during tracked animations.

> Use [HitchTimeMetric](../hitchtimemetric.md) instead.

## Declaration

```swift
var hitchTimeRatio: Measurement<Unit> { get }
```

<a id="discussion"></a>

## Discussion

Hitches are user-perceivable animation issues, such as pauses or jumps that occur during scrolling. This metric incorporates adjustments that optimize for quantifying human perception, and typically is the most accurate representation of hitches people experience during app usage.

Many animations are tracked by default. You can track additional animations using the [beginActivity(options:reason:)](../../foundation/processinfo/beginactivity%28options_reason_%29.md) method with the [animationTrackingEnabled](../../foundation/processinfo/activityoptions/animationtrackingenabled.md) option.

# hitchTimeRatio (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The ratio of time spent hitching during tracked animations.

> Use [HitchTimeMetric](../hitchtimemetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnit *> * hitchTimeRatio;
```

<a id="discussion"></a>

## Discussion

Hitches are user-perceivable animation issues, such as pauses or jumps that occur during scrolling. This metric incorporates adjustments that optimize for quantifying human perception, and typically is the most accurate representation of hitches people experience during app usage.

Many animations are tracked by default. You can track additional animations using the [beginActivityWithOptions:reason:](../../foundation/processinfo/beginactivity%28options_reason_%29.md) method with the [NSActivityAnimationTrackingEnabled](../../foundation/processinfo/activityoptions/animationtrackingenabled.md) option.
