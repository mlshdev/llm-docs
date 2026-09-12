> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamtask/readdata(ofminlength:maxlength:timeout:completionhandler:)](https://developer.apple.com/documentation/foundation/urlsessionstreamtask/readdata(ofminlength:maxlength:timeout:completionhandler:))

# readData(ofMinLength:maxLength:timeout:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asynchronously reads a number of bytes from the stream, and calls a handler upon completion.

## Declaration

```swift
func readData(ofMinLength minBytes: Int, maxLength maxBytes: Int, timeout: TimeInterval, completionHandler: @escaping @Sendable (Data?, Bool, (any Error)?) -> Void)
```

```swift
func readData(ofMinLength minBytes: Int, maxLength maxBytes: Int, timeout: TimeInterval) async throws -> (Data?, Bool)
```

## Parameters

- `minBytes`: The minimum number of bytes to read.
- `maxBytes`: The maximum number of bytes to read.
- `timeout`: A timeout for reading bytes. If the read is not completed within the specified interval, the read is canceled and the `completionHandler` is called with an error. Pass `0` to prevent a read from timing out.
- `completionHandler`: The completion handler to call when all bytes are read, or an error occurs. This handler is executed on the delegate queue.

  This completion handler takes the following parameters:

  - **`data`**: The data read from the stream.
  - **`atEOF`**: Whether or not the stream reached end-of-file (EOF), such that no more data can be read.
  - **`error`**: An error object that indicates why the read failed, or `nil` if the read was successful.

## See Also

### Reading and writing data

- [write(\_:timeout:completionHandler:)](write%28__timeout_completionhandler_%29.md): Asynchronously writes the specified data to the stream, and calls a handler upon completion.

# readDataOfMinLength:maxLength:timeout:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asynchronously reads a number of bytes from the stream, and calls a handler upon completion.

## Declaration

```objectivec
- (void) readDataOfMinLength:(NSUInteger) minBytes maxLength:(NSUInteger) maxBytes timeout:(NSTimeInterval) timeout completionHandler:(void (^)(NSData *data, BOOL atEOF, NSError *error)) completionHandler;
```

## Parameters

- `minBytes`: The minimum number of bytes to read.
- `maxBytes`: The maximum number of bytes to read.
- `timeout`: A timeout for reading bytes. If the read is not completed within the specified interval, the read is canceled and the `completionHandler` is called with an error. Pass `0` to prevent a read from timing out.
- `completionHandler`: The completion handler to call when all bytes are read, or an error occurs. This handler is executed on the delegate queue.

  This completion handler takes the following parameters:

  - **`data`**: The data read from the stream.
  - **`atEOF`**: Whether or not the stream reached end-of-file (EOF), such that no more data can be read.
  - **`error`**: An error object that indicates why the read failed, or `nil` if the read was successful.

## See Also

### Reading and writing data

- [writeData:timeout:completionHandler:](write%28__timeout_completionhandler_%29.md): Asynchronously writes the specified data to the stream, and calls a handler upon completion.
