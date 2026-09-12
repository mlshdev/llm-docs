> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/getboundstreams(withbuffersize:inputstream:outputstream:)](https://developer.apple.com/documentation/foundation/stream/getboundstreams(withbuffersize:inputstream:outputstream:))

# getBoundStreams(withBufferSize:inputStream:outputStream:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns by reference a bound pair of input and output streams.

## Declaration

```swift
class func getBoundStreams(withBufferSize bufferSize: Int, inputStream: AutoreleasingUnsafeMutablePointer<InputStream?>?, outputStream: AutoreleasingUnsafeMutablePointer<OutputStream?>?)
```

## Parameters

- `bufferSize`: The size of the buffer, in bytes, used to transfer data from `inputStream` to `outputStream`.
- `inputStream`: On return, contains an input stream.
- `outputStream`: On return, contains an output stream.

## Mentioned In

- [Uploading streams of data](../uploading-streams-of-data.md)

<a id="Discussion"></a>

## Discussion

The created streams are bound to one another, such that any data written to `outputStream` is received by `inputStream`.

This is a convenience method for calling [CFStreamCreateBoundPair(\_:\_:\_:\_:)](../../corefoundation/cfstreamcreateboundpair%28________%29.md) and bridging from the returned Core Foundation types.

## See Also

### Related Documentation

- [CFStreamCreateBoundPair(\_:\_:\_:\_:)](../../corefoundation/cfstreamcreateboundpair%28________%29.md): Creates a bound pair of read and write streams.

# getBoundStreamsWithBufferSize:inputStream:outputStream: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns by reference a bound pair of input and output streams.

## Declaration

```objectivec
+ (void) getBoundStreamsWithBufferSize:(NSUInteger) bufferSize inputStream:(NSInputStream **) inputStream outputStream:(NSOutputStream **) outputStream;
```

## Parameters

- `bufferSize`: The size of the buffer, in bytes, used to transfer data from `inputStream` to `outputStream`.
- `inputStream`: On return, contains an input stream.
- `outputStream`: On return, contains an output stream.

## Mentioned In

- [Uploading streams of data](../uploading-streams-of-data.md)

<a id="Discussion"></a>

## Discussion

The created streams are bound to one another, such that any data written to `outputStream` is received by `inputStream`.

This is a convenience method for calling [CFStreamCreateBoundPair](../../corefoundation/cfstreamcreateboundpair%28________%29.md) and bridging from the returned Core Foundation types.

## See Also

### Related Documentation

- [CFStreamCreateBoundPair](../../corefoundation/cfstreamcreateboundpair%28________%29.md): Creates a bound pair of read and write streams.
