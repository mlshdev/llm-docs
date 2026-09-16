> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/disableautocorrection

# disableAutocorrection

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 8.0+ (deprecated in 27.2)

A Boolean value that determines whether the view hierarchy has auto-correction enabled.

## Declaration

```swift
var disableAutocorrection: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

When the value is `nil`, SwiftUI uses the system default. The default value is `nil`.

## See Also

### Deprecated environment values

- [accessibilityShowButtonShapes](accessibilityshowbuttonshapes.md): Deprecated. Whether the system preference for Show Button Shapes is enabled.
- [complicationRenderingMode](complicationrenderingmode.md): Deprecated. The complication rendering mode for the current environment.
- [controlActiveState](controlactivestate.md): Deprecated. The active appearance expected of controls in a window.
- [presentationMode](presentationmode.md): Deprecated. A binding to the current presentation mode of the view associated with this environment.
- [PresentationMode](../presentationmode.md): Deprecated. An indication whether a view is currently presented by another view.
- [sizeCategory](sizecategory.md): Deprecated. The size of content.
