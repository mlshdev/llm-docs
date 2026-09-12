> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/resolvedhdr/headroom](https://developer.apple.com/documentation/swiftui/color/resolvedhdr/headroom)

# headroom

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The content headroom of the color.

## Declaration

```swift
@export(implementation) var headroom: Float? { get set }
```

<a id="discussion"></a>

## Discussion

This is the ratio of nominal peak luminance (“peak white”) to nominal diffuse luminance (“reference white” or “diffuse white”). Headroom is a linear quantity, i.e. there is no gamma function applied to it.

## See Also

### Getting color properties

- [red](red.md): The amount of red in the color in the extended sRGB color space.
- [green](green.md): The amount of green in the color in the extended sRGB color space.
- [blue](blue.md): The amount of blue in the color in the extended sRGB color space.
- [linearRed](linearred.md): The amount of red in the color in the extended sRGB color space variant with linear gamma.
- [linearGreen](lineargreen.md): The amount of green in the color in the extended sRGB color space variant with linear gamma.
- [linearBlue](linearblue.md): The amount of blue in the color in the extended sRGB color space variant with linear gamma.
- [opacity](opacity.md): The opacity of the color, in the range `0` to `1`.
