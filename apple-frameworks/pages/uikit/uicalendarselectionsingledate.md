> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionsingledate](https://developer.apple.com/documentation/uikit/uicalendarselectionsingledate)

# UICalendarSelectionSingleDate (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that tracks a date the user selects from a calendar view.

## Declaration

```swift
@MainActor class UICalendarSelectionSingleDate
```

## Topics

### Creating a single date selection

- [init(delegate:)](uicalendarselectionsingledate/init%28delegate_%29.md): Creates an object that tracks a date a user selects from a calendar view, with an optional delegate to manage selectable dates and selection changes.

### Setting the selection delegate

- [delegate](uicalendarselectionsingledate/delegate.md): A delegate object that a calendar view asks about selectable dates and informs of changes to the selection of a single date.
- [UICalendarSelectionSingleDateDelegate](uicalendarselectionsingledatedelegate.md): A set of methods you implement to provide selectable dates and handle changes to the selection of a single date.

### Updating the selected date

- [selectedDate](uicalendarselectionsingledate/selecteddate.md): A date component object that represents a selected date in a calendar view.
- [setSelected(\_:animated:)](uicalendarselectionsingledate/setselected%28__animated_%29.md): Updates the date component object that represents a selected date in a calendar view, with an option to animate the change.

## Relationships

### Inherits From

- [UICalendarSelection](uicalendarselection.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling date selections

- [selectionBehavior](uicalendarview/selectionbehavior.md): The current date selection method of the calendar view.
- [UICalendarSelectionMultiDate](uicalendarselectionmultidate.md): An object that tracks multiple dates the user selects from a calendar view.
- [UICalendarSelectionWeekOfYear](uicalendarselectionweekofyear.md): An object that tracks a specific week a person selects from a calendar view.
- [UICalendarSelection](uicalendarselection.md): A base object that tracks one or more dates a user selects from a calendar view.

# UICalendarSelectionSingleDate (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that tracks a date the user selects from a calendar view.

## Declaration

```objectivec
@interface UICalendarSelectionSingleDate : UICalendarSelection
```

## Topics

### Creating a single date selection

- [initWithDelegate:](uicalendarselectionsingledate/init%28delegate_%29.md): Creates an object that tracks a date a user selects from a calendar view, with an optional delegate to manage selectable dates and selection changes.

### Setting the selection delegate

- [delegate](uicalendarselectionsingledate/delegate.md): A delegate object that a calendar view asks about selectable dates and informs of changes to the selection of a single date.
- [UICalendarSelectionSingleDateDelegate](uicalendarselectionsingledatedelegate.md): A set of methods you implement to provide selectable dates and handle changes to the selection of a single date.

### Updating the selected date

- [selectedDate](uicalendarselectionsingledate/selecteddate.md): A date component object that represents a selected date in a calendar view.
- [setSelectedDate:animated:](uicalendarselectionsingledate/setselected%28__animated_%29.md): Updates the date component object that represents a selected date in a calendar view, with an option to animate the change.

## Relationships

### Inherits From

- [UICalendarSelection](uicalendarselection.md)

## See Also

### Handling date selections

- [selectionBehavior](uicalendarview/selectionbehavior.md): The current date selection method of the calendar view.
- [UICalendarSelectionMultiDate](uicalendarselectionmultidate.md): An object that tracks multiple dates the user selects from a calendar view.
- [UICalendarSelectionWeekOfYear](uicalendarselectionweekofyear.md): An object that tracks a specific week a person selects from a calendar view.
- [UICalendarSelection](uicalendarselection.md): A base object that tracks one or more dates a user selects from a calendar view.
