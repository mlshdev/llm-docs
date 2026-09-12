> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainereventrequest](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventrequest)

# NSPersistentCloudKitContainerEventRequest (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A request to fetch setup, import, or export events in a persistent CloudKit container.

## Declaration

```swift
class NSPersistentCloudKitContainerEventRequest
```

## Topics

### Fetching Events

- [fetchEvents(after:)](nspersistentcloudkitcontainereventrequest/fetchevents%28after_%29-5izg7.md): Creates a fetch request for events after a specified date from a persistent CloudKit container.
- [fetchEvents(after:)](nspersistentcloudkitcontainereventrequest/fetchevents%28after_%29-3yfp.md): Creates a fetch request for events that occur after a specified event from a persistent CloudKit container.
- [fetchEvents(matchingFetch:)](nspersistentcloudkitcontainereventrequest/fetchevents%28matchingfetch_%29.md): Creates a fetch request for events that match a specified fetch request from a persistent CloudKit container.
- [fetchForEvents()](nspersistentcloudkitcontainereventrequest/fetchforevents%28%29.md): Creates a fetch request for all events in a persistent CloudKit container.
- [resultType](nspersistentcloudkitcontainereventrequest/resulttype.md): The type of result that the request returns.

## Relationships

### Inherits From

- [NSPersistentStoreRequest](nspersistentstorerequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Monitoring Container Events

- [NSPersistentCloudKitContainer.Event](nspersistentcloudkitcontainer/event.md): An object that represents activity in a persistent CloudKit container.
- [NSPersistentCloudKitContainer.EventType](nspersistentcloudkitcontainer/eventtype.md): The type of event in a persistent CloudKit container, either setup, import, or export.
- [NSPersistentCloudKitContainerEventResult](nspersistentcloudkitcontainereventresult.md): The result of a request to fetch persistent CloudKit container events.
- [eventChangedNotification](nspersistentcloudkitcontainer/eventchangednotification.md): A notification that contains details about an event in a persistent CloudKit container.
- [eventNotificationUserInfoKey](nspersistentcloudkitcontainer/eventnotificationuserinfokey.md): The user info dictionary key for the persistent CloudKit container event.

# NSPersistentCloudKitContainerEventRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A request to fetch setup, import, or export events in a persistent CloudKit container.

## Declaration

```objectivec
@interface NSPersistentCloudKitContainerEventRequest : NSPersistentStoreRequest
```

## Topics

### Fetching Events

- [fetchEventsAfterDate:](nspersistentcloudkitcontainereventrequest/fetchevents%28after_%29-5izg7.md): Creates a fetch request for events after a specified date from a persistent CloudKit container.
- [fetchEventsAfterEvent:](nspersistentcloudkitcontainereventrequest/fetchevents%28after_%29-3yfp.md): Creates a fetch request for events that occur after a specified event from a persistent CloudKit container.
- [fetchEventsMatchingFetchRequest:](nspersistentcloudkitcontainereventrequest/fetchevents%28matchingfetch_%29.md): Creates a fetch request for events that match a specified fetch request from a persistent CloudKit container.
- [fetchRequestForEvents](nspersistentcloudkitcontainereventrequest/fetchforevents%28%29.md): Creates a fetch request for all events in a persistent CloudKit container.
- [resultType](nspersistentcloudkitcontainereventrequest/resulttype.md): The type of result that the request returns.

## Relationships

### Inherits From

- [NSPersistentStoreRequest](nspersistentstorerequest.md)

## See Also

### Monitoring Container Events

- [NSPersistentCloudKitContainerEvent](nspersistentcloudkitcontainer/event.md): An object that represents activity in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventType](nspersistentcloudkitcontainer/eventtype.md): The type of event in a persistent CloudKit container, either setup, import, or export.
- [NSPersistentCloudKitContainerEventResult](nspersistentcloudkitcontainereventresult.md): The result of a request to fetch persistent CloudKit container events.
- [NSPersistentCloudKitContainerEventChangedNotification](nspersistentcloudkitcontainer/eventchangednotification.md): A notification that contains details about an event in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventUserInfoKey](nspersistentcloudkitcontainer/eventnotificationuserinfokey.md): The user info dictionary key for the persistent CloudKit container event.
