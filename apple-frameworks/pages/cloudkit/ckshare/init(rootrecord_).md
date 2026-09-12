> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/init(rootrecord:)](https://developer.apple.com/documentation/cloudkit/ckshare/init(rootrecord:))

# init(rootRecord:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a new share for the specified record.

## Declaration

```swift
convenience init(rootRecord: CKRecord)
```

## Parameters

- `rootRecord`: The record to share.

<a id="discussion"></a>

## Discussion

When saving a newly created [CKShare](../ckshare.md), you save both the share and its [rootRecord](metadata/rootrecord.md) in the same [CKModifyRecordsOperation](../ckmodifyrecordsoperation.md) batch.

## See Also

### Creating a Share

- [init(coder:)](init%28coder_%29.md): Creates a share from a serialized instance.
- [init(rootRecord:shareID:)](init%28rootrecord_shareid_%29.md): Creates a new share for the specified record and record ID.
- [init(recordZoneID:)](init%28recordzoneid_%29.md): Creates a new share for the specified record zone.

# initWithRootRecord: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a new share for the specified record.

## Declaration

```objectivec
- (instancetype) initWithRootRecord:(CKRecord *) rootRecord;
```

## Parameters

- `rootRecord`: The record to share.

<a id="discussion"></a>

## Discussion

When saving a newly created [CKShare](../ckshare.md), you save both the share and its [rootRecord](metadata/rootrecord.md) in the same [CKModifyRecordsOperation](../ckmodifyrecordsoperation.md) batch.

## See Also

### Creating a Share

- [initWithCoder:](init%28coder_%29.md): Creates a share from a serialized instance.
- [initWithRootRecord:shareID:](init%28rootrecord_shareid_%29.md): Creates a new share for the specified record and record ID.
- [initWithRecordZoneID:](init%28recordzoneid_%29.md): Creates a new share for the specified record zone.
