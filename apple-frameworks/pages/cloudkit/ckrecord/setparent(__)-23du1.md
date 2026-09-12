> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/setparent(_:)-23du1](https://developer.apple.com/documentation/cloudkit/ckrecord/setparent(_:)-23du1)

# setParent(\_:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and sets a reference object for a parent from its record.

## Declaration

```swift
func setParent(_ parentRecord: CKRecord?)
```

## Parameters

- `parentRecord`: A record that you want to set as the parent to this record.

<a id="discussion"></a>

## Discussion

This method creates and sets a [CKRecord.Reference](reference.md) object that points to the record you provide. The resulting `CKReference` has an action of [CKRecord.ReferenceAction.none](referenceaction/none.md).

## See Also

### Sharing Records

- [parent](parent.md): A reference to the record’s parent record.
- [share](share.md): A reference to the share object that determines the share status of the record.
- [CKRecord.Reference](reference.md): A relationship between two records in a record zone.
- [setParent(\_:)](setparent%28__%29-7egcx.md): Creates and sets a reference object for a parent from the parent’s record ID.
- [CKRecord.SystemFieldKey](systemfieldkey.md): Possible values for types of system field keys on records.

# setParentReferenceFromRecord: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and sets a reference object for a parent from its record.

## Declaration

```objectivec
- (void) setParentReferenceFromRecord:(CKRecord *) parentRecord;
```

## Parameters

- `parentRecord`: A record that you want to set as the parent to this record.

<a id="discussion"></a>

## Discussion

This method creates and sets a [CKReference](reference.md) object that points to the record you provide. The resulting `CKReference` has an action of [CKReferenceActionNone](referenceaction/none.md).

## See Also

### Sharing Records

- [parent](parent.md): A reference to the record’s parent record.
- [share](share.md): A reference to the share object that determines the share status of the record.
- [CKReference](reference.md): A relationship between two records in a record zone.
- [setParentReferenceFromRecordID:](setparent%28__%29-7egcx.md): Creates and sets a reference object for a parent from the parent’s record ID.
