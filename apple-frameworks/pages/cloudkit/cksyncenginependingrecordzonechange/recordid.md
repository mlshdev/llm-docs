> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncenginependingrecordzonechange/recordid

# recordID

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The identifier of the modified record.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CKRecordID * recordID;
```

## See Also

### Accessing the modified record

- [type](type.md): The type of change to make.
- [CKSyncEnginePendingRecordZoneChangeType](../cksyncenginependingrecordzonechangetype.md): A type of change in a record zone that needs to be sent to the server.
