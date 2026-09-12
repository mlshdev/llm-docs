> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/button/init(_:intent:)](https://developer.apple.com/documentation/swiftui/button/init(_:intent:))

# init(\_:intent:)

**Framework:** AppIntents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Creates a button that performs an `AppIntent` and generates its label from a localized string key.

## Declaration

```swift
nonisolated init(_ titleKey: LocalizedStringKey, intent: some AppIntent)
```

## Parameters

- `titleKey`: The key for the button’s localized title, that describes the purpose of the button’s `intent`.
- `intent`: The `AppIntent` to execute.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view on your behalf, and treats the localized key similar to [init(\_:tableName:bundle:comment:)](../text/init%28__tablename_bundle_comment_%29.md). See [Text](../text.md) for more information about localizing strings.

To initialize a button with a string variable, use [init(\_:intent:)](init%28__intent_%29.md) instead.

## See Also

### Creating a button to perform an App Intent

- [init(intent:label:)](init%28intent_label_%29.md): Conforms when `Label` conforms to `View`. Creates a button that performs an `AppIntent`.
- [init(\_:role:intent:)](init%28__role_intent_%29.md): Conforms when `Label` is `Text`. Creates a button with a specified role that performs an `AppIntent` and generates its label from a string.
- [init(role:intent:label:)](init%28role_intent_label_%29.md): Conforms when `Label` conforms to `View`. Creates a button with a specified role that performs an `AppIntent`.
- [init(\_:image:role:intent:)](init%28__image_role_intent_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button with a specified role that generates its label from a string and an image resource.
- [init(\_:systemImage:role:intent:)](init%28__systemimage_role_intent_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button with a specified role that generates its label from a string and a system image.
