> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkdatetextprovider/initwithdate:units:](https://developer.apple.com/documentation/clockkit/clkdatetextprovider/initwithdate:units:)

# initWithDate:units:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates and returns a text provider with the specified date and the default time zone.

## Declaration

```objectivec
- (instancetype) initWithDate:(NSDate *) date units:(NSCalendarUnit) calendarUnits;
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

- [textProviderWithDate:units:](init%28date_units_%29.md): Deprecated. Creates and returns a text provider with the specified date and the default time zone.
- [textProviderWithDate:units:timeZone:](init%28date_units_timezone_%29.md): Deprecated. Creates and returns a text provider with the specified date and time zone.
- [initWithDate:units:timeZone:](initwithdate_units_timezone_.md): Deprecated. Creates and returns a text provider with the specified date and time zone.
