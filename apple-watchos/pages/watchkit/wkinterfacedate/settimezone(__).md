> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedate/settimezone(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacedate/settimezone(_:))

# setTimeZone(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the time zone to use when displaying time information.

## Declaration

```swift
func setTimeZone(_ timeZone: TimeZone?)
```

## Parameters

- `timeZone`: The time zone to be used. Specifying `nil` removes the time zone information and causes Apple Watch to use the current time zone based on the user’s settings.

<a id="Discussion"></a>

## Discussion

Use this method to configure the time zone to one that is different from the user’s current time zone. For example, a world clock app might use this method to configure the time display information.

## See Also

### Configuring the Date and Time Display

- [setTextColor(\_:)](settextcolor%28__%29.md): Sets the color of the date and time text.
- [setCalendar(\_:)](setcalendar%28__%29.md): Sets the calendar to use when formatting date information.

# setTimeZone: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the time zone to use when displaying time information.

## Declaration

```objectivec
- (void) setTimeZone:(NSTimeZone *) timeZone;
```

## Parameters

- `timeZone`: The time zone to be used. Specifying `nil` removes the time zone information and causes Apple Watch to use the current time zone based on the user’s settings.

<a id="Discussion"></a>

## Discussion

Use this method to configure the time zone to one that is different from the user’s current time zone. For example, a world clock app might use this method to configure the time display information.

## See Also

### Configuring the Date and Time Display

- [setTextColor:](settextcolor%28__%29.md): Sets the color of the date and time text.
- [setCalendar:](setcalendar%28__%29.md): Sets the calendar to use when formatting date information.
