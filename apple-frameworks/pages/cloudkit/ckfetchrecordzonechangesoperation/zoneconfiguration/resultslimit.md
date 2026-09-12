> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneconfiguration/resultslimit](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneconfiguration/resultslimit)

# resultsLimit (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The maximum number of records to fetch from the record zone.

## Declaration

```swift
var resultsLimit: Int { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to limit the number of results in situations where you expect a large number of records. The default value is 0, which causes the server to return an appropriate number of records using dynamic conditions.

When the number of records that CloudKit returns exceeds this limit, the operation sets the `moreComing` property to [true](https://developer.apple.com/documentation/swift/true) when executing the [recordZoneFetchResultBlock](../recordzonefetchresultblock.md) handler.

## See Also

### Accessing a Zone Change Configuration

- [previousServerChangeToken](previousserverchangetoken.md): The token that identifies the starting point for retrieving changes.
- [desiredKeys](desiredkeys.md): The fields to fetch for the requested records.

# resultsLimit (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The maximum number of records to fetch from the record zone.

## Declaration

```objectivec
@property (assign) NSUInteger resultsLimit;
```

<a id="discussion"></a>

## Discussion

Use this property to limit the number of results in situations where you expect a large number of records. The default value is 0, which causes the server to return an appropriate number of records using dynamic conditions.

When the number of records that CloudKit returns exceeds this limit, the operation sets the `moreComing` property to [true](https://developer.apple.com/documentation/swift/true) when executing the [recordZoneFetchResultBlock](../recordzonefetchresultblock.md) handler.

## See Also

### Accessing a Zone Change Configuration

- [previousServerChangeToken](previousserverchangetoken.md): The token that identifies the starting point for retrieving changes.
- [desiredKeys](../../ckfetchrecordzonechangesconfiguration/desiredkeys.md): The fields to fetch for the requested records.
