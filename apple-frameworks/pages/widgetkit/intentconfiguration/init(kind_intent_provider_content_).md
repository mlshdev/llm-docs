> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/intentconfiguration/init(kind:intent:provider:content:)](https://developer.apple.com/documentation/widgetkit/intentconfiguration/init(kind:intent:provider:content:))

# init(kind:intent:provider:content:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

Creates a configuration for a widget by using a custom intent definition to provide user-configurable options.

## Declaration

```swift
@MainActor @preconcurrency init<Provider>(kind: String, intent: Intent.Type, provider: Provider, @ViewBuilder content: @escaping (Provider.Entry) -> Content) where Intent == Provider.Intent, Provider : IntentTimelineProvider
```

## Parameters

- `kind`: A unique string that you choose.
- `intent`: A custom intent definition containing user-editable parameters.
- `provider`: An object that determines the timing of updates to the widget’s views.
- `content`: A view that renders the widget.

## See Also

### Creating a widget configuration

- [body](https://developer.apple.com/documentation/swiftui/widgetconfiguration/body-swift.property): The content and behavior of this widget.
