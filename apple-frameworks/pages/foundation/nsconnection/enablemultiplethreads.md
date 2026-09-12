> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/enablemultiplethreads](https://developer.apple.com/documentation/foundation/nsconnection/enablemultiplethreads)

# enableMultipleThreads

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Configures the receiver to allow requests from multiple threads to the remote object, without requiring each thread to each maintain its own connection.

## Declaration

```objectivec
- (void) enableMultipleThreads;
```

<a id="Discussion"></a>

## Discussion

In macOS 10.5 and later, multiple thread support is enabled by default and this method does nothing.

## See Also

### Running the Connection in a New Thread

- [runInNewThread](runinnewthread.md): Deprecated. Creates and starts a new `NSThread` object and then runs the receiving connection in the new thread.
- [multipleThreadsEnabled](multiplethreadsenabled.md): Deprecated. A Boolean value that indicates whether the receiver supports requests from multiple threads.
- [addRunLoop:](addrunloop_.md): Deprecated. Adds the specified run loop to the list of run loops the receiver monitors and from which it responds to requests.
- [removeRunLoop:](removerunloop_.md): Deprecated. Removes a given `NSRunLoop` object from the list of run loops the receiver monitors and from which it responds to requests.
