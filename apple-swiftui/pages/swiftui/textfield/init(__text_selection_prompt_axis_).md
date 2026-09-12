> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfield/init(_:text:selection:prompt:axis:)](https://developer.apple.com/documentation/swiftui/textfield/init(_:text:selection:prompt:axis:))

# init(\_:text:selection:prompt:axis:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Creates a text field with a binding to the current selection and a text label generated from a localized title string resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, text: Binding<String>, selection: Binding<TextSelection?>, prompt: Text? = nil, axis: Axis? = nil)
```

## Parameters

- `titleResource`: The localized title of the text field, describing its purpose.
- `text`: The text to display and edit.
- `selection`: A [Binding](../binding.md) to the variable containing the selection.
- `prompt`: A `Text` representing the prompt of the text field which provides users with guidance on what to type into the text field. Defaults to `nil`.
- `axis`: The axis in which to scroll text when it doesn’t fit in the available space. Defaults to `nil`.

<a id="discussion"></a>

## Discussion

The following example shows a text field with a binding to the current selection:

```swift
@State private var message: String = ""
@State private var selection: TextSelection? = nil

var body: some View {
    TextField(
        "Message",
        text: $message,
        selection: $selection
    )
}
```

Use the [onSubmit(of:\_:)](../view/onsubmit%28of___%29.md) modifier to invoke an action whenever the user submits this text field.
