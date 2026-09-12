> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/agerangeservice/agerange/agerangedeclaration](https://developer.apple.com/documentation/declaredagerange/agerangeservice/agerange/agerangedeclaration)

# ageRangeDeclaration

**Framework:** Declared Age Range  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Information about how the person set their age range.

## Declaration

```swift
var ageRangeDeclaration: AgeRangeService.AgeRangeDeclaration?
```

<a id="discussion"></a>

## Discussion

This property provides context about the reliability and source of the age information. Use this information to determine the appropriate level of content restriction required for your app’s features.

For more information about declaration types, refer to [AgeRangeService.AgeRangeDeclaration](../agerangedeclaration.md).

## See Also

### Fetching the age range

- [lowerBound](lowerbound.md): The minimum age in the person’s declared age range.
- [upperBound](upperbound.md): The maximum age in the person’s declared age range.
- [activeParentalControls](activeparentalcontrols.md): The parental controls that are active on the device.
