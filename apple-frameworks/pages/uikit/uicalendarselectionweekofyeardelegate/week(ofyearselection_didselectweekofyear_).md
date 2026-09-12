> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionweekofyeardelegate/week(ofyearselection:didselectweekofyear:)](https://developer.apple.com/documentation/uikit/uicalendarselectionweekofyeardelegate/week(ofyearselection:didselectweekofyear:))

# week(ofYearSelection:didSelectWeekOfYear:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Notifies the delegate after a person selects a week in the calendar view.

## Declaration

```swift
func week(ofYearSelection selection: UICalendarSelectionWeekOfYear, didSelectWeekOfYear weekOfYearComponents: DateComponents?)
```

## See Also

### Handling week-of-year selections

- [week(ofYearSelection:canSelectWeekOfYear:)](week%28ofyearselection_canselectweekofyear_%29.md): Determines if a week is available for selection.

# weekOfYearSelection:didSelectWeekOfYear: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Notifies the delegate after a person selects a week in the calendar view.

## Declaration

```objectivec
- (void) weekOfYearSelection:(UICalendarSelectionWeekOfYear *) selection didSelectWeekOfYear:(NSDateComponents *) weekOfYearComponents;
```

## See Also

### Handling week-of-year selections

- [weekOfYearSelection:canSelectWeekOfYear:](week%28ofyearselection_canselectweekofyear_%29.md): Determines if a week is available for selection.
