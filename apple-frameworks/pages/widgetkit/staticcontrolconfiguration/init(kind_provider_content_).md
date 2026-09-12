> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/staticcontrolconfiguration/init(kind:provider:content:)](https://developer.apple.com/documentation/widgetkit/staticcontrolconfiguration/init(kind:provider:content:))

# init(kind:provider:content:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Creates a configuration for a control, with no user-configurable options.

## Declaration

```swift
@MainActor @preconcurrency init<Provider>(kind: String, provider: Provider, @ControlWidgetTemplateBuilder content: @escaping (Provider.Value) -> Content) where Provider : ControlValueProvider
```

## Parameters

- `kind`: A string that uniquely identifies the type of control.
- `provider`: An object that provides a value to the control template.
- `content`: A template that renders the control.
