> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepickercell/datevalue](https://developer.apple.com/documentation/appkit/nsdatepickercell/datevalue)

# dateValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The date currently specified in the picker.

## Declaration

```swift
var dateValue: Date { get set }
```

<a id="Discussion"></a>

## Discussion

Assign a date to this property to set the starting value for the picker. For range-based dates, use the [timeInterval](timeinterval.md) property to set the extent of the time range.

## See Also

### Object Values

- [timeInterval](timeinterval.md): The time interval that represents the date range.
- [calendar](calendar.md): The calendar used by the date picker.
- [locale](locale.md): The locale used to display dates.
- [timeZone](timezone.md): The time zone used to display time-related values.

# dateValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The date currently specified in the picker.

## Declaration

```objectivec
@property (copy) NSDate * dateValue;
```

<a id="Discussion"></a>

## Discussion

Assign a date to this property to set the starting value for the picker. For range-based dates, use the [timeInterval](timeinterval.md) property to set the extent of the time range.

## See Also

### Object Values

- [timeInterval](timeinterval.md): The time interval that represents the date range.
- [calendar](calendar.md): The calendar used by the date picker.
- [locale](locale.md): The locale used to display dates.
- [timeZone](timezone.md): The time zone used to display time-related values.
