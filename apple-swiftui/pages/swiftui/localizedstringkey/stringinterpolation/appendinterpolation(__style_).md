> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:style:)](https://developer.apple.com/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:style:))

# appendInterpolation(\_:style:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Appends a formatted date to a string interpolation.

## Declaration

```swift
mutating func appendInterpolation(_ date: Date, style: Text.DateStyle)
```

## Parameters

- `date`: The date to append.
- `style`: A predefined style to format the date with.

<a id="discussion"></a>

## Discussion

Don’t call this method directly; it’s used by the compiler when interpreting string interpolations.

## See Also

### Appending to an interpolation

- [appendInterpolation(\_:)](appendinterpolation%28__%29.md): Appends an attributed substring to a string interpolation.
- [appendInterpolation(\_:specifier:)](appendinterpolation%28__specifier_%29.md): Appends a type, convertible to a string with a format specifier, to a string interpolation.
- [appendInterpolation(\_:format:)](appendinterpolation%28__format_%29.md): Appends the formatted representation of a nonstring type supported by a corresponding format style.
- [appendInterpolation(\_:formatter:)](appendinterpolation%28__formatter_%29.md): Appends an optionally-formatted instance of an Objective-C subclass to a string interpolation.
- [appendInterpolation(timerInterval:pauseTime:countsDown:showsHours:)](appendinterpolation%28timerinterval_pausetime_countsdown_showshours_%29.md): Appends a timer interval to a string interpolation.
- [appendLiteral(\_:)](appendliteral%28__%29.md): Appends a literal string.
