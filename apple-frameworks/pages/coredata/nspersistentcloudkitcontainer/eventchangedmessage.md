> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/eventchangedmessage

# NSPersistentCloudKitContainer.EventChangedMessage

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Posted when a CloudKit event occurs on the CloudKit private serial queue.

## Declaration

```swift
struct EventChangedMessage
```

## Topics

### Instance Properties

- [event](eventchangedmessage/event.md): The CloudKit event that triggered this notification.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../../foundation/notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
