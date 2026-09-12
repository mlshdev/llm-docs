> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamtask/closewrite()](https://developer.apple.com/documentation/foundation/urlsessionstreamtask/closewrite())

# closeWrite() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Completes any enqueued reads and writes, and then closes the write side of the underlying socket.

## Declaration

```swift
func closeWrite()
```

<a id="Discussion"></a>

## Discussion

You may continue to read data using the [readData(ofMinLength:maxLength:timeout:completionHandler:)](readdata%28ofminlength_maxlength_timeout_completionhandler_%29.md) method after calling this method. Any calls to [write(\_:timeout:completionHandler:)](write%28__timeout_completionhandler_%29.md) after calling this method will result in an error.

Because the server may continue to write bytes to the client, it is recommended that you continue reading until the stream reaches end-of-file (EOF).

## See Also

### Closing read and write sockets

- [closeRead()](closeread%28%29.md): Completes any enqueued reads and writes, and then closes the read side of the underlying socket.

# closeWrite (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Completes any enqueued reads and writes, and then closes the write side of the underlying socket.

## Declaration

```objectivec
- (void) closeWrite;
```

<a id="Discussion"></a>

## Discussion

You may continue to read data using the [readDataOfMinLength:maxLength:timeout:completionHandler:](readdata%28ofminlength_maxlength_timeout_completionhandler_%29.md) method after calling this method. Any calls to [writeData:timeout:completionHandler:](write%28__timeout_completionhandler_%29.md) after calling this method will result in an error.

Because the server may continue to write bytes to the client, it is recommended that you continue reading until the stream reaches end-of-file (EOF).

## See Also

### Closing read and write sockets

- [closeRead](closeread%28%29.md): Completes any enqueued reads and writes, and then closes the read side of the underlying socket.
