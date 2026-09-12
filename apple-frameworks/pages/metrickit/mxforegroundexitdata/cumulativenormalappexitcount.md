> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxforegroundexitdata/cumulativenormalappexitcount](https://developer.apple.com/documentation/metrickit/mxforegroundexitdata/cumulativenormalappexitcount)

# cumulativeNormalAppExitCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the app exited normally from the foreground.

> Use [normalTerminationCount](../foregroundterminationmetric/normalterminationcount.md) instead.

## Declaration

```swift
var cumulativeNormalAppExitCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Normal exits include terminations by the app switcher when the user swipes up to exit the app.

# cumulativeNormalAppExitCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the app exited normally from the foreground.

> Use [normalTerminationCount](../foregroundterminationmetric/normalterminationcount.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger cumulativeNormalAppExitCount;
```

<a id="Discussion"></a>

## Discussion

Normal exits include terminations by the app switcher when the user swipes up to exit the app.
