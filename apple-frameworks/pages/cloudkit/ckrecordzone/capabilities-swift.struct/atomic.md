> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/capabilities-swift.struct/atomic](https://developer.apple.com/documentation/cloudkit/ckrecordzone/capabilities-swift.struct/atomic)

# atomic (Swift)

**Framework:** CloudKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A capability that allows atomic changes of multiple records.

## Declaration

```swift
static var atomic: CKRecordZone.Capabilities { get }
```

<a id="discussion"></a>

## Discussion

When you use a [CKModifyRecordsOperation](../../ckmodifyrecordsoperation.md) object to save records, if the server is unable to save the changes for one record, it doesn’t save the changes for any of the records. Combining this capability with the [CKModifyRecordsOperation.RecordSavePolicy.ifServerRecordUnchanged](../../ckmodifyrecordsoperation/recordsavepolicy/ifserverrecordunchanged.md) policy of the operation object prevents your app from overwriting changes to a group of records if one or more of the records on the server has recent changes.

## See Also

### Zone Capabilities

- [fetchChanges](fetchchanges.md): A capability for fetching only the changed records from a zone.
- [sharing](sharing.md): A capability for sharing a specific hierarchy of records.
- [zoneWideSharing](zonewidesharing.md): A capability for sharing the entire contents of a record zone.

# CKRecordZoneCapabilityAtomic (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A capability that allows atomic changes of multiple records.

## Declaration

```objectivec
CKRecordZoneCapabilityAtomic
```

<a id="discussion"></a>

## Discussion

When you use a [CKModifyRecordsOperation](../../ckmodifyrecordsoperation.md) object to save records, if the server is unable to save the changes for one record, it doesn’t save the changes for any of the records. Combining this capability with the [CKRecordSaveIfServerRecordUnchanged](../../ckmodifyrecordsoperation/recordsavepolicy/ifserverrecordunchanged.md) policy of the operation object prevents your app from overwriting changes to a group of records if one or more of the records on the server has recent changes.

## See Also

### Zone Capabilities

- [CKRecordZoneCapabilityFetchChanges](fetchchanges.md): A capability for fetching only the changed records from a zone.
- [CKRecordZoneCapabilitySharing](sharing.md): A capability for sharing a specific hierarchy of records.
- [CKRecordZoneCapabilityZoneWideSharing](zonewidesharing.md): A capability for sharing the entire contents of a record zone.
