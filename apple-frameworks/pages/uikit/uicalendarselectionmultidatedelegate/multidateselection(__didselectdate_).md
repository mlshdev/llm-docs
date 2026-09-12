> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionmultidatedelegate/multidateselection(_:didselectdate:)](https://developer.apple.com/documentation/uikit/uicalendarselectionmultidatedelegate/multidateselection(_:didselectdate:))

# multiDateSelection(\_:didSelectDate:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the delegate that a user selected a date represented by date components.

## Declaration

```swift
func multiDateSelection(_ selection: UICalendarSelectionMultiDate, didSelectDate dateComponents: DateComponents)
```

## Parameters

- `selection`: An object that tracks one or more dates that a user selects from a calendar view.
- `dateComponents`: Date components that represent a date the user selected.

## See Also

### Changing selected dates

- [multiDateSelection(\_:didDeselectDate:)](multidateselection%28__diddeselectdate_%29.md): Informs the delegate that a user deselected a date represented by date components.

# multiDateSelection:didSelectDate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the delegate that a user selected a date represented by date components.

## Declaration

```objectivec
- (void) multiDateSelection:(UICalendarSelectionMultiDate *) selection didSelectDate:(NSDateComponents *) dateComponents;
```

## Parameters

- `selection`: An object that tracks one or more dates that a user selects from a calendar view.
- `dateComponents`: Date components that represent a date the user selected.

## See Also

### Changing selected dates

- [multiDateSelection:didDeselectDate:](multidateselection%28__diddeselectdate_%29.md): Informs the delegate that a user deselected a date represented by date components.
