> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionmultidate](https://developer.apple.com/documentation/uikit/uicalendarselectionmultidate)

# UICalendarSelectionMultiDate (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that tracks multiple dates the user selects from a calendar view.

## Declaration

```swift
@MainActor class UICalendarSelectionMultiDate
```

## Topics

### Creating a multiple date selection

- [init(delegate:)](uicalendarselectionmultidate/init%28delegate_%29.md): Creates an object that tracks multiple dates a user selects from a calendar view, with an optional delegate to manage selectable dates and selection changes.

### Setting the selection delegate

- [delegate](uicalendarselectionmultidate/delegate.md): A delegate object that a calendar view asks for selectable dates and informs of changes to the selection of multiple dates.
- [UICalendarSelectionMultiDateDelegate](uicalendarselectionmultidatedelegate.md): A set of methods you implement to provide selectable dates and handle changes to the selection of multiple dates.

### Updating the selected dates

- [selectedDates](uicalendarselectionmultidate/selecteddates.md): An array of date component objects that represent selected dates in a calendar view.
- [setSelectedDates(\_:animated:)](uicalendarselectionmultidate/setselecteddates%28__animated_%29.md): Updates the array of date component objects that represent selected dates in a calendar view, with an option to animate the change.

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
- [UICalendarSelectionSingleDate](uicalendarselectionsingledate.md): An object that tracks a date the user selects from a calendar view.
- [UICalendarSelectionWeekOfYear](uicalendarselectionweekofyear.md): An object that tracks a specific week a person selects from a calendar view.
- [UICalendarSelection](uicalendarselection.md): A base object that tracks one or more dates a user selects from a calendar view.

# UICalendarSelectionMultiDate (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that tracks multiple dates the user selects from a calendar view.

## Declaration

```objectivec
@interface UICalendarSelectionMultiDate : UICalendarSelection
```

## Topics

### Creating a multiple date selection

- [initWithDelegate:](uicalendarselectionmultidate/init%28delegate_%29.md): Creates an object that tracks multiple dates a user selects from a calendar view, with an optional delegate to manage selectable dates and selection changes.

### Setting the selection delegate

- [delegate](uicalendarselectionmultidate/delegate.md): A delegate object that a calendar view asks for selectable dates and informs of changes to the selection of multiple dates.
- [UICalendarSelectionMultiDateDelegate](uicalendarselectionmultidatedelegate.md): A set of methods you implement to provide selectable dates and handle changes to the selection of multiple dates.

### Updating the selected dates

- [selectedDates](uicalendarselectionmultidate/selecteddates.md): An array of date component objects that represent selected dates in a calendar view.
- [setSelectedDates:animated:](uicalendarselectionmultidate/setselecteddates%28__animated_%29.md): Updates the array of date component objects that represent selected dates in a calendar view, with an option to animate the change.

## Relationships

### Inherits From

- [UICalendarSelection](uicalendarselection.md)

## See Also

### Handling date selections

- [selectionBehavior](uicalendarview/selectionbehavior.md): The current date selection method of the calendar view.
- [UICalendarSelectionSingleDate](uicalendarselectionsingledate.md): An object that tracks a date the user selects from a calendar view.
- [UICalendarSelectionWeekOfYear](uicalendarselectionweekofyear.md): An object that tracks a specific week a person selects from a calendar view.
- [UICalendarSelection](uicalendarselection.md): A base object that tracks one or more dates a user selects from a calendar view.
