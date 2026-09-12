> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/cancel()](https://developer.apple.com/documentation/foundation/nsurlconnection/cancel())

# cancel() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels an asynchronous load of a request.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

After this method is called, the connection makes no further delegate method calls. If you want to reattempt the connection, you should create a new connection object.

## See Also

### Related Documentation

- [init(request:delegate:)](init%28request_delegate_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request.

# cancel (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels an asynchronous load of a request.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

After this method is called, the connection makes no further delegate method calls. If you want to reattempt the connection, you should create a new connection object.

## See Also

### Related Documentation

- [connectionWithRequest:delegate:](connectionwithrequest_delegate_.md): Deprecated. Creates and returns an initialized URL connection and begins to load the data for the URL request.
- [initWithRequest:delegate:](init%28request_delegate_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request.
