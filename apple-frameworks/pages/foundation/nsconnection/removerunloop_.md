> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/removerunloop:](https://developer.apple.com/documentation/foundation/nsconnection/removerunloop:)

# removeRunLoop:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Removes a given `NSRunLoop` object from the list of run loops the receiver monitors and from which it responds to requests.

## Declaration

```objectivec
- (void) removeRunLoop:(NSRunLoop *) runloop;
```

## Parameters

- `runloop`: The run loop to remove from the receiver.

## See Also

### Running the Connection in a New Thread

- [runInNewThread](runinnewthread.md): Deprecated. Creates and starts a new `NSThread` object and then runs the receiving connection in the new thread.
- [enableMultipleThreads](enablemultiplethreads.md): Deprecated. Configures the receiver to allow requests from multiple threads to the remote object, without requiring each thread to each maintain its own connection.
- [multipleThreadsEnabled](multiplethreadsenabled.md): Deprecated. A Boolean value that indicates whether the receiver supports requests from multiple threads.
- [addRunLoop:](addrunloop_.md): Deprecated. Adds the specified run loop to the list of run loops the receiver monitors and from which it responds to requests.
