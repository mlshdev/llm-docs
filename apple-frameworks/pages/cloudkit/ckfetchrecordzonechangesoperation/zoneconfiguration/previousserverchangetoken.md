> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneconfiguration/previousserverchangetoken](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneconfiguration/previousserverchangetoken)

# previousServerChangeToken (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The token that identifies the starting point for retrieving changes.

## Declaration

```swift
@NSCopying var previousServerChangeToken: CKServerChangeToken? { get set }
```

<a id="discussion"></a>

## Discussion

Each fetch request returns a unique token in addition to any changes. CloudKit passes the token to your [recordZoneFetchResultBlock](../recordzonefetchresultblock.md) handler. During a subsequent fetch request, providing the previous token causes the server to return only the changes since the previous fetch request. Tokens are opaque values that you can write to disk safely and reuse later.

## See Also

### Accessing a Zone Change Configuration

- [resultsLimit](resultslimit.md): The maximum number of records to fetch from the record zone.
- [desiredKeys](desiredkeys.md): The fields to fetch for the requested records.

# previousServerChangeToken (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The token that identifies the starting point for retrieving changes.

## Declaration

```objectivec
@property (copy, nullable) CKServerChangeToken * previousServerChangeToken;
```

<a id="discussion"></a>

## Discussion

Each fetch request returns a unique token in addition to any changes. CloudKit passes the token to your [recordZoneFetchResultBlock](../recordzonefetchresultblock.md) handler. During a subsequent fetch request, providing the previous token causes the server to return only the changes since the previous fetch request. Tokens are opaque values that you can write to disk safely and reuse later.

## See Also

### Accessing a Zone Change Configuration

- [resultsLimit](resultslimit.md): The maximum number of records to fetch from the record zone.
- [desiredKeys](../../ckfetchrecordzonechangesconfiguration/desiredkeys.md): The fields to fetch for the requested records.
