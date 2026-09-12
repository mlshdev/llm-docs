> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/start()](https://developer.apple.com/documentation/foundation/nsurlconnection/start())

# start() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Causes the connection to begin loading data, if it has not already.

## Declaration

```swift
func start()
```

<a id="Discussion"></a>

## Discussion

Calling this method is necessary only if you create a connection with the [init(request:delegate:startImmediately:)](init%28request_delegate_startimmediately_%29.md) method and provide [false](https://developer.apple.com/documentation/swift/false) for the `startImmediately` parameter. If you don’t schedule the connection in a run loop or an operation queue before calling this method, the connection is scheduled in the current run loop in the default mode.

## See Also

### Loading Data Asynchronously

- [init(request:delegate:)](init%28request_delegate_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request.
- [init(request:delegate:startImmediately:)](init%28request_delegate_startimmediately_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request, if specified.
- [sendAsynchronousRequest(\_:queue:completionHandler:)](sendasynchronousrequest%28__queue_completionhandler_%29.md): Deprecated. Loads the data for a URL request and executes a handler block on an operation queue when the request completes or fails.

# start (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Causes the connection to begin loading data, if it has not already.

## Declaration

```objectivec
- (void) start;
```

<a id="Discussion"></a>

## Discussion

Calling this method is necessary only if you create a connection with the [initWithRequest:delegate:startImmediately:](init%28request_delegate_startimmediately_%29.md) method and provide [false](https://developer.apple.com/documentation/swift/false) for the `startImmediately` parameter. If you don’t schedule the connection in a run loop or an operation queue before calling this method, the connection is scheduled in the current run loop in the default mode.

## See Also

### Loading Data Asynchronously

- [connectionWithRequest:delegate:](connectionwithrequest_delegate_.md): Deprecated. Creates and returns an initialized URL connection and begins to load the data for the URL request.
- [initWithRequest:delegate:](init%28request_delegate_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request.
- [initWithRequest:delegate:startImmediately:](init%28request_delegate_startimmediately_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request, if specified.
- [sendAsynchronousRequest:queue:completionHandler:](sendasynchronousrequest%28__queue_completionhandler_%29.md): Deprecated. Loads the data for a URL request and executes a handler block on an operation queue when the request completes or fails.
