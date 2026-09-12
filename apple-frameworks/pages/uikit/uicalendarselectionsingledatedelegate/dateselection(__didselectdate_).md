> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionsingledatedelegate/dateselection(_:didselectdate:)](https://developer.apple.com/documentation/uikit/uicalendarselectionsingledatedelegate/dateselection(_:didselectdate:))

# dateSelection(\_:didSelectDate:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the delegate that a user selected a date represented by date components.

## Declaration

```swift
func dateSelection(_ selection: UICalendarSelectionSingleDate, didSelectDate dateComponents: DateComponents?)
```

## Parameters

- `selection`: An object that tracks a date that a user selects from a calendar view.
- `dateComponents`: Date components that represent a date the user selected, or `nil` if the user deselected a date.

# dateSelection:didSelectDate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the delegate that a user selected a date represented by date components.

## Declaration

```objectivec
- (void) dateSelection:(UICalendarSelectionSingleDate *) selection didSelectDate:(NSDateComponents *) dateComponents;
```

## Parameters

- `selection`: An object that tracks a date that a user selects from a calendar view.
- `dateComponents`: Date components that represent a date the user selected, or `nil` if the user deselected a date.
