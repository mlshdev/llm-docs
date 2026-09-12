> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionsingledatedelegate](https://developer.apple.com/documentation/uikit/uicalendarselectionsingledatedelegate)

# UICalendarSelectionSingleDateDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A set of methods you implement to provide selectable dates and handle changes to the selection of a single date.

## Declaration

```swift
@MainActor protocol UICalendarSelectionSingleDateDelegate : NSObjectProtocol
```

## Topics

### Getting selectable dates

- [dateSelection(\_:canSelectDate:)](uicalendarselectionsingledatedelegate/dateselection%28__canselectdate_%29.md): Returns whether a user can select a date represented by date components in the calendar view.

### Changing the selected date

- [dateSelection(\_:didSelectDate:)](uicalendarselectionsingledatedelegate/dateselection%28__didselectdate_%29.md): Informs the delegate that a user selected a date represented by date components.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the selection delegate

- [delegate](uicalendarselectionsingledate/delegate.md): A delegate object that a calendar view asks about selectable dates and informs of changes to the selection of a single date.

# UICalendarSelectionSingleDateDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A set of methods you implement to provide selectable dates and handle changes to the selection of a single date.

## Declaration

```objectivec
@protocol UICalendarSelectionSingleDateDelegate <NSObject>
```

## Topics

### Getting selectable dates

- [dateSelection:canSelectDate:](uicalendarselectionsingledatedelegate/dateselection%28__canselectdate_%29.md): Returns whether a user can select a date represented by date components in the calendar view.

### Changing the selected date

- [dateSelection:didSelectDate:](uicalendarselectionsingledatedelegate/dateselection%28__didselectdate_%29.md): Informs the delegate that a user selected a date represented by date components.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the selection delegate

- [delegate](uicalendarselectionsingledate/delegate.md): A delegate object that a calendar view asks about selectable dates and informs of changes to the selection of a single date.
