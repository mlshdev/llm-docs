> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/connectionwithrequest:delegate:](https://developer.apple.com/documentation/foundation/nsurlconnection/connectionwithrequest:delegate:)

# connectionWithRequest:delegate:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Creates and returns an initialized URL connection and begins to load the data for the URL request.

## Declaration

```objectivec
+ (NSURLConnection *) connectionWithRequest:(NSURLRequest *) request delegate:(id) delegate;
```

## Parameters

- `request`: The URL request to load. The `request` object is deep-copied as part of the initialization process. Changes made to `request` after this method returns do not affect the request that is used for the loading process.
- `delegate`: The delegate object for the connection. The connection calls methods on this delegate as the load progresses. Delegate methods are called on the same thread that called this method. For the connection to work correctly, the calling thread’s run loop must be operating in the default run loop mode.

<a id="return-value"></a>

## Return Value

The URL connection for the URL request. Returns `nil` if a connection can’t be created.

<a id="Discussion"></a>

## Discussion

During the download the connection maintains a strong reference to the `delegate`. It releases that strong reference when the connection finishes loading, fails, or is canceled.

## See Also

### Loading Data Asynchronously

- [initWithRequest:delegate:](init%28request_delegate_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request.
- [initWithRequest:delegate:startImmediately:](init%28request_delegate_startimmediately_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request, if specified.
- [sendAsynchronousRequest:queue:completionHandler:](sendasynchronousrequest%28__queue_completionhandler_%29.md): Deprecated. Loads the data for a URL request and executes a handler block on an operation queue when the request completes or fails.
- [start](start%28%29.md): Causes the connection to begin loading data, if it has not already.
