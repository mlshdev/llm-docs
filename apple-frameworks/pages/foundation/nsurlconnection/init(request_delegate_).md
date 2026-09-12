> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/init(request:delegate:)](https://developer.apple.com/documentation/foundation/nsurlconnection/init(request:delegate:))

# init(request:delegate:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Returns an initialized URL connection and begins to load the data for the URL request.

> Use NSURLSession (see NSURLSession.h)

## Declaration

```swift
init?(request: URLRequest, delegate: Any?)
```

## Parameters

- `request`: The URL request to load. The `request` object is deep-copied as part of the initialization process. Changes made to `request` after this method returns do not affect the request that is used for the loading process.
- `delegate`: The delegate object for the connection. The connection calls methods on this delegate as the load progresses. Delegate methods are called on the same thread that called this method. By default, for the connection to work correctly, the calling thread’s run loop must be operating in the default run loop mode. See [schedule(in:forMode:)](schedule%28in_formode_%29.md) to change the run loop and mode.

<a id="return-value"></a>

## Return Value

The URL connection for the URL request. Returns `nil` if a connection can’t be initialized.

<a id="Discussion"></a>

## Discussion

This is equivalent to calling [init(request:delegate:startImmediately:)](init%28request_delegate_startimmediately_%29.md) and passing [true](https://developer.apple.com/documentation/swift/true) for `startImmediately`.

<a id="Special-Considerations"></a>

### Special Considerations

During the download the connection maintains a strong reference to the `delegate`. It releases that strong reference when the connection finishes loading, fails, or is canceled.

## See Also

### Loading Data Asynchronously

- [init(request:delegate:startImmediately:)](init%28request_delegate_startimmediately_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request, if specified.
- [sendAsynchronousRequest(\_:queue:completionHandler:)](sendasynchronousrequest%28__queue_completionhandler_%29.md): Deprecated. Loads the data for a URL request and executes a handler block on an operation queue when the request completes or fails.
- [start()](start%28%29.md): Causes the connection to begin loading data, if it has not already.

# initWithRequest:delegate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Returns an initialized URL connection and begins to load the data for the URL request.

> Use NSURLSession (see NSURLSession.h)

## Declaration

```objectivec
- (instancetype) initWithRequest:(NSURLRequest *) request delegate:(id) delegate;
```

## Parameters

- `request`: The URL request to load. The `request` object is deep-copied as part of the initialization process. Changes made to `request` after this method returns do not affect the request that is used for the loading process.
- `delegate`: The delegate object for the connection. The connection calls methods on this delegate as the load progresses. Delegate methods are called on the same thread that called this method. By default, for the connection to work correctly, the calling thread’s run loop must be operating in the default run loop mode. See [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md) to change the run loop and mode.

<a id="return-value"></a>

## Return Value

The URL connection for the URL request. Returns `nil` if a connection can’t be initialized.

<a id="Discussion"></a>

## Discussion

This is equivalent to calling [initWithRequest:delegate:startImmediately:](init%28request_delegate_startimmediately_%29.md) and passing [true](https://developer.apple.com/documentation/swift/true) for `startImmediately`.

<a id="Special-Considerations"></a>

### Special Considerations

During the download the connection maintains a strong reference to the `delegate`. It releases that strong reference when the connection finishes loading, fails, or is canceled.

## See Also

### Related Documentation

- [connectionWithRequest:delegate:](connectionwithrequest_delegate_.md): Deprecated. Creates and returns an initialized URL connection and begins to load the data for the URL request.

### Loading Data Asynchronously

- [connectionWithRequest:delegate:](connectionwithrequest_delegate_.md): Deprecated. Creates and returns an initialized URL connection and begins to load the data for the URL request.
- [initWithRequest:delegate:startImmediately:](init%28request_delegate_startimmediately_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request, if specified.
- [sendAsynchronousRequest:queue:completionHandler:](sendasynchronousrequest%28__queue_completionhandler_%29.md): Deprecated. Loads the data for a URL request and executes a handler block on an operation queue when the request completes or fails.
- [start](start%28%29.md): Causes the connection to begin loading data, if it has not already.
