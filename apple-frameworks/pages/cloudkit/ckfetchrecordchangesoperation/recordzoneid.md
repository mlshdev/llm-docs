> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordchangesoperation/recordzoneid](https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/recordzoneid)

# recordZoneID (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The ID of the record zone with the records you want to fetch.

## Declaration

```swift
@NSCopying var recordZoneID: CKRecordZone.ID? { get set }
```

<a id="discussion"></a>

## Discussion

Typically, you set the value of this property when you initialize the operation object. If you intend to change the record zone, update the value before executing the operation or submitting it to a queue.

## See Also

### Configuring the Fetch Record Changes Operation

- [previousServerChangeToken](previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [desiredKeys](desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [resultsLimit](resultslimit.md): Deprecated. The maximum number of changed records to report with this operation object.
- [moreComing](morecoming.md): Deprecated. A Boolean value that indicates whether more results are available.

# recordZoneID (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The ID of the record zone with the records you want to fetch.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CKRecordZoneID * recordZoneID;
```

<a id="discussion"></a>

## Discussion

Typically, you set the value of this property when you initialize the operation object. If you intend to change the record zone, update the value before executing the operation or submitting it to a queue.

## See Also

### Configuring the Fetch Record Changes Operation

- [previousServerChangeToken](previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [desiredKeys](desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [resultsLimit](resultslimit.md): Deprecated. The maximum number of changed records to report with this operation object.
- [moreComing](morecoming.md): Deprecated. A Boolean value that indicates whether more results are available.
