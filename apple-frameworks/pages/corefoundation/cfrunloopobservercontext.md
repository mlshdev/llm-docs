> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopobservercontext](https://developer.apple.com/documentation/corefoundation/cfrunloopobservercontext)

# CFRunLoopObserverContext (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a CFRunLoopObserver object’s behavior.

## Declaration

```swift
struct CFRunLoopObserverContext
```

## Topics

### Initializers

- [init()](cfrunloopobservercontext/init%28%29.md)
- [init(version:info:retain:release:copyDescription:)](cfrunloopobservercontext/init%28version_info_retain_release_copydescription_%29.md)

### Instance Properties

- [copyDescription](cfrunloopobservercontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfrunloopobservercontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the run loop observer at creation time. This pointer is passed to all the callbacks defined in the context.
- [release](cfrunloopobservercontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfrunloopobservercontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfrunloopobservercontext/version.md): Version number of the structure. Must be `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# CFRunLoopObserverContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a CFRunLoopObserver object’s behavior.

## Declaration

```objectivec
typedef struct { ... } CFRunLoopObserverContext;
```

## Topics

### Instance Properties

- [copyDescription](cfrunloopobservercontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfrunloopobservercontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the run loop observer at creation time. This pointer is passed to all the callbacks defined in the context.
- [release](cfrunloopobservercontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfrunloopobservercontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfrunloopobservercontext/version.md): Version number of the structure. Must be `0`.
