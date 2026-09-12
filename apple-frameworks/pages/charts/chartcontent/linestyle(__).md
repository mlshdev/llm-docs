> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontent/linestyle(_:)](https://developer.apple.com/documentation/charts/chartcontent/linestyle(_:))

# lineStyle(\_:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the style for line marks.

## Declaration

```swift
nonisolated func lineStyle(_ style: StrokeStyle) -> some ChartContent

```

## Parameters

- `style`: The stroke style.

<a id="discussion"></a>

## Discussion

> **Warning**

> Use this `.lineStyle(_:)` overload only if you have a predefined stroke style. The provided stroke style will override default line width and line cap for line marks.

## See Also

### Styling marks

- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Sets the foreground style for the chart content.
- [opacity(\_:)](opacity%28__%29.md): Sets the opacity for the chart content.
- [blur(radius:)](blur%28radius_%29.md): Applies a Gaussian blur to this chart content.
- [cornerRadius(\_:style:)](cornerradius%28__style_%29.md): Sets the corner radius of the chart content.
- [shadow(color:radius:x:y:)](shadow%28color_radius_x_y_%29.md): A chart content that adds a shadow to this chart content.
- [interpolationMethod(\_:)](interpolationmethod%28__%29.md): Plots line and area marks with the interpolation method that you specify.
