> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginefetchchangesscope/initwithexcludedzoneids:](https://developer.apple.com/documentation/cloudkit/cksyncenginefetchchangesscope/initwithexcludedzoneids:)

# initWithExcludedZoneIDs:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a scope that includes all zones except the specified excluded zones.

## Declaration

```objectivec
- (instancetype) initWithExcludedZoneIDs:(NSSet<CKRecordZoneID *> *) zoneIDs;
```
