> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimeintervaltextprovider/init(start:end:timezone:)](https://developer.apple.com/documentation/clockkit/clktimeintervaltextprovider/init(start:end:timezone:))

# init(start:end:timeZone:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider with the specified dates and time zone information.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(start startDate: Date, end endDate: Date, timeZone: TimeZone?)
```

## Parameters

- `startDate`: The start date for the time range. This parameter must not be `nil`.
- `endDate`: The end date for the time range. The specified date must come after the date in the `startDate` parameter. This parameter must not be `nil`.
- `timeZone`: The time zone to use when formatting dates. If you specify `nil`, the text provider uses the time zone currently associated with the user.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified date and time zone values.

<a id="Discussion"></a>

## Discussion

The returned text provider uses the default calendar information for the current user and uses the time zone in the `timeZone` parameter. Date and time values are formatted according to the user’s current locale information.

## See Also

### Creating the Text Provider

- [init(start:end:)](init%28start_end_%29.md): Deprecated. Creates and returns a text provider with the specified start and end dates.

# textProviderWithStartDate:endDate:timeZone: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider with the specified dates and time zone information.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) textProviderWithStartDate:(NSDate *) startDate endDate:(NSDate *) endDate timeZone:(NSTimeZone *) timeZone;
```

## Parameters

- `startDate`: The start date for the time range. This parameter must not be `nil`.
- `endDate`: The end date for the time range. The specified date must come after the date in the `startDate` parameter. This parameter must not be `nil`.
- `timeZone`: The time zone to use when formatting dates. If you specify `nil`, the text provider uses the time zone currently associated with the user.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified date and time zone values.

<a id="Discussion"></a>

## Discussion

The returned text provider uses the default calendar information for the current user and uses the time zone in the `timeZone` parameter. Date and time values are formatted according to the user’s current locale information.

## See Also

### Creating the Text Provider

- [textProviderWithStartDate:endDate:](init%28start_end_%29.md): Deprecated. Creates and returns a text provider with the specified start and end dates.
- [initWithStartDate:endDate:](initwithstartdate_enddate_.md): Deprecated. Creates and returns a text provider with the specified start and end dates.
- [initWithStartDate:endDate:timeZone:](initwithstartdate_enddate_timezone_.md): Deprecated. Creates and returns a text provider with the specified dates and time zone information.
