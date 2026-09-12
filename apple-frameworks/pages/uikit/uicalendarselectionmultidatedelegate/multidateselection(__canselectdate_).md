> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionmultidatedelegate/multidateselection(_:canselectdate:)](https://developer.apple.com/documentation/uikit/uicalendarselectionmultidatedelegate/multidateselection(_:canselectdate:))

# multiDateSelection(\_:canSelectDate:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns whether a user can select a date represented by date components in the calendar view.

## Declaration

```swift
optional func multiDateSelection(_ selection: UICalendarSelectionMultiDate, canSelectDate dateComponents: DateComponents) -> Bool
```

## Parameters

- `selection`: An object that tracks multiple dates that a user selects from a calendar view.
- `dateComponents`: Date components that represent a date to select.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the calendar view can select the date you provide.

<a id="Discussion"></a>

## Discussion

The calendar view displays non-selectable dates as disabled.

## See Also

### Getting selectable dates

- [multiDateSelection(\_:canDeselectDate:)](multidateselection%28__candeselectdate_%29.md): Returns whether a user can deselect a date represented by date components in the calendar view.

# multiDateSelection:canSelectDate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns whether a user can select a date represented by date components in the calendar view.

## Declaration

```objectivec
- (BOOL) multiDateSelection:(UICalendarSelectionMultiDate *) selection canSelectDate:(NSDateComponents *) dateComponents;
```

## Parameters

- `selection`: An object that tracks multiple dates that a user selects from a calendar view.
- `dateComponents`: Date components that represent a date to select.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the calendar view can select the date you provide.

<a id="Discussion"></a>

## Discussion

The calendar view displays non-selectable dates as disabled.

## See Also

### Getting selectable dates

- [multiDateSelection:canDeselectDate:](multidateselection%28__candeselectdate_%29.md): Returns whether a user can deselect a date represented by date components in the calendar view.
