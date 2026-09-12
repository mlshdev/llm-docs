> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchdatabasechangesoperation/previousserverchangetoken](https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/previousserverchangetoken)

# previousServerChangeToken (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The server change token.

## Declaration

```swift
@NSCopying var previousServerChangeToken: CKServerChangeToken? { get set }
```

<a id="discussion"></a>

## Discussion

Assign the token you receive from the [fetchDatabaseChangesCompletionBlock](fetchdatabasechangescompletionblock.md) to this property. Doing so yields only the changes that occur after your most recent fetch operation. If you specify `nil` for this parameter, the operation fetches all changes.

## See Also

### Configuring the Operation

- [fetchAllChanges](fetchallchanges.md): A Boolean value that indicates whether to send repeated requests to the server.
- [resultsLimit](resultslimit.md): The maximum number of results that the operation fetches.

# previousServerChangeToken (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The server change token.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CKServerChangeToken * previousServerChangeToken;
```

<a id="discussion"></a>

## Discussion

Assign the token you receive from the [fetchDatabaseChangesCompletionBlock](fetchdatabasechangescompletionblock.md) to this property. Doing so yields only the changes that occur after your most recent fetch operation. If you specify `nil` for this parameter, the operation fetches all changes.

## See Also

### Configuring the Operation

- [fetchAllChanges](fetchallchanges.md): A Boolean value that indicates whether to send repeated requests to the server.
- [resultsLimit](resultslimit.md): The maximum number of results that the operation fetches.
