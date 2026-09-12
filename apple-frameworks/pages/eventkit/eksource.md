> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/eksource](https://developer.apple.com/documentation/eventkit/eksource)

# EKSource (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

An abstract superclass that represents the account a calendar belongs to.

## Declaration

```swift
class EKSource
```

<a id="overview"></a>

## Overview

You do not create instances of this class; instead, you retrieve `EKSource` objects from an [EKEventStore](ekeventstore.md) object. Use the sources property to get all the `EKSource` objects for an event store, and use the methods in this class to access properties of the source object.

## Topics

### Accessing Source Properties

- [EKSourceType](eksourcetype.md): The type of source object.
- [sourceIdentifier](eksource/sourceidentifier.md): A unique identifier for the source object.
- [sourceType](eksource/sourcetype.md): The type of this source object.
- [title](eksource/title.md): The name of this source object.

### Accessing Calendars

- [calendars(for:)](eksource/calendars%28for_%29.md): Returns the calendars that belong to this source object that support a particular entity type.
- [calendars](eksource/calendars.md): Deprecated. The calendars that belong to this source object.

### Entity Type

- [EKEntityType](ekentitytype.md): The type of entities allowed for a source.

### Instance Properties

- [isDelegate](eksource/isdelegate.md)

## Relationships

### Inherits From

- [EKObject](ekobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Common objects

- [EKCalendarItem](ekcalendaritem.md): An abstract superclass for calendar events and reminders.
- [EKObject](ekobject.md): An abstract superclass for all EventKit classes that have persistent instances.

# EKSource (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

An abstract superclass that represents the account a calendar belongs to.

## Declaration

```objectivec
@interface EKSource : EKObject
```

<a id="overview"></a>

## Overview

You do not create instances of this class; instead, you retrieve `EKSource` objects from an [EKEventStore](ekeventstore.md) object. Use the sources property to get all the `EKSource` objects for an event store, and use the methods in this class to access properties of the source object.

## Topics

### Accessing Source Properties

- [EKSourceType](eksourcetype.md): The type of source object.
- [sourceIdentifier](eksource/sourceidentifier.md): A unique identifier for the source object.
- [sourceType](eksource/sourcetype.md): The type of this source object.
- [title](eksource/title.md): The name of this source object.

### Accessing Calendars

- [calendarsForEntityType:](eksource/calendars%28for_%29.md): Returns the calendars that belong to this source object that support a particular entity type.
- [calendars](eksource/calendars.md): Deprecated. The calendars that belong to this source object.

### Entity Type

- [EKEntityType](ekentitytype.md): The type of entities allowed for a source.

### Instance Properties

- [isDelegate](eksource/isdelegate.md)

## Relationships

### Inherits From

- [EKObject](ekobject.md)

## See Also

### Common objects

- [EKCalendarItem](ekcalendaritem.md): An abstract superclass for calendar events and reminders.
- [EKObject](ekobject.md): An abstract superclass for all EventKit classes that have persistent instances.
