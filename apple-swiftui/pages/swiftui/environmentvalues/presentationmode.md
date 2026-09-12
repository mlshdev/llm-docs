> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/presentationmode](https://developer.apple.com/documentation/swiftui/environmentvalues/presentationmode)

# presentationMode

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A binding to the current presentation mode of the view associated with this environment.

> Use [isPresented](ispresented.md) or [dismiss](dismiss.md) instead.

## Declaration

```swift
var presentationMode: Binding<PresentationMode> { get }
```

## See Also

### Deprecated environment values

- [disableAutocorrection](disableautocorrection.md): Deprecated. A Boolean value that determines whether the view hierarchy has auto-correction enabled.
- [sizeCategory](sizecategory.md): Deprecated. The size of content.
- [PresentationMode](../presentationmode.md): Deprecated. An indication whether a view is currently presented by another view.
- [complicationRenderingMode](complicationrenderingmode.md): Deprecated. The complication rendering mode for the current environment.
- [controlActiveState](controlactivestate.md): Deprecated. The active appearance expected of controls in a window.
