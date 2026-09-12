> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxforegroundexitdata/cumulativeabnormalexitcount](https://developer.apple.com/documentation/metrickit/mxforegroundexitdata/cumulativeabnormalexitcount)

# cumulativeAbnormalExitCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the app exited abnormally from the foreground.

> Use [abnormalTerminationCount](../foregroundterminationmetric/abnormalterminationcount.md) instead.

## Declaration

```swift
var cumulativeAbnormalExitCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

The most common causes of an abnormal exit are uncaught Objective-C exceptions, calls to an abort function, and other conditions resulting in an abort signal.

# cumulativeAbnormalExitCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the app exited abnormally from the foreground.

> Use [abnormalTerminationCount](../foregroundterminationmetric/abnormalterminationcount.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger cumulativeAbnormalExitCount;
```

<a id="Discussion"></a>

## Discussion

The most common causes of an abnormal exit are uncaught Objective-C exceptions, calls to an abort function, and other conditions resulting in an abort signal.
