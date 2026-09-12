> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdatecomponents/setvalue(_:forcomponent:)](https://developer.apple.com/documentation/foundation/nsdatecomponents/setvalue(_:forcomponent:))

# setValue(\_:forComponent:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a value for a given calendar unit.

## Declaration

```swift
func setValue(_ value: Int, forComponent unit: NSCalendar.Unit)
```

## Parameters

- `value`: The value to set for the `unit` component.
- `unit`: The calendar unit for which to set `value`. Do not pass [calendar](../nscalendar/unit/calendar.md) or [timeZone](../nscalendar/unit/timezone.md).

<a id="Discussion"></a>

## Discussion

This method allows for component values to be set for an [NSCalendar.Unit](../nscalendar/unit.md) value.

## See Also

### Accessing Components as Calendrical Units

- [value(forComponent:)](value%28forcomponent_%29.md): Returns the value for a given calendar unit.
- [NSCalendar.Unit](../nscalendar/unit.md): Calendrical units such as year, month, day and hour.

# setValue:forComponent: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a value for a given calendar unit.

## Declaration

```objectivec
- (void) setValue:(NSInteger) value forComponent:(NSCalendarUnit) unit;
```

## Parameters

- `value`: The value to set for the `unit` component.
- `unit`: The calendar unit for which to set `value`. Do not pass [NSCalendarUnitCalendar](../nscalendar/unit/calendar.md) or [NSCalendarUnitTimeZone](../nscalendar/unit/timezone.md).

<a id="Discussion"></a>

## Discussion

This method allows for component values to be set for an [NSCalendarUnit](../nscalendar/unit.md) value.

## See Also

### Accessing Components as Calendrical Units

- [valueForComponent:](value%28forcomponent_%29.md): Returns the value for a given calendar unit.
- [NSCalendarUnit](../nscalendar/unit.md): Calendrical units such as year, month, day and hour.
