> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/getstreamsto(_:port:inputstream:outputstream:)](https://developer.apple.com/documentation/foundation/stream/getstreamsto(_:port:inputstream:outputstream:))

# getStreamsTo(\_:port:inputStream:outputStream:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.10)

Creates and returns by reference an `NSInputStream` object and `NSOutputStream` object for a socket connection with a given host on a given port.

> Use nw_connection_t in Network framework instead

## Declaration

```swift
class func getStreamsTo(_ host: Host, port: Int, inputStream: AutoreleasingUnsafeMutablePointer<InputStream?>?, outputStream: AutoreleasingUnsafeMutablePointer<OutputStream?>?)
```

## Parameters

- `host`: The host to which to connect.
- `port`: The port to connect to on `host`.
- `inputStream`: Upon return, contains the input stream. If `nil` is passed, the stream object is not created.
- `outputStream`: Upon return, contains the output stream. If `nil` is passed, the stream object is not created.

<a id="Discussion"></a>

## Discussion

If neither `port` nor `host` is properly specified, no socket connection is made.

## See Also

### Related Documentation

- [Stream Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Streams/Streams.html#//apple_ref/doc/uid/10000188i)

# getStreamsToHost:port:inputStream:outputStream: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.10)

Creates and returns by reference an `NSInputStream` object and `NSOutputStream` object for a socket connection with a given host on a given port.

> Use nw_connection_t in Network framework instead

## Declaration

```objectivec
+ (void) getStreamsToHost:(NSHost *) host port:(NSInteger) port inputStream:(NSInputStream **) inputStream outputStream:(NSOutputStream **) outputStream;
```

## Parameters

- `host`: The host to which to connect.
- `port`: The port to connect to on `host`.
- `inputStream`: Upon return, contains the input stream. If `nil` is passed, the stream object is not created.
- `outputStream`: Upon return, contains the output stream. If `nil` is passed, the stream object is not created.

<a id="Discussion"></a>

## Discussion

If neither `port` nor `host` is properly specified, no socket connection is made.

## See Also

### Related Documentation

- [Stream Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Streams/Streams.html#//apple_ref/doc/uid/10000188i)
