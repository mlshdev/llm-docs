> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/referenceaction/deleteself](https://developer.apple.com/documentation/cloudkit/ckrecord/referenceaction/deleteself)

# CKRecord.ReferenceAction.deleteSelf (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A reference action that cascades deletions.

## Declaration

```swift
case deleteSelf
```

<a id="discussion"></a>

## Discussion

CloudKit deletes any records that contain `CKReference` objects pointing to the current record. The deletion of the additional records can trigger further deletions as the action cascades. The deletions are asynchronous in the default zone and immediate in a custom zone.

## See Also

### Deletion Reference Actions

- [CKRecord.ReferenceAction.none](none.md): A reference action that has no cascading behavior.

# CKReferenceActionDeleteSelf (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A reference action that cascades deletions.

## Declaration

```objectivec
CKReferenceActionDeleteSelf
```

<a id="discussion"></a>

## Discussion

CloudKit deletes any records that contain `CKReference` objects pointing to the current record. The deletion of the additional records can trigger further deletions as the action cascades. The deletions are asynchronous in the default zone and immediate in a custom zone.

## See Also

### Deletion Reference Actions

- [CKReferenceActionNone](none.md): A reference action that has no cascading behavior.
