> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmachportcontext](https://developer.apple.com/documentation/corefoundation/cfmachportcontext)

# CFMachPortContext (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a CFMachPort object’s behavior.

## Declaration

```swift
struct CFMachPortContext
```

## Topics

### Initializers

- [init()](cfmachportcontext/init%28%29.md)
- [init(version:info:retain:release:copyDescription:)](cfmachportcontext/init%28version_info_retain_release_copydescription_%29.md)

### Instance Properties

- [copyDescription](cfmachportcontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfmachportcontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the CFMachPort object at creation time. This pointer is passed to all the callbacks defined in the context.
- [release](cfmachportcontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfmachportcontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfmachportcontext/version.md): Version number of the structure. Must be `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# CFMachPortContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a CFMachPort object’s behavior.

## Declaration

```objectivec
typedef struct { ... } CFMachPortContext;
```

## Topics

### Instance Properties

- [copyDescription](cfmachportcontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfmachportcontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the CFMachPort object at creation time. This pointer is passed to all the callbacks defined in the context.
- [release](cfmachportcontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfmachportcontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfmachportcontext/version.md): Version number of the structure. Must be `0`.
