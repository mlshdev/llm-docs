> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/securefield/init(_:text:)](https://developer.apple.com/documentation/swiftui/securefield/init(_:text:))

# init(\_:text:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a secure field with a prompt generated from a `Text`.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleKey: LocalizedStringKey, text: Binding<String>)
```

## Parameters

- `titleKey`: The key for the field’s localized title. The title describes the purpose of the field.
- `text`: A binding to the text that the field displays and edits.

<a id="discussion"></a>

## Discussion

Use the [onSubmit(of:\_:)](../view/onsubmit%28of___%29.md) modifier to invoke an action whenever someone submits this secure field — for example, by pressing the Return key.

## See Also

### Creating a secure text field

- [init(\_:text:prompt:)](init%28__text_prompt_%29.md): Conforms when `Label` is `Text`. Creates a secure field with a prompt generated from a `Text`.
- [init(text:prompt:label:)](init%28text_prompt_label_%29.md): Conforms when `Label` conforms to `View`. Creates a secure field with a prompt generated from a `Text`.
