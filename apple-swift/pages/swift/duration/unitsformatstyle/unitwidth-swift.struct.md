> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/unitsformatstyle/unitwidth-swift.struct](https://developer.apple.com/documentation/swift/duration/unitsformatstyle/unitwidth-swift.struct)

# Duration.UnitsFormatStyle.UnitWidth

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The width of a unit to use in formatting a duration.

## Declaration

```swift
struct UnitWidth
```

<a id="overview"></a>

## Overview

Use the provided unit widths with the `width` parameter of the [Duration.UnitsFormatStyle](../unitsformatstyle.md) initializers to customize the display of units in a formatted string.

## Topics

### Duration unit widths

- [abbreviated](unitwidth-swift.struct/abbreviated.md): An abbreviated unit name.
- [condensedAbbreviated](unitwidth-swift.struct/condensedabbreviated.md): An abbreviated unit name, with condensed space between the value and name.
- [narrow](unitwidth-swift.struct/narrow.md): The shortest possible unit name.
- [wide](unitwidth-swift.struct/wide.md): The full unit name.

## Relationships

### Conforms To

- [Decodable](../../decodable.md)
- [Encodable](../../encodable.md)
- [Equatable](../../equatable.md)
- [Hashable](../../hashable.md)
- [Sendable](../../sendable.md)
- [SendableMetatype](../../sendablemetatype.md)

## See Also

### Working with unit widths

- [unitWidth](unitwidth-swift.property.md): The width of the unit and the spacing between the value and the unit.
