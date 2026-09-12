> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopengllayer/openglpixelformat](https://developer.apple.com/documentation/appkit/nsopengllayer/openglpixelformat)

# openGLPixelFormat (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Provides access to the layer’s associated OpenGL pixel format.

> Please use CAMetalLayer instead.

## Declaration

```swift
var openGLPixelFormat: NSOpenGLPixelFormat? { get set }
```

<a id="Discussion"></a>

## Discussion

Subclasses shouldn’t invoke `setOpenGLPixelFormat:`, but can override it if desired to intercept assignment of the layer’s pixel format.

## See Also

### Managing the Pixel Format

- [openGLPixelFormat(forDisplayMask:)](openglpixelformat%28fordisplaymask_%29.md): Deprecated. Returns the OpenGL pixel format suitable for the specified displays.

# openGLPixelFormat (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Provides access to the layer’s associated OpenGL pixel format.

> Please use CAMetalLayer instead.

## Declaration

```objectivec
@property (strong, nullable) NSOpenGLPixelFormat * openGLPixelFormat;
```

<a id="Discussion"></a>

## Discussion

Subclasses shouldn’t invoke `setOpenGLPixelFormat:`, but can override it if desired to intercept assignment of the layer’s pixel format.

## See Also

### Managing the Pixel Format

- [openGLPixelFormatForDisplayMask:](openglpixelformat%28fordisplaymask_%29.md): Deprecated. Returns the OpenGL pixel format suitable for the specified displays.
