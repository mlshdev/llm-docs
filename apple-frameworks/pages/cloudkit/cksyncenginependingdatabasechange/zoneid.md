> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncenginependingdatabasechange/zoneid

# zoneID

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The identifier of the record zone to change.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CKRecordZoneID * zoneID;
```

## See Also

### Understanding the change

- [type](type.md): The type of database change.
- [CKSyncEnginePendingDatabaseChangeType](../cksyncenginependingdatabasechangetype.md): Describes the type of a pending database change.
