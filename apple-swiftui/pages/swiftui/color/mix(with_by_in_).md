> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/mix(with:by:in:)](https://developer.apple.com/documentation/swiftui/color/mix(with:by:in:))

# mix(with:by:in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a version of self mixed with `rhs` by the amount specified by `fraction`.

## Declaration

```swift
func mix(with rhs: Color, by fraction: Double, in colorSpace: Gradient.ColorSpace = .perceptual) -> Color
```

## Parameters

- `rhs`: The color to mix `self` with.
- `fraction`: The amount of blending, `0.5` means `self` is mixed in equal parts with `rhs`.
- `colorSpace`: The color space used to mix the colors.

<a id="return-value"></a>

## Return Value

A new `Color` based on `self` and `rhs`.

## See Also

### Modifying a color

- [opacity(\_:)](opacity%28__%29.md): Multiplies the opacity of the color by the given amount.
- [gradient](gradient.md): Returns the standard gradient for the color `self`.
- [exposureAdjust(\_:)](exposureadjust%28__%29.md): Returns a new color with an exposure adjustment applied.
- [headroom(\_:)](headroom%28__%29.md): Creates a new color with specified HDR content headroom.
