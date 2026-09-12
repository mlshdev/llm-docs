> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/databasechange/deletion/reason-swift.enum](https://developer.apple.com/documentation/cloudkit/ckdatabase/databasechange/deletion/reason-swift.enum)

# CKDatabase.DatabaseChange.Deletion.Reason

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Constants that represent why a record zone was deleted.

## Declaration

```swift
enum Reason
```

## Topics

### Enumeration Cases

- [CKDatabase.DatabaseChange.Deletion.Reason.deleted](reason-swift.enum/deleted.md): Your app deleted the record zone.
- [CKDatabase.DatabaseChange.Deletion.Reason.encryptedDataReset](reason-swift.enum/encrypteddatareset.md): The user chose to reset all encrypted data for their account.
- [CKDatabase.DatabaseChange.Deletion.Reason.purged](reason-swift.enum/purged.md): A deletion from the user via the iCloud storage UI.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
