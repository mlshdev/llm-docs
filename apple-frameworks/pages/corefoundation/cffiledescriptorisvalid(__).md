> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffiledescriptorisvalid(_:)](https://developer.apple.com/documentation/corefoundation/cffiledescriptorisvalid(_:))

# CFFileDescriptorIsValid(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the native file descriptor for a given CFFileDescriptor is valid.

## Declaration

```swift
func CFFileDescriptorIsValid(_ f: CFFileDescriptor!) -> Bool
```

## Parameters

- `f`: A CFFileDescriptor.

<a id="return-value"></a>

## Return Value

`true` if the native file descriptor for `f` is valid, otherwise `false`.

## See Also

### Related Documentation

- [CFFileDescriptorInvalidate(\_:)](cffiledescriptorinvalidate%28__%29.md): Invalidates a CFFileDescriptor object.

### Getting Information About a File Descriptor

- [CFFileDescriptorGetNativeDescriptor(\_:)](cffiledescriptorgetnativedescriptor%28__%29.md): Returns the native file descriptor for a given CFFileDescriptor.
- [CFFileDescriptorGetContext(\_:\_:)](cffiledescriptorgetcontext%28____%29.md): Gets the context for a given CFFileDescriptor.

# CFFileDescriptorIsValid (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the native file descriptor for a given CFFileDescriptor is valid.

## Declaration

```objectivec
extern Boolean CFFileDescriptorIsValid(CFFileDescriptorRef f);
```

## Parameters

- `f`: A CFFileDescriptor.

<a id="return-value"></a>

## Return Value

`true` if the native file descriptor for `f` is valid, otherwise `false`.

## See Also

### Related Documentation

- [CFFileDescriptorInvalidate](cffiledescriptorinvalidate%28__%29.md): Invalidates a CFFileDescriptor object.

### Getting Information About a File Descriptor

- [CFFileDescriptorGetNativeDescriptor](cffiledescriptorgetnativedescriptor%28__%29.md): Returns the native file descriptor for a given CFFileDescriptor.
- [CFFileDescriptorGetContext](cffiledescriptorgetcontext%28____%29.md): Gets the context for a given CFFileDescriptor.
