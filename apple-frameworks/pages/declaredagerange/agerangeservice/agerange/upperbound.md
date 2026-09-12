> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/agerangeservice/agerange/upperbound](https://developer.apple.com/documentation/declaredagerange/agerangeservice/agerange/upperbound)

# upperBound

**Framework:** Declared Age Range  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

The maximum age in the person’s declared age range.

## Declaration

```swift
var upperBound: Int?
```

<a id="discussion"></a>

## Discussion

When this value is `nil`, there’s no upper bound to the person’s age range, indicating they meet or exceed your highest `ageGate`. When present, this value represents the highest `ageGate` the person is confirmed to be under.

Use with `lowerBound` to provide age range boundaries for content decision making.

## See Also

### Fetching the age range

- [lowerBound](lowerbound.md): The minimum age in the person’s declared age range.
- [ageRangeDeclaration](agerangedeclaration.md): Information about how the person set their age range.
- [activeParentalControls](activeparentalcontrols.md): The parental controls that are active on the device.
