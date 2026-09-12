> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/alertscene/init(_:ispresented:presenting:actions:message:)](https://developer.apple.com/documentation/swiftui/alertscene/init(_:ispresented:presenting:actions:message:))

# init(\_:isPresented:presenting:actions:message:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates an alert scene, using the given data to produce the alert’s content with a title, a set of actions, and a message. Note that this creates a text view on your behalf.

## Declaration

```swift
@export(implementation) nonisolated init<T>(_ titleResource: LocalizedStringResource, isPresented: Binding<Bool>, presenting data: T?, @ContentBuilder actions: (T) -> Actions, @ContentBuilder message: (T) -> Message)
```

## Parameters

- `titleResource`: Text resource for the localized string that is the title of the alert.
- `isPresented`: A binding to a Boolean value that determines whether to present the alert. When someone presses or taps one of the alert’s actions, the system sets this value to `false` and dismisses.
- `data`: A source of truth that is passed to the alert to populate the message and actions.
- `actions`: A [ContentBuilder](../contentbuilder.md) returning the actions for the dialog.
- `message`: A [ContentBuilder](../contentbuilder.md) returning the message for the dialog.
