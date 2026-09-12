> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfield/init(_:text:prompt:)](https://developer.apple.com/documentation/swiftui/textfield/init(_:text:prompt:))

# init(\_:text:prompt:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a text field with a text label generated from a localized title string resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, text: Binding<String>, prompt: Text?)
```

## Parameters

- `titleResource`: The localized title of the text field, describing its purpose.
- `text`: The text to display and edit.
- `prompt`: A `Text` representing the prompt of the text field which provides users with guidance on what to type into the text field.

<a id="discussion"></a>

## Discussion

Use the [onSubmit(of:\_:)](../view/onsubmit%28of___%29.md) modifier to invoke an action whenever the user submits this text field.

## See Also

### Creating a text field with a string

- [init(\_:text:)](init%28__text_%29.md): Conforms when `Label` is `Text`. Creates a text field with a text label generated from a localized title string.
- [init(text:prompt:label:)](init%28text_prompt_label_%29.md): Conforms when `Label` conforms to `View`. Creates a text field with a prompt generated from a `Text`.
