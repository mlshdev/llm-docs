> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginependingrecordzonechange/initwithrecordid:type:](https://developer.apple.com/documentation/cloudkit/cksyncenginependingrecordzonechange/initwithrecordid:type:)

# initWithRecordID:type:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a record zone change of the specified type for the given record.

## Declaration

```objectivec
- (instancetype) initWithRecordID:(CKRecordID *) recordID type:(CKSyncEnginePendingRecordZoneChangeType) type;
```

## Parameters

- `recordID`: The identifier of the record to change.
- `type`: The type of change to make.

<a id="return-value"></a>

## Return Value

An initialized record zone change.
