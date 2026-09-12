> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/parent](https://developer.apple.com/documentation/cloudkit/ckrecord/parent)

# parent (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A reference to the record’s parent record.

## Declaration

```swift
@NSCopying var parent: CKRecord.Reference? { get set }
```

<a id="discussion"></a>

## Discussion

Use parent references to inform CloudKit about the hierarchy of your records. CloudKit shares the hierarchy when a [CKShare](../ckshare.md) includes a referenced record. Add relationships between records as you create them, even if you don’t plan to share them. This allows you to manage the sharing of a hierarchy by only modifying the root record’s [share](share.md) reference.

To indicate that a record belongs to its parent, set this property to a reference that points to the parent record. The reference must use the [CKRecord.ReferenceAction.none](referenceaction/none.md) action or CloudKit throws an exception. The parent record must exist on the server when you save the child, or you must include the record in the same save operation. Otherwise, the operation fails.

## See Also

### Sharing Records

- [share](share.md): A reference to the share object that determines the share status of the record.
- [CKRecord.Reference](reference.md): A relationship between two records in a record zone.
- [setParent(\_:)](setparent%28__%29-23du1.md): Creates and sets a reference object for a parent from its record.
- [setParent(\_:)](setparent%28__%29-7egcx.md): Creates and sets a reference object for a parent from the parent’s record ID.
- [CKRecord.SystemFieldKey](systemfieldkey.md): Possible values for types of system field keys on records.

# parent (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A reference to the record’s parent record.

## Declaration

```objectivec
@property (copy, nullable) CKReference * parent;
```

<a id="discussion"></a>

## Discussion

Use parent references to inform CloudKit about the hierarchy of your records. CloudKit shares the hierarchy when a [CKShare](../ckshare.md) includes a referenced record. Add relationships between records as you create them, even if you don’t plan to share them. This allows you to manage the sharing of a hierarchy by only modifying the root record’s [share](share.md) reference.

To indicate that a record belongs to its parent, set this property to a reference that points to the parent record. The reference must use the [CKReferenceActionNone](referenceaction/none.md) action or CloudKit throws an exception. The parent record must exist on the server when you save the child, or you must include the record in the same save operation. Otherwise, the operation fails.

## See Also

### Sharing Records

- [share](share.md): A reference to the share object that determines the share status of the record.
- [CKReference](reference.md): A relationship between two records in a record zone.
- [setParentReferenceFromRecord:](setparent%28__%29-23du1.md): Creates and sets a reference object for a parent from its record.
- [setParentReferenceFromRecordID:](setparent%28__%29-7egcx.md): Creates and sets a reference object for a parent from the parent’s record ID.
