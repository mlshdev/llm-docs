> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:)](https://developer.apple.com/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:))

# appendInterpolation(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Appends an attributed substring to a string interpolation.

## Declaration

```swift
@export(implementation) mutating func appendInterpolation(_ attributedSubstring: AttributedSubstring)
```

## Parameters

- `attributedSubstring`: The attributed substring to append.

<a id="discussion"></a>

## Discussion

Don’t call this method directly; it’s used by the compiler when interpreting string interpolations.

The following example shows how to use a string interpolation to format an [AttributedSubstring](https://developer.apple.com/documentation/foundation/attributedsubstring) and append it to static text. The resulting interpolation implicitly creates a [LocalizedStringKey](../../localizedstringkey.md), which a [Text](../../text.md) view uses to provide its content.

```swift
struct ContentView: View {

    var identificationNumberSuffix: AttributedSubstring {
        // …
    }

    var body: some View {
        Text("Identification: •••• •••• \(identificationNumberSuffix)!")
    }
}
```

For this example, assume that the app runs on a device set to a Russian locale, and has the following entry in a Russian-localized `Localizable.strings` file:

```swift
"Identification: •••• •••• %@" = "Идентификация: •••• •••• %@";
```

The attributed string `identificationNumberSuffix` replaces the format specifier `%@`,  maintaining its color attributes, when the [Text](../../text.md) view renders its contents:

## See Also

### Appending to an interpolation

- [appendInterpolation(\_:specifier:)](appendinterpolation%28__specifier_%29.md): Appends a type, convertible to a string with a format specifier, to a string interpolation.
- [appendInterpolation(\_:format:)](appendinterpolation%28__format_%29.md): Appends the formatted representation of a nonstring type supported by a corresponding format style.
- [appendInterpolation(\_:formatter:)](appendinterpolation%28__formatter_%29.md): Appends an optionally-formatted instance of an Objective-C subclass to a string interpolation.
- [appendInterpolation(\_:style:)](appendinterpolation%28__style_%29.md): Appends a formatted date to a string interpolation.
- [appendInterpolation(timerInterval:pauseTime:countsDown:showsHours:)](appendinterpolation%28timerinterval_pausetime_countsdown_showshours_%29.md): Appends a timer interval to a string interpolation.
- [appendLiteral(\_:)](appendliteral%28__%29.md): Appends a literal string.
