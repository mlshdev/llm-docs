> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglpixelformat/getvalues(_:forattribute:forvirtualscreen:)](https://developer.apple.com/documentation/appkit/nsopenglpixelformat/getvalues(_:forattribute:forvirtualscreen:))

# getValues(\_:forAttribute:forVirtualScreen:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Gets the value for the specified pixel format attribute.

> Please use Metal or MetalKit.

## Declaration

```swift
func getValues(_ vals: UnsafeMutablePointer<GLint>, forAttribute attrib: NSOpenGLPixelFormatAttribute, forVirtualScreen screen: GLint)
```

## Parameters

- `vals`: On input, a pointer to a `long` variable. On output, the variable contains the value of the requested attribute.
- `attrib`: The requested attribute. For a list of attribute constants, see the table in Constants.
- `screen`: The screen from which you want to retrieve the attribute. This parameter must be a value between 0 and the number of virtual screens ([numberOfVirtualScreens](numberofvirtualscreens.md)) minus 1.

<a id="Discussion"></a>

## Discussion

Because the value for an attribute may be different on each virtual screen, the virtual screen must be specified along with the attribute.

## See Also

### Related Documentation

- [init(attributes:)](init%28attributes_%29.md): Deprecated. Returns an OpenGL pixel format object initialized with specified pixel format attributes.

### Managing the Pixel Format

- [cglPixelFormatObj](cglpixelformatobj.md): Deprecated. The low-level, platform-specific Core OpenGL (CGL) pixel format object represented by the receiver.
- [numberOfVirtualScreens](numberofvirtualscreens.md): Deprecated. The number of virtual screens associated with the OpenGL pixel format.

# getValues:forAttribute:forVirtualScreen: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Gets the value for the specified pixel format attribute.

> Please use Metal or MetalKit.

## Declaration

```objectivec
- (void) getValues:(GLint *) vals forAttribute:(NSOpenGLPixelFormatAttribute) attrib forVirtualScreen:(GLint) screen;
```

## Parameters

- `vals`: On input, a pointer to a `long` variable. On output, the variable contains the value of the requested attribute.
- `attrib`: The requested attribute. For a list of attribute constants, see the table in Constants.
- `screen`: The screen from which you want to retrieve the attribute. This parameter must be a value between 0 and the number of virtual screens ([numberOfVirtualScreens](numberofvirtualscreens.md)) minus 1.

<a id="Discussion"></a>

## Discussion

Because the value for an attribute may be different on each virtual screen, the virtual screen must be specified along with the attribute.

## See Also

### Related Documentation

- [initWithAttributes:](init%28attributes_%29.md): Deprecated. Returns an OpenGL pixel format object initialized with specified pixel format attributes.

### Managing the Pixel Format

- [CGLPixelFormatObj](cglpixelformatobj.md): Deprecated. The low-level, platform-specific Core OpenGL (CGL) pixel format object represented by the receiver.
- [numberOfVirtualScreens](numberofvirtualscreens.md): Deprecated. The number of virtual screens associated with the OpenGL pixel format.
