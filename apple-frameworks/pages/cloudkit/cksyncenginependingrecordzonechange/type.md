> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncenginependingrecordzonechange/type

# type

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The type of change to make.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CKSyncEnginePendingRecordZoneChangeType type;
```

## See Also

### Accessing the modified record

- [recordID](recordid.md): The identifier of the modified record.
- [CKSyncEnginePendingRecordZoneChangeType](../cksyncenginependingrecordzonechangetype.md): A type of change in a record zone that needs to be sent to the server.
