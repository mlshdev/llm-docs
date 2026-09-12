> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdatecomponents/value(forcomponent:)](https://developer.apple.com/documentation/foundation/nsdatecomponents/value(forcomponent:))

# value(forComponent:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value for a given calendar unit.

## Declaration

```swift
func value(forComponent unit: NSCalendar.Unit) -> Int
```

## Parameters

- `unit`: The calendar unit for which to retrieve its value. Do not pass [calendar](../nscalendar/unit/calendar.md) or [timeZone](../nscalendar/unit/timezone.md).

<a id="return-value"></a>

## Return Value

The value for the given calendar unit.

<a id="Discussion"></a>

## Discussion

This method allows for component values to be retrieved for an [NSCalendar.Unit](../nscalendar/unit.md) value.

## See Also

### Accessing Components as Calendrical Units

- [setValue(\_:forComponent:)](setvalue%28__forcomponent_%29.md): Sets a value for a given calendar unit.
- [NSCalendar.Unit](../nscalendar/unit.md): Calendrical units such as year, month, day and hour.

# valueForComponent: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value for a given calendar unit.

## Declaration

```objectivec
- (NSInteger) valueForComponent:(NSCalendarUnit) unit;
```

## Parameters

- `unit`: The calendar unit for which to retrieve its value. Do not pass [NSCalendarUnitCalendar](../nscalendar/unit/calendar.md) or [NSCalendarUnitTimeZone](../nscalendar/unit/timezone.md).

<a id="return-value"></a>

## Return Value

The value for the given calendar unit.

<a id="Discussion"></a>

## Discussion

This method allows for component values to be retrieved for an [NSCalendarUnit](../nscalendar/unit.md) value.

## See Also

### Accessing Components as Calendrical Units

- [setValue:forComponent:](setvalue%28__forcomponent_%29.md): Sets a value for a given calendar unit.
- [NSCalendarUnit](../nscalendar/unit.md): Calendrical units such as year, month, day and hour.
