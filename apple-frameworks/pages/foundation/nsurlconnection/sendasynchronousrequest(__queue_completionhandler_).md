> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/sendasynchronousrequest(_:queue:completionhandler:)](https://developer.apple.com/documentation/foundation/nsurlconnection/sendasynchronousrequest(_:queue:completionhandler:))

# sendAsynchronousRequest(\_:queue:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Loads the data for a URL request and executes a handler block on an operation queue when the request completes or fails.

> Use \[NSURLSession dataTaskWithRequest:completionHandler:\] (see NSURLSession.h

## Declaration

```swift
class func sendAsynchronousRequest(_ request: URLRequest, queue: OperationQueue, completionHandler handler: @escaping @Sendable (URLResponse?, Data?, (any Error)?) -> Void)
```

```swift
class func sendAsynchronousRequest(_ request: URLRequest, queue: OperationQueue) async throws -> (URLResponse, Data)
```

## Parameters

- `request`: The URL request to load. The `request` object is deep-copied as part of the initialization process. Changes made to `request` after this method returns do not affect the request that is used for the loading process.
- `queue`: The operation queue to which the handler block is dispatched when the request completes or failed.
- `handler`: The handler block to execute.

<a id="Discussion"></a>

## Discussion

If the request completes successfully, the `data` parameter of the handler block contains the resource data, and the `error` parameter is `nil`.  If the request fails, the `data` parameter is `nil` and the error parameter contain information about the failure.

If authentication is required in order to download the request, the required credentials must be specified as part of the URL. If authentication fails, or credentials are missing, the connection will attempt to continue without credentials. If the request finishes with a `401 Unauthorized` status code, the `response` parameter is `nil`, the `data` parameter contains the resource data, and the `error` parameter is an `NSError` with the [NSURLErrorUserCancelledAuthentication](../nsurlerrorusercancelledauthentication-swift.var.md) code in the [NSURLErrorDomain](../nsurlerrordomain.md) error domain.

## See Also

### Loading Data Asynchronously

- [init(request:delegate:)](init%28request_delegate_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request.
- [init(request:delegate:startImmediately:)](init%28request_delegate_startimmediately_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request, if specified.
- [start()](start%28%29.md): Causes the connection to begin loading data, if it has not already.

# sendAsynchronousRequest:queue:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Loads the data for a URL request and executes a handler block on an operation queue when the request completes or fails.

> Use \[NSURLSession dataTaskWithRequest:completionHandler:\] (see NSURLSession.h

## Declaration

```objectivec
+ (void) sendAsynchronousRequest:(NSURLRequest *) request queue:(NSOperationQueue *) queue completionHandler:(void (^)(NSURLResponse *response, NSData *data, NSError *connectionError)) handler;
```

## Parameters

- `request`: The URL request to load. The `request` object is deep-copied as part of the initialization process. Changes made to `request` after this method returns do not affect the request that is used for the loading process.
- `queue`: The operation queue to which the handler block is dispatched when the request completes or failed.
- `handler`: The handler block to execute.

<a id="Discussion"></a>

## Discussion

If the request completes successfully, the `data` parameter of the handler block contains the resource data, and the `error` parameter is `nil`.  If the request fails, the `data` parameter is `nil` and the error parameter contain information about the failure.

If authentication is required in order to download the request, the required credentials must be specified as part of the URL. If authentication fails, or credentials are missing, the connection will attempt to continue without credentials. If the request finishes with a `401 Unauthorized` status code, the `response` parameter is `nil`, the `data` parameter contains the resource data, and the `error` parameter is an `NSError` with the [NSURLErrorUserCancelledAuthentication](../nsurlerrorusercancelledauthentication-swift.var.md) code in the [NSURLErrorDomain](../nsurlerrordomain.md) error domain.

## See Also

### Loading Data Asynchronously

- [connectionWithRequest:delegate:](connectionwithrequest_delegate_.md): Deprecated. Creates and returns an initialized URL connection and begins to load the data for the URL request.
- [initWithRequest:delegate:](init%28request_delegate_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request.
- [initWithRequest:delegate:startImmediately:](init%28request_delegate_startimmediately_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request, if specified.
- [start](start%28%29.md): Causes the connection to begin loading data, if it has not already.
