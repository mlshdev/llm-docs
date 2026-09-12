> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontent/shadow(color:radius:x:y:)](https://developer.apple.com/documentation/charts/chartcontent/shadow(color:radius:x:y:))

# shadow(color:radius:x:y:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A chart content that adds a shadow to this chart content.

## Declaration

```swift
nonisolated func shadow(color: Color = Color(.sRGBLinear, white: 0, opacity: 0.33), radius: CGFloat, x: CGFloat = 0, y: CGFloat = 0) -> some ChartContent

```

## Parameters

- `color`: The shadow’s color.
- `radius`: A measure of how much to blur the shadow. Larger values result in more blur.
- `x`: An amount to offset the shadow horizontally.
- `y`: An amount to offset the shadow vertically.

## See Also

### Styling marks

- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Sets the foreground style for the chart content.
- [opacity(\_:)](opacity%28__%29.md): Sets the opacity for the chart content.
- [blur(radius:)](blur%28radius_%29.md): Applies a Gaussian blur to this chart content.
- [cornerRadius(\_:style:)](cornerradius%28__style_%29.md): Sets the corner radius of the chart content.
- [lineStyle(\_:)](linestyle%28__%29.md): Sets the style for line marks.
- [interpolationMethod(\_:)](interpolationmethod%28__%29.md): Plots line and area marks with the interpolation method that you specify.
