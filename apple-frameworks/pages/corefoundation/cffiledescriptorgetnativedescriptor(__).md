> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffiledescriptorgetnativedescriptor(_:)](https://developer.apple.com/documentation/corefoundation/cffiledescriptorgetnativedescriptor(_:))

# CFFileDescriptorGetNativeDescriptor(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the native file descriptor for a given CFFileDescriptor.

## Declaration

```swift
func CFFileDescriptorGetNativeDescriptor(_ f: CFFileDescriptor!) -> CFFileDescriptorNativeDescriptor
```

## Parameters

- `f`: A CFFileDescriptor.

<a id="return-value"></a>

## Return Value

The native file descriptor for `f`.

## See Also

### Related Documentation

- [CFFileDescriptorInvalidate(\_:)](cffiledescriptorinvalidate%28__%29.md): Invalidates a CFFileDescriptor object.

### Getting Information About a File Descriptor

- [CFFileDescriptorIsValid(\_:)](cffiledescriptorisvalid%28__%29.md): Returns a Boolean value that indicates whether the native file descriptor for a given CFFileDescriptor is valid.
- [CFFileDescriptorGetContext(\_:\_:)](cffiledescriptorgetcontext%28____%29.md): Gets the context for a given CFFileDescriptor.

# CFFileDescriptorGetNativeDescriptor (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the native file descriptor for a given CFFileDescriptor.

## Declaration

```objectivec
extern CFFileDescriptorNativeDescriptor CFFileDescriptorGetNativeDescriptor(CFFileDescriptorRef f);
```

## Parameters

- `f`: A CFFileDescriptor.

<a id="return-value"></a>

## Return Value

The native file descriptor for `f`.

## See Also

### Related Documentation

- [CFFileDescriptorInvalidate](cffiledescriptorinvalidate%28__%29.md): Invalidates a CFFileDescriptor object.

### Getting Information About a File Descriptor

- [CFFileDescriptorIsValid](cffiledescriptorisvalid%28__%29.md): Returns a Boolean value that indicates whether the native file descriptor for a given CFFileDescriptor is valid.
- [CFFileDescriptorGetContext](cffiledescriptorgetcontext%28____%29.md): Gets the context for a given CFFileDescriptor.
