> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdatecomponents/date](https://developer.apple.com/documentation/foundation/nsdatecomponents/date)

# date (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The date calculated from the current components using the stored calendar.

## Declaration

```swift
var date: Date? { get }
```

<a id="Discussion"></a>

## Discussion

Returns `nil` if the [calendar](calendar.md) property value of the receiver is `nil` or cannot convert the receiver into an [NSDate](../nsdate.md) object.

See [Calendars, Date Components, and Calendar Units](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/Articles/dtCalendars.html#//apple_ref/doc/uid/TP40003470) in [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i).

## See Also

### Related Documentation

- [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i)

### Validating a Date

- [isValidDate](isvaliddate.md): A Boolean value that indicates whether the current combination of properties represents a date which exists in the current calendar.
- [isValidDate(in:)](isvaliddate%28in_%29.md): Returns a Boolean value that indicates whether the current combination of properties represents a date which exists in the specified calendar.
- [Undefined Components](../1430344-undefined-components.md): Constants that denote that the value of a date component is undefined.

# date (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The date calculated from the current components using the stored calendar.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDate * date;
```

<a id="Discussion"></a>

## Discussion

Returns `nil` if the [calendar](calendar.md) property value of the receiver is `nil` or cannot convert the receiver into an [NSDate](../nsdate.md) object.

See [Calendars, Date Components, and Calendar Units](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/Articles/dtCalendars.html#//apple_ref/doc/uid/TP40003470) in [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i).

## See Also

### Related Documentation

- [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i)

### Validating a Date

- [validDate](isvaliddate.md): A Boolean value that indicates whether the current combination of properties represents a date which exists in the current calendar.
- [isValidDateInCalendar:](isvaliddate%28in_%29.md): Returns a Boolean value that indicates whether the current combination of properties represents a date which exists in the specified calendar.
- [Undefined Components](../1430344-undefined-components.md): Constants that denote that the value of a date component is undefined.
