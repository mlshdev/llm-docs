> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/capabilities-swift.struct/sharing](https://developer.apple.com/documentation/cloudkit/ckrecordzone/capabilities-swift.struct/sharing)

# sharing (Swift)

**Framework:** CloudKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A capability for sharing a specific hierarchy of records.

## Declaration

```swift
static var sharing: CKRecordZone.Capabilities { get }
```

<a id="discussion"></a>

## Discussion

CloudKit allows you to share record hierarchies from custom record zones that you create in the user’s private database. For more information, see [Shared Records](../../shared-records.md).

## See Also

### Zone Capabilities

- [atomic](atomic.md): A capability that allows atomic changes of multiple records.
- [fetchChanges](fetchchanges.md): A capability for fetching only the changed records from a zone.
- [zoneWideSharing](zonewidesharing.md): A capability for sharing the entire contents of a record zone.

# CKRecordZoneCapabilitySharing (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A capability for sharing a specific hierarchy of records.

## Declaration

```objectivec
CKRecordZoneCapabilitySharing
```

<a id="discussion"></a>

## Discussion

CloudKit allows you to share record hierarchies from custom record zones that you create in the user’s private database. For more information, see [Shared Records](../../shared-records.md).

## See Also

### Zone Capabilities

- [CKRecordZoneCapabilityAtomic](atomic.md): A capability that allows atomic changes of multiple records.
- [CKRecordZoneCapabilityFetchChanges](fetchchanges.md): A capability for fetching only the changed records from a zone.
- [CKRecordZoneCapabilityZoneWideSharing](zonewidesharing.md): A capability for sharing the entire contents of a record zone.
