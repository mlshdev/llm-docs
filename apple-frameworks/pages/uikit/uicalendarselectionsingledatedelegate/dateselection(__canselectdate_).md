> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionsingledatedelegate/dateselection(_:canselectdate:)](https://developer.apple.com/documentation/uikit/uicalendarselectionsingledatedelegate/dateselection(_:canselectdate:))

# dateSelection(\_:canSelectDate:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns whether a user can select a date represented by date components in the calendar view.

## Declaration

```swift
optional func dateSelection(_ selection: UICalendarSelectionSingleDate, canSelectDate dateComponents: DateComponents?) -> Bool
```

## Parameters

- `selection`: An object that tracks a date that a user selects from a calendar view.
- `dateComponents`: Date components that represent a date to select.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the calendar view can select the date you provide.

<a id="Discussion"></a>

## Discussion

The calendar view displays nonselectable dates as disabled.

# dateSelection:canSelectDate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns whether a user can select a date represented by date components in the calendar view.

## Declaration

```objectivec
- (BOOL) dateSelection:(UICalendarSelectionSingleDate *) selection canSelectDate:(NSDateComponents *) dateComponents;
```

## Parameters

- `selection`: An object that tracks a date that a user selects from a calendar view.
- `dateComponents`: Date components that represent a date to select.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the calendar view can select the date you provide.

<a id="Discussion"></a>

## Discussion

The calendar view displays nonselectable dates as disabled.
