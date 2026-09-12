> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainereventresult](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventresult)

# NSPersistentCloudKitContainerEventResult (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The result of a request to fetch persistent CloudKit container events.

## Declaration

```swift
class NSPersistentCloudKitContainerEventResult
```

## Topics

### Handling Event Results

- [result](nspersistentcloudkitcontainereventresult/result.md): The result of the persistent CloudKit container event request, which the result type determines.
- [resultType](nspersistentcloudkitcontainereventresult/resulttype-swift.property.md): The type of result that the CloudKit container event fetch request returns.
- [NSPersistentCloudKitContainerEventResult.ResultType](nspersistentcloudkitcontainereventresult/resulttype-swift.enum.md): The types of results from a persistent CloudKit container event fetch request.

## Relationships

### Inherits From

- [NSPersistentStoreResult](nspersistentstoreresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Monitoring Container Events

- [NSPersistentCloudKitContainer.Event](nspersistentcloudkitcontainer/event.md): An object that represents activity in a persistent CloudKit container.
- [NSPersistentCloudKitContainer.EventType](nspersistentcloudkitcontainer/eventtype.md): The type of event in a persistent CloudKit container, either setup, import, or export.
- [NSPersistentCloudKitContainerEventRequest](nspersistentcloudkitcontainereventrequest.md): A request to fetch setup, import, or export events in a persistent CloudKit container.
- [eventChangedNotification](nspersistentcloudkitcontainer/eventchangednotification.md): A notification that contains details about an event in a persistent CloudKit container.
- [eventNotificationUserInfoKey](nspersistentcloudkitcontainer/eventnotificationuserinfokey.md): The user info dictionary key for the persistent CloudKit container event.

# NSPersistentCloudKitContainerEventResult (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The result of a request to fetch persistent CloudKit container events.

## Declaration

```objectivec
@interface NSPersistentCloudKitContainerEventResult : NSPersistentStoreResult
```

## Topics

### Handling Event Results

- [result](nspersistentcloudkitcontainereventresult/result.md): The result of the persistent CloudKit container event request, which the result type determines.
- [resultType](nspersistentcloudkitcontainereventresult/resulttype-swift.property.md): The type of result that the CloudKit container event fetch request returns.
- [NSPersistentCloudKitContainerEventResultType](nspersistentcloudkitcontainereventresult/resulttype-swift.enum.md): The types of results from a persistent CloudKit container event fetch request.

## Relationships

### Inherits From

- [NSPersistentStoreResult](nspersistentstoreresult.md)

## See Also

### Monitoring Container Events

- [NSPersistentCloudKitContainerEvent](nspersistentcloudkitcontainer/event.md): An object that represents activity in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventType](nspersistentcloudkitcontainer/eventtype.md): The type of event in a persistent CloudKit container, either setup, import, or export.
- [NSPersistentCloudKitContainerEventRequest](nspersistentcloudkitcontainereventrequest.md): A request to fetch setup, import, or export events in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventChangedNotification](nspersistentcloudkitcontainer/eventchangednotification.md): A notification that contains details about an event in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventUserInfoKey](nspersistentcloudkitcontainer/eventnotificationuserinfokey.md): The user info dictionary key for the persistent CloudKit container event.
