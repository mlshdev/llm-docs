> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdatecomponents/isvaliddate](https://developer.apple.com/documentation/foundation/nsdatecomponents/isvaliddate)

# isValidDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the current combination of properties represents a date which exists in the current calendar.

## Declaration

```swift
var isValidDate: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the [timeZone](timezone.md) property is set on the receiver, the time zone property value is used. If the [calendar](calendar.md) property is not set on the receiver, `nil` is returned.

## See Also

### Validating a Date

- [isValidDate(in:)](isvaliddate%28in_%29.md): Returns a Boolean value that indicates whether the current combination of properties represents a date which exists in the specified calendar.
- [date](date.md): The date calculated from the current components using the stored calendar.
- [Undefined Components](../1430344-undefined-components.md): Constants that denote that the value of a date component is undefined.

# validDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the current combination of properties represents a date which exists in the current calendar.

## Declaration

```objectivec
@property (readonly, getter=isValidDate) BOOL validDate;
```

<a id="Discussion"></a>

## Discussion

If the [timeZone](timezone.md) property is set on the receiver, the time zone property value is used. If the [calendar](calendar.md) property is not set on the receiver, `nil` is returned.

## See Also

### Validating a Date

- [isValidDateInCalendar:](isvaliddate%28in_%29.md): Returns a Boolean value that indicates whether the current combination of properties represents a date which exists in the specified calendar.
- [date](date.md): The date calculated from the current components using the stored calendar.
- [Undefined Components](../1430344-undefined-components.md): Constants that denote that the value of a date component is undefined.
