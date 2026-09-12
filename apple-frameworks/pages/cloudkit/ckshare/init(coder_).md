> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/init(coder:)](https://developer.apple.com/documentation/cloudkit/ckshare/init(coder:))

# init(coder:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a share from a serialized instance.

## Declaration

```swift
init(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: The coder to use when deserializing the share.

<a id="discussion"></a>

## Discussion

When saving a newly created [CKShare](../ckshare.md), you must save the share and its [rootRecord](metadata/rootrecord.md) in the same [CKModifyRecordsOperation](../ckmodifyrecordsoperation.md) batch.

## See Also

### Creating a Share

- [init(rootRecord:)](init%28rootrecord_%29.md): Creates a new share for the specified record.
- [init(rootRecord:shareID:)](init%28rootrecord_shareid_%29.md): Creates a new share for the specified record and record ID.
- [init(recordZoneID:)](init%28recordzoneid_%29.md): Creates a new share for the specified record zone.

# initWithCoder: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a share from a serialized instance.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: The coder to use when deserializing the share.

<a id="discussion"></a>

## Discussion

When saving a newly created [CKShare](../ckshare.md), you must save the share and its [rootRecord](metadata/rootrecord.md) in the same [CKModifyRecordsOperation](../ckmodifyrecordsoperation.md) batch.

## See Also

### Creating a Share

- [initWithRootRecord:](init%28rootrecord_%29.md): Creates a new share for the specified record.
- [initWithRootRecord:shareID:](init%28rootrecord_shareid_%29.md): Creates a new share for the specified record and record ID.
- [initWithRecordZoneID:](init%28recordzoneid_%29.md): Creates a new share for the specified record zone.
