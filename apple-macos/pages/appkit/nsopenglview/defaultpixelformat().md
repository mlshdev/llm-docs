> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglview/defaultpixelformat()](https://developer.apple.com/documentation/appkit/nsopenglview/defaultpixelformat())

# defaultPixelFormat() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns a default [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object.

> Please use MTKView instead.

## Declaration

```swift
class func defaultPixelFormat() -> NSOpenGLPixelFormat
```

<a id="return-value"></a>

## Return Value

A pixel format object with no attributes set.

<a id="Discussion"></a>

## Discussion

Typically used with the initializer [init(frame:pixelFormat:)](init%28frame_pixelformat_%29.md), this object has no attributes set.

## See Also

### Managing the NSOpenGLPixelFormat

- [pixelFormat](pixelformat.md): Deprecated. The [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object associated with the receiver.

# defaultPixelFormat (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns a default [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object.

> Please use MTKView instead.

## Declaration

```objectivec
+ (NSOpenGLPixelFormat *) defaultPixelFormat;
```

<a id="return-value"></a>

## Return Value

A pixel format object with no attributes set.

<a id="Discussion"></a>

## Discussion

Typically used with the initializer [initWithFrame:pixelFormat:](init%28frame_pixelformat_%29.md), this object has no attributes set.

## See Also

### Managing the NSOpenGLPixelFormat

- [pixelFormat](pixelformat.md): Deprecated. The [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object associated with the receiver.
