> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekobject](https://developer.apple.com/documentation/eventkit/ekobject)

# EKObject (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 6.0+

An abstract superclass for all EventKit classes that have persistent instances.

## Declaration

```swift
class EKObject
```

<a id="overview"></a>

## Overview

`EKObject` provides fine control when saving and restoring property settings. For example, you can find out if a persistent object was modified locally and whether it needs to be saved. If the object has changed in the event store since it was fetched, you can refresh the local copy by keeping local changes or by removing local changes. You can also roll back the object to the state when it was first fetched.

## Topics

### Saving and Restoring State

- [hasChanges](ekobject/haschanges.md): Returns whether this object or any of the objects it contains has uncommitted changes.
- [isNew](ekobject/isnew.md): A Boolean value that indicates whether this object has ever been saved.
- [refresh()](ekobject/refresh%28%29.md): Merges changes to this object with the latest saved values.
- [reset()](ekobject/reset%28%29.md): Returns this object to its saved state.
- [rollback()](ekobject/rollback%28%29.md): Rolls back the property values of this object to its original state when it was first fetched.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [EKAlarm](ekalarm.md)
- [EKCalendar](ekcalendar.md)
- [EKCalendarItem](ekcalendaritem.md)
- [EKParticipant](ekparticipant.md)
- [EKRecurrenceRule](ekrecurrencerule.md)
- [EKSource](eksource.md)
- [EKStructuredLocation](ekstructuredlocation.md)

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
- [EKSource](eksource.md): An abstract superclass that represents the account a calendar belongs to.

# EKObject (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 6.0+

An abstract superclass for all EventKit classes that have persistent instances.

## Declaration

```objectivec
@interface EKObject : NSObject
```

<a id="overview"></a>

## Overview

`EKObject` provides fine control when saving and restoring property settings. For example, you can find out if a persistent object was modified locally and whether it needs to be saved. If the object has changed in the event store since it was fetched, you can refresh the local copy by keeping local changes or by removing local changes. You can also roll back the object to the state when it was first fetched.

## Topics

### Saving and Restoring State

- [hasChanges](ekobject/haschanges.md): Returns whether this object or any of the objects it contains has uncommitted changes.
- [new](ekobject/isnew.md): A Boolean value that indicates whether this object has ever been saved.
- [refresh](ekobject/refresh%28%29.md): Merges changes to this object with the latest saved values.
- [reset](ekobject/reset%28%29.md): Returns this object to its saved state.
- [rollback](ekobject/rollback%28%29.md): Rolls back the property values of this object to its original state when it was first fetched.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [EKAlarm](ekalarm.md)
- [EKCalendar](ekcalendar.md)
- [EKCalendarItem](ekcalendaritem.md)
- [EKParticipant](ekparticipant.md)
- [EKRecurrenceRule](ekrecurrencerule.md)
- [EKSource](eksource.md)
- [EKStructuredLocation](ekstructuredlocation.md)

## See Also

### Common objects

- [EKCalendarItem](ekcalendaritem.md): An abstract superclass for calendar events and reminders.
- [EKSource](eksource.md): An abstract superclass that represents the account a calendar belongs to.
