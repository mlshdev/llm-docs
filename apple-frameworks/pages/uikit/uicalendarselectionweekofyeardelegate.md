> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionweekofyeardelegate](https://developer.apple.com/documentation/uikit/uicalendarselectionweekofyeardelegate)

# UICalendarSelectionWeekOfYearDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A set of methods you implement to provide selectable weeks and handle changes to the week selection in a calendar view.

## Declaration

```swift
@MainActor protocol UICalendarSelectionWeekOfYearDelegate : NSObjectProtocol
```

## Topics

### Handling week-of-year selections

- [week(ofYearSelection:canSelectWeekOfYear:)](uicalendarselectionweekofyeardelegate/week%28ofyearselection_canselectweekofyear_%29.md): Determines if a week is available for selection.
- [week(ofYearSelection:didSelectWeekOfYear:)](uicalendarselectionweekofyeardelegate/week%28ofyearselection_didselectweekofyear_%29.md): Notifies the delegate after a person selects a week in the calendar view.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the selection delegate

- [delegate](uicalendarselectionweekofyear/delegate.md): A delegate object that a calendar view asks about selectable weeks and informs of changes to the week selection.

# UICalendarSelectionWeekOfYearDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A set of methods you implement to provide selectable weeks and handle changes to the week selection in a calendar view.

## Declaration

```objectivec
@protocol UICalendarSelectionWeekOfYearDelegate <NSObject>
```

## Topics

### Handling week-of-year selections

- [weekOfYearSelection:canSelectWeekOfYear:](uicalendarselectionweekofyeardelegate/week%28ofyearselection_canselectweekofyear_%29.md): Determines if a week is available for selection.
- [weekOfYearSelection:didSelectWeekOfYear:](uicalendarselectionweekofyeardelegate/week%28ofyearselection_didselectweekofyear_%29.md): Notifies the delegate after a person selects a week in the calendar view.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the selection delegate

- [delegate](uicalendarselectionweekofyear/delegate.md): A delegate object that a calendar view asks about selectable weeks and informs of changes to the week selection.
