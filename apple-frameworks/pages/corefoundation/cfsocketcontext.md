> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketcontext](https://developer.apple.com/documentation/corefoundation/cfsocketcontext)

# CFSocketContext (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a CFSocket object’s behavior.

## Declaration

```swift
struct CFSocketContext
```

## Topics

### Initializers

- [init()](cfsocketcontext/init%28%29.md)
- [init(version:info:retain:release:copyDescription:)](cfsocketcontext/init%28version_info_retain_release_copydescription_%29.md)

### Instance Properties

- [copyDescription](cfsocketcontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfsocketcontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the CFSocket object at creation time. This pointer is passed to all the callbacks defined in the context.
- [release](cfsocketcontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfsocketcontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfsocketcontext/version.md): Version number of the structure. Must be `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [CFSocketNativeHandle](cfsocketnativehandle.md): Type for the platform-specific native socket handle.
- [CFSocketSignature](cfsocketsignature.md): A structure that fully specifies the communication protocol and connection address of a CFSocket object.

# CFSocketContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a CFSocket object’s behavior.

## Declaration

```objectivec
typedef struct { ... } CFSocketContext;
```

## Topics

### Instance Properties

- [copyDescription](cfsocketcontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfsocketcontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the CFSocket object at creation time. This pointer is passed to all the callbacks defined in the context.
- [release](cfsocketcontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfsocketcontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfsocketcontext/version.md): Version number of the structure. Must be `0`.

## See Also

### Data Types

- [CFSocketNativeHandle](cfsocketnativehandle.md): Type for the platform-specific native socket handle.
- [CFSocketSignature](cfsocketsignature.md): A structure that fully specifies the communication protocol and connection address of a CFSocket object.
