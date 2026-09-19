> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/stream/getstreamstohost(withname:port:inputstream:outputstream:)

# getStreamsToHost(withName:port:inputStream:outputStream:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.10+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Creates and returns by reference an `NSInputStream` object and `NSOutputStream` object for a socket connection with a given host on a given port.

> Use nw_connection_t in Network framework instead

## Declaration

```swift
class func getStreamsToHost(withName hostname: String, port: Int, inputStream: AutoreleasingUnsafeMutablePointer<InputStream?>?, outputStream: AutoreleasingUnsafeMutablePointer<OutputStream?>?)
```

## Parameters

- `hostname`: The host to which to connect.
- `port`: The port to connect to on `host`.
- `inputStream`: Upon return, contains the input stream. If `nil` is passed, the stream object is not created.
- `outputStream`: Upon return, contains the output stream. If `nil` is passed, the stream object is not created.

# getStreamsToHostWithName:port:inputStream:outputStream: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.10+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Creates and returns by reference an `NSInputStream` object and `NSOutputStream` object for a socket connection with a given host on a given port.

> Use nw_connection_t in Network framework instead

## Declaration

```objectivec
+ (void) getStreamsToHostWithName:(NSString *) hostname port:(NSInteger) port inputStream:(NSInputStream **) inputStream outputStream:(NSOutputStream **) outputStream;
```

## Parameters

- `hostname`: The host to which to connect.
- `port`: The port to connect to on `host`.
- `inputStream`: Upon return, contains the input stream. If `nil` is passed, the stream object is not created.
- `outputStream`: Upon return, contains the output stream. If `nil` is passed, the stream object is not created.
