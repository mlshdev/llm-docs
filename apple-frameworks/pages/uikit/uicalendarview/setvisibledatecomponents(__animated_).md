> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/setvisibledatecomponents(_:animated:)](https://developer.apple.com/documentation/uikit/uicalendarview/setvisibledatecomponents(_:animated:))

# setVisibleDateComponents(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Sets the date components that represent the date for the calendar view to make visible, with an option to animate the date change.

## Declaration

```swift
func setVisibleDateComponents(_ dateComponents: DateComponents, animated: Bool)
```

## Parameters

- `dateComponents`: Date components that represent the date for the calendar view to display.
- `animated`: A Boolean value that indicates whether the calendar view animates the date change.

<a id="Discussion"></a>

## Discussion

The date that `dateComponents` represents must be within the dates that [availableDateRange](availabledaterange.md) represents.

If `dateComponents.calendar` is `nil` or isn’t equal to [calendar](calendar.md), the calendar view uses [calendar](calendar.md), which may result in an invalid date from the date components.

## See Also

### Setting the visible date and range

- [visibleDateComponents](visibledatecomponents.md): The date components that represent the visible date in the calendar view.
- [availableDateRange](availabledaterange.md): The range of dates that the calendar view displays.

# setVisibleDateComponents:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Sets the date components that represent the date for the calendar view to make visible, with an option to animate the date change.

## Declaration

```objectivec
- (void) setVisibleDateComponents:(NSDateComponents *) dateComponents animated:(BOOL) animated;
```

## Parameters

- `dateComponents`: Date components that represent the date for the calendar view to display.
- `animated`: A Boolean value that indicates whether the calendar view animates the date change.

<a id="Discussion"></a>

## Discussion

The date that `dateComponents` represents must be within the dates that [availableDateRange](availabledaterange.md) represents.

If `dateComponents.calendar` is `nil` or isn’t equal to [calendar](calendar.md), the calendar view uses [calendar](calendar.md), which may result in an invalid date from the date components.

## See Also

### Setting the visible date and range

- [visibleDateComponents](visibledatecomponents.md): The date components that represent the visible date in the calendar view.
- [availableDateRange](availabledaterange.md): The range of dates that the calendar view displays.
