> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/chartproxy/plotareasize

# plotAreaSize

**Framework:** Swift Charts  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 17.0) · iPadOS 16.0+ (deprecated in 17.0) · Mac Catalyst 16.0+ (deprecated in 17.0) · macOS 13.0+ (deprecated in 14.0) · tvOS 16.0+ (deprecated in 17.0) · visionOS 1.0+ · watchOS 9.0+ (deprecated in 10.0)

The size of the plot in the chart.

## Declaration

```swift
var plotAreaSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

The plot is the area between the x and y axes, not including the axes themselves.

A chart must exist in the context of the chart proxy.
