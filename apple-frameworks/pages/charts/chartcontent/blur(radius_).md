> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontent/blur(radius:)](https://developer.apple.com/documentation/charts/chartcontent/blur(radius:))

# blur(radius:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Applies a Gaussian blur to this chart content.

## Declaration

```swift
nonisolated func blur(radius: CGFloat) -> some ChartContent

```

## Parameters

- `radius`: The radial size of the blur. A blur is more diffuse when its radius is large.

## See Also

### Styling marks

- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Sets the foreground style for the chart content.
- [opacity(\_:)](opacity%28__%29.md): Sets the opacity for the chart content.
- [cornerRadius(\_:style:)](cornerradius%28__style_%29.md): Sets the corner radius of the chart content.
- [lineStyle(\_:)](linestyle%28__%29.md): Sets the style for line marks.
- [shadow(color:radius:x:y:)](shadow%28color_radius_x_y_%29.md): A chart content that adds a shadow to this chart content.
- [interpolationMethod(\_:)](interpolationmethod%28__%29.md): Plots line and area marks with the interpolation method that you specify.
