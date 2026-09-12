> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer/eventtype](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/eventtype)

# NSPersistentCloudKitContainer.EventType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The type of event in a persistent CloudKit container, either setup, import, or export.

## Declaration

```swift
enum EventType
```

## Topics

### Event Types

- [NSPersistentCloudKitContainer.EventType.setup](eventtype/setup.md): An event the persistent CloudKit container generates when setting up a store.
- [NSPersistentCloudKitContainer.EventType.import](eventtype/import.md): An event the persistent CloudKit container generates when importing records into a store.
- [NSPersistentCloudKitContainer.EventType.export](eventtype/export.md): An event the persistent CloudKit container generates when exporting managed objects from a store.

### Initializers

- [init(rawValue:)](eventtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring Container Events

- [NSPersistentCloudKitContainer.Event](event.md): An object that represents activity in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventRequest](../nspersistentcloudkitcontainereventrequest.md): A request to fetch setup, import, or export events in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventResult](../nspersistentcloudkitcontainereventresult.md): The result of a request to fetch persistent CloudKit container events.
- [eventChangedNotification](eventchangednotification.md): A notification that contains details about an event in a persistent CloudKit container.
- [eventNotificationUserInfoKey](eventnotificationuserinfokey.md): The user info dictionary key for the persistent CloudKit container event.

# NSPersistentCloudKitContainerEventType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The type of event in a persistent CloudKit container, either setup, import, or export.

## Declaration

```objectivec
enum NSPersistentCloudKitContainerEventType : NSInteger;
```

## Topics

### Event Types

- [NSPersistentCloudKitContainerEventTypeSetup](eventtype/setup.md): An event the persistent CloudKit container generates when setting up a store.
- [NSPersistentCloudKitContainerEventTypeImport](eventtype/import.md): An event the persistent CloudKit container generates when importing records into a store.
- [NSPersistentCloudKitContainerEventTypeExport](eventtype/export.md): An event the persistent CloudKit container generates when exporting managed objects from a store.

## See Also

### Monitoring Container Events

- [NSPersistentCloudKitContainerEvent](event.md): An object that represents activity in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventRequest](../nspersistentcloudkitcontainereventrequest.md): A request to fetch setup, import, or export events in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventResult](../nspersistentcloudkitcontainereventresult.md): The result of a request to fetch persistent CloudKit container events.
- [NSPersistentCloudKitContainerEventChangedNotification](eventchangednotification.md): A notification that contains details about an event in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventUserInfoKey](eventnotificationuserinfokey.md): The user info dictionary key for the persistent CloudKit container event.
