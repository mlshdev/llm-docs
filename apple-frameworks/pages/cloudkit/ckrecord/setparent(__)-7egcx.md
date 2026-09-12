> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/setparent(_:)-7egcx](https://developer.apple.com/documentation/cloudkit/ckrecord/setparent(_:)-7egcx)

# setParent(\_:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and sets a reference object for a parent from the parent’s record ID.

## Declaration

```swift
func setParent(_ parentRecordID: CKRecord.ID?)
```

## Parameters

- `parentRecordID`: The [CKRecord.ID](id.md) object for the record that you want to set as this record’s parent.

<a id="discussion"></a>

## Discussion

This method creates and sets a [CKRecord.Reference](reference.md) object that points to the record you provide. The resulting `CKReference` has an action of [CKRecord.ReferenceAction.none](referenceaction/none.md).

## See Also

### Sharing Records

- [parent](parent.md): A reference to the record’s parent record.
- [share](share.md): A reference to the share object that determines the share status of the record.
- [CKRecord.Reference](reference.md): A relationship between two records in a record zone.
- [setParent(\_:)](setparent%28__%29-23du1.md): Creates and sets a reference object for a parent from its record.
- [CKRecord.SystemFieldKey](systemfieldkey.md): Possible values for types of system field keys on records.

# setParentReferenceFromRecordID: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and sets a reference object for a parent from the parent’s record ID.

## Declaration

```objectivec
- (void) setParentReferenceFromRecordID:(CKRecordID *) parentRecordID;
```

## Parameters

- `parentRecordID`: The [CKRecordID](id.md) object for the record that you want to set as this record’s parent.

<a id="discussion"></a>

## Discussion

This method creates and sets a [CKReference](reference.md) object that points to the record you provide. The resulting `CKReference` has an action of [CKReferenceActionNone](referenceaction/none.md).

## See Also

### Sharing Records

- [parent](parent.md): A reference to the record’s parent record.
- [share](share.md): A reference to the share object that determines the share status of the record.
- [CKReference](reference.md): A relationship between two records in a record zone.
- [setParentReferenceFromRecord:](setparent%28__%29-23du1.md): Creates and sets a reference object for a parent from its record.
