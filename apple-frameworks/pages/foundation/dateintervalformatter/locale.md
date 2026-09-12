> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateintervalformatter/locale](https://developer.apple.com/documentation/foundation/dateintervalformatter/locale)

# locale (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The locale to use when formatting date and time values.

## Declaration

```swift
var locale: Locale! { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is the current user’s locale, which is accessible from the [current](../nslocale/current.md) method of [NSLocale](../nslocale.md). You can change this value to a different locale to generate strings based on that locale.

## See Also

### Configuring the Formatter Options

- [dateStyle](datestyle.md): The style to use when formatting day, month, and year information.
- [timeStyle](timestyle.md): The style to use when formatting hour, minute, and second information.
- [dateTemplate](datetemplate.md): The template for formatting one date and time value.
- [calendar](calendar.md): The calendar to use for date values.
- [timeZone](timezone.md): The time zone with which to specify time values.

# locale (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The locale to use when formatting date and time values.

## Declaration

```objectivec
@property (copy, null_resettable) NSLocale * locale;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is the current user’s locale, which is accessible from the [currentLocale](../nslocale/current.md) method of [NSLocale](../nslocale.md). You can change this value to a different locale to generate strings based on that locale.

## See Also

### Configuring the Formatter Options

- [dateStyle](datestyle.md): The style to use when formatting day, month, and year information.
- [timeStyle](timestyle.md): The style to use when formatting hour, minute, and second information.
- [dateTemplate](datetemplate.md): The template for formatting one date and time value.
- [calendar](calendar.md): The calendar to use for date values.
- [timeZone](timezone.md): The time zone with which to specify time values.
