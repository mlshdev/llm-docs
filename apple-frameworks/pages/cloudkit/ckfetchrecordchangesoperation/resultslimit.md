> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordchangesoperation/resultslimit](https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/resultslimit)

# resultsLimit (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The maximum number of changed records to report with this operation object.

## Declaration

```swift
var resultsLimit: Int { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to limit the number of results in situations where you expect the number of changed records to be large. The default value is 0, which causes the server to return an appropriate number of results using dynamic conditions.

When the number of returned results exceeds the results limit, the operation object sets the [moreComing](morecoming.md) property to [true](https://developer.apple.com/documentation/swift/true) before executing the block in the [fetchRecordChangesCompletionBlock](fetchrecordchangescompletionblock.md) property. In your block, check the value of that property, and if it’s [true](https://developer.apple.com/documentation/swift/true), create a new [CKFetchRecordChangesOperation](../ckfetchrecordchangesoperation.md) object to fetch more results.

## See Also

### Configuring the Fetch Record Changes Operation

- [recordZoneID](recordzoneid.md): Deprecated. The ID of the record zone with the records you want to fetch.
- [previousServerChangeToken](previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [desiredKeys](desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [moreComing](morecoming.md): Deprecated. A Boolean value that indicates whether more results are available.

# resultsLimit (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The maximum number of changed records to report with this operation object.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger resultsLimit;
```

<a id="discussion"></a>

## Discussion

Use this property to limit the number of results in situations where you expect the number of changed records to be large. The default value is 0, which causes the server to return an appropriate number of results using dynamic conditions.

When the number of returned results exceeds the results limit, the operation object sets the [moreComing](morecoming.md) property to [true](https://developer.apple.com/documentation/swift/true) before executing the block in the [fetchRecordChangesCompletionBlock](fetchrecordchangescompletionblock.md) property. In your block, check the value of that property, and if it’s [true](https://developer.apple.com/documentation/swift/true), create a new [CKFetchRecordChangesOperation](../ckfetchrecordchangesoperation.md) object to fetch more results.

## See Also

### Configuring the Fetch Record Changes Operation

- [recordZoneID](recordzoneid.md): Deprecated. The ID of the record zone with the records you want to fetch.
- [previousServerChangeToken](previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [desiredKeys](desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [moreComing](morecoming.md): Deprecated. A Boolean value that indicates whether more results are available.
