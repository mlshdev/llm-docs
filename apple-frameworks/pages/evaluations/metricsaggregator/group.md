> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/metricsaggregator/group](https://developer.apple.com/documentation/evaluations/metricsaggregator/group)

# MetricsAggregator.Group

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A grouped collection of related metrics.

## Declaration

```swift
struct Group
```

<a id="overview"></a>

## Overview

Use `Group` within [group(\_:\_:)](group%28____%29.md) to add metrics to display together.

## Topics

### Instance Properties

- [name](group/name.md): The name of this group.

### Instance Methods

- [computeMaximum(of:)](group/computemaximum%28of_%29.md): Computes the maximum value of a metric and adds it to the group.
- [computeMean(of:)](group/computemean%28of_%29.md): Computes the mean of a metric and adds it to the group.
- [computeMedian(of:)](group/computemedian%28of_%29.md): Computes the median of a metric and adds it to the group.
- [computeMinimum(of:)](group/computeminimum%28of_%29.md): Computes the minimum value of a metric and adds it to the group.
- [computeMode(of:)](group/computemode%28of_%29.md): Computes the mode of a metric and adds it to the group.
- [computeStandardDeviation(of:)](group/computestandarddeviation%28of_%29.md): Computes the standard deviation of a metric and adds it to the group.
- [computeVariance(of:)](group/computevariance%28of_%29.md): Computes the variance of a metric and adds it to the group.
- [custom(of:label:\_:)](group/custom%28of_label___%29.md): Computes a custom aggregation and adds it to the group.

## See Also

### Grouping metrics

- [group(\_:\_:)](group%28____%29.md): Creates a group of related metrics.
