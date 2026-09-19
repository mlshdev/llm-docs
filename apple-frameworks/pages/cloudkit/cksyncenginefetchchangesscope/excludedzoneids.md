> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncenginefetchchangesscope/excludedzoneids

# excludedZoneIDs

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A specific set of zone IDs to exclude from this scope.

## Declaration

```objectivec
@property (copy, readonly) NSSet<CKRecordZoneID *> * excludedZoneIDs;
```

<a id="discussion"></a>

## Discussion

If you know that you don’t want to fetch changes for a particular set of zones, you can set those zones here.
