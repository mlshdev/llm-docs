> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreecontext](https://developer.apple.com/documentation/corefoundation/cftreecontext)

# CFTreeContext (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Structure containing program-defined data and callbacks for a CFTree object.

## Declaration

```swift
struct CFTreeContext
```

## Topics

### Initializers

- [init()](cftreecontext/init%28%29.md)
- [init(version:info:retain:release:copyDescription:)](cftreecontext/init%28version_info_retain_release_copydescription_%29.md)

### Instance Properties

- [copyDescription](cftreecontext/copydescription.md): The callback used to provide a description of the `info` field.
- [info](cftreecontext/info.md): A C pointer to a program-defined block of data, referred to as the information pointer.
- [release](cftreecontext/release.md): The callback used to release a previously retained `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. This value may be `NULL`.
- [retain](cftreecontext/retain.md): The callback used to retain the `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. This value may be `NULL`.
- [version](cftreecontext/version.md): The version number of the structure type being passed in as a parameter to a CFTree creation function. This structure is version `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# CFTreeContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Structure containing program-defined data and callbacks for a CFTree object.

## Declaration

```objectivec
typedef struct { ... } CFTreeContext;
```

## Topics

### Instance Properties

- [copyDescription](cftreecontext/copydescription.md): The callback used to provide a description of the `info` field.
- [info](cftreecontext/info.md): A C pointer to a program-defined block of data, referred to as the information pointer.
- [release](cftreecontext/release.md): The callback used to release a previously retained `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. This value may be `NULL`.
- [retain](cftreecontext/retain.md): The callback used to retain the `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. This value may be `NULL`.
- [version](cftreecontext/version.md): The version number of the structure type being passed in as a parameter to a CFTree creation function. This structure is version `0`.
