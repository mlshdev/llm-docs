> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/localizedstringkey/stringinterpolation/appendliteral(_:)](https://developer.apple.com/documentation/swiftui/localizedstringkey/stringinterpolation/appendliteral(_:))

# appendLiteral(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Appends a literal string.

## Declaration

```swift
mutating func appendLiteral(_ literal: String)
```

## Parameters

- `literal`: The literal string to append.

<a id="discussion"></a>

## Discussion

Don’t call this method directly; it’s used by the compiler when interpreting string interpolations.

## See Also

### Appending to an interpolation

- [appendInterpolation(\_:)](appendinterpolation%28__%29.md): Appends an attributed substring to a string interpolation.
- [appendInterpolation(\_:specifier:)](appendinterpolation%28__specifier_%29.md): Appends a type, convertible to a string with a format specifier, to a string interpolation.
- [appendInterpolation(\_:format:)](appendinterpolation%28__format_%29.md): Appends the formatted representation of a nonstring type supported by a corresponding format style.
- [appendInterpolation(\_:formatter:)](appendinterpolation%28__formatter_%29.md): Appends an optionally-formatted instance of an Objective-C subclass to a string interpolation.
- [appendInterpolation(\_:style:)](appendinterpolation%28__style_%29.md): Appends a formatted date to a string interpolation.
- [appendInterpolation(timerInterval:pauseTime:countsDown:showsHours:)](appendinterpolation%28timerinterval_pausetime_countsdown_showshours_%29.md): Appends a timer interval to a string interpolation.
