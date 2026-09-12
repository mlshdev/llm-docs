> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginependingdatabasechangetype](https://developer.apple.com/documentation/cloudkit/cksyncenginependingdatabasechangetype)

# CKSyncEnginePendingDatabaseChangeType (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Describes the type of a pending database change.

## Declaration

```swift
enum CKSyncEnginePendingDatabaseChangeType
```

## Topics

### Enumeration Cases

- [CKSyncEnginePendingDatabaseChangeType.deleteZone](cksyncenginependingdatabasechangetype/deletezone.md)
- [CKSyncEnginePendingDatabaseChangeType.saveZone](cksyncenginependingdatabasechangetype/savezone.md)

### Initializers

- [init(rawValue:)](cksyncenginependingdatabasechangetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CKSyncEnginePendingDatabaseChangeType (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Describes the type of a pending database change.

## Declaration

```objectivec
enum CKSyncEnginePendingDatabaseChangeType : NSInteger;
```

## Topics

### Enumeration Cases

- [CKSyncEnginePendingDatabaseChangeTypeDeleteZone](cksyncenginependingdatabasechangetype/deletezone.md)
- [CKSyncEnginePendingDatabaseChangeTypeSaveZone](cksyncenginependingdatabasechangetype/savezone.md)

## See Also

### Understanding the change

- [type](cksyncenginependingdatabasechange/type.md): The type of database change.
- [zoneID](cksyncenginependingdatabasechange/zoneid.md): The identifier of the record zone to change.
