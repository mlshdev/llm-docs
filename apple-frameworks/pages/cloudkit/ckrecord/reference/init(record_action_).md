> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/reference/init(record:action:)](https://developer.apple.com/documentation/cloudkit/ckrecord/reference/init(record:action:))

# init(record:action:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a reference object that points to the specified record object.

## Declaration

```swift
convenience init(record: CKRecord, action: CKRecord.ReferenceAction)
```

## Parameters

- `record`: The target record of the reference.
- `action`: The ownership options to use for the records. If you specify the [CKRecord.ReferenceAction.deleteSelf](../referenceaction/deleteself.md) option, the object that the `recordID` parameter references becomes the owner of (or acts as the parent of) any objects that use this reference object. For a list of possible values, see [CKRecord.ReferenceAction](../referenceaction.md).

<a id="return-value"></a>

## Return Value

An initialized reference object that points to the specified record.

<a id="discussion"></a>

## Discussion

Use this method to initialize a reference to a local record object. You can reference a local record that you create, or one that you fetch from the server.

When you create a reference object for use in a search predicate, the predicate ignores the value in the `action` parameter. Search predicates use only the ID of the record during their comparison.

## See Also

### Creating a Reference

- [init(recordID:action:)](init%28recordid_action_%29.md): Creates a reference object that points to the record with the specified ID.
- [CKRecord.Reference.Action](action-swift.typealias.md): Deprecated. A type that represents additional actions that occur when deleting references.

# initWithRecord:action: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a reference object that points to the specified record object.

## Declaration

```objectivec
- (instancetype) initWithRecord:(CKRecord *) record action:(CKReferenceAction) action;
```

## Parameters

- `record`: The target record of the reference.
- `action`: The ownership options to use for the records. If you specify the [CKReferenceActionDeleteSelf](../referenceaction/deleteself.md) option, the object that the `recordID` parameter references becomes the owner of (or acts as the parent of) any objects that use this reference object. For a list of possible values, see [CKReferenceAction](../referenceaction.md).

<a id="return-value"></a>

## Return Value

An initialized reference object that points to the specified record.

<a id="discussion"></a>

## Discussion

Use this method to initialize a reference to a local record object. You can reference a local record that you create, or one that you fetch from the server.

When you create a reference object for use in a search predicate, the predicate ignores the value in the `action` parameter. Search predicates use only the ID of the record during their comparison.

## See Also

### Creating a Reference

- [initWithRecordID:action:](init%28recordid_action_%29.md): Creates a reference object that points to the record with the specified ID.
