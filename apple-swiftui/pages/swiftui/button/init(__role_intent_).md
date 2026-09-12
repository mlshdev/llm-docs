> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/button/init(_:role:intent:)](https://developer.apple.com/documentation/swiftui/button/init(_:role:intent:))

# init(\_:role:intent:)

**Framework:** AppIntents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Creates a button with a specified role that performs an `AppIntent` and generates its label from a string.

## Declaration

```swift
nonisolated init(_ title: some StringProtocol, role: ButtonRole?, intent: some AppIntent)
```

## Parameters

- `title`: A string that describes the purpose of the button’s `intent`.
- `role`: An optional semantic role describing the button. A value of `nil` means that the button doesn’t have an assigned role.
- `intent`: The `AppIntent` to execute.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view on your behalf, and treats the title similar to [init(\_:)](https://developer.apple.com/documentation/swiftui/text/init%28_:%29-9d1g4). See [Text](../text.md) for more information about localizing strings.

## See Also

### Creating a button to perform an App Intent

- [init(\_:intent:)](init%28__intent_%29.md): Conforms when `Label` is `Text`. Creates a button that performs an `AppIntent` and generates its label from a localized string key.
- [init(intent:label:)](init%28intent_label_%29.md): Conforms when `Label` conforms to `View`. Creates a button that performs an `AppIntent`.
- [init(role:intent:label:)](init%28role_intent_label_%29.md): Conforms when `Label` conforms to `View`. Creates a button with a specified role that performs an `AppIntent`.
- [init(\_:image:role:intent:)](init%28__image_role_intent_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button with a specified role that generates its label from a string and an image resource.
- [init(\_:systemImage:role:intent:)](init%28__systemimage_role_intent_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button with a specified role that generates its label from a string and a system image.
