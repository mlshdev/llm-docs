> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkrelativedatetextprovider/initwithdate:style:units:

# initWithDate:style:units:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a text provider that shows the difference between the current time and the specified date.

## Declaration

```objectivec
- (instancetype) initWithDate:(NSDate *) date style:(CLKRelativeDateStyle) style units:(NSCalendarUnit) calendarUnits;
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

- [textProviderWithDate:style:units:](init%28date_style_units_%29.md): Deprecated. Creates a text provider that shows the difference between the current time and the specified date.
- [textProviderWithDate:relativeToDate:style:units:](init%28date_relativeto_style_units_%29.md): Deprecated. Creates a text provider that shows the difference in time between the provided dates.
- [initWithDate:relativeToDate:style:units:](initwithdate_relativetodate_style_units_.md): Deprecated. Creates a text provider that shows the difference in time between the provided dates.
