> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/init(rootrecord:shareid:)](https://developer.apple.com/documentation/cloudkit/ckshare/init(rootrecord:shareid:))

# init(rootRecord:shareID:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a new share for the specified record and record ID.

## Declaration

```swift
init(rootRecord: CKRecord, shareID: CKRecord.ID)
```

## Parameters

- `rootRecord`: The record to share.
- `shareID`: The [CKRecord.ID](../ckrecord/id.md) for the share.

<a id="discussion"></a>

## Discussion

When saving a newly created [CKShare](../ckshare.md), you save both the share and its [rootRecord](metadata/rootrecord.md) in the same [CKModifyRecordsOperation](../ckmodifyrecordsoperation.md) batch.

## See Also

### Creating a Share

- [init(coder:)](init%28coder_%29.md): Creates a share from a serialized instance.
- [init(rootRecord:)](init%28rootrecord_%29.md): Creates a new share for the specified record.
- [init(recordZoneID:)](init%28recordzoneid_%29.md): Creates a new share for the specified record zone.

# initWithRootRecord:shareID: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a new share for the specified record and record ID.

## Declaration

```objectivec
- (instancetype) initWithRootRecord:(CKRecord *) rootRecord shareID:(CKRecordID *) shareID;
```

## Parameters

- `rootRecord`: The record to share.
- `shareID`: The [CKRecordID](../ckrecord/id.md) for the share.

<a id="discussion"></a>

## Discussion

When saving a newly created [CKShare](../ckshare.md), you save both the share and its [rootRecord](metadata/rootrecord.md) in the same [CKModifyRecordsOperation](../ckmodifyrecordsoperation.md) batch.

## See Also

### Creating a Share

- [initWithCoder:](init%28coder_%29.md): Creates a share from a serialized instance.
- [initWithRootRecord:](init%28rootrecord_%29.md): Creates a new share for the specified record.
- [initWithRecordZoneID:](init%28recordzoneid_%29.md): Creates a new share for the specified record zone.
