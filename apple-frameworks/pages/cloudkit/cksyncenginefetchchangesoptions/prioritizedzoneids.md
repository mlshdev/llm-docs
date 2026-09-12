> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginefetchchangesoptions/prioritizedzoneids](https://developer.apple.com/documentation/cloudkit/cksyncenginefetchchangesoptions/prioritizedzoneids)

# prioritizedZoneIDs

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A list of zones that are prioritized over others while fetching changes.

## Declaration

```objectivec
@property (copy) NSArray<CKRecordZoneID *> * prioritizedZoneIDs;
```

<a id="discussion"></a>

## Discussion

`CKSyncEngine` fetches changes for the zones in this list first. You might use this to prioritize a specific set of zones for initial sync. You could also prioritize the object currently showing in the UI by putting it first in this list.

Any zones not included in this list are prioritized in a default manner. If a zone in this list has no changes to fetch, then that zone is ignored.
