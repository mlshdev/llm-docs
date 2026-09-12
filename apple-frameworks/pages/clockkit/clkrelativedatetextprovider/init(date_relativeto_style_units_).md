> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkrelativedatetextprovider/init(date:relativeto:style:units:)](https://developer.apple.com/documentation/clockkit/clkrelativedatetextprovider/init(date:relativeto:style:units:))

# init(date:relativeTo:style:units:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a text provider that shows the difference in time between the provided dates.

## Declaration

```swift
convenience init(date: Date, relativeTo relativeToDate: Date?, style: CLKRelativeDateStyle, units calendarUnits: NSCalendar.Unit)
```

## Parameters

- `date`: The starting date, used to calculate the relative date string.
- `relativeToDate`: The end date, used to calculate the relative date string.
- `style`: The style to use when formatting the relative date value. For a list of possible values, see [CLKRelativeDateStyle](../clkrelativedatestyle.md).
- `calendarUnits`: The units to include in the resulting date string. For a list of supported calendar units, see [Date Format Options](../clkrelativedatetextprovider.md#Date-Format-Options).

<a id="Discussion"></a>

## Discussion

This initializer creates a text provider that produces a fixed, relative date. If you want a text provider that automatically updates as time passes, use [init(date:style:units:)](init%28date_style_units_%29.md) instead.

## See Also

### Creating a Text Provider

- [init(date:style:units:)](init%28date_style_units_%29.md): Deprecated. Creates a text provider that shows the difference between the current time and the specified date.

# textProviderWithDate:relativeToDate:style:units: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a text provider that shows the difference in time between the provided dates.

## Declaration

```objectivec
+ (instancetype) textProviderWithDate:(NSDate *) date relativeToDate:(NSDate *) relativeToDate style:(CLKRelativeDateStyle) style units:(NSCalendarUnit) calendarUnits;
```

## Parameters

- `date`: The starting date, used to calculate the relative date string.
- `relativeToDate`: The end date, used to calculate the relative date string.
- `style`: The style to use when formatting the relative date value. For a list of possible values, see [CLKRelativeDateStyle](../clkrelativedatestyle.md).
- `calendarUnits`: The units to include in the resulting date string. For a list of supported calendar units, see [Date Format Options](../clkrelativedatetextprovider.md#Date-Format-Options).

<a id="Discussion"></a>

## Discussion

This initializer creates a text provider that produces a fixed, relative date. If you want a text provider that automatically updates as time passes, use [textProviderWithDate:style:units:](init%28date_style_units_%29.md) instead.

## See Also

### Creating a Text Provider

- [textProviderWithDate:style:units:](init%28date_style_units_%29.md): Deprecated. Creates a text provider that shows the difference between the current time and the specified date.
- [initWithDate:style:units:](initwithdate_style_units_.md): Deprecated. Creates a text provider that shows the difference between the current time and the specified date.
- [initWithDate:relativeToDate:style:units:](initwithdate_relativetodate_style_units_.md): Deprecated. Creates a text provider that shows the difference in time between the provided dates.
