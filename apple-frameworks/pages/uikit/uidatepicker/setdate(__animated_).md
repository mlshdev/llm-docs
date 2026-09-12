> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/setdate(_:animated:)](https://developer.apple.com/documentation/uikit/uidatepicker/setdate(_:animated:))

# setDate(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the date to display in the date picker, with an option to animate the setting.

## Declaration

```swift
func setDate(_ date: Date, animated: Bool)
```

## Parameters

- `date`: An `NSDate` object representing the new date to display in the date picker.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the setting of the new date, otherwise [false](https://developer.apple.com/documentation/swift/false). The animation rotates the wheels until the new date and time is shown under the highlight rectangle.

## See Also

### Managing the date and calendar

- [calendar](calendar.md): The calendar to use for the date picker.
- [date](date.md): The date displayed by the date picker.
- [locale](locale.md): The locale used by the date picker.
- [timeZone](timezone.md): The time zone reflected in the date displayed by the date picker.

# setDate:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the date to display in the date picker, with an option to animate the setting.

## Declaration

```objectivec
- (void) setDate:(NSDate *) date animated:(BOOL) animated;
```

## Parameters

- `date`: An `NSDate` object representing the new date to display in the date picker.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the setting of the new date, otherwise [false](https://developer.apple.com/documentation/swift/false). The animation rotates the wheels until the new date and time is shown under the highlight rectangle.

## See Also

### Managing the date and calendar

- [calendar](calendar.md): The calendar to use for the date picker.
- [date](date.md): The date displayed by the date picker.
- [locale](locale.md): The locale used by the date picker.
- [timeZone](timezone.md): The time zone reflected in the date displayed by the date picker.
