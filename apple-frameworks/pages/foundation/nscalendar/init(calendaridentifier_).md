> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/init(calendaridentifier:)](https://developer.apple.com/documentation/foundation/nscalendar/init(calendaridentifier:))

# init(calendarIdentifier:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a calendar according to a given identifier.

## Declaration

```swift
init?(calendarIdentifier ident: NSCalendar.Identifier)
```

## Parameters

- `ident`: The identifier for the new calendar. For valid identifiers, see `Calendar Identifiers`.

<a id="return-value"></a>

## Return Value

The initialized calendar, or `nil` if the identifier is unknown (if, for example, it is either an unrecognized string or the calendar is not supported by the current version of the operating system).

## See Also

### Related Documentation

- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.
- [autoupdatingCurrent](autoupdatingcurrent.md): A calendar that tracks changes to user’s preferred calendar.

### Creating and Initializing Calendars

- [init(identifier:)](init%28identifier_%29.md): Creates a new calendar specified by a given identifier.
- [NSCalendar.Identifier](identifier.md): The supported calendar types.

# initWithCalendarIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a calendar according to a given identifier.

## Declaration

```objectivec
- (id) initWithCalendarIdentifier:(NSCalendarIdentifier) ident;
```

## Parameters

- `ident`: The identifier for the new calendar. For valid identifiers, see `Calendar Identifiers`.

<a id="return-value"></a>

## Return Value

The initialized calendar, or `nil` if the identifier is unknown (if, for example, it is either an unrecognized string or the calendar is not supported by the current version of the operating system).

## See Also

### Related Documentation

- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.
- [autoupdatingCurrentCalendar](autoupdatingcurrent.md): A calendar that tracks changes to user’s preferred calendar.

### Creating and Initializing Calendars

- [calendarWithIdentifier:](init%28identifier_%29.md): Creates a new calendar specified by a given identifier.
- [NSCalendarIdentifier](identifier.md): The supported calendar types.
