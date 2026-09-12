> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfield/init(value:formatter:prompt:label:)](https://developer.apple.com/documentation/swiftui/textfield/init(value:formatter:prompt:label:))

# init(value:formatter:prompt:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a text field that applies a formatter to a bound optional value, with a label generated from a content builder.

## Declaration

```swift
nonisolated init<V>(value: Binding<V>, formatter: Formatter, prompt: Text? = nil, @ContentBuilder label: () -> Label)
```

## Parameters

- `value`: The underlying value to edit.
- `formatter`: A formatter to use when converting between the string the user edits and the underlying value of type `V`. If `formatter` can’t perform the conversion, the text field doesn’t modify `binding.value`.
- `prompt`: A `Text` which provides users with guidance on what to enter into the text field.
- `label`: A view that describes the purpose of the text field.

<a id="discussion"></a>

## Discussion

Use this initializer to create a text field that binds to a bound optional value, using a [Formatter](https://developer.apple.com/documentation/foundation/formatter) to convert to and from this type. Changes to the bound value update the string displayed by the text field. Editing the text field updates the bound value, as long as the formatter can parse the text. If the format style can’t parse the input, the bound value remains unchanged.

Use the [onSubmit(of:\_:)](../view/onsubmit%28of___%29.md) modifier to invoke an action whenever the user submits this text field.

The following example uses a [Double](https://developer.apple.com/documentation/swift/double) as the bound value, and a [NumberFormatter](https://developer.apple.com/documentation/foundation/numberformatter) instance to convert to and from a string representation. The formatter uses the [NumberFormatter.Style.decimal](https://developer.apple.com/documentation/foundation/numberformatter/style/decimal) style, to allow entering a fractional part. As the user types, the bound value updates, which in turn updates three [Text](../text.md) views that use different format styles. If the user enters text that doesn’t represent a valid `Double`, the bound value doesn’t update.

```swift
@State private var myDouble: Double = 0.673
@State private var numberFormatter: NumberFormatter = {
    var nf = NumberFormatter()
    nf.numberStyle = .decimal
    return nf
}()

var body: some View {
    VStack {
        TextField(
            value: $myDouble,
            formatter: numberFormatter
        ) {
            Text("Double")
        }
        Text(myDouble, format: .number)
        Text(myDouble, format: .number.precision(.significantDigits(5)))
        Text(myDouble, format: .number.notation(.scientific))
    }
}
```

## See Also

### Creating a text field with a value

- [init(\_:value:format:prompt:)](init%28__value_format_prompt_%29.md): Conforms when `Label` is `Text`. Creates a text field that applies a format style to a bound value, with a label generated from a localized title string resource.
- [init(value:format:prompt:label:)](init%28value_format_prompt_label_%29.md): Conforms when `Label` conforms to `View`. Creates a text field that applies a format style to a bound value, with a label generated from a content builder.
- [init(\_:value:formatter:)](init%28__value_formatter_%29.md): Conforms when `Label` is `Text`. Create an instance which binds over an arbitrary type, `V`.
- [init(\_:value:formatter:prompt:)](init%28__value_formatter_prompt_%29.md): Conforms when `Label` is `Text`. Creates a text field that applies a formatter to a bound value, with a label generated from a localized title string resource.
