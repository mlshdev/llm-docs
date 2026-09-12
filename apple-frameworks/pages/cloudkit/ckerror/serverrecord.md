> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerror/serverrecord](https://developer.apple.com/documentation/cloudkit/ckerror/serverrecord)

# serverRecord

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+

The server’s version of the record.

## Declaration

```swift
var serverRecord: CKRecord? { get }
```

<a id="discussion"></a>

## Discussion

This property’s value is available only when the error’s `code` is [serverRecordChanged](serverrecordchanged.md), which indicates the server’s record is newer than the version you try to save. Use this property’s value, along with those of [ancestorRecord](ancestorrecord.md) and [clientRecord](clientrecord.md), to resolve the conflict.

The error’s `userInfo` dictionary contains the same value as this property. You can access it using the [CKRecordChangedErrorServerRecordKey](../ckrecordchangederrorserverrecordkey.md) key.

## See Also

### Getting Conflicted Records

- [ancestorRecord](ancestorrecord.md): The original version of the record.
- [clientRecord](clientrecord.md): The local version of the record that includes any changes.
