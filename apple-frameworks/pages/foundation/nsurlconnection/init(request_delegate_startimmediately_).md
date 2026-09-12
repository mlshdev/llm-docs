> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/init(request:delegate:startimmediately:)](https://developer.apple.com/documentation/foundation/nsurlconnection/init(request:delegate:startimmediately:))

# init(request:delegate:startImmediately:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Returns an initialized URL connection and begins to load the data for the URL request, if specified.

> Use NSURLSession (see NSURLSession.h)

## Declaration

```swift
init?(request: URLRequest, delegate: Any?, startImmediately: Bool)
```

## Parameters

- `request`: The URL request to load. The `request` object is deep-copied as part of the initialization process. Changes made to `request` after this method returns do not affect the request that is used for the loading process.
- `delegate`: The delegate object for the connection. The connection calls methods on this delegate as the load progresses.
- `startImmediately`: [true](https://developer.apple.com/documentation/swift/true) if the connection should begin loading data immediately, otherwise [false](https://developer.apple.com/documentation/swift/false). If you pass [false](https://developer.apple.com/documentation/swift/false), the connection is not scheduled with a run loop. You can then schedule the connection in the run loop and mode of your choice by calling [schedule(in:forMode:)](schedule%28in_formode_%29.md).

<a id="return-value"></a>

## Return Value

The URL connection for the URL request. Returns `nil` if a connection can’t be initialized.

<a id="Discussion"></a>

## Discussion

During the download the connection maintains a strong reference to the `delegate`. It releases that strong reference when the connection finishes loading, fails, or is canceled.

## See Also

### Loading Data Asynchronously

- [init(request:delegate:)](init%28request_delegate_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request.
- [sendAsynchronousRequest(\_:queue:completionHandler:)](sendasynchronousrequest%28__queue_completionhandler_%29.md): Deprecated. Loads the data for a URL request and executes a handler block on an operation queue when the request completes or fails.
- [start()](start%28%29.md): Causes the connection to begin loading data, if it has not already.

# initWithRequest:delegate:startImmediately: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Returns an initialized URL connection and begins to load the data for the URL request, if specified.

> Use NSURLSession (see NSURLSession.h)

## Declaration

```objectivec
- (instancetype) initWithRequest:(NSURLRequest *) request delegate:(id) delegate startImmediately:(BOOL) startImmediately;
```

## Parameters

- `request`: The URL request to load. The `request` object is deep-copied as part of the initialization process. Changes made to `request` after this method returns do not affect the request that is used for the loading process.
- `delegate`: The delegate object for the connection. The connection calls methods on this delegate as the load progresses.
- `startImmediately`: [true](https://developer.apple.com/documentation/swift/true) if the connection should begin loading data immediately, otherwise [false](https://developer.apple.com/documentation/swift/false). If you pass [false](https://developer.apple.com/documentation/swift/false), the connection is not scheduled with a run loop. You can then schedule the connection in the run loop and mode of your choice by calling [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md).

<a id="return-value"></a>

## Return Value

The URL connection for the URL request. Returns `nil` if a connection can’t be initialized.

<a id="Discussion"></a>

## Discussion

During the download the connection maintains a strong reference to the `delegate`. It releases that strong reference when the connection finishes loading, fails, or is canceled.

## See Also

### Loading Data Asynchronously

- [connectionWithRequest:delegate:](connectionwithrequest_delegate_.md): Deprecated. Creates and returns an initialized URL connection and begins to load the data for the URL request.
- [initWithRequest:delegate:](init%28request_delegate_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request.
- [sendAsynchronousRequest:queue:completionHandler:](sendasynchronousrequest%28__queue_completionhandler_%29.md): Deprecated. Loads the data for a URL request and executes a handler block on an operation queue when the request completes or fails.
- [start](start%28%29.md): Causes the connection to begin loading data, if it has not already.
