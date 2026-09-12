> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:formatter:)](https://developer.apple.com/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:formatter:))

# appendInterpolation(\_:formatter:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Appends an optionally-formatted instance of an Objective-C subclass to a string interpolation.

## Declaration

```swift
mutating func appendInterpolation<Subject>(_ subject: Subject, formatter: Formatter? = nil) where Subject : NSObject
```

## Parameters

- `subject`: An [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class) to append.
- `formatter`: A formatter to convert `subject` to a string representation.

<a id="discussion"></a>

## Discussion

Don’t call this method directly; it’s used by the compiler when interpreting string interpolations.

The following example shows how to use a [Measurement](https://developer.apple.com/documentation/foundation/measurement) value and a [MeasurementFormatter](https://developer.apple.com/documentation/foundation/measurementformatter) to create a [LocalizedStringKey](../../localizedstringkey.md) that uses the formatter style [Formatter.UnitStyle.long](https://developer.apple.com/documentation/foundation/formatter/unitstyle/long) when generating the measurement’s string representation. Rather than calling `appendInterpolation(_:formatter)` directly, the code gets the formatting behavior implicitly by using the `\()` string interpolation syntax.

```swift
let siResistance = Measurement(value: 640, unit: UnitElectricResistance.ohms)
let formatter = MeasurementFormatter()
formatter.unitStyle = .long
let key = LocalizedStringKey ("Resistance: \(siResistance, formatter: formatter)")
let text1 = Text(key) // Text contains "Resistance: 640 ohms"
```

## See Also

### Appending to an interpolation

- [appendInterpolation(\_:)](appendinterpolation%28__%29.md): Appends an attributed substring to a string interpolation.
- [appendInterpolation(\_:specifier:)](appendinterpolation%28__specifier_%29.md): Appends a type, convertible to a string with a format specifier, to a string interpolation.
- [appendInterpolation(\_:format:)](appendinterpolation%28__format_%29.md): Appends the formatted representation of a nonstring type supported by a corresponding format style.
- [appendInterpolation(\_:style:)](appendinterpolation%28__style_%29.md): Appends a formatted date to a string interpolation.
- [appendInterpolation(timerInterval:pauseTime:countsDown:showsHours:)](appendinterpolation%28timerinterval_pausetime_countsdown_showshours_%29.md): Appends a timer interval to a string interpolation.
- [appendLiteral(\_:)](appendliteral%28__%29.md): Appends a literal string.
