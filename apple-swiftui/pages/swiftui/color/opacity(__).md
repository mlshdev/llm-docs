> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/opacity(_:)](https://developer.apple.com/documentation/swiftui/color/opacity(_:))

# opacity(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Multiplies the opacity of the color by the given amount.

## Declaration

```swift
func opacity(_ opacity: Double) -> Color
```

## Parameters

- `opacity`: The amount by which to multiply the opacity of the color.

<a id="return-value"></a>

## Return Value

A view with modified opacity.

## See Also

### Modifying a color

- [gradient](gradient.md): Returns the standard gradient for the color `self`.
- [mix(with:by:in:)](mix%28with_by_in_%29.md): Returns a version of self mixed with `rhs` by the amount specified by `fraction`.
- [exposureAdjust(\_:)](exposureadjust%28__%29.md): Returns a new color with an exposure adjustment applied.
- [headroom(\_:)](headroom%28__%29.md): Creates a new color with specified HDR content headroom.
