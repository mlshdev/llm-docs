> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginesyncreason](https://developer.apple.com/documentation/cloudkit/cksyncenginesyncreason)

# CKSyncEngineSyncReason (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Describes the reason for a sync operation.

## Declaration

```swift
enum CKSyncEngineSyncReason
```

## Topics

### Sync reasons

- [CKSyncEngineSyncReason.scheduled](cksyncenginesyncreason/scheduled.md): The sync engine automatically scheduled this sync.
- [CKSyncEngineSyncReason.manual](cksyncenginesyncreason/manual.md): A manual sync operation.

### Initializers

- [init(rawValue:)](cksyncenginesyncreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CKSyncEngineSyncReason (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Describes the reason for a sync operation.

## Declaration

```objectivec
enum CKSyncEngineSyncReason : NSInteger;
```

## Topics

### Sync reasons

- [CKSyncEngineSyncReasonScheduled](cksyncenginesyncreason/scheduled.md): The sync engine automatically scheduled this sync.
- [CKSyncEngineSyncReasonManual](cksyncenginesyncreason/manual.md): A manual sync operation.

## See Also

### Accessing specific attributes

- [reason](cksyncenginesendchangescontext/reason.md): The reason for the send operation.
- [options](cksyncenginesendchangescontext/options.md): The additional options for the send operation.
- [CKSyncEngineSendChangesOptions](cksyncenginesendchangesoptions.md): A set of options to use with a send operation.
