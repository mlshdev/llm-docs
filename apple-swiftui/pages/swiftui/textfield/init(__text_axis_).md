> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfield/init(_:text:axis:)](https://developer.apple.com/documentation/swiftui/textfield/init(_:text:axis:))

# init(\_:text:axis:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a text field with a preferred axis and a text label generated from a localized title string resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, text: Binding<String>, axis: Axis)
```

## Parameters

- `titleResource`: The localized title of the text field, describing its purpose.
- `text`: The text to display and edit.
- `axis`: The axis in which to scroll text when it doesn’t fit in the available space.

<a id="discussion"></a>

## Discussion

Specify a preferred axis in which the text field should scroll its content when it does not fit in the available space. Depending on the style of the field, this axis may not be respected.

Use the [onSubmit(of:\_:)](../view/onsubmit%28of___%29.md) modifier to invoke an action whenever the user submits this text field.

## See Also

### Creating a scrollable text field

- [init(\_:text:prompt:axis:)](init%28__text_prompt_axis_%29.md): Conforms when `Label` is `Text`. Creates a text field with a preferred axis and a text label generated from a localized title string resource.
- [init(text:prompt:axis:label:)](init%28text_prompt_axis_label_%29.md): Conforms when `Label` conforms to `View`. Creates a text field with a preferred axis and a prompt generated from a `Text`.
