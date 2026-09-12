> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooptimercontext](https://developer.apple.com/documentation/corefoundation/cfrunlooptimercontext)

# CFRunLoopTimerContext (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a CFRunLoopTimer’s behavior.

## Declaration

```swift
struct CFRunLoopTimerContext
```

## Topics

### Initializers

- [init()](cfrunlooptimercontext/init%28%29.md)
- [init(version:info:retain:release:copyDescription:)](cfrunlooptimercontext/init%28version_info_retain_release_copydescription_%29.md)

### Instance Properties

- [copyDescription](cfrunlooptimercontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfrunlooptimercontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the run loop timer at creation time. This pointer is passed to all the callbacks defined in the context.
- [release](cfrunlooptimercontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfrunlooptimercontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfrunlooptimercontext/version.md): Version number of the structure. Must be 0.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# CFRunLoopTimerContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a CFRunLoopTimer’s behavior.

## Declaration

```objectivec
typedef struct { ... } CFRunLoopTimerContext;
```

## Topics

### Instance Properties

- [copyDescription](cfrunlooptimercontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfrunlooptimercontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the run loop timer at creation time. This pointer is passed to all the callbacks defined in the context.
- [release](cfrunlooptimercontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfrunlooptimercontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfrunlooptimercontext/version.md): Version number of the structure. Must be 0.
