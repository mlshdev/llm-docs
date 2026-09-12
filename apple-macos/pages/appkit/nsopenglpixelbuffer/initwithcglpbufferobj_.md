> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglpixelbuffer/initwithcglpbufferobj:](https://developer.apple.com/documentation/appkit/nsopenglpixelbuffer/initwithcglpbufferobj:)

# initWithCGLPBufferObj:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.7)

Initializes and returns an OpenGL pixel buffer object that encapsulates an existing CGL pixel buffer object.

## Declaration

```objectivec
- (NSOpenGLPixelBuffer *) initWithCGLPBufferObj:(CGLPBufferObj) pbuffer;
```

## Parameters

- `pbuffer`: The CGL pixel buffer object to wrap.

<a id="return-value"></a>

## Return Value

An initialized [NSOpenGLPixelBuffer](../nsopenglpixelbuffer.md) object.

<a id="Discussion"></a>

## Discussion

If your application already has a CGL pixel buffer object, you can wrap it inside an [NSOpenGLPixelBuffer](../nsopenglpixelbuffer.md) object by using this initializer. This method retains the CGL pixel buffer object by calling the `CGLRetainPBuffer` function.

Your application should not call `CGLDestroyPBuffer` to dispose of the CGL pixel buffer object. Instead, your application should call `CGLReleasePBuffer` to decrement its reference count.

## See Also

### Initializing an OpenGL Pixel Buffer

- [initWithTextureTarget:textureInternalFormat:textureMaxMipMapLevel:pixelsWide:pixelsHigh:](initwithtexturetarget_textureinternalformat_texturemaxmipmaplevel_pixelswide_pixelshigh_.md): Deprecated. Returns an `NSOpenGLPixelBuffer` object initialized with the specified parameters.
