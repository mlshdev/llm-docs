> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/widgetkit/staticcontrolconfiguration/init(kind:content:)

# init(kind:content:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Creates a configuration for a control, with no user-configurable options.

## Declaration

```swift
@MainActor @preconcurrency init(kind: String, @ControlWidgetTemplateBuilder content: @escaping () -> Content)
```

## Parameters

- `kind`: A string that uniquely identifies the type of control.
- `content`: A template that renders the control.
