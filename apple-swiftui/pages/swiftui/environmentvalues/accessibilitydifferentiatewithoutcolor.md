> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/accessibilitydifferentiatewithoutcolor

# accessibilityDifferentiateWithoutColor

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Whether the system preference for Differentiate without Color is enabled.

## Declaration

```swift
var accessibilityDifferentiateWithoutColor: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this is true, UI should not convey information using color alone and instead should use shapes or glyphs to convey information.

## See Also

### Managing color

- [accessibilityIgnoresInvertColors(\_:)](../view/accessibilityignoresinvertcolors%28__%29.md): Sets whether this view should ignore the system Smart Invert setting.
- [accessibilityInvertColors](accessibilityinvertcolors.md): Whether the system preference for Invert Colors is enabled.
