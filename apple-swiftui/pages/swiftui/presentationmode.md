> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/presentationmode

# PresentationMode

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 6.0+ (deprecated in 27.2)

An indication whether a view is currently presented by another view.

> Use [isPresented](environmentvalues/ispresented.md) or [dismiss](environmentvalues/dismiss.md) instead.

## Declaration

```swift
struct PresentationMode
```

## Topics

### Checking presentation

- [isPresented](presentationmode/ispresented.md): Deprecated. Indicates whether a view is currently presented.

### Dismissing presentation

- [dismiss()](presentationmode/dismiss%28%29.md): Deprecated. Dismisses the view if it is currently presented.

## See Also

### Deprecated environment values

- [accessibilityShowButtonShapes](environmentvalues/accessibilityshowbuttonshapes.md): Deprecated. Whether the system preference for Show Button Shapes is enabled.
- [complicationRenderingMode](environmentvalues/complicationrenderingmode.md): Deprecated. The complication rendering mode for the current environment.
- [controlActiveState](environmentvalues/controlactivestate.md): Deprecated. The active appearance expected of controls in a window.
- [disableAutocorrection](environmentvalues/disableautocorrection.md): Deprecated. A Boolean value that determines whether the view hierarchy has auto-correction enabled.
- [presentationMode](environmentvalues/presentationmode.md): Deprecated. A binding to the current presentation mode of the view associated with this environment.
- [sizeCategory](environmentvalues/sizecategory.md): Deprecated. The size of content.
