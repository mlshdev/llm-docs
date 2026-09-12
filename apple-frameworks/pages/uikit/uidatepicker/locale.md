> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/locale](https://developer.apple.com/documentation/uikit/uidatepicker/locale)

# locale (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The locale used by the date picker.

## Declaration

```swift
var locale: Locale? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is the current locale as returned by the [current](../../foundation/nslocale/current.md) property of [NSLocale](../../foundation/nslocale.md), or the locale used by the date picker’s calendar. Locales encapsulate information about facets of a language or culture, such as the way dates are formatted.

## See Also

### Managing the date and calendar

- [calendar](calendar.md): The calendar to use for the date picker.
- [date](date.md): The date displayed by the date picker.
- [setDate(\_:animated:)](setdate%28__animated_%29.md): Sets the date to display in the date picker, with an option to animate the setting.
- [timeZone](timezone.md): The time zone reflected in the date displayed by the date picker.

# locale (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The locale used by the date picker.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSLocale * locale;
```

<a id="Discussion"></a>

## Discussion

The default value is the current locale as returned by the [currentLocale](../../foundation/nslocale/current.md) property of [NSLocale](../../foundation/nslocale.md), or the locale used by the date picker’s calendar. Locales encapsulate information about facets of a language or culture, such as the way dates are formatted.

## See Also

### Managing the date and calendar

- [calendar](calendar.md): The calendar to use for the date picker.
- [date](date.md): The date displayed by the date picker.
- [setDate:animated:](setdate%28__animated_%29.md): Sets the date to display in the date picker, with an option to animate the setting.
- [timeZone](timezone.md): The time zone reflected in the date displayed by the date picker.
