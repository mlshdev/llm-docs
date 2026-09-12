> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontent/foregroundstyle(_:)](https://developer.apple.com/documentation/charts/chartcontent/foregroundstyle(_:))

# foregroundStyle(\_:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the foreground style for the chart content.

## Declaration

```swift
nonisolated func foregroundStyle<S>(_ style: S) -> some ChartContent where S : ShapeStyle

```

## Parameters

- `style`: The shape style.

## See Also

### Styling marks

- [opacity(\_:)](opacity%28__%29.md): Sets the opacity for the chart content.
- [blur(radius:)](blur%28radius_%29.md): Applies a Gaussian blur to this chart content.
- [cornerRadius(\_:style:)](cornerradius%28__style_%29.md): Sets the corner radius of the chart content.
- [lineStyle(\_:)](linestyle%28__%29.md): Sets the style for line marks.
- [shadow(color:radius:x:y:)](shadow%28color_radius_x_y_%29.md): A chart content that adds a shadow to this chart content.
- [interpolationMethod(\_:)](interpolationmethod%28__%29.md): Plots line and area marks with the interpolation method that you specify.
