> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionweekofyear](https://developer.apple.com/documentation/uikit/uicalendarselectionweekofyear)

# UICalendarSelectionWeekOfYear (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An object that tracks a specific week a person selects from a calendar view.

## Declaration

```swift
@MainActor class UICalendarSelectionWeekOfYear
```

<a id="overview"></a>

## Overview

Use the [UICalendarSelectionWeekOfYear](uicalendarselectionweekofyear.md) selection behavior to allow selecting dates in a calendar view by week. The following code example shows how to configure a calendar view’s selection behavior to use week-of-year selection:

```swift
// Create a calendar view.
let calendarView = UICalendarView()
calendarView.calendar = Calendar(identifier: .gregorian)

// Set the selection behavior.
let selection = UICalendarSelectionWeekOfYear(delegate: self)
calendarView.selectionBehavior = selection

// Set the 11th week in the year 2024.
selection.selectedWeekOfYear = DateComponents(
    calendar: Calendar(identifier: .gregorian),
    weekOfYear: 11,
    yearForWeekOfYear: 2024)
```

## Topics

### Creating a week-of-year selection

- [init(delegate:)](uicalendarselectionweekofyear/init%28delegate_%29.md): Creates an object that tracks a week a person selects from a calendar view, with an optional delegate to manage selectable weeks and selection changes.

### Setting the selection delegate

- [delegate](uicalendarselectionweekofyear/delegate.md): A delegate object that a calendar view asks about selectable weeks and informs of changes to the week selection.
- [UICalendarSelectionWeekOfYearDelegate](uicalendarselectionweekofyeardelegate.md): A set of methods you implement to provide selectable weeks and handle changes to the week selection in a calendar view.

### Updating the selected week

- [selectedWeekOfYear](uicalendarselectionweekofyear/selectedweekofyear.md): The current week-of-year selection in the calendar view.
- [setSelected(\_:animated:)](uicalendarselectionweekofyear/setselected%28__animated_%29.md): Updates the date component object that represents a selected week in a calendar view, with an option to animate the change.

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
- [UICalendarSelectionMultiDate](uicalendarselectionmultidate.md): An object that tracks multiple dates the user selects from a calendar view.
- [UICalendarSelection](uicalendarselection.md): A base object that tracks one or more dates a user selects from a calendar view.

# UICalendarSelectionWeekOfYear (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An object that tracks a specific week a person selects from a calendar view.

## Declaration

```objectivec
@interface UICalendarSelectionWeekOfYear : UICalendarSelection
```

<a id="overview"></a>

## Overview

Use the [UICalendarSelectionWeekOfYear](uicalendarselectionweekofyear.md) selection behavior to allow selecting dates in a calendar view by week. The following code example shows how to configure a calendar view’s selection behavior to use week-of-year selection:

```swift
// Create a calendar view.
let calendarView = UICalendarView()
calendarView.calendar = Calendar(identifier: .gregorian)

// Set the selection behavior.
let selection = UICalendarSelectionWeekOfYear(delegate: self)
calendarView.selectionBehavior = selection

// Set the 11th week in the year 2024.
selection.selectedWeekOfYear = DateComponents(
    calendar: Calendar(identifier: .gregorian),
    weekOfYear: 11,
    yearForWeekOfYear: 2024)
```

## Topics

### Creating a week-of-year selection

- [initWithDelegate:](uicalendarselectionweekofyear/init%28delegate_%29.md): Creates an object that tracks a week a person selects from a calendar view, with an optional delegate to manage selectable weeks and selection changes.

### Setting the selection delegate

- [delegate](uicalendarselectionweekofyear/delegate.md): A delegate object that a calendar view asks about selectable weeks and informs of changes to the week selection.
- [UICalendarSelectionWeekOfYearDelegate](uicalendarselectionweekofyeardelegate.md): A set of methods you implement to provide selectable weeks and handle changes to the week selection in a calendar view.

### Updating the selected week

- [selectedWeekOfYear](uicalendarselectionweekofyear/selectedweekofyear.md): The current week-of-year selection in the calendar view.
- [setSelectedWeekOfYear:animated:](uicalendarselectionweekofyear/setselected%28__animated_%29.md): Updates the date component object that represents a selected week in a calendar view, with an option to animate the change.

## Relationships

### Inherits From

- [UICalendarSelection](uicalendarselection.md)

## See Also

### Handling date selections

- [selectionBehavior](uicalendarview/selectionbehavior.md): The current date selection method of the calendar view.
- [UICalendarSelectionSingleDate](uicalendarselectionsingledate.md): An object that tracks a date the user selects from a calendar view.
- [UICalendarSelectionMultiDate](uicalendarselectionmultidate.md): An object that tracks multiple dates the user selects from a calendar view.
- [UICalendarSelection](uicalendarselection.md): A base object that tracks one or more dates a user selects from a calendar view.
