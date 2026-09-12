> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamtask/write(_:timeout:completionhandler:)](https://developer.apple.com/documentation/foundation/urlsessionstreamtask/write(_:timeout:completionhandler:))

# write(\_:timeout:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asynchronously writes the specified data to the stream, and calls a handler upon completion.

## Declaration

```swift
func write(_ data: Data, timeout: TimeInterval, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func write(_ data: Data, timeout: TimeInterval) async throws
```

## Parameters

- `data`: The data to be written.
- `timeout`: A timeout for writing bytes. If the write is not completed within the specified interval, the write is canceled and the `completionHandler` is called with an error. Pass `0` to prevent a write from timing out.
- `completionHandler`: The completion handler to call when all bytes are written, or an error occurs. This handler is executed on the delegate queue.

  This completion handler takes the following parameter:

  - **`error`**: An error object that indicates why the write failed, or `nil` if the write was successful.

<a id="Discussion"></a>

## Discussion

There is no guarantee that the remote side of the stream has received all of the written bytes at the time that `completionHandler` is called, only that all of the data has been written to the kernel.

## See Also

### Reading and writing data

- [readData(ofMinLength:maxLength:timeout:completionHandler:)](readdata%28ofminlength_maxlength_timeout_completionhandler_%29.md): Asynchronously reads a number of bytes from the stream, and calls a handler upon completion.

# writeData:timeout:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asynchronously writes the specified data to the stream, and calls a handler upon completion.

## Declaration

```objectivec
- (void) writeData:(NSData *) data timeout:(NSTimeInterval) timeout completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `data`: The data to be written.
- `timeout`: A timeout for writing bytes. If the write is not completed within the specified interval, the write is canceled and the `completionHandler` is called with an error. Pass `0` to prevent a write from timing out.
- `completionHandler`: The completion handler to call when all bytes are written, or an error occurs. This handler is executed on the delegate queue.

  This completion handler takes the following parameter:

  - **`error`**: An error object that indicates why the write failed, or `nil` if the write was successful.

<a id="Discussion"></a>

## Discussion

There is no guarantee that the remote side of the stream has received all of the written bytes at the time that `completionHandler` is called, only that all of the data has been written to the kernel.

## See Also

### Reading and writing data

- [readDataOfMinLength:maxLength:timeout:completionHandler:](readdata%28ofminlength_maxlength_timeout_completionhandler_%29.md): Asynchronously reads a number of bytes from the stream, and calls a handler upon completion.
