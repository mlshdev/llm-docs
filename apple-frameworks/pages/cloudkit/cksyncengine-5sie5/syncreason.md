> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/syncreason](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/syncreason)

# CKSyncEngine.SyncReason

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Describes the reason for a sync operation.

## Declaration

```swift
enum SyncReason
```

## Topics

### Sync reasons

- [CKSyncEngine.SyncReason.scheduled](syncreason/scheduled.md): The sync engine automatically scheduled this sync.
- [CKSyncEngine.SyncReason.manual](syncreason/manual.md): A manual sync operation.

### Debugging the reason

- [description](syncreason/description.md): The textual description of the reason that’s suitable for logging.

### Default Implementations

- [CustomStringConvertible Implementations](syncreason/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing specific attributes

- [reason](sendchangescontext/reason.md): The reason for the send operation.
- [CKSyncEngineSyncReason](../cksyncenginesyncreason.md): Describes the reason for a sync operation.
- [options](sendchangescontext/options.md): The options being used for this attempt to send changes.
- [CKSyncEngine.SendChangesOptions](sendchangesoptions.md): A set of options to use when sending changes to the server.
