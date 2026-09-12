> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopengllayer/openglpixelformat(fordisplaymask:)](https://developer.apple.com/documentation/appkit/nsopengllayer/openglpixelformat(fordisplaymask:))

# openGLPixelFormat(forDisplayMask:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Returns the OpenGL pixel format suitable for the specified displays.

> Please use CAMetalLayer instead.

## Declaration

```swift
func openGLPixelFormat(forDisplayMask mask: UInt32) -> NSOpenGLPixelFormat
```

## Parameters

- `mask`: A mask specifying the displays the returned [NSOpenGLPixelFormat](../nsopenglpixelformat.md) must be suitable for.

<a id="return-value"></a>

## Return Value

An autoreleased [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object suitable for the displays.

<a id="Discussion"></a>

## Discussion

You must include an NSOpenGLPFAScreenMask specification in the pixel format attribute list that’s used to instantiate the NSOpenGLPixelFormat.

## See Also

### Managing the Pixel Format

- [openGLPixelFormat](openglpixelformat.md): Deprecated. Provides access to the layer’s associated OpenGL pixel format.

# openGLPixelFormatForDisplayMask: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Returns the OpenGL pixel format suitable for the specified displays.

> Please use CAMetalLayer instead.

## Declaration

```objectivec
- (NSOpenGLPixelFormat *) openGLPixelFormatForDisplayMask:(uint32_t) mask;
```

## Parameters

- `mask`: A mask specifying the displays the returned [NSOpenGLPixelFormat](../nsopenglpixelformat.md) must be suitable for.

<a id="return-value"></a>

## Return Value

An autoreleased [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object suitable for the displays.

<a id="Discussion"></a>

## Discussion

You must include an NSOpenGLPFAScreenMask specification in the pixel format attribute list that’s used to instantiate the NSOpenGLPixelFormat.

## See Also

### Managing the Pixel Format

- [openGLPixelFormat](openglpixelformat.md): Deprecated. Provides access to the layer’s associated OpenGL pixel format.
