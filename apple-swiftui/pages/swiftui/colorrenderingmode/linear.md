> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/colorrenderingmode/linear](https://developer.apple.com/documentation/swiftui/colorrenderingmode/linear)

# ColorRenderingMode.linear

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The linear sRGB working color space.

## Declaration

```swift
case linear
```

<a id="discussion"></a>

## Discussion

Color component values outside the range `[0, 1]` produce undefined results. This color space isn’t gamma corrected.

## See Also

### Getting rendering modes

- [ColorRenderingMode.extendedLinear](extendedlinear.md): The extended linear sRGB working color space.
- [ColorRenderingMode.nonLinear](nonlinear.md): The non-linear sRGB working color space.
