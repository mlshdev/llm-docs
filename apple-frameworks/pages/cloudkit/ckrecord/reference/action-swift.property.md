> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/reference/action-swift.property](https://developer.apple.com/documentation/cloudkit/ckrecord/reference/action-swift.property)

# action (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The ownership behavior for the records.

## Declaration

```swift
var action: CKRecord.ReferenceAction { get }
```

<a id="discussion"></a>

## Discussion

The value in this property determines which action, if any, to take when deleting the target of the reference object — that is, the object that the [recordID](recordid.md) property points to. When this property is [CKRecord.ReferenceAction.deleteSelf](../referenceaction/deleteself.md), deleting the target object deletes any records that contain that reference in one of their fields. When this property is [CKRecord.ReferenceAction.none](../referenceaction/none.md), deleting the target object doesn’t delete any additional objects.

## See Also

### Getting the Reference Attributes

- [recordID](recordid.md): The ID of the referenced record.
- [CKRecord.ReferenceAction](../referenceaction.md): Constants that indicate the behavior when deleting a referenced record.

# referenceAction (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The ownership behavior for the records.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CKReferenceAction referenceAction;
```

<a id="discussion"></a>

## Discussion

The value in this property determines which action, if any, to take when deleting the target of the reference object — that is, the object that the [recordID](recordid.md) property points to. When this property is [CKReferenceActionDeleteSelf](../referenceaction/deleteself.md), deleting the target object deletes any records that contain that reference in one of their fields. When this property is [CKReferenceActionNone](../referenceaction/none.md), deleting the target object doesn’t delete any additional objects.

## See Also

### Getting the Reference Attributes

- [recordID](recordid.md): The ID of the referenced record.
- [CKReferenceAction](../referenceaction.md): Constants that indicate the behavior when deleting a referenced record.
