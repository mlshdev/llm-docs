> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffiledescriptorinvalidate(_:)](https://developer.apple.com/documentation/corefoundation/cffiledescriptorinvalidate(_:))

# CFFileDescriptorInvalidate(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invalidates a CFFileDescriptor object.

## Declaration

```swift
func CFFileDescriptorInvalidate(_ f: CFFileDescriptor!)
```

## Parameters

- `f`: A CFFileDescriptor.

<a id="Discussion"></a>

## Discussion

Once invalidated, the CFFileDescriptor object will no longer be read from or written to at the Core Fundation level.

If you passed `true` for the `closeOnInvalidate` parameter when you called [CFFileDescriptorCreate(\_:\_:\_:\_:\_:)](cffiledescriptorcreate%28__________%29.md), this function also closes the underlying file descriptor. If you passed `false`, you must close the descriptor yourself *after* invalidating the CFFileDescriptor object.

> **Important**

>  You must invalidate the CFFileDescriptor before closing the underlying file descriptor.

## See Also

### Related Documentation

- [CFFileDescriptorGetNativeDescriptor(\_:)](cffiledescriptorgetnativedescriptor%28__%29.md): Returns the native file descriptor for a given CFFileDescriptor.
- [CFFileDescriptorIsValid(\_:)](cffiledescriptorisvalid%28__%29.md): Returns a Boolean value that indicates whether the native file descriptor for a given CFFileDescriptor is valid.

# CFFileDescriptorInvalidate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invalidates a CFFileDescriptor object.

## Declaration

```objectivec
extern void CFFileDescriptorInvalidate(CFFileDescriptorRef f);
```

## Parameters

- `f`: A CFFileDescriptor.

<a id="Discussion"></a>

## Discussion

Once invalidated, the CFFileDescriptor object will no longer be read from or written to at the Core Fundation level.

If you passed `true` for the `closeOnInvalidate` parameter when you called [CFFileDescriptorCreate](cffiledescriptorcreate%28__________%29.md), this function also closes the underlying file descriptor. If you passed `false`, you must close the descriptor yourself *after* invalidating the CFFileDescriptor object.

> **Important**

>  You must invalidate the CFFileDescriptor before closing the underlying file descriptor.

## See Also

### Related Documentation

- [CFFileDescriptorGetNativeDescriptor](cffiledescriptorgetnativedescriptor%28__%29.md): Returns the native file descriptor for a given CFFileDescriptor.
- [CFFileDescriptorIsValid](cffiledescriptorisvalid%28__%29.md): Returns a Boolean value that indicates whether the native file descriptor for a given CFFileDescriptor is valid.
