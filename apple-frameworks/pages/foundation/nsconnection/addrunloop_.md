> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/addrunloop:](https://developer.apple.com/documentation/foundation/nsconnection/addrunloop:)

# addRunLoop:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Adds the specified run loop to the list of run loops the receiver monitors and from which it responds to requests.

## Declaration

```objectivec
- (void) addRunLoop:(NSRunLoop *) runloop;
```

## Parameters

- `runloop`: The run loop to add to the receiver.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically when a request comes in from a new run loop if [enableMultipleThreads](enablemultiplethreads.md) has been set.

## See Also

### Running the Connection in a New Thread

- [runInNewThread](runinnewthread.md): Deprecated. Creates and starts a new `NSThread` object and then runs the receiving connection in the new thread.
- [enableMultipleThreads](enablemultiplethreads.md): Deprecated. Configures the receiver to allow requests from multiple threads to the remote object, without requiring each thread to each maintain its own connection.
- [multipleThreadsEnabled](multiplethreadsenabled.md): Deprecated. A Boolean value that indicates whether the receiver supports requests from multiple threads.
- [removeRunLoop:](removerunloop_.md): Deprecated. Removes a given `NSRunLoop` object from the list of run loops the receiver monitors and from which it responds to requests.
