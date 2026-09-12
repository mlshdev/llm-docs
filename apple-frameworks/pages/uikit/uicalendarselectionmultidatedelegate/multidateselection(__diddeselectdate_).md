> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionmultidatedelegate/multidateselection(_:diddeselectdate:)](https://developer.apple.com/documentation/uikit/uicalendarselectionmultidatedelegate/multidateselection(_:diddeselectdate:))

# multiDateSelection(\_:didDeselectDate:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the delegate that a user deselected a date represented by date components.

## Declaration

```swift
func multiDateSelection(_ selection: UICalendarSelectionMultiDate, didDeselectDate dateComponents: DateComponents)
```

## Parameters

- `selection`: An object that tracks multiple dates that a user selects from a calendar view.
- `dateComponents`: Date components that represent a date the user deselected.

## See Also

### Changing selected dates

- [multiDateSelection(\_:didSelectDate:)](multidateselection%28__didselectdate_%29.md): Informs the delegate that a user selected a date represented by date components.

# multiDateSelection:didDeselectDate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the delegate that a user deselected a date represented by date components.

## Declaration

```objectivec
- (void) multiDateSelection:(UICalendarSelectionMultiDate *) selection didDeselectDate:(NSDateComponents *) dateComponents;
```

## Parameters

- `selection`: An object that tracks multiple dates that a user selects from a calendar view.
- `dateComponents`: Date components that represent a date the user deselected.

## See Also

### Changing selected dates

- [multiDateSelection:didSelectDate:](multidateselection%28__didselectdate_%29.md): Informs the delegate that a user selected a date represented by date components.
