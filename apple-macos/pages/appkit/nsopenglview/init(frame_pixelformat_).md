> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglview/init(frame:pixelformat:)](https://developer.apple.com/documentation/appkit/nsopenglview/init(frame:pixelformat:))

# init(frame:pixelFormat:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns an `NSOpenGLView` object initialized with the specified frame rectangle and pixel format.

> Please use MTKView instead.

## Declaration

```swift
init?(frame frameRect: NSRect, pixelFormat format: NSOpenGLPixelFormat?)
```

## Parameters

- `frameRect`: The frame rectangle for the view, specified in the coordinate system of its parent view.
- `format`: The pixel format to use when creating the view’s `NSOpenGLContext` object.

<a id="return-value"></a>

## Return Value

An initialized `NSOpenGLView` object, or `nil` if the object could not be initialized.

## See Also

### Related Documentation

- [defaultPixelFormat()](defaultpixelformat%28%29.md): Deprecated. Returns a default [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object.

# initWithFrame:pixelFormat: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns an `NSOpenGLView` object initialized with the specified frame rectangle and pixel format.

> Please use MTKView instead.

## Declaration

```objectivec
- (instancetype) initWithFrame:(NSRect) frameRect pixelFormat:(NSOpenGLPixelFormat *) format;
```

## Parameters

- `frameRect`: The frame rectangle for the view, specified in the coordinate system of its parent view.
- `format`: The pixel format to use when creating the view’s `NSOpenGLContext` object.

<a id="return-value"></a>

## Return Value

An initialized `NSOpenGLView` object, or `nil` if the object could not be initialized.

## See Also

### Related Documentation

- [defaultPixelFormat](defaultpixelformat%28%29.md): Deprecated. Returns a default [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object.
