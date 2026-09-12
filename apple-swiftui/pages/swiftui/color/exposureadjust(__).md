> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/exposureadjust(_:)](https://developer.apple.com/documentation/swiftui/color/exposureadjust(_:))

# exposureAdjust(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a new color with an exposure adjustment applied.

## Declaration

```swift
@export(implementation) func exposureAdjust(_ stops: Double) -> Color
```

## Parameters

- `stops`: The number of exposure levels to adjust by.

<a id="return-value"></a>

## Return Value

A new color with the exposure adjustment applied.

<a id="discussion"></a>

## Discussion

This function adjusts the exposure of a color by multipling its linear-light representation by `pow(2, stops)` and adjusting its HDR content headroom.

For example the system yellow color could have its brightness increased by two exposure levels:

```swift
Color.yellow.exposureAdjust(2)
```

## See Also

### Modifying a color

- [opacity(\_:)](opacity%28__%29.md): Multiplies the opacity of the color by the given amount.
- [gradient](gradient.md): Returns the standard gradient for the color `self`.
- [mix(with:by:in:)](mix%28with_by_in_%29.md): Returns a version of self mixed with `rhs` by the amount specified by `fraction`.
- [headroom(\_:)](headroom%28__%29.md): Creates a new color with specified HDR content headroom.
