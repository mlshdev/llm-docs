> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchwebauthtokenoperation/fetchwebauthtokencompletionblock](https://developer.apple.com/documentation/cloudkit/ckfetchwebauthtokenoperation/fetchwebauthtokencompletionblock)

# fetchWebAuthTokenCompletionBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 9.2+ (deprecated in 15.0) · iPadOS 9.2+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.11+ (deprecated in 12.0) · tvOS 9.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The block to execute when the operation finishes.

> Use fetchWebAuthTokenResultBlock instead

## Declaration

```swift
var fetchWebAuthTokenCompletionBlock: ((String?, (any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- If the operation is successful, the web authentication token; otherwise, `nil`.
- An error that contains information about a problem, or `nil` if the system successfully fetches the token.

The operation executes this closure only once. You must provide a closure capable of executing on a background thread, so any tasks that require access to the main thread must dispatch accordingly.

## See Also

### Managing the Operation’s Configuration

- [apiToken](apitoken.md): The API token that allows access to an app’s container.

# fetchWebAuthTokenCompletionBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.1+ · visionOS 1.0+ · watchOS 3.0+

The block to execute when the operation finishes.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^fetchWebAuthTokenCompletionBlock)(NSString *webAuthToken, NSError *operationError);
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- If the operation is successful, the web authentication token; otherwise, `nil`.
- An error that contains information about a problem, or `nil` if the system successfully fetches the token.

The operation executes this closure only once. You must provide a closure capable of executing on a background thread, so any tasks that require access to the main thread must dispatch accordingly.

## See Also

### Managing the Operation’s Configuration

- [APIToken](apitoken.md): The API token that allows access to an app’s container.
