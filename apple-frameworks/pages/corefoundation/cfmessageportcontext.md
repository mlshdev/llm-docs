> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportcontext](https://developer.apple.com/documentation/corefoundation/cfmessageportcontext)

# CFMessagePortContext (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a CFMessagePort object’s behavior.

## Declaration

```swift
struct CFMessagePortContext
```

## Topics

### Initializers

- [init()](cfmessageportcontext/init%28%29.md)
- [init(version:info:retain:release:copyDescription:)](cfmessageportcontext/init%28version_info_retain_release_copydescription_%29.md)

### Instance Properties

- [copyDescription](cfmessageportcontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfmessageportcontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the message port at creation time. This pointer is passed to all the callbacks defined in the context.
- [release](cfmessageportcontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfmessageportcontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfmessageportcontext/version.md): Version number of the structure. Must be `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# CFMessagePortContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a CFMessagePort object’s behavior.

## Declaration

```objectivec
typedef struct { ... } CFMessagePortContext;
```

## Topics

### Instance Properties

- [copyDescription](cfmessageportcontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfmessageportcontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the message port at creation time. This pointer is passed to all the callbacks defined in the context.
- [release](cfmessageportcontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfmessageportcontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfmessageportcontext/version.md): Version number of the structure. Must be `0`.
