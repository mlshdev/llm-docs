> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/headroom(_:)](https://developer.apple.com/documentation/swiftui/color/headroom(_:))

# headroom(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a new color with specified HDR content headroom.

## Declaration

```swift
func headroom(_ headroom: Double?) -> Color
```

## Parameters

- `headroom`: The headroom value to associate with the new color.

<a id="return-value"></a>

## Return Value

A new color with the specified content headroom.

<a id="discussion"></a>

## Discussion

High Dynamic Range colors (those with RGB components outside the standard \[0, 1\] range) should be annotated with their headroom to ensure that they are displayed correctly. Knowing content headroom allows the rendering system to automatically increase display headroom when the color is displayed and to tone map the color when the available display headroom is insufficient to render the color as intended.

For example a custom yellow color whose brightness has been increased by two exposure levels:

```swift
Color(.sRGB, red: 1.83, green: 1.47, blue: 0)
    .headroom(4)
```

note that headroom is a linear quantity, and as such any color adjustments should typically be made in a linear color space.

## See Also

### Modifying a color

- [opacity(\_:)](opacity%28__%29.md): Multiplies the opacity of the color by the given amount.
- [gradient](gradient.md): Returns the standard gradient for the color `self`.
- [mix(with:by:in:)](mix%28with_by_in_%29.md): Returns a version of self mixed with `rhs` by the amount specified by `fraction`.
- [exposureAdjust(\_:)](exposureadjust%28__%29.md): Returns a new color with an exposure adjustment applied.
