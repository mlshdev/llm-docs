> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/availabledaterange](https://developer.apple.com/documentation/uikit/uicalendarview/availabledaterange)

# availableDateRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The range of dates that the calendar view displays.

## Declaration

```swift
var availableDateRange: DateInterval { get set }
```

<a id="Discussion"></a>

## Discussion

Set `availableDateRange` to restrict the earliest or latest dates that the calendar view displays. The default date range starts with [distantPast](../../foundation/date/distantpast.md) (Swift) or [distantPast](../../foundation/nsdate/distantpast.md) (Objective-C), and ends with [distantFuture](../../foundation/date/distantfuture.md) (Swift) or [distantFuture](../../foundation/nsdate/distantfuture.md) (Objective-C).

## See Also

### Setting the visible date and range

- [visibleDateComponents](visibledatecomponents.md): The date components that represent the visible date in the calendar view.
- [setVisibleDateComponents(\_:animated:)](setvisibledatecomponents%28__animated_%29.md): Sets the date components that represent the date for the calendar view to make visible, with an option to animate the date change.

# availableDateRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The range of dates that the calendar view displays.

## Declaration

```objectivec
@property (nonatomic, copy, nonnull) NSDateInterval * availableDateRange;
```

<a id="Discussion"></a>

## Discussion

Set `availableDateRange` to restrict the earliest or latest dates that the calendar view displays. The default date range starts with [distantPast](../../foundation/date/distantpast.md) (Swift) or [distantPast](../../foundation/nsdate/distantpast.md) (Objective-C), and ends with [distantFuture](../../foundation/date/distantfuture.md) (Swift) or [distantFuture](../../foundation/nsdate/distantfuture.md) (Objective-C).

## See Also

### Setting the visible date and range

- [visibleDateComponents](visibledatecomponents.md): The date components that represent the visible date in the calendar view.
- [setVisibleDateComponents:animated:](setvisibledatecomponents%28__animated_%29.md): Sets the date components that represent the date for the calendar view to make visible, with an option to animate the date change.
