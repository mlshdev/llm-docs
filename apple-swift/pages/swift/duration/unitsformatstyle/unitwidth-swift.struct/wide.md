> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/unitsformatstyle/unitwidth-swift.struct/wide](https://developer.apple.com/documentation/swift/duration/unitsformatstyle/unitwidth-swift.struct/wide)

# wide

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The full unit name.

## Declaration

```swift
static var wide: Duration.UnitsFormatStyle.UnitWidth { get }
```

<a id="discussion"></a>

## Discussion

For example, `wide` produces the unit label “3 hours” for a 3-hour duration in the `en_US` locale.

## See Also

### Duration unit widths

- [abbreviated](abbreviated.md): An abbreviated unit name.
- [condensedAbbreviated](condensedabbreviated.md): An abbreviated unit name, with condensed space between the value and name.
- [narrow](narrow.md): The shortest possible unit name.
