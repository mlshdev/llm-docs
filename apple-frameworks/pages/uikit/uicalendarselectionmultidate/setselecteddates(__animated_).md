> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionmultidate/setselecteddates(_:animated:)](https://developer.apple.com/documentation/uikit/uicalendarselectionmultidate/setselecteddates(_:animated:))

# setSelectedDates(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Updates the array of date component objects that represent selected dates in a calendar view, with an option to animate the change.

## Declaration

```swift
func setSelectedDates(_ selectedDates: [DateComponents], animated: Bool)
```

## Parameters

- `selectedDates`: An array of date component objects that represent dates to select in a calendar view.
- `animated`: A Boolean value that indicates whether the calendar view should animate changing the selected dates.

## See Also

### Updating the selected dates

- [selectedDates](selecteddates.md): An array of date component objects that represent selected dates in a calendar view.

# setSelectedDates:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Updates the array of date component objects that represent selected dates in a calendar view, with an option to animate the change.

## Declaration

```objectivec
- (void) setSelectedDates:(NSArray<NSDateComponents *> *) selectedDates animated:(BOOL) animated;
```

## Parameters

- `selectedDates`: An array of date component objects that represent dates to select in a calendar view.
- `animated`: A Boolean value that indicates whether the calendar view should animate changing the selected dates.

## See Also

### Updating the selected dates

- [selectedDates](selecteddates.md): An array of date component objects that represent selected dates in a calendar view.
