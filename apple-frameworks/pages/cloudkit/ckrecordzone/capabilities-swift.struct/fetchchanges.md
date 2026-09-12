> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/capabilities-swift.struct/fetchchanges](https://developer.apple.com/documentation/cloudkit/ckrecordzone/capabilities-swift.struct/fetchchanges)

# fetchChanges (Swift)

**Framework:** CloudKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A capability for fetching only the changed records from a zone.

## Declaration

```swift
static var fetchChanges: CKRecordZone.Capabilities { get }
```

<a id="discussion"></a>

## Discussion

This capability makes the creation of offline caches more efficient. Instead of fetching the entire record every time, use [CKFetchRecordZoneChangesOperation](../../ckfetchrecordzonechangesoperation.md) to fetch only the changed values, and use the data it returns to update your cache. This minimizes the amount of data you receive from the server.

## See Also

### Zone Capabilities

- [atomic](atomic.md): A capability that allows atomic changes of multiple records.
- [sharing](sharing.md): A capability for sharing a specific hierarchy of records.
- [zoneWideSharing](zonewidesharing.md): A capability for sharing the entire contents of a record zone.

# CKRecordZoneCapabilityFetchChanges (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A capability for fetching only the changed records from a zone.

## Declaration

```objectivec
CKRecordZoneCapabilityFetchChanges
```

<a id="discussion"></a>

## Discussion

This capability makes the creation of offline caches more efficient. Instead of fetching the entire record every time, use [CKFetchRecordZoneChangesOperation](../../ckfetchrecordzonechangesoperation.md) to fetch only the changed values, and use the data it returns to update your cache. This minimizes the amount of data you receive from the server.

## See Also

### Zone Capabilities

- [CKRecordZoneCapabilityAtomic](atomic.md): A capability that allows atomic changes of multiple records.
- [CKRecordZoneCapabilitySharing](sharing.md): A capability for sharing a specific hierarchy of records.
- [CKRecordZoneCapabilityZoneWideSharing](zonewidesharing.md): A capability for sharing the entire contents of a record zone.
