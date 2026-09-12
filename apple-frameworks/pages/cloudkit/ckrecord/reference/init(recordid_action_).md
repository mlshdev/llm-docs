> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/reference/init(recordid:action:)](https://developer.apple.com/documentation/cloudkit/ckrecord/reference/init(recordid:action:))

# init(recordID:action:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a reference object that points to the record with the specified ID.

## Declaration

```swift
init(recordID: CKRecord.ID, action: CKRecord.ReferenceAction)
```

## Parameters

- `recordID`: The ID of the target record. This method throws an exception if you specify `nil` for this parameter.
- `action`: The ownership option use between the target record and any records that incorporate this reference object. If you specify the [CKRecord.ReferenceAction.deleteSelf](../referenceaction/deleteself.md) option, the record that the `recordID` parameter references becomes the owner of (or acts as the parent of) any objects that use this reference object. For a list of possible values, see [CKRecord.ReferenceAction](../referenceaction.md).

<a id="return-value"></a>

## Return Value

An initialized reference object that points to the specified record.

<a id="discussion"></a>

## Discussion

Use this method when you have only the ID of the record for the target of a link. You might use this method if you save only the ID of the record to a local data cache.

When you create a reference object for use in a search predicate, the predicate ignores the value in the `action` parameter. Search predicates use only the ID of the record during their comparison.

## See Also

### Creating a Reference

- [init(record:action:)](init%28record_action_%29.md): Creates a reference object that points to the specified record object.
- [CKRecord.Reference.Action](action-swift.typealias.md): Deprecated. A type that represents additional actions that occur when deleting references.

# initWithRecordID:action: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a reference object that points to the record with the specified ID.

## Declaration

```objectivec
- (instancetype) initWithRecordID:(CKRecordID *) recordID action:(CKReferenceAction) action;
```

## Parameters

- `recordID`: The ID of the target record. This method throws an exception if you specify `nil` for this parameter.
- `action`: The ownership option use between the target record and any records that incorporate this reference object. If you specify the [CKReferenceActionDeleteSelf](../referenceaction/deleteself.md) option, the record that the `recordID` parameter references becomes the owner of (or acts as the parent of) any objects that use this reference object. For a list of possible values, see [CKReferenceAction](../referenceaction.md).

<a id="return-value"></a>

## Return Value

An initialized reference object that points to the specified record.

<a id="discussion"></a>

## Discussion

Use this method when you have only the ID of the record for the target of a link. You might use this method if you save only the ID of the record to a local data cache.

When you create a reference object for use in a search predicate, the predicate ignores the value in the `action` parameter. Search predicates use only the ID of the record during their comparison.

## See Also

### Creating a Reference

- [initWithRecord:action:](init%28record_action_%29.md): Creates a reference object that points to the specified record object.
