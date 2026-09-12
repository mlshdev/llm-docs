> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/accessibilityreducetransparency](https://developer.apple.com/documentation/swiftui/environmentvalues/accessibilityreducetransparency)

# accessibilityReduceTransparency

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Whether the system preference for Reduce Transparency is enabled.

## Declaration

```swift
var accessibilityReduceTransparency: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property’s value is true, UI (mainly window) backgrounds should not be semi-transparent; they should be opaque.

## See Also

### Improving legibility

- [accessibilityShowButtonShapes](accessibilityshowbuttonshapes.md): Deprecated. Whether the system preference for Show Button Shapes is enabled.
- [legibilityWeight](legibilityweight.md): The font weight to apply to text.
- [LegibilityWeight](../legibilityweight.md): The Accessibility Bold Text user setting options.
