> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/complicationrenderingmode/tinted

# ComplicationRenderingMode.tinted

**Framework:** ClockKit  
**Kind:** Case  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

The system renders the complication as a tinted complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
case tinted
```

## Mentioned In

- [Building complications with SwiftUI](../building-complications-with-swiftui.md)

<a id="Discussion"></a>

## Discussion

You can use the rendering mode to provide a custom SwiftUI view for tinted complications. For more information, see [Support Tinted Views](../building-complications-with-swiftui.md#Support-Tinted-Views).

## See Also

### Rendering Modes

- [ComplicationRenderingMode.fullColor](fullcolor.md): Deprecated. The system renders the complication in full color.
