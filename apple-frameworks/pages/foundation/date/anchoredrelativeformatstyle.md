> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/anchoredrelativeformatstyle](https://developer.apple.com/documentation/foundation/date/anchoredrelativeformatstyle)

# Date.AnchoredRelativeFormatStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

A relative format style that is detached from the system time, and instead formats an anchor date relative to the format input.

## Declaration

```swift
struct AnchoredRelativeFormatStyle
```

## Topics

### Initializers

- [init(anchor:allowedFields:presentation:unitsStyle:locale:calendar:capitalizationContext:)](anchoredrelativeformatstyle/init%28anchor_allowedfields_presentation_unitsstyle_locale_calendar_capitalizationcontext_%29.md): Create a relative format style that is detached from the system time, and instead formats an anchor date relative to the format input.
- [init(anchor:presentation:unitsStyle:locale:calendar:capitalizationContext:)](anchoredrelativeformatstyle/init%28anchor_presentation_unitsstyle_locale_calendar_capitalizationcontext_%29.md): Create a relative format style that is detached from the system time, and instead formats an anchor date relative to the format input.

### Instance Properties

- [allowedFields](anchoredrelativeformatstyle/allowedfields.md): The fields that can be used in the formatted output.
- [anchor](anchoredrelativeformatstyle/anchor.md): The date the formatted output refers to from the perspective of the input values.
- [calendar](anchoredrelativeformatstyle/calendar.md)
- [capitalizationContext](anchoredrelativeformatstyle/capitalizationcontext.md)
- [locale](anchoredrelativeformatstyle/locale.md)
- [presentation](anchoredrelativeformatstyle/presentation-swift.property.md)
- [unitsStyle](anchoredrelativeformatstyle/unitsstyle-swift.property.md)

### Type Aliases

- [Date.AnchoredRelativeFormatStyle.Field](anchoredrelativeformatstyle/field.md)
- [Date.AnchoredRelativeFormatStyle.Presentation](anchoredrelativeformatstyle/presentation-swift.typealias.md)
- [Date.AnchoredRelativeFormatStyle.UnitsStyle](anchoredrelativeformatstyle/unitsstyle-swift.typealias.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DiscreteFormatStyle](../discreteformatstyle.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [FormatStyle](../formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
