> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/visibledatecomponents](https://developer.apple.com/documentation/uikit/uicalendarview/visibledatecomponents)

# visibleDateComponents (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The date components that represent the visible date in the calendar view.

## Declaration

```swift
var visibleDateComponents: DateComponents { get set }
```

<a id="Discussion"></a>

## Discussion

If `visibleDateComponents.calendar` is `nil` or isn’t equal to [calendar](calendar.md), the calendar view uses [calendar](calendar.md), which may result in an invalid date from the date components.

## See Also

### Setting the visible date and range

- [setVisibleDateComponents(\_:animated:)](setvisibledatecomponents%28__animated_%29.md): Sets the date components that represent the date for the calendar view to make visible, with an option to animate the date change.
- [availableDateRange](availabledaterange.md): The range of dates that the calendar view displays.

# visibleDateComponents (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The date components that represent the visible date in the calendar view.

## Declaration

```objectivec
@property (nonatomic, copy, nonnull) NSDateComponents * visibleDateComponents;
```

<a id="Discussion"></a>

## Discussion

If `visibleDateComponents.calendar` is `nil` or isn’t equal to [calendar](calendar.md), the calendar view uses [calendar](calendar.md), which may result in an invalid date from the date components.

## See Also

### Setting the visible date and range

- [setVisibleDateComponents:animated:](setvisibledatecomponents%28__animated_%29.md): Sets the date components that represent the date for the calendar view to make visible, with an option to animate the date change.
- [availableDateRange](availabledaterange.md): The range of dates that the calendar view displays.
