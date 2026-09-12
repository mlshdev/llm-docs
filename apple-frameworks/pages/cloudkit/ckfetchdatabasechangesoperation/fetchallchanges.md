> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchdatabasechangesoperation/fetchallchanges](https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/fetchallchanges)

# fetchAllChanges (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether to send repeated requests to the server.

## Declaration

```swift
var fetchAllChanges: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the operation sends repeat requests to the server until it fetches all changes. CloudKit executes the handler you set on the [changeTokenUpdatedBlock](changetokenupdatedblock.md) property with a change token after each request.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Operation

- [previousServerChangeToken](previousserverchangetoken.md): The server change token.
- [resultsLimit](resultslimit.md): The maximum number of results that the operation fetches.

# fetchAllChanges (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether to send repeated requests to the server.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL fetchAllChanges;
```

<a id="discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the operation sends repeat requests to the server until it fetches all changes. CloudKit executes the handler you set on the [changeTokenUpdatedBlock](changetokenupdatedblock.md) property with a change token after each request.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Operation

- [previousServerChangeToken](previousserverchangetoken.md): The server change token.
- [resultsLimit](resultslimit.md): The maximum number of results that the operation fetches.
