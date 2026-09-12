> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedate/settextcolor(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacedate/settextcolor(_:))

# setTextColor(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the color of the date and time text.

## Declaration

```swift
func setTextColor(_ color: UIColor?)
```

## Parameters

- `color`: The custom color to be applied to the time string. Specifying `nil` removes the custom color and returns the text to the color specified in the storyboard file. The default text color is white.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Configuring the Date and Time Display

- [setTimeZone(\_:)](settimezone%28__%29.md): Sets the time zone to use when displaying time information.
- [setCalendar(\_:)](setcalendar%28__%29.md): Sets the calendar to use when formatting date information.

# setTextColor: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the color of the date and time text.

## Declaration

```objectivec
- (void) setTextColor:(UIColor *) color;
```

## Parameters

- `color`: The custom color to be applied to the time string. Specifying `nil` removes the custom color and returns the text to the color specified in the storyboard file. The default text color is white.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Configuring the Date and Time Display

- [setTimeZone:](settimezone%28__%29.md): Sets the time zone to use when displaying time information.
- [setCalendar:](setcalendar%28__%29.md): Sets the calendar to use when formatting date information.
