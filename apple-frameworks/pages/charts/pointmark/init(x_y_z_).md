> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/pointmark/init(x:y:z:)](https://developer.apple.com/documentation/charts/pointmark/init(x:y:z:))

# init(x:y:z:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a 3D point mark that plots values to x, y and z.

## Declaration

```swift
nonisolated init(x: PlottableValue<some Plottable>, y: PlottableValue<some Plottable>, z: PlottableValue<some Plottable>)
```

## Parameters

- `x`: The x position.
- `y`: The y position.
- `z`: The z position.

<a id="discussion"></a>

## Discussion

> **Important**

> A 3D PointMark requires exactly three numeric points.

Use this initializer to plot one property with each of the x, y and z axes:

```swift
Chart3D(data) {
    PointMark(
        x: .value("Wing Length", $0.wingLength),
        y: .value("Wing Width", $0.wingWidth),
        z: .value("Weight", $0.weight)
    )
}
```

## See Also

### Creating a point mark

- [init(x:y:)](init%28x_y_%29-44ke9.md): Creates a point mark that plots values to x and y.
- [init(x:y:)](init%28x_y_%29-9dswq.md): Creates a point mark with fixed x position and plots values with y.
- [init(x:y:)](init%28x_y_%29-9hppd.md): Creates a point mark that plots a value on x with fixed y position.
