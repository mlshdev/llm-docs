> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfield/init(_:text:)](https://developer.apple.com/documentation/swiftui/textfield/init(_:text:))

# init(\_:text:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a text field with a text label generated from a localized title string.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleKey: LocalizedStringKey, text: Binding<String>)
```

## Parameters

- `titleKey`: The key for the localized title of the text field, describing its purpose.
- `text`: The text to display and edit.

## See Also

### Creating a text field with a string

- [init(\_:text:prompt:)](init%28__text_prompt_%29.md): Conforms when `Label` is `Text`. Creates a text field with a text label generated from a localized title string resource.
- [init(text:prompt:label:)](init%28text_prompt_label_%29.md): Conforms when `Label` conforms to `View`. Creates a text field with a prompt generated from a `Text`.
