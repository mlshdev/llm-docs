> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(timerinterval:pausetime:countsdown:showshours:)](https://developer.apple.com/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(timerinterval:pausetime:countsdown:showshours:))

# appendInterpolation(timerInterval:pauseTime:countsDown:showsHours:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Appends a timer interval to a string interpolation.

## Declaration

```swift
mutating func appendInterpolation(timerInterval: ClosedRange<Date>, pauseTime: Date? = nil, countsDown: Bool = true, showsHours: Bool = true)
```

## Parameters

- `timerInterval`: The interval between where to run the timer.
- `pauseTime`: If present, the date at which to pause the timer. The default is `nil` which indicates to never pause.
- `countsDown`: Whether to count up or down. The default is `true`.
- `showsHours`: Whether to include an hours component if there are more than 60 minutes left on the timer. The default is `true`.

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
- [appendLiteral(\_:)](appendliteral%28__%29.md): Appends a literal string.
