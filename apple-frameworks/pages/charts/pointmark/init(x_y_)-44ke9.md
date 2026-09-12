> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/pointmark/init(x:y:)-44ke9](https://developer.apple.com/documentation/charts/pointmark/init(x:y:)-44ke9)

# init(x:y:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a point mark that plots values to x and y.

## Declaration

```swift
nonisolated init<X, Y>(x: PlottableValue<X>, y: PlottableValue<Y>) where X : Plottable, Y : Plottable
```

## Parameters

- `x`: The value plotted with x.
- `y`: The value plotted with y.

<a id="Discussion"></a>

### Discussion

Use this initializer to plot one property with x and another property with y:

```swift
Chart(data) {
    PointMark(
        x: .value("Wing Length", $0.wingLength),
        y: .value("Wing Length", $0.wingWidth)
    )
}
```

![A scatter plot with wing width plotted on the x-axis and wing height plotted on the y-axis. There are 12 points on the chart that demonstrate a roughly linear relationship between wing width and height.](https://developer.apple.com/images/com.apple.Charts/PointMarkSwift.PointMarkScatterChart@2x.png)

For more background, see the first example used in [PointMark](../pointmark.md) which shows the structure that contains the `wingLength` and `wingHeight` properties.

## See Also

### Creating a point mark

- [init(x:y:)](init%28x_y_%29-9dswq.md): Creates a point mark with fixed x position and plots values with y.
- [init(x:y:)](init%28x_y_%29-9hppd.md): Creates a point mark that plots a value on x with fixed y position.
- [init(x:y:z:)](init%28x_y_z_%29.md): Creates a 3D point mark that plots values to x, y and z.
