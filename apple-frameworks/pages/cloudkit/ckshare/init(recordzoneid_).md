> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/init(recordzoneid:)](https://developer.apple.com/documentation/cloudkit/ckshare/init(recordzoneid:))

# init(recordZoneID:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new share for the specified record zone.

## Declaration

```swift
init(recordZoneID: CKRecordZone.ID)
```

## Parameters

- `recordZoneID`: The ID of the record zone to share.

<a id="discussion"></a>

## Discussion

A shared record zone must have the [zoneWideSharing](../ckrecordzone/capabilities-swift.struct/zonewidesharing.md) capability. Custom record zones that you create in the user’s private database have this capability by default. A record zone, and the records it contains, can take part in only a single share.

After accepting a share invite, CloudKit adds the records of the shared record zone to a new zone in the participant’s shared database. Use [CKFetchDatabaseChangesOperation](../ckfetchdatabasechangesoperation.md) to fetch the ID of the new record zone. Then configure [CKFetchRecordZoneChangesOperation](../ckfetchrecordzonechangesoperation.md) with that record zone ID and execute the operation to fetch the records.

If you use [CKFetchShareMetadataOperation](../ckfetchsharemetadataoperation.md) to fetch the metadata for a shared record zone, the operation ignores the [shouldFetchRootRecord](../ckfetchsharemetadataoperation/shouldfetchrootrecord.md) and [rootRecordDesiredKeys](../ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex.md) properties because, unlike a shared record hierarchy, a record zone doesn’t have a nominated root record.

## See Also

### Creating a Share

- [init(coder:)](init%28coder_%29.md): Creates a share from a serialized instance.
- [init(rootRecord:)](init%28rootrecord_%29.md): Creates a new share for the specified record.
- [init(rootRecord:shareID:)](init%28rootrecord_shareid_%29.md): Creates a new share for the specified record and record ID.

# initWithRecordZoneID: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new share for the specified record zone.

## Declaration

```objectivec
- (instancetype) initWithRecordZoneID:(CKRecordZoneID *) recordZoneID;
```

## Parameters

- `recordZoneID`: The ID of the record zone to share.

<a id="discussion"></a>

## Discussion

A shared record zone must have the [CKRecordZoneCapabilityZoneWideSharing](../ckrecordzone/capabilities-swift.struct/zonewidesharing.md) capability. Custom record zones that you create in the user’s private database have this capability by default. A record zone, and the records it contains, can take part in only a single share.

After accepting a share invite, CloudKit adds the records of the shared record zone to a new zone in the participant’s shared database. Use [CKFetchDatabaseChangesOperation](../ckfetchdatabasechangesoperation.md) to fetch the ID of the new record zone. Then configure [CKFetchRecordZoneChangesOperation](../ckfetchrecordzonechangesoperation.md) with that record zone ID and execute the operation to fetch the records.

If you use [CKFetchShareMetadataOperation](../ckfetchsharemetadataoperation.md) to fetch the metadata for a shared record zone, the operation ignores the [shouldFetchRootRecord](../ckfetchsharemetadataoperation/shouldfetchrootrecord.md) and [rootRecordDesiredKeys](../ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex.md) properties because, unlike a shared record hierarchy, a record zone doesn’t have a nominated root record.

## See Also

### Creating a Share

- [initWithCoder:](init%28coder_%29.md): Creates a share from a serialized instance.
- [initWithRootRecord:](init%28rootrecord_%29.md): Creates a new share for the specified record.
- [initWithRootRecord:shareID:](init%28rootrecord_shareid_%29.md): Creates a new share for the specified record and record ID.
