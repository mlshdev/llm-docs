> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/reference/recordid](https://developer.apple.com/documentation/cloudkit/ckrecord/reference/recordid)

# recordID (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The ID of the referenced record.

## Declaration

```swift
@NSCopying var recordID: CKRecord.ID { get }
```

<a id="discussion"></a>

## Discussion

Use the ID in this property to fetch the record on the other end of the link.

## See Also

### Getting the Reference Attributes

- [action](action-swift.property.md): The ownership behavior for the records.
- [CKRecord.ReferenceAction](../referenceaction.md): Constants that indicate the behavior when deleting a referenced record.

# recordID (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The ID of the referenced record.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CKRecordID * recordID;
```

<a id="discussion"></a>

## Discussion

Use the ID in this property to fetch the record on the other end of the link.

## See Also

### Getting the Reference Attributes

- [referenceAction](action-swift.property.md): The ownership behavior for the records.
- [CKReferenceAction](../referenceaction.md): Constants that indicate the behavior when deleting a referenced record.
