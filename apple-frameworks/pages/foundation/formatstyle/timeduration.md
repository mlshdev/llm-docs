> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/timeduration](https://developer.apple.com/documentation/foundation/formatstyle/timeduration)

# timeDuration

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A style for formatting a duration expressed as a range of dates.

## Declaration

```swift
static var timeDuration: Date.ComponentsFormatStyle { get }
```

<a id="Discussion"></a>

## Discussion

Use this type property when the call point allows the use of [Date.FormatStyle](../date/formatstyle.md). You typically do this when calling the [formatted(\_:)](../date/formatted%28__%29.md) method of [Date](../date.md).

The following example creates a one hour, thirty-five minute range between two dates, then uses SELF to format this duration as a string.

```swift
let now = Date.now
let future = now.addingTimeInterval(95)
let dateRange = now..<future
let formatted = dateRange.formatted(.timeDuration) // "1:35"
XCTAssertEqual(formatted, "1:35")
```

To use the Swift [Duration](https://developer.apple.com/documentation/swift/duration) type rather than `Date`, use [Duration.TimeFormatStyle](https://developer.apple.com/documentation/swift/duration/timeformatstyle) or [Duration.UnitsFormatStyle](https://developer.apple.com/documentation/swift/duration/unitsformatstyle) instead, and their corresponding static accessors, [time(pattern:)](time%28pattern_%29.md) and [units(allowed:width:maximumUnitCount:zeroValueUnits:valueLength:fractionalPart:)](units%28allowed_width_maximumunitcount_zerovalueunits_valuelength_fractionalpart_%29.md).

## See Also

### Applying duration styles

- [Date.ComponentsFormatStyle](../date/componentsformatstyle.md): A style for formatting a date interval in terms of specific date components.
- [time(pattern:)](time%28pattern_%29.md): Conforms when `Self` is `Duration.TimeFormatStyle`. Returns a style for formatting a duration using a provided pattern.
- [units(allowed:width:maximumUnitCount:zeroValueUnits:valueLength:fractionalPart:)](units%28allowed_width_maximumunitcount_zerovalueunits_valuelength_fractionalpart_%29.md): Conforms when `Self` is `Duration.UnitsFormatStyle`. Returns a style for formatting a duration that uses the specified units.
- [units(allowed:width:maximumUnitCount:zeroValueUnits:valueLengthLimits:fractionalPart:)](units%28allowed_width_maximumunitcount_zerovalueunits_valuelengthlimits_fractionalpart_%29.md): Conforms when `Self` is `Duration.UnitsFormatStyle`. Returns a style for formatting a duration range that uses the specified units, with padding/truncating behavior defined as a range.
