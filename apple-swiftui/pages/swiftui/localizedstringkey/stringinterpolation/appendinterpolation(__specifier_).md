> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:specifier:)](https://developer.apple.com/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:specifier:))

# appendInterpolation(\_:specifier:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Appends a type, convertible to a string with a format specifier, to a string interpolation.

## Declaration

```swift
mutating func appendInterpolation<T>(_ value: T, specifier: String) where T : _FormatSpecifiable
```

## Parameters

- `value`: The value to append.
- `specifier`: A format specifier to convert `subject` to a string representation, like `%f` for a [Double](https://developer.apple.com/documentation/swift/double), or `%x` to create a hexidecimal representation of a [UInt32](https://developer.apple.com/documentation/swift/uint32). For a list of available specifier strings, see [String Format Specifers](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/formatSpecifiers.html#//apple_ref/doc/uid/TP40004265).

<a id="discussion"></a>

## Discussion

Don’t call this method directly; it’s used by the compiler when interpreting string interpolations.

## See Also

### Appending to an interpolation

- [appendInterpolation(\_:)](appendinterpolation%28__%29.md): Appends an attributed substring to a string interpolation.
- [appendInterpolation(\_:format:)](appendinterpolation%28__format_%29.md): Appends the formatted representation of a nonstring type supported by a corresponding format style.
- [appendInterpolation(\_:formatter:)](appendinterpolation%28__formatter_%29.md): Appends an optionally-formatted instance of an Objective-C subclass to a string interpolation.
- [appendInterpolation(\_:style:)](appendinterpolation%28__style_%29.md): Appends a formatted date to a string interpolation.
- [appendInterpolation(timerInterval:pauseTime:countsDown:showsHours:)](appendinterpolation%28timerinterval_pausetime_countsdown_showshours_%29.md): Appends a timer interval to a string interpolation.
- [appendLiteral(\_:)](appendliteral%28__%29.md): Appends a literal string.
