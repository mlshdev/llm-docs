> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkdatetextprovider/init(date:units:timezone:)](https://developer.apple.com/documentation/clockkit/clkdatetextprovider/init(date:units:timezone:))

# init(date:units:timeZone:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider with the specified date and time zone.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(date: Date, units calendarUnits: NSCalendar.Unit, timeZone: TimeZone?)
```

## Parameters

- `date`: The date to display. This parameter must not be `nil`.
- `calendarUnits`: The units to include in the resulting date string. For a list of supported calendar units, see [Date Format Options](../clkdatetextprovider.md#Date-Format-Options).
- `timeZone`: The time zone to use when formatting the date. If you specify `nil`, the text provider uses the time zone currently associated with the user.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified date and time zone information.

<a id="Discussion"></a>

## Discussion

Date values are formatted according to the user’s current locale information.

## See Also

### Creating a Text Provider

- [init(date:units:)](init%28date_units_%29.md): Deprecated. Creates and returns a text provider with the specified date and the default time zone.

# textProviderWithDate:units:timeZone: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider with the specified date and time zone.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) textProviderWithDate:(NSDate *) date units:(NSCalendarUnit) calendarUnits timeZone:(NSTimeZone *) timeZone;
```

## Parameters

- `date`: The date to display. This parameter must not be `nil`.
- `calendarUnits`: The units to include in the resulting date string. For a list of supported calendar units, see [Date Format Options](../clkdatetextprovider.md#Date-Format-Options).
- `timeZone`: The time zone to use when formatting the date. If you specify `nil`, the text provider uses the time zone currently associated with the user.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified date and time zone information.

<a id="Discussion"></a>

## Discussion

Date values are formatted according to the user’s current locale information.

## See Also

### Creating a Text Provider

- [textProviderWithDate:units:](init%28date_units_%29.md): Deprecated. Creates and returns a text provider with the specified date and the default time zone.
- [initWithDate:units:](initwithdate_units_.md): Deprecated. Creates and returns a text provider with the specified date and the default time zone.
- [initWithDate:units:timeZone:](initwithdate_units_timezone_.md): Deprecated. Creates and returns a text provider with the specified date and time zone.
