> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepickercell/timeinterval](https://developer.apple.com/documentation/appkit/nsdatepickercell/timeinterval)

# timeInterval (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The time interval that represents the date range.

## Declaration

```swift
var timeInterval: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The date range begins at the date in the [dateValue](datevalue.md) property. The value in this property applies only when the date picker is in the [NSRangeDateMode](../nsrangedatemode.md) mode.

## See Also

### Object Values

- [dateValue](datevalue.md): The date currently specified in the picker.
- [calendar](calendar.md): The calendar used by the date picker.
- [locale](locale.md): The locale used to display dates.
- [timeZone](timezone.md): The time zone used to display time-related values.

# timeInterval (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The time interval that represents the date range.

## Declaration

```objectivec
@property NSTimeInterval timeInterval;
```

<a id="Discussion"></a>

## Discussion

The date range begins at the date in the [dateValue](datevalue.md) property. The value in this property applies only when the date picker is in the [NSRangeDateMode](../nsrangedatemode.md) mode.

## See Also

### Object Values

- [dateValue](datevalue.md): The date currently specified in the picker.
- [calendar](calendar.md): The calendar used by the date picker.
- [locale](locale.md): The locale used to display dates.
- [timeZone](timezone.md): The time zone used to display time-related values.
