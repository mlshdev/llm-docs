> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginesendchangesscope/initwithzoneids:](https://developer.apple.com/documentation/cloudkit/cksyncenginesendchangesscope/initwithzoneids:)

# initWithZoneIDs:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a scope that contains only the given zone IDs. If `zoneIDs` is `nil`, then this scope contains all zones.

## Declaration

```objectivec
- (instancetype) initWithZoneIDs:(NSSet<CKRecordZoneID *> *) zoneIDs;
```
