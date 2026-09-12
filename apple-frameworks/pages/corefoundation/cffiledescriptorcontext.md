> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffiledescriptorcontext](https://developer.apple.com/documentation/corefoundation/cffiledescriptorcontext)

# CFFileDescriptorContext (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a structure for the context of a CFFileDescriptor.

## Declaration

```swift
struct CFFileDescriptorContext
```

## Topics

### Initializers

- [init()](cffiledescriptorcontext/init%28%29.md)
- [init(version:info:retain:release:copyDescription:)](cffiledescriptorcontext/init%28version_info_retain_release_copydescription_%29.md)

### Instance Properties

- [copyDescription](cffiledescriptorcontext/copydescription.md): The callback used to create a descriptive string representation of the CFFileDescriptor.
- [info](cffiledescriptorcontext/info.md)
- [release](cffiledescriptorcontext/release.md): The release callback used by the CFFileDescriptor.
- [retain](cffiledescriptorcontext/retain.md): The retain callback used by the CFFileDescriptor.
- [version](cffiledescriptorcontext/version.md): The version number of this structure. If not one of the defined version numbers for this opaque type, the behavior is undefined. The current version of this structure is 0.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [CFFileDescriptorNativeDescriptor](cffiledescriptornativedescriptor.md): Defines a type for the native file descriptor.
- [CFFileDescriptorCallBack](cffiledescriptorcallback.md): Defines a structure for a callback for a CFFileDescriptor.

# CFFileDescriptorContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a structure for the context of a CFFileDescriptor.

## Declaration

```objectivec
typedef struct { ... } CFFileDescriptorContext;
```

## Topics

### Instance Properties

- [copyDescription](cffiledescriptorcontext/copydescription.md): The callback used to create a descriptive string representation of the CFFileDescriptor.
- [info](cffiledescriptorcontext/info.md)
- [release](cffiledescriptorcontext/release.md): The release callback used by the CFFileDescriptor.
- [retain](cffiledescriptorcontext/retain.md): The retain callback used by the CFFileDescriptor.
- [version](cffiledescriptorcontext/version.md): The version number of this structure. If not one of the defined version numbers for this opaque type, the behavior is undefined. The current version of this structure is 0.

## See Also

### Data Types

- [CFFileDescriptorNativeDescriptor](cffiledescriptornativedescriptor.md): Defines a type for the native file descriptor.
- [CFFileDescriptorCallBack](cffiledescriptorcallback.md): Defines a structure for a callback for a CFFileDescriptor.
