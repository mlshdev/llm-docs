> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/systemfieldkey](https://developer.apple.com/documentation/cloudkit/ckrecord/systemfieldkey)

# CKRecord.SystemFieldKey

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+ · Swift 4.2+

Possible values for types of system field keys on records.

## Declaration

```swift
enum SystemFieldKey
```

<a id="overview"></a>

## Overview

Use the values [share](systemfieldkey/share.md) and [parent](systemfieldkey/parent.md) when creating an [NSPredicate](../../foundation/nspredicate.md) for a [CKQuery](../ckquery.md) to reference a record’s [share](share.md) or [parent](parent.md) property, respectively.

## Topics

### Types of Shared Records

- [parent](systemfieldkey/parent.md): The key constant that a record uses for its CKRecord.parent.
- [share](systemfieldkey/share.md): The key constant that a record uses for its CKRecord.share.

### Type Properties

- [creationDate](systemfieldkey/creationdate.md): A key constant that a record uses for its CKRecord.creationDate.
- [creatorUserRecordID](systemfieldkey/creatoruserrecordid.md): A key constant that a record uses for its CKRecord.creatorUserRecordID.
- [lastModifiedUserRecordID](systemfieldkey/lastmodifieduserrecordid.md): A key constant that a record uses for its CKRecord.lastModifiedUserRecordID.
- [modificationDate](systemfieldkey/modificationdate.md): A key constant that a record uses for its CKRecord.modificationDate.
- [recordID](systemfieldkey/recordid.md): A key constant that a record uses for its CKRecord.recordID.

## See Also

### Sharing Records

- [parent](parent.md): A reference to the record’s parent record.
- [share](share.md): A reference to the share object that determines the share status of the record.
- [CKRecord.Reference](reference.md): A relationship between two records in a record zone.
- [setParent(\_:)](setparent%28__%29-23du1.md): Creates and sets a reference object for a parent from its record.
- [setParent(\_:)](setparent%28__%29-7egcx.md): Creates and sets a reference object for a parent from the parent’s record ID.
