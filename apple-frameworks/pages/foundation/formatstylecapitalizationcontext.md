> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstylecapitalizationcontext](https://developer.apple.com/documentation/foundation/formatstylecapitalizationcontext)

# FormatStyleCapitalizationContext

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The capitalization formatting context used when formatting dates and times.

## Declaration

```swift
struct FormatStyleCapitalizationContext
```

## Topics

### Customizing Style Behavior

- [unknown](formatstylecapitalizationcontext/unknown.md)
- [standalone](formatstylecapitalizationcontext/standalone.md): For stand-alone usage, such as an isolated name on a calendar page.
- [listItem](formatstylecapitalizationcontext/listitem.md): For use in a UI list or menu item.
- [beginningOfSentence](formatstylecapitalizationcontext/beginningofsentence.md)
- [middleOfSentence](formatstylecapitalizationcontext/middleofsentence.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data formatting in Swift

- [Language Introspector](language-introspector.md): Converts data into human-readable text using formatters and locales.
- [FormatStyle](formatstyle.md): A type that converts a given data type into a representation in another type, such as a string.
- [IntegerFormatStyle](integerformatstyle.md): A structure that converts between integer values and their textual representations.
- [FloatingPointFormatStyle](floatingpointformatstyle.md): A structure that converts between floating-point values and their textual representations.
- [Decimal.FormatStyle](decimal/formatstyle.md): A structure that converts between decimal values and their textual representations.
- [ListFormatStyle](listformatstyle.md): A type that formats lists of items with a separator and conjunction appropriate for a given locale.
- [StringStyle](stringstyle.md)
- [URL.FormatStyle](url/formatstyle.md): A structure that converts between URL instances and their textual representations.
- [Format Style Configurations](format-style-configurations.md): Behaviors for traits like numeric precision, rounding, and scale, used for formatting and parsing numeric values.
