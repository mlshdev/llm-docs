> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/timezone](https://developer.apple.com/documentation/uikit/uidatepicker/timezone)

# timeZone (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The time zone reflected in the date displayed by the date picker.

## Declaration

```swift
var timeZone: TimeZone? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which tells the date picker to use the current time zone as returned by [local](../../foundation/nstimezone/local.md) ([NSTimeZone](../../foundation/nstimezone.md)) or the time zone used by the date picker’s calendar.

## See Also

### Managing the date and calendar

- [calendar](calendar.md): The calendar to use for the date picker.
- [date](date.md): The date displayed by the date picker.
- [locale](locale.md): The locale used by the date picker.
- [setDate(\_:animated:)](setdate%28__animated_%29.md): Sets the date to display in the date picker, with an option to animate the setting.

# timeZone (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The time zone reflected in the date displayed by the date picker.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSTimeZone * timeZone;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which tells the date picker to use the current time zone as returned by [localTimeZone](../../foundation/nstimezone/local.md) ([NSTimeZone](../../foundation/nstimezone.md)) or the time zone used by the date picker’s calendar.

## See Also

### Managing the date and calendar

- [calendar](calendar.md): The calendar to use for the date picker.
- [date](date.md): The date displayed by the date picker.
- [locale](locale.md): The locale used by the date picker.
- [setDate:animated:](setdate%28__animated_%29.md): Sets the date to display in the date picker, with an option to animate the setting.
