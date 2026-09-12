> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/locale](https://developer.apple.com/documentation/uikit/uicalendarview/locale)

# locale (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The locale the calendar view uses for calendar conventions.

## Declaration

```swift
var locale: Locale { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to [current](../../foundation/nslocale/current.md).

## See Also

### Setting calendar details

- [calendar](calendar.md): The calendar that the calendar view illustrates.
- [timeZone](timezone.md): The time zone from the date the calendar view displays.

# locale (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The locale the calendar view uses for calendar conventions.

## Declaration

```objectivec
@property (nonatomic, strong, nonnull) NSLocale * locale;
```

<a id="Discussion"></a>

## Discussion

Defaults to [currentLocale](../../foundation/nslocale/current.md).

## See Also

### Setting calendar details

- [calendar](calendar.md): The calendar that the calendar view illustrates.
- [timeZone](timezone.md): The time zone from the date the calendar view displays.
