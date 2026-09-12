> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/gradient](https://developer.apple.com/documentation/swiftui/color/gradient)

# gradient

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the standard gradient for the color `self`.

## Declaration

```swift
var gradient: AnyGradient { get }
```

<a id="discussion"></a>

## Discussion

For example, filling a rectangle with a gradient derived from the standard blue color:

```swift
Rectangle().fill(.blue.gradient)
```

## See Also

### Modifying a color

- [opacity(\_:)](opacity%28__%29.md): Multiplies the opacity of the color by the given amount.
- [mix(with:by:in:)](mix%28with_by_in_%29.md): Returns a version of self mixed with `rhs` by the amount specified by `fraction`.
- [exposureAdjust(\_:)](exposureadjust%28__%29.md): Returns a new color with an exposure adjustment applied.
- [headroom(\_:)](headroom%28__%29.md): Creates a new color with specified HDR content headroom.
