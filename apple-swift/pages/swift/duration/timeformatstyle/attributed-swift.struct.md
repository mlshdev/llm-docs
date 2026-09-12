> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/timeformatstyle/attributed-swift.struct](https://developer.apple.com/documentation/swift/duration/timeformatstyle/attributed-swift.struct)

# Duration.TimeFormatStyle.Attributed

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A format style that formats durations as attributed strings.

## Declaration

```swift
@dynamicMemberLookup struct Attributed
```

<a id="overview"></a>

## Overview

Apply the [Duration.TimeFormatStyle.Attributed](attributed-swift.struct.md) property to a configured [Duration.TimeFormatStyle](../timeformatstyle.md) to produce an instance of this style. You can then format a duration with this style to create a formatted [AttributedString](https://developer.apple.com/documentation/foundation/attributedstring). The formatted attributed string contains instances of [AttributeScopes.FoundationAttributes.DateFieldAttribute](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/datefieldattribute) for runs with formatted durations.

The following example formats a duration as an attributed string:

```swift
let duration = Duration.seconds(70 * 60 + 32) +
    Duration.milliseconds(400)
let style = Duration.TimeFormatStyle(pattern: .hourMinuteSecond).attributed
let attributedDuration = duration.formatted(style)
```

The resulting `attributedDuration`, representing the string `1:10:32` contains the following runs:

| Run | Attributes |
| --- | --- |
| `1` | `Foundation.DurationFormatAttribute = hours` |
| `:` | None |
| `10` | `Foundation.DurationFormatAttribute = minutes` |
| `:` | None |
| `32` | `Foundation.DurationFormatAttribute = seconds` |

## Topics

### Formatting a duration

- [format(\_:)](attributed-swift.struct/format%28__%29.md): Creates a locale-aware attributed string representation from a duration value.

### Working with locales

- [locale(\_:)](attributed-swift.struct/locale%28__%29.md): Modifies the format style to use the specified locale.

### Instance Methods

- [grouping(\_:)](attributed-swift.struct/grouping%28__%29.md): Returns a modified style that applies the given `grouping` rule to the highest field in the pattern.

### Subscripts

- [subscript(dynamicMember:)](attributed-swift.struct/subscript%28dynamicmember_%29-32lo0.md)
- [subscript(dynamicMember:)](attributed-swift.struct/subscript%28dynamicmember_%29-8cksi.md)

## Relationships

### Conforms To

- [Copyable](../../copyable.md)
- [Decodable](../../decodable.md)
- [DiscreteFormatStyle](https://developer.apple.com/documentation/foundation/discreteformatstyle)
- [Encodable](../../encodable.md)
- [Equatable](../../equatable.md)
- [Escapable](../../escapable.md)
- [FormatStyle](https://developer.apple.com/documentation/foundation/formatstyle)
- [Hashable](../../hashable.md)
- [Sendable](../../sendable.md)
- [SendableMetatype](../../sendablemetatype.md)

## See Also

### Formatting a duration as an attributed string

- [attributed](attributed-swift.property.md): A property that formats the duration as an attributed string.
