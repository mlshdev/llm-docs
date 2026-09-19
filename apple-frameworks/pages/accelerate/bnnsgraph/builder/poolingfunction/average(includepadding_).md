> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/poolingfunction/average(includepadding:)

# BNNSGraph.Builder.PoolingFunction.average(includePadding:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A function for pooling that computes the average of each element in the pooling kernel.

## Declaration

```swift
case average(includePadding: Bool)
```

<a id="discussion"></a>

## Discussion

Set `includePadding` to `true` to specify that zero-padding is included in the average calculation.
