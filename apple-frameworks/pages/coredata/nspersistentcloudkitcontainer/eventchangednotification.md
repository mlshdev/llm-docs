> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer/eventchangednotification](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/eventchangednotification)

# eventChangedNotification (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A notification that contains details about an event in a persistent CloudKit container.

## Declaration

```swift
class let eventChangedNotification: NSNotification.Name
```

## See Also

### Monitoring Container Events

- [NSPersistentCloudKitContainer.Event](event.md): An object that represents activity in a persistent CloudKit container.
- [NSPersistentCloudKitContainer.EventType](eventtype.md): The type of event in a persistent CloudKit container, either setup, import, or export.
- [NSPersistentCloudKitContainerEventRequest](../nspersistentcloudkitcontainereventrequest.md): A request to fetch setup, import, or export events in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventResult](../nspersistentcloudkitcontainereventresult.md): The result of a request to fetch persistent CloudKit container events.
- [eventNotificationUserInfoKey](eventnotificationuserinfokey.md): The user info dictionary key for the persistent CloudKit container event.

# NSPersistentCloudKitContainerEventChangedNotification (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A notification that contains details about an event in a persistent CloudKit container.

## Declaration

```objectivec
extern NSNotificationName const NSPersistentCloudKitContainerEventChangedNotification;
```

## See Also

### Monitoring Container Events

- [NSPersistentCloudKitContainerEvent](event.md): An object that represents activity in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventType](eventtype.md): The type of event in a persistent CloudKit container, either setup, import, or export.
- [NSPersistentCloudKitContainerEventRequest](../nspersistentcloudkitcontainereventrequest.md): A request to fetch setup, import, or export events in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventResult](../nspersistentcloudkitcontainereventresult.md): The result of a request to fetch persistent CloudKit container events.
- [NSPersistentCloudKitContainerEventUserInfoKey](eventnotificationuserinfokey.md): The user info dictionary key for the persistent CloudKit container event.
