> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/referenceaction/none](https://developer.apple.com/documentation/cloudkit/ckrecord/referenceaction/none)

# CKRecord.ReferenceAction.none (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A reference action that has no cascading behavior.

## Declaration

```swift
case none
```

<a id="discussion"></a>

## Discussion

No action occurs when you delete a record that the current record references. Deleting a parent record doesn’t delete that record’s children. The `CKReference` object still contains the ID of the deleted record and doesn’t update.

## See Also

### Deletion Reference Actions

- [CKRecord.ReferenceAction.deleteSelf](deleteself.md): A reference action that cascades deletions.

# CKReferenceActionNone (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A reference action that has no cascading behavior.

## Declaration

```objectivec
CKReferenceActionNone
```

<a id="discussion"></a>

## Discussion

No action occurs when you delete a record that the current record references. Deleting a parent record doesn’t delete that record’s children. The `CKReference` object still contains the ID of the deleted record and doesn’t update.

## See Also

### Deletion Reference Actions

- [CKReferenceActionDeleteSelf](deleteself.md): A reference action that cascades deletions.
