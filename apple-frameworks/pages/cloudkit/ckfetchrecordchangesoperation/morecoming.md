> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordchangesoperation/morecoming](https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/morecoming)

# moreComing (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

A Boolean value that indicates whether more results are available.

## Declaration

```swift
var moreComing: Bool { get }
```

<a id="discussion"></a>

## Discussion

If the server is unable to deliver all of the changed results with this operation object, it sets this property to [true](https://developer.apple.com/documentation/swift/true) before executing the block in the [fetchRecordChangesCompletionBlock](fetchrecordchangescompletionblock.md) property. To fetch the remaining changes, create a new [CKFetchRecordChangesOperation](../ckfetchrecordchangesoperation.md) object using the change token that the server returns.

## See Also

### Configuring the Fetch Record Changes Operation

- [recordZoneID](recordzoneid.md): Deprecated. The ID of the record zone with the records you want to fetch.
- [previousServerChangeToken](previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [desiredKeys](desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [resultsLimit](resultslimit.md): Deprecated. The maximum number of changed records to report with this operation object.

# moreComing (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

A Boolean value that indicates whether more results are available.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL moreComing;
```

<a id="discussion"></a>

## Discussion

If the server is unable to deliver all of the changed results with this operation object, it sets this property to [true](https://developer.apple.com/documentation/swift/true) before executing the block in the [fetchRecordChangesCompletionBlock](fetchrecordchangescompletionblock.md) property. To fetch the remaining changes, create a new [CKFetchRecordChangesOperation](../ckfetchrecordchangesoperation.md) object using the change token that the server returns.

## See Also

### Configuring the Fetch Record Changes Operation

- [recordZoneID](recordzoneid.md): Deprecated. The ID of the record zone with the records you want to fetch.
- [previousServerChangeToken](previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [desiredKeys](desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [resultsLimit](resultslimit.md): Deprecated. The maximum number of changed records to report with this operation object.
