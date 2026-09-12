> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglpixelformat/cglpixelformatobj](https://developer.apple.com/documentation/appkit/nsopenglpixelformat/cglpixelformatobj)

# cglPixelFormatObj (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The low-level, platform-specific Core OpenGL (CGL) pixel format object represented by the receiver.

> Please use Metal or MetalKit.

## Declaration

```swift
var cglPixelFormatObj: CGLPixelFormatObj? { get }
```

<a id="return-value"></a>

## Return Value

A pointer to the underlying `CGLPixelFormatObj` object.

## See Also

### Managing the Pixel Format

- [getValues(\_:forAttribute:forVirtualScreen:)](getvalues%28__forattribute_forvirtualscreen_%29.md): Deprecated. Gets the value for the specified pixel format attribute.
- [numberOfVirtualScreens](numberofvirtualscreens.md): Deprecated. The number of virtual screens associated with the OpenGL pixel format.

# CGLPixelFormatObj (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The low-level, platform-specific Core OpenGL (CGL) pixel format object represented by the receiver.

> Please use Metal or MetalKit.

## Declaration

```objectivec
@property (readonly, nullable) CGLPixelFormatObj CGLPixelFormatObj;
```

<a id="return-value"></a>

## Return Value

A pointer to the underlying `CGLPixelFormatObj` object.

## See Also

### Managing the Pixel Format

- [getValues:forAttribute:forVirtualScreen:](getvalues%28__forattribute_forvirtualscreen_%29.md): Deprecated. Gets the value for the specified pixel format attribute.
- [numberOfVirtualScreens](numberofvirtualscreens.md): Deprecated. The number of virtual screens associated with the OpenGL pixel format.
