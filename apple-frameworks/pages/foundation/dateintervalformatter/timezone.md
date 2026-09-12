> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateintervalformatter/timezone](https://developer.apple.com/documentation/foundation/dateintervalformatter/timezone)

# timeZone (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time zone with which to specify time values.

## Declaration

```swift
var timeZone: TimeZone! { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is the default time zone for the current user, which is accessible from the [default](../nstimezone/default.md) method of [NSTimeZone](../nstimezone.md). You can change this value to a different time zone to generate strings based on that time zone.

## See Also

### Configuring the Formatter Options

- [dateStyle](datestyle.md): The style to use when formatting day, month, and year information.
- [timeStyle](timestyle.md): The style to use when formatting hour, minute, and second information.
- [dateTemplate](datetemplate.md): The template for formatting one date and time value.
- [calendar](calendar.md): The calendar to use for date values.
- [locale](locale.md): The locale to use when formatting date and time values.

# timeZone (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time zone with which to specify time values.

## Declaration

```objectivec
@property (copy, null_resettable) NSTimeZone * timeZone;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is the default time zone for the current user, which is accessible from the [defaultTimeZone](../nstimezone/default.md) method of [NSTimeZone](../nstimezone.md). You can change this value to a different time zone to generate strings based on that time zone.

## See Also

### Configuring the Formatter Options

- [dateStyle](datestyle.md): The style to use when formatting day, month, and year information.
- [timeStyle](timestyle.md): The style to use when formatting hour, minute, and second information.
- [dateTemplate](datetemplate.md): The template for formatting one date and time value.
- [calendar](calendar.md): The calendar to use for date values.
- [locale](locale.md): The locale to use when formatting date and time values.
