> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffiledescriptorgetcontext(_:_:)](https://developer.apple.com/documentation/corefoundation/cffiledescriptorgetcontext(_:_:))

# CFFileDescriptorGetContext(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the context for a given CFFileDescriptor.

## Declaration

```swift
func CFFileDescriptorGetContext(_ f: CFFileDescriptor!, _ context: UnsafeMutablePointer<CFFileDescriptorContext>!)
```

## Parameters

- `f`: A CFFileDescriptor.
- `context`: Upon return, contains the context passed to `f` in [CFFileDescriptorCreate(\_:\_:\_:\_:\_:)](cffiledescriptorcreate%28__________%29.md).

## See Also

### Related Documentation

- [CFFileDescriptorCreate(\_:\_:\_:\_:\_:)](cffiledescriptorcreate%28__________%29.md): Creates a new CFFileDescriptor.

### Getting Information About a File Descriptor

- [CFFileDescriptorGetNativeDescriptor(\_:)](cffiledescriptorgetnativedescriptor%28__%29.md): Returns the native file descriptor for a given CFFileDescriptor.
- [CFFileDescriptorIsValid(\_:)](cffiledescriptorisvalid%28__%29.md): Returns a Boolean value that indicates whether the native file descriptor for a given CFFileDescriptor is valid.

# CFFileDescriptorGetContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the context for a given CFFileDescriptor.

## Declaration

```objectivec
extern void CFFileDescriptorGetContext(CFFileDescriptorRef f, CFFileDescriptorContext *context);
```

## Parameters

- `f`: A CFFileDescriptor.
- `context`: Upon return, contains the context passed to `f` in [CFFileDescriptorCreate](cffiledescriptorcreate%28__________%29.md).

## See Also

### Related Documentation

- [CFFileDescriptorCreate](cffiledescriptorcreate%28__________%29.md): Creates a new CFFileDescriptor.

### Getting Information About a File Descriptor

- [CFFileDescriptorGetNativeDescriptor](cffiledescriptorgetnativedescriptor%28__%29.md): Returns the native file descriptor for a given CFFileDescriptor.
- [CFFileDescriptorIsValid](cffiledescriptorisvalid%28__%29.md): Returns a Boolean value that indicates whether the native file descriptor for a given CFFileDescriptor is valid.
