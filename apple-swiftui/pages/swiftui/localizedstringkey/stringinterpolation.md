> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/localizedstringkey/stringinterpolation](https://developer.apple.com/documentation/swiftui/localizedstringkey/stringinterpolation)

# LocalizedStringKey.StringInterpolation

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Represents the contents of a string literal with interpolations while it’s being built, for use in creating a localized string key.

## Declaration

```swift
struct StringInterpolation
```

## Topics

### Appending to an interpolation

The compiler uses these methods when interpreting string interpolations; don’t call them directly.

- [appendInterpolation(\_:)](stringinterpolation/appendinterpolation%28__%29.md): Appends an attributed substring to a string interpolation.
- [appendInterpolation(\_:specifier:)](stringinterpolation/appendinterpolation%28__specifier_%29.md): Appends a type, convertible to a string with a format specifier, to a string interpolation.
- [appendInterpolation(\_:format:)](stringinterpolation/appendinterpolation%28__format_%29.md): Appends the formatted representation of a nonstring type supported by a corresponding format style.
- [appendInterpolation(\_:formatter:)](stringinterpolation/appendinterpolation%28__formatter_%29.md): Appends an optionally-formatted instance of an Objective-C subclass to a string interpolation.
- [appendInterpolation(\_:style:)](stringinterpolation/appendinterpolation%28__style_%29.md): Appends a formatted date to a string interpolation.
- [appendInterpolation(timerInterval:pauseTime:countsDown:showsHours:)](stringinterpolation/appendinterpolation%28timerinterval_pausetime_countsdown_showshours_%29.md): Appends a timer interval to a string interpolation.
- [appendLiteral(\_:)](stringinterpolation/appendliteral%28__%29.md): Appends a literal string.

### Instance Methods

- [appendInterpolation(accessibilityName:)](stringinterpolation/appendinterpolation%28accessibilityname_%29.md): Appends a localized description of a color for accessibility to a string interpolation.

## Relationships

### Conforms To

- [StringInterpolationProtocol](https://developer.apple.com/documentation/swift/stringinterpolationprotocol)

## See Also

### Creating a key from an interpolation

- [init(stringInterpolation:)](init%28stringinterpolation_%29.md): Creates a localized string key from the given string interpolation.
