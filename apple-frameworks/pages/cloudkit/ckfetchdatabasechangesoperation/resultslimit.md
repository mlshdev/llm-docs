> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchdatabasechangesoperation/resultslimit](https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/resultslimit)

# resultsLimit (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The maximum number of results that the operation fetches.

## Declaration

```swift
var resultsLimit: Int { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to limit the number of changes this operation returns. When the operation reaches the limit, it updates the change token and returns it to indicate that more results are available.

## See Also

### Configuring the Operation

- [fetchAllChanges](fetchallchanges.md): A Boolean value that indicates whether to send repeated requests to the server.
- [previousServerChangeToken](previousserverchangetoken.md): The server change token.

# resultsLimit (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The maximum number of results that the operation fetches.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger resultsLimit;
```

<a id="discussion"></a>

## Discussion

Use this property to limit the number of changes this operation returns. When the operation reaches the limit, it updates the change token and returns it to indicate that more results are available.

## See Also

### Configuring the Operation

- [fetchAllChanges](fetchallchanges.md): A Boolean value that indicates whether to send repeated requests to the server.
- [previousServerChangeToken](previousserverchangetoken.md): The server change token.
