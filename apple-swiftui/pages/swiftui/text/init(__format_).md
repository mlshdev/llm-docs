> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/init(_:format:)](https://developer.apple.com/documentation/swiftui/text/init(_:format:))

# init(\_:format:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a text view that displays the formatted representation of a nonstring type supported by a corresponding format style.

## Declaration

```swift
init<F>(_ input: F.FormatInput, format: F) where F : FormatStyle, F.FormatInput : Equatable, F.FormatOutput == AttributedString
```

## Parameters

- `input`: The underlying value to display.
- `format`: A format style of type `F` to convert the underlying value of type `F.FormatInput` to an attributed string representation.

<a id="discussion"></a>

## Discussion

Use this initializer to create a text view backed by a nonstring value, using a [FormatStyle](https://developer.apple.com/documentation/foundation/formatstyle) to convert the type to an attributed string representation. Any changes to the value update the string displayed by the text view.

In the following example, three [Text](../text.md) views present a date with different combinations of date and time fields, by using different [Date.FormatStyle](https://developer.apple.com/documentation/foundation/date/formatstyle) options.

```swift
@State private var myDate = Date()
var body: some View {
    VStack {
        Text(myDate, format: Date.FormatStyle(date: .numeric, time: .omitted).attributedStyle)
        Text(myDate, format: Date.FormatStyle(date: .complete, time: .complete).attributedStyle)
        Text(myDate, format: Date.FormatStyle().hour(.defaultDigitsNoAMPM).minute().attributedStyle)
    }
}
```

![Three vertically stacked text views showing the date with different](https://developer.apple.com/images/com.apple.SwiftUI/Text-init-format-1@2x.png)

## See Also

### Creating a text view

- [init(\_:tableName:bundle:comment:)](init%28__tablename_bundle_comment_%29.md): Creates a text view that displays localized content identified by a key.
- [init(\_:)](init%28__%29.md): Creates a text view that displays styled attributed content.
- [init(verbatim:)](init%28verbatim_%29.md): Creates a text view that displays a string literal without localization.
- [init(\_:style:)](init%28__style_%29.md): Creates an instance that displays localized dates and times using a specific style.
- [init(\_:formatter:)](init%28__formatter_%29.md): Creates a text view that displays the formatted representation of a Foundation object.
- [init(timerInterval:pauseTime:countsDown:showsHours:)](init%28timerinterval_pausetime_countsdown_showshours_%29.md): Creates an instance that displays a timer counting within the provided interval.
