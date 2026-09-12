> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglpixelformat/init(cglpixelformatobj:)-2zqw4](https://developer.apple.com/documentation/appkit/nsopenglpixelformat/init(cglpixelformatobj:)-2zqw4)

# init(cglPixelFormatObj:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Returns an OpenGL pixel format object initialized with using an existing CGL pixel format object.

## Declaration

```swift
init?(cglPixelFormatObj format: CGLPixelFormatObj)
```

## Parameters

- `format`: An existing CGL pixel format object.

<a id="return-value"></a>

## Return Value

An intialized [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object that wraps the CGL pixel format object.

<a id="Discussion"></a>

## Discussion

If your application already has a low-level CGL pixel format object, you can create an [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object to wrap it by calling this initializer. The [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object retains the CGL pixel format object by calling the `CGLRetainPixelFormat(_:)` function.

Your application should not call `CGLDestroyPixelFormat(_:)` to dispose of the CGL pixel format object. Instead, your application should call `CGLReleasePixelFormat(_:)` to decrement its reference count.

## See Also

### Creating an OpenGL Pixel Format

- [init(attributes:)](init%28attributes_%29.md): Deprecated. Returns an OpenGL pixel format object initialized with specified pixel format attributes.

# initWithCGLPixelFormatObj: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Returns an OpenGL pixel format object initialized with using an existing CGL pixel format object.

## Declaration

```objectivec
- (NSOpenGLPixelFormat *) initWithCGLPixelFormatObj:(CGLPixelFormatObj) format;
```

## Parameters

- `format`: An existing CGL pixel format object.

<a id="return-value"></a>

## Return Value

An intialized [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object that wraps the CGL pixel format object.

<a id="Discussion"></a>

## Discussion

If your application already has a low-level CGL pixel format object, you can create an [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object to wrap it by calling this initializer. The [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object retains the CGL pixel format object by calling the `CGLRetainPixelFormat(_:)` function.

Your application should not call `CGLDestroyPixelFormat(_:)` to dispose of the CGL pixel format object. Instead, your application should call `CGLReleasePixelFormat(_:)` to decrement its reference count.

## See Also

### Creating an OpenGL Pixel Format

- [initWithAttributes:](init%28attributes_%29.md): Deprecated. Returns an OpenGL pixel format object initialized with specified pixel format attributes.
- [initWithData:](initwithdata_.md): Deprecated. Returns an OpenGL pixel format object initialized with specified pixel format attribute data.
