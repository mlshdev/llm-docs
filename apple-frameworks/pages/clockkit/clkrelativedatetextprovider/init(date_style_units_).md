> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkrelativedatetextprovider/init(date:style:units:)](https://developer.apple.com/documentation/clockkit/clkrelativedatetextprovider/init(date:style:units:))

# init(date:style:units:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates a text provider that shows the difference between the current time and the specified date.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(date: Date, style: CLKRelativeDateStyle, units calendarUnits: NSCalendar.Unit)
```

## Parameters

- `date`: The date to use for calculations. This parameter must not be `nil`.
- `style`: The style to use when formatting the relative date value. For a list of possible values, see [CLKRelativeDateStyle](../clkrelativedatestyle.md).
- `calendarUnits`: The units to include in the resulting date string. For a list of supported calendar units, see [Date Format Options](../clkrelativedatetextprovider.md#Date-Format-Options).

<a id="Discussion"></a>

## Discussion

This initializer produces a text provider that updates automatically as time passes. To create a text provider that produces a static, relative date, use [init(date:relativeTo:style:units:)](init%28date_relativeto_style_units_%29.md) instead.

The text provider created by this method uses the default time zone information for the current user. The system formats date values according to the user’s current locale information.

## See Also

### Creating a Text Provider

- [init(date:relativeTo:style:units:)](init%28date_relativeto_style_units_%29.md): Deprecated. Creates a text provider that shows the difference in time between the provided dates.

# textProviderWithDate:style:units: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates a text provider that shows the difference between the current time and the specified date.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) textProviderWithDate:(NSDate *) date style:(CLKRelativeDateStyle) style units:(NSCalendarUnit) calendarUnits;
```

## Parameters

- `date`: The date to use for calculations. This parameter must not be `nil`.
- `style`: The style to use when formatting the relative date value. For a list of possible values, see [CLKRelativeDateStyle](../clkrelativedatestyle.md).
- `calendarUnits`: The units to include in the resulting date string. For a list of supported calendar units, see [Date Format Options](../clkrelativedatetextprovider.md#Date-Format-Options).

<a id="Discussion"></a>

## Discussion

This initializer produces a text provider that updates automatically as time passes. To create a text provider that produces a static, relative date, use [textProviderWithDate:relativeToDate:style:units:](init%28date_relativeto_style_units_%29.md) instead.

The text provider created by this method uses the default time zone information for the current user. The system formats date values according to the user’s current locale information.

## See Also

### Creating a Text Provider

- [initWithDate:style:units:](initwithdate_style_units_.md): Deprecated. Creates a text provider that shows the difference between the current time and the specified date.
- [textProviderWithDate:relativeToDate:style:units:](init%28date_relativeto_style_units_%29.md): Deprecated. Creates a text provider that shows the difference in time between the provided dates.
- [initWithDate:relativeToDate:style:units:](initwithdate_relativetodate_style_units_.md): Deprecated. Creates a text provider that shows the difference in time between the provided dates.
