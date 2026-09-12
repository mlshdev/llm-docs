> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer/event](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/event)

# NSPersistentCloudKitContainer.Event (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An object that represents activity in a persistent CloudKit container.

## Declaration

```swift
class Event
```

## Topics

### Inspecting Event Properties

- [type](event/type.md): The type of event, either setup, import, or export.
- [identifier](event/identifier.md): A unique identifier for the event in a container.
- [storeIdentifier](event/storeidentifier.md): The associated store identifier in the container for the event.
- [succeeded](event/succeeded.md): A Boolean value that indicates whether the operation the event represents is successful.
- [startDate](event/startdate.md): The start date of the operation that the event represents.
- [endDate](event/enddate.md): The end date of the operation that the event represents.
- [error](event/error.md): An error that indicates why an operation fails.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring Container Events

- [NSPersistentCloudKitContainer.EventType](eventtype.md): The type of event in a persistent CloudKit container, either setup, import, or export.
- [NSPersistentCloudKitContainerEventRequest](../nspersistentcloudkitcontainereventrequest.md): A request to fetch setup, import, or export events in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventResult](../nspersistentcloudkitcontainereventresult.md): The result of a request to fetch persistent CloudKit container events.
- [eventChangedNotification](eventchangednotification.md): A notification that contains details about an event in a persistent CloudKit container.
- [eventNotificationUserInfoKey](eventnotificationuserinfokey.md): The user info dictionary key for the persistent CloudKit container event.

# NSPersistentCloudKitContainerEvent (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An object that represents activity in a persistent CloudKit container.

## Declaration

```objectivec
@interface NSPersistentCloudKitContainerEvent : NSObject
```

## Topics

### Inspecting Event Properties

- [type](event/type.md): The type of event, either setup, import, or export.
- [identifier](event/identifier.md): A unique identifier for the event in a container.
- [storeIdentifier](event/storeidentifier.md): The associated store identifier in the container for the event.
- [succeeded](event/succeeded.md): A Boolean value that indicates whether the operation the event represents is successful.
- [startDate](event/startdate.md): The start date of the operation that the event represents.
- [endDate](event/enddate.md): The end date of the operation that the event represents.
- [error](event/error.md): An error that indicates why an operation fails.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)

## See Also

### Monitoring Container Events

- [NSPersistentCloudKitContainerEventType](eventtype.md): The type of event in a persistent CloudKit container, either setup, import, or export.
- [NSPersistentCloudKitContainerEventRequest](../nspersistentcloudkitcontainereventrequest.md): A request to fetch setup, import, or export events in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventResult](../nspersistentcloudkitcontainereventresult.md): The result of a request to fetch persistent CloudKit container events.
- [NSPersistentCloudKitContainerEventChangedNotification](eventchangednotification.md): A notification that contains details about an event in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventUserInfoKey](eventnotificationuserinfokey.md): The user info dictionary key for the persistent CloudKit container event.
