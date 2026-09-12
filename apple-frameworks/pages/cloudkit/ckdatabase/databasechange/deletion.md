> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/databasechange/deletion](https://developer.apple.com/documentation/cloudkit/ckdatabase/databasechange/deletion)

# CKDatabase.DatabaseChange.Deletion

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A database change that represents the deletion of a record zone.

## Declaration

```swift
struct Deletion
```

## Topics

### Identifying the Deleted Record Zone

- [zoneID](deletion/zoneid.md): The identifier of the deleted record zone.
- [purged](deletion/purged.md): Deprecated. A Boolean value that indicates whether the user deleted the record zone when managing their iCloud storage.

### Instance Properties

- [reason](deletion/reason-swift.property.md)

### Enumerations

- [CKDatabase.DatabaseChange.Deletion.Reason](deletion/reason-swift.enum.md): Constants that represent why a record zone was deleted.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
