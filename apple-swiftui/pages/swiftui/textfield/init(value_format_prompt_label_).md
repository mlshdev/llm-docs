> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfield/init(value:format:prompt:label:)](https://developer.apple.com/documentation/swiftui/textfield/init(value:format:prompt:label:))

# init(value:format:prompt:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a text field that applies a format style to a bound value, with a label generated from a content builder.

## Declaration

```swift
nonisolated init<F>(value: Binding<F.FormatInput>, format: F, prompt: Text? = nil, @ContentBuilder label: () -> Label) where F : ParseableFormatStyle, F.FormatOutput == String
```

## Parameters

- `value`: The underlying value to edit.
- `format`: A format style of type `F` to use when converting between the string the user edits and the underlying value of type `F.FormatInput`. If `format` can’t perform the conversion, the text field leaves the value unchanged. If the user stops editing the text in an invalid state, the text field updates the field’s text to the last known valid value.
- `prompt`: A `Text` which provides users with guidance on what to type into the text field.
- `label`: A content builder that produces a label for the text field, describing its purpose.

<a id="discussion"></a>

## Discussion

Use this initializer to create a text field that binds to a bound value, using a [ParseableFormatStyle](https://developer.apple.com/documentation/foundation/parseableformatstyle) to convert to and from this type. Changes to the bound value update the string displayed by the text field. Editing the text field updates the bound value, as long as the format style can parse the text. If the format style can’t parse the input, the bound value remains unchanged.

Use the [onSubmit(of:\_:)](../view/onsubmit%28of___%29.md) modifier to invoke an action whenever the user submits this text field.

The following example uses a [Double](https://developer.apple.com/documentation/swift/double) as the bound value, and a [FloatingPointFormatStyle](https://developer.apple.com/documentation/foundation/floatingpointformatstyle) instance to convert to and from a string representation. As the user types, the bound value updates, which in turn updates three [Text](../text.md) views that use different format styles. If the user enters text that doesn’t represent a valid `Double`, the bound value doesn’t update.

```swift
@State private var myDouble: Double = 0.673
var body: some View {
    VStack {
        TextField(
            value: $myDouble,
            format: .number
        ) {
            Text("Double")
        }
        Text(myDouble, format: .number)
        Text(myDouble, format: .number.precision(.significantDigits(5)))
        Text(myDouble, format: .number.notation(.scientific))
    }
}
```

![A text field with the string 0.673. Below this, three text views](https://developer.apple.com/images/com.apple.SwiftUI/TextField-init-format-1@2x.png)

## See Also

### Creating a text field with a value

- [init(\_:value:format:prompt:)](init%28__value_format_prompt_%29.md): Conforms when `Label` is `Text`. Creates a text field that applies a format style to a bound value, with a label generated from a localized title string resource.
- [init(\_:value:formatter:)](init%28__value_formatter_%29.md): Conforms when `Label` is `Text`. Create an instance which binds over an arbitrary type, `V`.
- [init(\_:value:formatter:prompt:)](init%28__value_formatter_prompt_%29.md): Conforms when `Label` is `Text`. Creates a text field that applies a formatter to a bound value, with a label generated from a localized title string resource.
- [init(value:formatter:prompt:label:)](init%28value_formatter_prompt_label_%29.md): Conforms when `Label` conforms to `View`. Creates a text field that applies a formatter to a bound optional value, with a label generated from a content builder.
