> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginezonedeletionreason](https://developer.apple.com/documentation/cloudkit/cksyncenginezonedeletionreason)

# CKSyncEngineZoneDeletionReason (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Describes the reason for a record zone deletion.

## Declaration

```swift
enum CKSyncEngineZoneDeletionReason
```

## Topics

### Deletion reasons

- [CKSyncEngineZoneDeletionReason.deleted](cksyncenginezonedeletionreason/deleted.md): Your app deleted the record zone.
- [CKSyncEngineZoneDeletionReason.encryptedDataReset](cksyncenginezonedeletionreason/encrypteddatareset.md): The owner of the iCloud account reset their encrypted data.
- [CKSyncEngineZoneDeletionReason.purged](cksyncenginezonedeletionreason/purged.md): The owner of the iCloud account purged your app’s data using the Settings app.

### Initializers

- [init(rawValue:)](cksyncenginezonedeletionreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing changes

- [deletions](cksyncengine-5sie5/event/fetcheddatabasechanges/deletions.md): The fetched record zone deletions.
- [modifications](cksyncengine-5sie5/event/fetcheddatabasechanges/modifications.md): The fetched record zone modifications.

# CKSyncEngineZoneDeletionReason (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Describes the reason for a record zone deletion.

## Declaration

```objectivec
enum CKSyncEngineZoneDeletionReason : NSInteger;
```

## Topics

### Deletion reasons

- [CKSyncEngineZoneDeletionReasonDeleted](cksyncenginezonedeletionreason/deleted.md): Your app deleted the record zone.
- [CKSyncEngineZoneDeletionReasonEncryptedDataReset](cksyncenginezonedeletionreason/encrypteddatareset.md): The owner of the iCloud account reset their encrypted data.
- [CKSyncEngineZoneDeletionReasonPurged](cksyncenginezonedeletionreason/purged.md): The owner of the iCloud account purged your app’s data using the Settings app.
