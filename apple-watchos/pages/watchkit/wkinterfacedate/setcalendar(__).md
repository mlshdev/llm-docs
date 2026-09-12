> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedate/setcalendar(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacedate/setcalendar(_:))

# setCalendar(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the calendar to use when formatting date information.

## Declaration

```swift
func setCalendar(_ calendar: Calendar?)
```

## Parameters

- `calendar`: The calendar to be used. Specifying nil removes the calendar information and causes Apple Watch to use the default calendar based on the user’s settings.

<a id="Discussion"></a>

## Discussion

Use this method to configure the calendar to one that is different from the user’s current calendar. You might change the calendar to format dates differently based on your app’s needs. For example, a financial reporting app might use a calendar that breaks the year into fiscal quarters rather than months.

## See Also

### Configuring the Date and Time Display

- [setTextColor(\_:)](settextcolor%28__%29.md): Sets the color of the date and time text.
- [setTimeZone(\_:)](settimezone%28__%29.md): Sets the time zone to use when displaying time information.

# setCalendar: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the calendar to use when formatting date information.

## Declaration

```objectivec
- (void) setCalendar:(NSCalendar *) calendar;
```

## Parameters

- `calendar`: The calendar to be used. Specifying nil removes the calendar information and causes Apple Watch to use the default calendar based on the user’s settings.

<a id="Discussion"></a>

## Discussion

Use this method to configure the calendar to one that is different from the user’s current calendar. You might change the calendar to format dates differently based on your app’s needs. For example, a financial reporting app might use a calendar that breaks the year into fiscal quarters rather than months.

## See Also

### Configuring the Date and Time Display

- [setTextColor:](settextcolor%28__%29.md): Sets the color of the date and time text.
- [setTimeZone:](settimezone%28__%29.md): Sets the time zone to use when displaying time information.
