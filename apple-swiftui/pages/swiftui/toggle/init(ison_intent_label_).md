> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toggle/init(ison:intent:label:)](https://developer.apple.com/documentation/swiftui/toggle/init(ison:intent:label:))

# init(isOn:intent:label:)

**Framework:** AppIntents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Creates a toggle performing an `AppIntent`.

## Declaration

```swift
nonisolated init<I>(isOn: Bool, intent: I, @ViewBuilder label: () -> Label) where I : AppIntent
```

## Parameters

- `isOn`: Whether the toggle is on or off.
- `intent`: The `AppIntent` to be performed.
- `label`: A view that describes the purpose of the toggle.

## See Also

### Creating a toggle for an App Intent

- [init(\_:isOn:intent:)](init%28__ison_intent_%29.md): Conforms when `Label` is `Text`. Creates a toggle performing an `AppIntent` and generates its label from a localized string key.
