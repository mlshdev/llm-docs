> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffiledescriptorcallback](https://developer.apple.com/documentation/corefoundation/cffiledescriptorcallback)

# CFFileDescriptorCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a structure for a callback for a CFFileDescriptor.

## Declaration

```swift
typealias CFFileDescriptorCallBack = (CFFileDescriptor?, CFOptionFlags, UnsafeMutableRawPointer?) -> Void
```

## See Also

### Data Types

- [CFFileDescriptorNativeDescriptor](cffiledescriptornativedescriptor.md): Defines a type for the native file descriptor.
- [CFFileDescriptorContext](cffiledescriptorcontext.md): Defines a structure for the context of a CFFileDescriptor.

# CFFileDescriptorCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a structure for a callback for a CFFileDescriptor.

## Declaration

```objectivec
typedef void (*)(struct __CFFileDescriptor *, unsigned long, void *) CFFileDescriptorCallBack;
```

## See Also

### Data Types

- [CFFileDescriptorNativeDescriptor](cffiledescriptornativedescriptor.md): Defines a type for the native file descriptor.
- [CFFileDescriptorContext](cffiledescriptorcontext.md): Defines a structure for the context of a CFFileDescriptor.
