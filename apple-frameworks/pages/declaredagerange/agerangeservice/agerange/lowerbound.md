> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/agerangeservice/agerange/lowerbound](https://developer.apple.com/documentation/declaredagerange/agerangeservice/agerange/lowerbound)

# lowerBound

**Framework:** Declared Age Range  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

The minimum age in the person’s declared age range.

## Declaration

```swift
var lowerBound: Int?
```

<a id="discussion"></a>

## Discussion

When this value is `nil`, the person’s age range is below your lowest specified age, indicating they are under your minimum age requirement. When the value is present, it represents the lowest age that the person meets or exceeds.

For example, if you specify `ageGates` of `13`, `16`, and `18`, and receive a `lowerBound` of `16`, the person is at least `16` years old, but may or may not be `18` or older.

## See Also

### Fetching the age range

- [upperBound](upperbound.md): The maximum age in the person’s declared age range.
- [ageRangeDeclaration](agerangedeclaration.md): Information about how the person set their age range.
- [activeParentalControls](activeparentalcontrols.md): The parental controls that are active on the device.
