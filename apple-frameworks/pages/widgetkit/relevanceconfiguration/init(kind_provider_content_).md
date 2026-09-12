> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/relevanceconfiguration/init(kind:provider:content:)](https://developer.apple.com/documentation/widgetkit/relevanceconfiguration/init(kind:provider:content:))

# init(kind:provider:content:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** watchOS 26.0+

Creates a configuration for a widget that provides relevance clues to the system.

## Declaration

```swift
@MainActor @preconcurrency init<Provider>(kind: String, provider: Provider, @ViewBuilder content: @escaping @MainActor (Provider.Entry) -> Content) where Provider : RelevanceEntriesProvider
```

## Parameters

- `kind`: A unique string that you choose.
- `provider`: An object that determines the relevance and data of the widget.
- `content`: A view that renders the widget.
