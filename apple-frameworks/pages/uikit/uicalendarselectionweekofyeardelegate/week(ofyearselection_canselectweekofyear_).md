> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionweekofyeardelegate/week(ofyearselection:canselectweekofyear:)](https://developer.apple.com/documentation/uikit/uicalendarselectionweekofyeardelegate/week(ofyearselection:canselectweekofyear:))

# week(ofYearSelection:canSelectWeekOfYear:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Determines if a week is available for selection.

## Declaration

```swift
optional func week(ofYearSelection selection: UICalendarSelectionWeekOfYear, canSelectWeekOfYear weekOfYearComponents: DateComponents?) -> Bool
```

## See Also

### Handling week-of-year selections

- [week(ofYearSelection:didSelectWeekOfYear:)](week%28ofyearselection_didselectweekofyear_%29.md): Notifies the delegate after a person selects a week in the calendar view.

# weekOfYearSelection:canSelectWeekOfYear: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Determines if a week is available for selection.

## Declaration

```objectivec
- (BOOL) weekOfYearSelection:(UICalendarSelectionWeekOfYear *) selection canSelectWeekOfYear:(NSDateComponents *) weekOfYearComponents;
```

## See Also

### Handling week-of-year selections

- [weekOfYearSelection:didSelectWeekOfYear:](week%28ofyearselection_didselectweekofyear_%29.md): Notifies the delegate after a person selects a week in the calendar view.
