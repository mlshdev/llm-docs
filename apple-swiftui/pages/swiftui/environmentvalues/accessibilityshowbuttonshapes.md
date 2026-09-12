> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/accessibilityshowbuttonshapes](https://developer.apple.com/documentation/swiftui/environmentvalues/accessibilityshowbuttonshapes)

# accessibilityShowButtonShapes

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 1000.0) · iPadOS 14.0+ (deprecated in 1000.0) · Mac Catalyst 14.0+ (deprecated in 1000.0) · macOS 11.0+ (deprecated in 1000.0) · tvOS 14.0+ (deprecated in 1000.0) · visionOS 1.0+ (deprecated in 1000.0) · watchOS 7.0+ (deprecated in 1000.0)

Whether the system preference for Show Button Shapes is enabled.

## Declaration

```swift
var accessibilityShowButtonShapes: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property’s value is true, interactive custom controls such as buttons should be drawn in such a way that their edges and borders are clearly visible.

## See Also

### Improving legibility

- [accessibilityReduceTransparency](accessibilityreducetransparency.md): Whether the system preference for Reduce Transparency is enabled.
- [legibilityWeight](legibilityweight.md): The font weight to apply to text.
- [LegibilityWeight](../legibilityweight.md): The Accessibility Bold Text user setting options.
