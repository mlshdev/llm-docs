> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginefetchchangesscope/zoneids](https://developer.apple.com/documentation/cloudkit/cksyncenginefetchchangesscope/zoneids)

# zoneIDs

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A specific set of zone IDs to include in the scope.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSSet<CKRecordZoneID *> * zoneIDs;
```

<a id="discussion"></a>

## Discussion

For example, if you want to fetch changes for a specific set of zones, you can specify them here. If `nil`, this scope includes all zones except those in `excludedZoneIDs`.
