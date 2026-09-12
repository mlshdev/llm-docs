> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerror/ancestorrecord](https://developer.apple.com/documentation/cloudkit/ckerror/ancestorrecord)

# ancestorRecord

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+

The original version of the record.

## Declaration

```swift
var ancestorRecord: CKRecord? { get }
```

<a id="discussion"></a>

## Discussion

This property’s value is available only when the error’s `code` is [serverRecordChanged](serverrecordchanged.md), which indicates the server’s record is newer than the version you try to save. Use this property’s value, along with those of [clientRecord](clientrecord.md) and [serverRecord](serverrecord.md), to resolve the conflict.

The error’s `userInfo` dictionary contains the same value as this property. You can access it using the [CKRecordChangedErrorAncestorRecordKey](../ckrecordchangederrorancestorrecordkey.md) key.

## See Also

### Getting Conflicted Records

- [clientRecord](clientrecord.md): The local version of the record that includes any changes.
- [serverRecord](serverrecord.md): The server’s version of the record.
