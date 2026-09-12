> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/calendar](https://developer.apple.com/documentation/uikit/uicalendarview/calendar)

# calendar (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The calendar that the calendar view illustrates.

## Declaration

```swift
var calendar: Calendar { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to [current](../../foundation/nscalendar/current.md), which is the user’s current calendar set in Settings.

## See Also

### Setting calendar details

- [locale](locale.md): The locale the calendar view uses for calendar conventions.
- [timeZone](timezone.md): The time zone from the date the calendar view displays.

# calendar (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The calendar that the calendar view illustrates.

## Declaration

```objectivec
@property (nonatomic, copy, nonnull) NSCalendar * calendar;
```

<a id="Discussion"></a>

## Discussion

Defaults to [currentCalendar](../../foundation/nscalendar/current.md), which is the user’s current calendar set in Settings.

## See Also

### Setting calendar details

- [locale](locale.md): The locale the calendar view uses for calendar conventions.
- [timeZone](timezone.md): The time zone from the date the calendar view displays.
