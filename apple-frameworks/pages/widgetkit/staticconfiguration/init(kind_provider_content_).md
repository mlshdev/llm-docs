> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/staticconfiguration/init(kind:provider:content:)](https://developer.apple.com/documentation/widgetkit/staticconfiguration/init(kind:provider:content:))

# init(kind:provider:content:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

Creates a configuration for a widget, with no user-configurable options.

## Declaration

```swift
@MainActor @preconcurrency init<Provider>(kind: String, provider: Provider, @ViewBuilder content: @escaping (Provider.Entry) -> Content) where Provider : TimelineProvider
```

## Parameters

- `kind`: A unique string that you choose.
- `provider`: An object that determines the timing of updates to the widget’s views.
- `content`: A view that renders the widget.

## See Also

### Creating a widget configuration

- [body](https://developer.apple.com/documentation/swiftui/widgetconfiguration/body-swift.property): The content and behavior of this widget.
