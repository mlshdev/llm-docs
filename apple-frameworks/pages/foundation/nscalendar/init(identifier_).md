> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/init(identifier:)](https://developer.apple.com/documentation/foundation/nscalendar/init(identifier:))

# init(identifier:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new calendar specified by a given identifier.

## Declaration

```swift
init?(identifier calendarIdentifierConstant: NSCalendar.Identifier)
```

## Parameters

- `calendarIdentifierConstant`: The identifier for the new calendar. For valid identifiers, see `Calendar Identifiers`.

<a id="return-value"></a>

## Return Value

The initialized calendar, or `nil` if the identifier is unknown (if, for example, it is either an unrecognized string or the calendar is not supported by the current version of the operating system).

<a id="Discussion"></a>

## Discussion

The returned calendar defaults to the current locale and default time zone.

## See Also

### Related Documentation

- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.
- [autoupdatingCurrent](autoupdatingcurrent.md): A calendar that tracks changes to user’s preferred calendar.

### Creating and Initializing Calendars

- [init(calendarIdentifier:)](init%28calendaridentifier_%29.md): Initializes a calendar according to a given identifier.
- [NSCalendar.Identifier](identifier.md): The supported calendar types.

# calendarWithIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new calendar specified by a given identifier.

## Declaration

```objectivec
+ (NSCalendar *) calendarWithIdentifier:(NSCalendarIdentifier) calendarIdentifierConstant;
```

## Parameters

- `calendarIdentifierConstant`: The identifier for the new calendar. For valid identifiers, see `Calendar Identifiers`.

<a id="return-value"></a>

## Return Value

The initialized calendar, or `nil` if the identifier is unknown (if, for example, it is either an unrecognized string or the calendar is not supported by the current version of the operating system).

<a id="Discussion"></a>

## Discussion

The returned calendar defaults to the current locale and default time zone.

## See Also

### Related Documentation

- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.
- [autoupdatingCurrentCalendar](autoupdatingcurrent.md): A calendar that tracks changes to user’s preferred calendar.

### Creating and Initializing Calendars

- [initWithCalendarIdentifier:](init%28calendaridentifier_%29.md): Initializes a calendar according to a given identifier.
- [NSCalendarIdentifier](identifier.md): The supported calendar types.
