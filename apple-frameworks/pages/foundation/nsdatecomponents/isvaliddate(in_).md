> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdatecomponents/isvaliddate(in:)](https://developer.apple.com/documentation/foundation/nsdatecomponents/isvaliddate(in:))

# isValidDate(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the current combination of properties represents a date which exists in the specified calendar.

## Declaration

```swift
func isValidDate(in calendar: Calendar) -> Bool
```

## Parameters

- `calendar`: The calendar for which to use in the calculation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the date corresponding to the receiver’s values is valid and exists in the given calendar, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the [timeZone](timezone.md) property is set on the receiver, the time zone property value is used.

This property should not be used for [NSDateComponents](../nsdatecomponents.md) objects that represent relative quantities of calendar components. To find the the next or previous date that matches a particular set of date components, use the [NSCalendar](../nscalendar.md) instance method [nextDate(after:matching:value:options:)](../nscalendar/nextdate%28after_matching_value_options_%29.md) instead.

## See Also

### Validating a Date

- [isValidDate](isvaliddate.md): A Boolean value that indicates whether the current combination of properties represents a date which exists in the current calendar.
- [date](date.md): The date calculated from the current components using the stored calendar.
- [Undefined Components](../1430344-undefined-components.md): Constants that denote that the value of a date component is undefined.

# isValidDateInCalendar: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the current combination of properties represents a date which exists in the specified calendar.

## Declaration

```objectivec
- (BOOL) isValidDateInCalendar:(NSCalendar *) calendar;
```

## Parameters

- `calendar`: The calendar for which to use in the calculation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the date corresponding to the receiver’s values is valid and exists in the given calendar, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the [timeZone](timezone.md) property is set on the receiver, the time zone property value is used.

This property should not be used for [NSDateComponents](../nsdatecomponents.md) objects that represent relative quantities of calendar components. To find the the next or previous date that matches a particular set of date components, use the [NSCalendar](../nscalendar.md) instance method [nextDateAfterDate:matchingUnit:value:options:](../nscalendar/nextdate%28after_matching_value_options_%29.md) instead.

## See Also

### Validating a Date

- [validDate](isvaliddate.md): A Boolean value that indicates whether the current combination of properties represents a date which exists in the current calendar.
- [date](date.md): The date calculated from the current components using the stored calendar.
- [Undefined Components](../1430344-undefined-components.md): Constants that denote that the value of a date component is undefined.
