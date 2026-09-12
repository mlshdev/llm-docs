> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/runinnewthread](https://developer.apple.com/documentation/foundation/nsconnection/runinnewthread)

# runInNewThread

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Creates and starts a new `NSThread` object and then runs the receiving connection in the new thread.

## Declaration

```objectivec
- (void) runInNewThread;
```

<a id="Discussion"></a>

## Discussion

If the newly created thread is the first to be detached from the current thread, this method posts an [NSWillBecomeMultiThreadedNotification](../nsnotification/name-swift.struct/nswillbecomemultithreaded.md) with `nil` to the default notification center.

## See Also

### Running the Connection in a New Thread

- [enableMultipleThreads](enablemultiplethreads.md): Deprecated. Configures the receiver to allow requests from multiple threads to the remote object, without requiring each thread to each maintain its own connection.
- [multipleThreadsEnabled](multiplethreadsenabled.md): Deprecated. A Boolean value that indicates whether the receiver supports requests from multiple threads.
- [addRunLoop:](addrunloop_.md): Deprecated. Adds the specified run loop to the list of run loops the receiver monitors and from which it responds to requests.
- [removeRunLoop:](removerunloop_.md): Deprecated. Removes a given `NSRunLoop` object from the list of run loops the receiver monitors and from which it responds to requests.
