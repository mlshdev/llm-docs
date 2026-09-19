> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicalendarselectionmultidatedelegate/multidateselection(_:candeselectdate:)

# multiDateSelection(\_:canDeselectDate:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns whether a user can deselect a date represented by date components in the calendar view.

## Declaration

```swift
optional func multiDateSelection(_ selection: UICalendarSelectionMultiDate, canDeselectDate dateComponents: DateComponents) -> Bool
```

## Parameters

- `selection`: An object that tracks one or more dates that a user selects from a calendar view.
- `dateComponents`: Date components that represent a date to deselect.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the calendar view can deselect the date you provide.

## See Also

### Getting selectable dates

- [multiDateSelection(\_:canSelectDate:)](multidateselection%28__canselectdate_%29.md): Returns whether a user can select a date represented by date components in the calendar view.

# multiDateSelection:canDeselectDate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns whether a user can deselect a date represented by date components in the calendar view.

## Declaration

```objectivec
- (BOOL) multiDateSelection:(UICalendarSelectionMultiDate *) selection canDeselectDate:(NSDateComponents *) dateComponents;
```

## Parameters

- `selection`: An object that tracks one or more dates that a user selects from a calendar view.
- `dateComponents`: Date components that represent a date to deselect.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the calendar view can deselect the date you provide.

## See Also

### Getting selectable dates

- [multiDateSelection:canSelectDate:](multidateselection%28__canselectdate_%29.md): Returns whether a user can select a date represented by date components in the calendar view.
