> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/referenceaction](https://developer.apple.com/documentation/cloudkit/ckrecord/referenceaction)

# CKRecord.ReferenceAction (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Constants that indicate the behavior when deleting a referenced record.

## Declaration

```swift
enum ReferenceAction
```

## Topics

### Deletion Reference Actions

- [CKRecord.ReferenceAction.none](referenceaction/none.md): A reference action that has no cascading behavior.
- [CKRecord.ReferenceAction.deleteSelf](referenceaction/deleteself.md): A reference action that cascades deletions.

### Initializers

- [init(rawValue:)](referenceaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Reference Attributes

- [action](reference/action-swift.property.md): The ownership behavior for the records.
- [recordID](reference/recordid.md): The ID of the referenced record.

# CKReferenceAction (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Constants that indicate the behavior when deleting a referenced record.

## Declaration

```objectivec
enum CKReferenceAction : NSUInteger;
```

## Topics

### Deletion Reference Actions

- [CKReferenceActionNone](referenceaction/none.md): A reference action that has no cascading behavior.
- [CKReferenceActionDeleteSelf](referenceaction/deleteself.md): A reference action that cascades deletions.

## See Also

### Getting the Reference Attributes

- [referenceAction](reference/action-swift.property.md): The ownership behavior for the records.
- [recordID](reference/recordid.md): The ID of the referenced record.
