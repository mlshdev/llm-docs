> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/surfaceplot/init(x:y:z:function:)-6c5e6](https://developer.apple.com/documentation/charts/surfaceplot/init(x:y:z:function:)-6c5e6)

# init(x:y:z:function:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a SurfacePlot that represents a function y = f(x, z).

## Declaration

```swift
nonisolated init(x: LocalizedStringKey, y: LocalizedStringKey, z: LocalizedStringKey, function: @escaping @Sendable (Double, Double) -> Double)
```

## Parameters

- `x`: The x label.
- `y`: The y label.
- `z`: The z label.
- `function`: The function to graph.

<a id="discussion"></a>

## Discussion

> **Note**

> For x and z value pairs where the function is undefined or is infinity, the function is expected to return `Double.nan`
