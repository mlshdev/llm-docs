> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/unitsformatstyle/valuelengthlimits](https://developer.apple.com/documentation/swift/duration/unitsformatstyle/valuelengthlimits)

# valueLengthLimits

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The padding or truncating behavior of the unit value.

## Declaration

```swift
var valueLengthLimits: Range<Int>?
```

<a id="discussion"></a>

## Discussion

For example, set this to `2...` to force 2-digit padding on all units.

## See Also

### Working with units

- [allowedUnits](allowedunits.md): The units that may be included in the output string.
- [Duration.UnitsFormatStyle.Unit](unit.md): A unit to use in formatting a duration.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
