> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimeintervaltextprovider/initwithstartdate:enddate:](https://developer.apple.com/documentation/clockkit/clktimeintervaltextprovider/initwithstartdate:enddate:)

# initWithStartDate:endDate:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates and returns a text provider with the specified start and end dates.

## Declaration

```objectivec
- (instancetype) initWithStartDate:(NSDate *) startDate endDate:(NSDate *) endDate;
```

## Parameters

- `startDate`: The start date for the time range. This parameter must not be `nil`.
- `endDate`: The end date for the time range. The specified date must come after the date in the `startDate` parameter. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified start and end dates.

<a id="Discussion"></a>

## Discussion

The returned text provider uses the default calendar and time zone information for the current user. Date and time values are formatted according to the user’s current locale information.

## See Also

### Creating the Text Provider

- [textProviderWithStartDate:endDate:](init%28start_end_%29.md): Deprecated. Creates and returns a text provider with the specified start and end dates.
- [textProviderWithStartDate:endDate:timeZone:](init%28start_end_timezone_%29.md): Deprecated. Creates and returns a text provider with the specified dates and time zone information.
- [initWithStartDate:endDate:timeZone:](initwithstartdate_enddate_timezone_.md): Deprecated. Creates and returns a text provider with the specified dates and time zone information.
