> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkdatetextprovider/init(date:units:)](https://developer.apple.com/documentation/clockkit/clkdatetextprovider/init(date:units:))

# init(date:units:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider with the specified date and the default time zone.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(date: Date, units calendarUnits: NSCalendar.Unit)
```

## Parameters

- `date`: The date to display. This parameter must not be `nil`.
- `calendarUnits`: The units to include in the resulting date string. For a list of supported calendar units, see [Date Format Options](../clkdatetextprovider.md#Date-Format-Options).

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified date and time zone information.

<a id="Discussion"></a>

## Discussion

The text provider created by this method uses the default time zone information for the current user. Date values are formatted according to the user’s current locale information.

## See Also

### Creating a Text Provider

- [init(date:units:timeZone:)](init%28date_units_timezone_%29.md): Deprecated. Creates and returns a text provider with the specified date and time zone.

# textProviderWithDate:units: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider with the specified date and the default time zone.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) textProviderWithDate:(NSDate *) date units:(NSCalendarUnit) calendarUnits;
```

## Parameters

- `date`: The date to display. This parameter must not be `nil`.
- `calendarUnits`: The units to include in the resulting date string. For a list of supported calendar units, see [Date Format Options](../clkdatetextprovider.md#Date-Format-Options).

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified date and time zone information.

<a id="Discussion"></a>

## Discussion

The text provider created by this method uses the default time zone information for the current user. Date values are formatted according to the user’s current locale information.

## See Also

### Creating a Text Provider

- [initWithDate:units:](initwithdate_units_.md): Deprecated. Creates and returns a text provider with the specified date and the default time zone.
- [textProviderWithDate:units:timeZone:](init%28date_units_timezone_%29.md): Deprecated. Creates and returns a text provider with the specified date and time zone.
- [initWithDate:units:timeZone:](initwithdate_units_timezone_.md): Deprecated. Creates and returns a text provider with the specified date and time zone.
