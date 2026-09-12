> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/alertscene/init(_:item:actions:message:)](https://developer.apple.com/documentation/swiftui/alertscene/init(_:item:actions:message:))

# init(\_:item:actions:message:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates an alert scene, using the given data to produce the alert’s content with a title, a set of actions, and a message. Note that this creates a text view on your behalf.

## Declaration

```swift
@export(implementation) nonisolated init<S, T>(_ title: S, item data: Binding<T?>, @ContentBuilder actions: (T) -> Actions, @ContentBuilder message: (T) -> Message) where S : StringProtocol
```

## Parameters

- `title`: A text string used as the title of the alert.
- `data`: A binding to optional source of truth for the alert. The system presents the alert when the binding’s value is non-nil. When someone presses or taps one of the alert’s actions, the system sets this value to `nil` and dismisses. The system passes the contents to the alert to populate the message and actions.
- `actions`: A [ContentBuilder](../contentbuilder.md) returning the actions for the dialog.
- `message`: A [ContentBuilder](../contentbuilder.md) returning the message for the dialog.
