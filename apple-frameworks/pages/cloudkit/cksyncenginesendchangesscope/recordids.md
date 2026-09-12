> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginesendchangesscope/recordids](https://developer.apple.com/documentation/cloudkit/cksyncenginesendchangesscope/recordids)

# recordIDs

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The scope of record IDs in which to send changes.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSSet<CKRecordID *> * recordIDs;
```

<a id="discussion"></a>

## Discussion

If you only want to send changes for a particular set of records, you can initialize your scope with those records IDs. When creating the next batch of changes to send to the server, consult this property, and only send changes for these record IDs. If this and [zoneIDs](zoneids.md) are `nil`, then you should send all changes.
