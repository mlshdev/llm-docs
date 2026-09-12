> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreamclientcontext](https://developer.apple.com/documentation/corefoundation/cfstreamclientcontext)

# CFStreamClientContext (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a stream’s client behavior.

## Declaration

```swift
struct CFStreamClientContext
```

## Topics

### Initializers

- [init()](cfstreamclientcontext/init%28%29.md)
- [init(version:info:retain:release:copyDescription:)](cfstreamclientcontext/init%28version_info_retain_release_copydescription_%29.md)

### Instance Properties

- [copyDescription](cfstreamclientcontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfstreamclientcontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the client. This pointer is passed to the callbacks defined in the context and to the client callback function [CFReadStreamClientCallBack](cfreadstreamclientcallback.md).
- [release](cfstreamclientcontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfstreamclientcontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfstreamclientcontext/version.md): Version number of the structure. Must be `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# CFStreamClientContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a stream’s client behavior.

## Declaration

```objectivec
typedef struct { ... } CFStreamClientContext;
```

## Topics

### Instance Properties

- [copyDescription](cfstreamclientcontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfstreamclientcontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the client. This pointer is passed to the callbacks defined in the context and to the client callback function [CFReadStreamClientCallBack](cfreadstreamclientcallback.md).
- [release](cfstreamclientcontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfstreamclientcontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfstreamclientcontext/version.md): Version number of the structure. Must be `0`.
