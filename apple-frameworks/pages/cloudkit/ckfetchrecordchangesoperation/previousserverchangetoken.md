> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordchangesoperation/previousserverchangetoken](https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/previousserverchangetoken)

# previousServerChangeToken (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The token that identifies the starting point for retrieving changes.

## Declaration

```swift
@NSCopying var previousServerChangeToken: CKServerChangeToken? { get set }
```

<a id="discussion"></a>

## Discussion

Each fetch request returns a unique token in addition to any changes. The token passes as a parameter to your [fetchRecordChangesCompletionBlock](fetchrecordchangescompletionblock.md) handler. During a subsequent fetch request, providing the previous token causes the server to return only the changes that occur after the previous fetch request. Tokens are opaque data objects that you can write to disk safely and reuse later.

Typically, you set the value of this property when you initialize the operation object. If you intend to change the record zone, update the value of the property before executing the operation or submitting it to a queue.

## See Also

### Configuring the Fetch Record Changes Operation

- [recordZoneID](recordzoneid.md): Deprecated. The ID of the record zone with the records you want to fetch.
- [desiredKeys](desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [resultsLimit](resultslimit.md): Deprecated. The maximum number of changed records to report with this operation object.
- [moreComing](morecoming.md): Deprecated. A Boolean value that indicates whether more results are available.

# previousServerChangeToken (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The token that identifies the starting point for retrieving changes.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CKServerChangeToken * previousServerChangeToken;
```

<a id="discussion"></a>

## Discussion

Each fetch request returns a unique token in addition to any changes. The token passes as a parameter to your [fetchRecordChangesCompletionBlock](fetchrecordchangescompletionblock.md) handler. During a subsequent fetch request, providing the previous token causes the server to return only the changes that occur after the previous fetch request. Tokens are opaque data objects that you can write to disk safely and reuse later.

Typically, you set the value of this property when you initialize the operation object. If you intend to change the record zone, update the value of the property before executing the operation or submitting it to a queue.

## See Also

### Configuring the Fetch Record Changes Operation

- [recordZoneID](recordzoneid.md): Deprecated. The ID of the record zone with the records you want to fetch.
- [desiredKeys](desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [resultsLimit](resultslimit.md): Deprecated. The maximum number of changed records to report with this operation object.
- [moreComing](morecoming.md): Deprecated. A Boolean value that indicates whether more results are available.
