> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselection](https://developer.apple.com/documentation/uikit/uicalendarselection)

# UICalendarSelection (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A base object that tracks one or more dates a user selects from a calendar view.

## Declaration

```swift
@MainActor class UICalendarSelection
```

<a id="overview"></a>

## Overview

Don’t use this object directly in your calendar view to track date selection. Use the subclass [UICalendarSelectionSingleDate](uicalendarselectionsingledate.md) to track a single date selection, or [UICalendarSelectionMultiDate](uicalendarselectionmultidate.md) to track multiple date selections.

## Topics

### Updating selectable dates

- [updateSelectableDates()](uicalendarselection/updateselectabledates%28%29.md): Informs the calendar view to update the view for selectable dates.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UICalendarSelectionMultiDate](uicalendarselectionmultidate.md)
- [UICalendarSelectionSingleDate](uicalendarselectionsingledate.md)
- [UICalendarSelectionWeekOfYear](uicalendarselectionweekofyear.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Handling date selections

- [selectionBehavior](uicalendarview/selectionbehavior.md): The current date selection method of the calendar view.
- [UICalendarSelectionSingleDate](uicalendarselectionsingledate.md): An object that tracks a date the user selects from a calendar view.
- [UICalendarSelectionMultiDate](uicalendarselectionmultidate.md): An object that tracks multiple dates the user selects from a calendar view.
- [UICalendarSelectionWeekOfYear](uicalendarselectionweekofyear.md): An object that tracks a specific week a person selects from a calendar view.

# UICalendarSelection (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A base object that tracks one or more dates a user selects from a calendar view.

## Declaration

```objectivec
@interface UICalendarSelection : NSObject
```

<a id="overview"></a>

## Overview

Don’t use this object directly in your calendar view to track date selection. Use the subclass [UICalendarSelectionSingleDate](uicalendarselectionsingledate.md) to track a single date selection, or [UICalendarSelectionMultiDate](uicalendarselectionmultidate.md) to track multiple date selections.

## Topics

### Updating selectable dates

- [updateSelectableDates](uicalendarselection/updateselectabledates%28%29.md): Informs the calendar view to update the view for selectable dates.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UICalendarSelectionMultiDate](uicalendarselectionmultidate.md)
- [UICalendarSelectionSingleDate](uicalendarselectionsingledate.md)
- [UICalendarSelectionWeekOfYear](uicalendarselectionweekofyear.md)

## See Also

### Handling date selections

- [selectionBehavior](uicalendarview/selectionbehavior.md): The current date selection method of the calendar view.
- [UICalendarSelectionSingleDate](uicalendarselectionsingledate.md): An object that tracks a date the user selects from a calendar view.
- [UICalendarSelectionMultiDate](uicalendarselectionmultidate.md): An object that tracks multiple dates the user selects from a calendar view.
- [UICalendarSelectionWeekOfYear](uicalendarselectionweekofyear.md): An object that tracks a specific week a person selects from a calendar view.
