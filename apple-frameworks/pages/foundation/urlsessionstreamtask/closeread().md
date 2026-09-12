> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamtask/closeread()](https://developer.apple.com/documentation/foundation/urlsessionstreamtask/closeread())

# closeRead() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Completes any enqueued reads and writes, and then closes the read side of the underlying socket.

## Declaration

```swift
func closeRead()
```

<a id="Discussion"></a>

## Discussion

You may continue to write data using the [write(\_:timeout:completionHandler:)](write%28__timeout_completionhandler_%29.md) method after calling this method. Any calls to [readData(ofMinLength:maxLength:timeout:completionHandler:)](readdata%28ofminlength_maxlength_timeout_completionhandler_%29.md) after calling this method will result in an error.

## See Also

### Closing read and write sockets

- [closeWrite()](closewrite%28%29.md): Completes any enqueued reads and writes, and then closes the write side of the underlying socket.

# closeRead (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Completes any enqueued reads and writes, and then closes the read side of the underlying socket.

## Declaration

```objectivec
- (void) closeRead;
```

<a id="Discussion"></a>

## Discussion

You may continue to write data using the [writeData:timeout:completionHandler:](write%28__timeout_completionhandler_%29.md) method after calling this method. Any calls to [readDataOfMinLength:maxLength:timeout:completionHandler:](readdata%28ofminlength_maxlength_timeout_completionhandler_%29.md) after calling this method will result in an error.

## See Also

### Closing read and write sockets

- [closeWrite](closewrite%28%29.md): Completes any enqueued reads and writes, and then closes the write side of the underlying socket.
