> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonesoperation/recordzoneids](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation/recordzoneids)

# recordZoneIDs (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The IDs of the record zones to retrieve.

## Declaration

```swift
var recordZoneIDs: [CKRecordZone.ID]? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to view or change the IDs of the record zones you want to retrieve. If you intend to change the value of this property, do so before you execute the operation or submit the operation to a queue.

If you use the operation that [fetchAllRecordZonesOperation()](fetchallrecordzonesoperation%28%29.md) returns, CloudKit ignores the contents of this property and sets its value to `nil`.

# recordZoneIDs (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The IDs of the record zones to retrieve.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<CKRecordZoneID *> * recordZoneIDs;
```

<a id="discussion"></a>

## Discussion

Use this property to view or change the IDs of the record zones you want to retrieve. If you intend to change the value of this property, do so before you execute the operation or submit the operation to a queue.

If you use the operation that [fetchAllRecordZonesOperation](fetchallrecordzonesoperation%28%29.md) returns, CloudKit ignores the contents of this property and sets its value to `nil`.
