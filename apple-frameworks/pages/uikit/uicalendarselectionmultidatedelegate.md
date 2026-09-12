> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionmultidatedelegate](https://developer.apple.com/documentation/uikit/uicalendarselectionmultidatedelegate)

# UICalendarSelectionMultiDateDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A set of methods you implement to provide selectable dates and handle changes to the selection of multiple dates.

## Declaration

```swift
@MainActor protocol UICalendarSelectionMultiDateDelegate : NSObjectProtocol
```

## Topics

### Getting selectable dates

- [multiDateSelection(\_:canSelectDate:)](uicalendarselectionmultidatedelegate/multidateselection%28__canselectdate_%29.md): Returns whether a user can select a date represented by date components in the calendar view.
- [multiDateSelection(\_:canDeselectDate:)](uicalendarselectionmultidatedelegate/multidateselection%28__candeselectdate_%29.md): Returns whether a user can deselect a date represented by date components in the calendar view.

### Changing selected dates

- [multiDateSelection(\_:didSelectDate:)](uicalendarselectionmultidatedelegate/multidateselection%28__didselectdate_%29.md): Informs the delegate that a user selected a date represented by date components.
- [multiDateSelection(\_:didDeselectDate:)](uicalendarselectionmultidatedelegate/multidateselection%28__diddeselectdate_%29.md): Informs the delegate that a user deselected a date represented by date components.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the selection delegate

- [delegate](uicalendarselectionmultidate/delegate.md): A delegate object that a calendar view asks for selectable dates and informs of changes to the selection of multiple dates.

# UICalendarSelectionMultiDateDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A set of methods you implement to provide selectable dates and handle changes to the selection of multiple dates.

## Declaration

```objectivec
@protocol UICalendarSelectionMultiDateDelegate <NSObject>
```

## Topics

### Getting selectable dates

- [multiDateSelection:canSelectDate:](uicalendarselectionmultidatedelegate/multidateselection%28__canselectdate_%29.md): Returns whether a user can select a date represented by date components in the calendar view.
- [multiDateSelection:canDeselectDate:](uicalendarselectionmultidatedelegate/multidateselection%28__candeselectdate_%29.md): Returns whether a user can deselect a date represented by date components in the calendar view.

### Changing selected dates

- [multiDateSelection:didSelectDate:](uicalendarselectionmultidatedelegate/multidateselection%28__didselectdate_%29.md): Informs the delegate that a user selected a date represented by date components.
- [multiDateSelection:didDeselectDate:](uicalendarselectionmultidatedelegate/multidateselection%28__diddeselectdate_%29.md): Informs the delegate that a user deselected a date represented by date components.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the selection delegate

- [delegate](uicalendarselectionmultidate/delegate.md): A delegate object that a calendar view asks for selectable dates and informs of changes to the selection of multiple dates.
