> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginependingzonedelete/initwithzoneid:](https://developer.apple.com/documentation/cloudkit/cksyncenginependingzonedelete/initwithzoneid:)

# initWithZoneID:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a pending zone delete for the specified record zone identifier.

## Declaration

```objectivec
- (instancetype) initWithZoneID:(CKRecordZoneID *) zoneID;
```

## Parameters

- `zoneID`: The unique identifier of the record zone to delete.

<a id="return-value"></a>

## Return Value

An initialized pending zone delete.
