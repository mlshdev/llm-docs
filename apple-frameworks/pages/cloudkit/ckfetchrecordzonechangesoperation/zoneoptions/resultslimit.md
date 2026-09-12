> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneoptions/resultslimit](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneoptions/resultslimit)

# resultsLimit (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 5.0)

The maximum number of records to fetch from the record zone.

## Declaration

```swift
var resultsLimit: Int { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to limit the number of results in situations where you expect a large number of records. The default value is 0, which causes the server to return an appropriate number of records using dynamic conditions.

When the number of records that CloudKit returns exceeds this limit, the operation sets the `moreComing` property to [true](https://developer.apple.com/documentation/swift/true) when executing the [recordZoneFetchCompletionBlock](../recordzonefetchcompletionblock.md) handler.

## See Also

### Zone Change Options

- [desiredKeys](desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [previousServerChangeToken](previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.

# resultsLimit (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 5.0)

The maximum number of records to fetch from the record zone.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger resultsLimit;
```

<a id="discussion"></a>

## Discussion

Use this property to limit the number of results in situations where you expect a large number of records. The default value is 0, which causes the server to return an appropriate number of records using dynamic conditions.

When the number of records that CloudKit returns exceeds this limit, the operation sets the `moreComing` property to [true](https://developer.apple.com/documentation/swift/true) when executing the [recordZoneFetchCompletionBlock](../recordzonefetchcompletionblock.md) handler.

## See Also

### Zone Change Options

- [desiredKeys](desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [previousServerChangeToken](previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
