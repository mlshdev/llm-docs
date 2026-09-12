> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/multiplethreadsenabled](https://developer.apple.com/documentation/foundation/nsconnection/multiplethreadsenabled)

# multipleThreadsEnabled

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A Boolean value that indicates whether the receiver supports requests from multiple threads.

## Declaration

```objectivec
@property (readonly) BOOL multipleThreadsEnabled;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver supports requests from multiple threads.

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver supports requests from multiple threads, otherwise [false](https://developer.apple.com/documentation/swift/false).

The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Running the Connection in a New Thread

- [runInNewThread](runinnewthread.md): Deprecated. Creates and starts a new `NSThread` object and then runs the receiving connection in the new thread.
- [enableMultipleThreads](enablemultiplethreads.md): Deprecated. Configures the receiver to allow requests from multiple threads to the remote object, without requiring each thread to each maintain its own connection.
- [addRunLoop:](addrunloop_.md): Deprecated. Adds the specified run loop to the list of run loops the receiver monitors and from which it responds to requests.
- [removeRunLoop:](removerunloop_.md): Deprecated. Removes a given `NSRunLoop` object from the list of run loops the receiver monitors and from which it responds to requests.
