> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/fetchchangesoptions/prioritizedzoneids](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/fetchchangesoptions/prioritizedzoneids)

# prioritizedZoneIDs

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A list of zones that should be prioritized over others while fetching changes.

## Declaration

```swift
var prioritizedZoneIDs: [CKRecordZone.ID]
```

<a id="discussion"></a>

## Discussion

[CKSyncEngine](../../cksyncengine-5sie5.md) will fetch changes for the zones in this list first before any other zones. You might use this to prioritize a specific set of zones for initial sync. You could also prioritize the object currently showing in the UI by putting it first in this list.

Any zones not included in this list will be prioritized in a default manner. If a zone in this list has no changes to fetch, then that zone will be ignored.
