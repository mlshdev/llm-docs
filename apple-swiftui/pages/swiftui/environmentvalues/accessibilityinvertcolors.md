> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/accessibilityinvertcolors](https://developer.apple.com/documentation/swiftui/environmentvalues/accessibilityinvertcolors)

# accessibilityInvertColors

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Whether the system preference for Invert Colors is enabled.

## Declaration

```swift
var accessibilityInvertColors: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property’s value is true then the display will be inverted. In these cases it may be needed for UI drawing to be adjusted to in order to display optimally when inverted.

## See Also

### Managing color

- [accessibilityIgnoresInvertColors(\_:)](../view/accessibilityignoresinvertcolors%28__%29.md): Sets whether this view should ignore the system Smart Invert setting.
- [accessibilityDifferentiateWithoutColor](accessibilitydifferentiatewithoutcolor.md): Whether the system preference for Differentiate without Color is enabled.
