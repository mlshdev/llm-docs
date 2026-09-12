> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/capabilities-swift.struct/zonewidesharing](https://developer.apple.com/documentation/cloudkit/ckrecordzone/capabilities-swift.struct/zonewidesharing)

# zoneWideSharing (Swift)

**Framework:** CloudKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A capability for sharing the entire contents of a record zone.

## Declaration

```swift
static var zoneWideSharing: CKRecordZone.Capabilities { get }
```

<a id="discussion"></a>

## Discussion

CloudKit allows you to share custom record zones that you create in the user’s private database. For more information, see [Shared Records](../../shared-records.md).

## See Also

### Zone Capabilities

- [atomic](atomic.md): A capability that allows atomic changes of multiple records.
- [fetchChanges](fetchchanges.md): A capability for fetching only the changed records from a zone.
- [sharing](sharing.md): A capability for sharing a specific hierarchy of records.

# CKRecordZoneCapabilityZoneWideSharing (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A capability for sharing the entire contents of a record zone.

## Declaration

```objectivec
CKRecordZoneCapabilityZoneWideSharing
```

<a id="discussion"></a>

## Discussion

CloudKit allows you to share custom record zones that you create in the user’s private database. For more information, see [Shared Records](../../shared-records.md).

## See Also

### Zone Capabilities

- [CKRecordZoneCapabilityAtomic](atomic.md): A capability that allows atomic changes of multiple records.
- [CKRecordZoneCapabilityFetchChanges](fetchchanges.md): A capability for fetching only the changed records from a zone.
- [CKRecordZoneCapabilitySharing](sharing.md): A capability for sharing a specific hierarchy of records.
