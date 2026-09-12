> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/unitsformatstyle/unitwidth-swift.struct/condensedabbreviated](https://developer.apple.com/documentation/swift/duration/unitsformatstyle/unitwidth-swift.struct/condensedabbreviated)

# condensedAbbreviated

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An abbreviated unit name, with condensed space between the value and name.

## Declaration

```swift
static var condensedAbbreviated: Duration.UnitsFormatStyle.UnitWidth { get }
```

<a id="discussion"></a>

## Discussion

For example, `condensedAbbreviated` produces the unit label “3hr” for a 3-hour duration in the `en_US` locale.

## See Also

### Duration unit widths

- [abbreviated](abbreviated.md): An abbreviated unit name.
- [narrow](narrow.md): The shortest possible unit name.
- [wide](wide.md): The full unit name.
