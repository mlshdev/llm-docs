> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/securefield/init(text:prompt:label:)](https://developer.apple.com/documentation/swiftui/securefield/init(text:prompt:label:))

# init(text:prompt:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a secure field with a prompt generated from a `Text`.

## Declaration

```swift
nonisolated init(text: Binding<String>, prompt: Text? = nil, @ContentBuilder label: () -> Label)
```

## Parameters

- `text`: A binding to the text that the field displays and edits.
- `prompt`: A [Text](../text.md) view that represents the secure field’s prompt. The prompt provides guidance on what people should type into the secure field.
- `label`: A view that describes the purpose of the secure field.

<a id="discussion"></a>

## Discussion

Use the [onSubmit(of:\_:)](../view/onsubmit%28of___%29.md) modifier to invoke an action whenever someone submits this secure field — for example, by pressing the Return key.

## See Also

### Creating a secure text field

- [init(\_:text:)](init%28__text_%29.md): Conforms when `Label` is `Text`. Creates a secure field with a prompt generated from a `Text`.
- [init(\_:text:prompt:)](init%28__text_prompt_%29.md): Conforms when `Label` is `Text`. Creates a secure field with a prompt generated from a `Text`.
