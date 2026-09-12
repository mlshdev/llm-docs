> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer/eventnotificationuserinfokey](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/eventnotificationuserinfokey)

# eventNotificationUserInfoKey (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The user info dictionary key for the persistent CloudKit container event.

## Declaration

```swift
class let eventNotificationUserInfoKey: String
```

## See Also

### Monitoring Container Events

- [NSPersistentCloudKitContainer.Event](event.md): An object that represents activity in a persistent CloudKit container.
- [NSPersistentCloudKitContainer.EventType](eventtype.md): The type of event in a persistent CloudKit container, either setup, import, or export.
- [NSPersistentCloudKitContainerEventRequest](../nspersistentcloudkitcontainereventrequest.md): A request to fetch setup, import, or export events in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventResult](../nspersistentcloudkitcontainereventresult.md): The result of a request to fetch persistent CloudKit container events.
- [eventChangedNotification](eventchangednotification.md): A notification that contains details about an event in a persistent CloudKit container.

# NSPersistentCloudKitContainerEventUserInfoKey (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The user info dictionary key for the persistent CloudKit container event.

## Declaration

```objectivec
extern NSString * const NSPersistentCloudKitContainerEventUserInfoKey;
```

## See Also

### Monitoring Container Events

- [NSPersistentCloudKitContainerEvent](event.md): An object that represents activity in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventType](eventtype.md): The type of event in a persistent CloudKit container, either setup, import, or export.
- [NSPersistentCloudKitContainerEventRequest](../nspersistentcloudkitcontainereventrequest.md): A request to fetch setup, import, or export events in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventResult](../nspersistentcloudkitcontainereventresult.md): The result of a request to fetch persistent CloudKit container events.
- [NSPersistentCloudKitContainerEventChangedNotification](eventchangednotification.md): A notification that contains details about an event in a persistent CloudKit container.
