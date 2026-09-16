> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/pixellength

# pixelLength

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The size of a pixel on the screen.

## Declaration

```swift
var pixelLength: CGFloat { get }
```

<a id="discussion"></a>

## Discussion

This value is usually equal to `1` divided by [displayScale](displayscale.md).

## See Also

### Reacting to interface characteristics

- [isLuminanceReduced](isluminancereduced.md): A Boolean value that indicates whether the display or environment currently requires reduced luminance.
- [displayScale](displayscale.md): The display scale of this environment.
- [horizontalSizeClass](horizontalsizeclass.md): The horizontal size class of this environment.
- [verticalSizeClass](verticalsizeclass.md): The vertical size class of this environment.
- [UserInterfaceSizeClass](../userinterfacesizeclass.md): A set of values that indicate the visual size available to the view.
