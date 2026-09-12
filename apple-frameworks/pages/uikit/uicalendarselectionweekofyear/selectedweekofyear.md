> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionweekofyear/selectedweekofyear](https://developer.apple.com/documentation/uikit/uicalendarselectionweekofyear/selectedweekofyear)

# selectedWeekOfYear (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The current week-of-year selection in the calendar view.

## Declaration

```swift
var selectedWeekOfYear: DateComponents? { get set }
```

<a id="Discussion"></a>

## Discussion

The components need to include `[.yearForWeekOfYear, .weekOfYear]`.

## See Also

### Updating the selected week

- [setSelected(\_:animated:)](setselected%28__animated_%29.md): Updates the date component object that represents a selected week in a calendar view, with an option to animate the change.

# selectedWeekOfYear (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The current week-of-year selection in the calendar view.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDateComponents * selectedWeekOfYear;
```

<a id="Discussion"></a>

## Discussion

The components need to include `[.yearForWeekOfYear, .weekOfYear]`.

## See Also

### Updating the selected week

- [setSelectedWeekOfYear:animated:](setselected%28__animated_%29.md): Updates the date component object that represents a selected week in a calendar view, with an option to animate the change.
