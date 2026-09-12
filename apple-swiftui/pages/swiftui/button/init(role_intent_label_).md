> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/button/init(role:intent:label:)](https://developer.apple.com/documentation/swiftui/button/init(role:intent:label:))

# init(role:intent:label:)

**Framework:** AppIntents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Creates a button with a specified role that performs an `AppIntent`.

## Declaration

```swift
nonisolated init(role: ButtonRole?, intent: some AppIntent, @ViewBuilder label: () -> Label)
```

## Parameters

- `role`: An optional semantic role describing the button. A value of `nil` means that the button doesn’t have an assigned role.
- `intent`: The `AppIntent` to execute.
- `label`: A view that describes the purpose of the button’s `action`.

## See Also

### Creating a button to perform an App Intent

- [init(\_:intent:)](init%28__intent_%29.md): Conforms when `Label` is `Text`. Creates a button that performs an `AppIntent` and generates its label from a localized string key.
- [init(intent:label:)](init%28intent_label_%29.md): Conforms when `Label` conforms to `View`. Creates a button that performs an `AppIntent`.
- [init(\_:role:intent:)](init%28__role_intent_%29.md): Conforms when `Label` is `Text`. Creates a button with a specified role that performs an `AppIntent` and generates its label from a string.
- [init(\_:image:role:intent:)](init%28__image_role_intent_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button with a specified role that generates its label from a string and an image resource.
- [init(\_:systemImage:role:intent:)](init%28__systemimage_role_intent_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button with a specified role that generates its label from a string and a system image.
