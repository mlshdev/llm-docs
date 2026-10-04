> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncenginesendchangesscope/initwithexcludedzoneids:

# initWithExcludedZoneIDs:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a scope that contains all zones except for the given zone IDs.

## Declaration

```objectivec
- (instancetype) initWithExcludedZoneIDs:(NSSet<CKRecordZoneID *> *) excludedZoneIDs;
```
