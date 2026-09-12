> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/unitsformatstyle/attributed-swift.struct](https://developer.apple.com/documentation/swift/duration/unitsformatstyle/attributed-swift.struct)

# Duration.UnitsFormatStyle.Attributed

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

Apply the [attributed](attributed-swift.property.md) property to a configured [Duration.UnitsFormatStyle](../unitsformatstyle.md) to produce an instance of this style. You can then format a duration with this style to create a formatted   [AttributedString](https://developer.apple.com/documentation/foundation/attributedstring). The formatted attributed string contains instances of [AttributeScopes.FoundationAttributes.DateFieldAttribute](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/datefieldattribute) and [AttributeScopes.FoundationAttributes.MeasurementAttribute](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/measurementattribute) for runs with formatted durations.

The following example formats a duration as an attributed string:

```swift
let duration = Duration.seconds(70 * 60 + 32) +
    Duration.milliseconds(400)
let style = Duration.UnitsFormatStyle(allowedUnits: [.hours, .minutes, .seconds],
                                      width: .abbreviated).attributed
let attributedDuration = duration.formatted(style)
```

The resulting `attributedDuration`, representing the string `1 hr, 10 min, 32 sec` contains the following runs:

| Run | Attributes |
| --- | --- |
| `1` | `Foundation.MeasurementAttribute = value`, `Foundation.DurationFormatAttribute = hours` |
| (space) | `Foundation.DurationFormatAttribute = hours` |
| `hr` | `Foundation.DurationFormatAttribute = hours`, `Foundation.MeasurementAttribute = unit` |
| `,  ` | None |
| `10` | `Foundation.MeasurementAttribute = value`, `Foundation.DurationFormatAttribute = minutes` |
| (space) | `Foundation.DurationFormatAttribute = minutes` |
| `min` | `Foundation.DurationFormatAttribute = minutes`, `Foundation.MeasurementAttribute = unit` |
| `,  ` | None |
| `32` | `Foundation.MeasurementAttribute = value`, `Foundation.DurationFormatAttribute = seconds` |
| (space) | `Foundation.DurationFormatAttribute = seconds` |
| `sec` | `Foundation.DurationFormatAttribute = seconds`, `Foundation.MeasurementAttribute = unit` |

## Topics

### Formatting a duration

- [format(\_:)](attributed-swift.struct/format%28__%29.md): Creates a locale-aware attributed string representation from a duration value.

### Working with locales

- [locale(\_:)](attributed-swift.struct/locale%28__%29.md): Modifies the format style to use the specified locale.

### Subscripts

- [subscript(dynamicMember:)](attributed-swift.struct/subscript%28dynamicmember_%29-57dpz.md)
- [subscript(dynamicMember:)](attributed-swift.struct/subscript%28dynamicmember_%29-65x7d.md)

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
