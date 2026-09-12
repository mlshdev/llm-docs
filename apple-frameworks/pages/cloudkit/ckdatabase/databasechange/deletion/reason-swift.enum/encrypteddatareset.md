> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/databasechange/deletion/reason-swift.enum/encrypteddatareset](https://developer.apple.com/documentation/cloudkit/ckdatabase/databasechange/deletion/reason-swift.enum/encrypteddatareset)

# CKDatabase.DatabaseChange.Deletion.Reason.encryptedDataReset

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The user chose to reset all encrypted data for their account.

## Declaration

```swift
case encryptedDataReset
```

<a id="discussion"></a>

## Discussion

This is an indication that the user needed to reset encrypted data during account recovery, and is still interested in locally-cached data.

To minimize data loss, consider re-uploading locally-cached data to the server.
