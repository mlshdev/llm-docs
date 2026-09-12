> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginezonedeletionreason/purged](https://developer.apple.com/documentation/cloudkit/cksyncenginezonedeletionreason/purged)

# CKSyncEngineZoneDeletionReason.purged (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The owner of the iCloud account purged your app’s data using the Settings app.

## Declaration

```swift
case purged
```

<a id="discussion"></a>

## Discussion

> **Important**

> Upon receipt of deletions with this reason, you must delete any locally cached data and not resend it to iCloud.

## See Also

### Deletion reasons

- [CKSyncEngineZoneDeletionReason.deleted](deleted.md): Your app deleted the record zone.
- [CKSyncEngineZoneDeletionReason.encryptedDataReset](encrypteddatareset.md): The owner of the iCloud account reset their encrypted data.

# CKSyncEngineZoneDeletionReasonPurged (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The owner of the iCloud account purged your app’s data using the Settings app.

## Declaration

```objectivec
CKSyncEngineZoneDeletionReasonPurged
```

<a id="discussion"></a>

## Discussion

> **Important**

> Upon receipt of deletions with this reason, you must delete any locally cached data and not resend it to iCloud.

## See Also

### Deletion reasons

- [CKSyncEngineZoneDeletionReasonDeleted](deleted.md): Your app deleted the record zone.
- [CKSyncEngineZoneDeletionReasonEncryptedDataReset](encrypteddatareset.md): The owner of the iCloud account reset their encrypted data.
