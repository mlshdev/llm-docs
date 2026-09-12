> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateintervalformatter/timestyle](https://developer.apple.com/documentation/foundation/dateintervalformatter/timestyle)

# timeStyle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The style to use when formatting hour, minute, and second information.

## Declaration

```swift
var timeStyle: DateIntervalFormatter.Style { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to an appropriate value before generating string values. The default value of this property is [DateIntervalFormatter.Style.none](style/none.md).

## See Also

### Configuring the Formatter Options

- [dateStyle](datestyle.md): The style to use when formatting day, month, and year information.
- [dateTemplate](datetemplate.md): The template for formatting one date and time value.
- [calendar](calendar.md): The calendar to use for date values.
- [locale](locale.md): The locale to use when formatting date and time values.
- [timeZone](timezone.md): The time zone with which to specify time values.

# timeStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The style to use when formatting hour, minute, and second information.

## Declaration

```objectivec
@property NSDateIntervalFormatterStyle timeStyle;
```

<a id="Discussion"></a>

## Discussion

Set this property to an appropriate value before generating string values. The default value of this property is [NSDateIntervalFormatterNoStyle](style/none.md).

## See Also

### Configuring the Formatter Options

- [dateStyle](datestyle.md): The style to use when formatting day, month, and year information.
- [dateTemplate](datetemplate.md): The template for formatting one date and time value.
- [calendar](calendar.md): The calendar to use for date values.
- [locale](locale.md): The locale to use when formatting date and time values.
- [timeZone](timezone.md): The time zone with which to specify time values.
