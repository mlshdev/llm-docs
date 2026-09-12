> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/unitsformatstyle/unitwidth-swift.struct/narrow](https://developer.apple.com/documentation/swift/duration/unitsformatstyle/unitwidth-swift.struct/narrow)

# narrow

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The shortest possible unit name.

## Declaration

```swift
static var narrow: Duration.UnitsFormatStyle.UnitWidth { get }
```

<a id="discussion"></a>

## Discussion

For example, `narrow` produces the unit label “3h” for a 3-hour duration in the `en_US` locale.

## See Also

### Duration unit widths

- [abbreviated](abbreviated.md): An abbreviated unit name.
- [condensedAbbreviated](condensedabbreviated.md): An abbreviated unit name, with condensed space between the value and name.
- [wide](wide.md): The full unit name.
