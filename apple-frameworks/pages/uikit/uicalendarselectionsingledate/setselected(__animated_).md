> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionsingledate/setselected(_:animated:)](https://developer.apple.com/documentation/uikit/uicalendarselectionsingledate/setselected(_:animated:))

# setSelected(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Updates the date component object that represents a selected date in a calendar view, with an option to animate the change.

## Declaration

```swift
func setSelected(_ selectedDate: DateComponents?, animated: Bool)
```

## Parameters

- `selectedDate`: A date component object that represents a date to select in a calendar view.
- `animated`: A Boolean value that indicates whether the calendar view should animate changing the selected date.

## See Also

### Updating the selected date

- [selectedDate](selecteddate.md): A date component object that represents a selected date in a calendar view.

# setSelectedDate:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Updates the date component object that represents a selected date in a calendar view, with an option to animate the change.

## Declaration

```objectivec
- (void) setSelectedDate:(NSDateComponents *) selectedDate animated:(BOOL) animated;
```

## Parameters

- `selectedDate`: A date component object that represents a date to select in a calendar view.
- `animated`: A Boolean value that indicates whether the calendar view should animate changing the selected date.

## See Also

### Updating the selected date

- [selectedDate](selecteddate.md): A date component object that represents a selected date in a calendar view.
