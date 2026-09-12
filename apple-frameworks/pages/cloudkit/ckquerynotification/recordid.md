> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquerynotification/recordid](https://developer.apple.com/documentation/cloudkit/ckquerynotification/recordid)

# recordID (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The ID of the record that CloudKit creates, updates, or deletes.

## Declaration

```swift
@NSCopying var recordID: CKRecord.ID? { get }
```

<a id="discussion"></a>

## Discussion

Use this value to fetch the record.

## See Also

### Getting the Record Information

- [recordFields](recordfields.md): A dictionary of fields that have changes.

# recordID (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The ID of the record that CloudKit creates, updates, or deletes.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CKRecordID * recordID;
```

<a id="discussion"></a>

## Discussion

Use this value to fetch the record.

## See Also

### Getting the Record Information

- [recordFields](recordfields.md): A dictionary of fields that have changes.
