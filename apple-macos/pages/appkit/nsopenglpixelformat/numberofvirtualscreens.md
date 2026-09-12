> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglpixelformat/numberofvirtualscreens](https://developer.apple.com/documentation/appkit/nsopenglpixelformat/numberofvirtualscreens)

# numberOfVirtualScreens (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The number of virtual screens associated with the OpenGL pixel format.

> Please use Metal or MetalKit.

## Declaration

```swift
var numberOfVirtualScreens: GLint { get }
```

<a id="return-value"></a>

## Return Value

The number of virtual screens.

<a id="Discussion"></a>

## Discussion

When the attributes are set, OpenGL searches for drivers matching the requested attributes. Each matching driver drives a set of displays. For example, a graphics card in a portable computer might drive the internal screen and an external display. This portable computer would have one virtual screen. A desktop computer might have two different graphics cards, each driving one or more displays. The pairing of an OpenGL driver with its set of associated displays corresponds to one virtual screen. In the above examples, the portable computer would have one virtual screen, while the desktop computer would have two. Another desktop computer with a video card driving two displays at once would have one virtual screen.

For more information on virtual screens, consult [OpenGL Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/OpenGL-MacProgGuide/opengl_intro/opengl_intro.html#//apple_ref/doc/uid/TP40001987).

## See Also

### Managing the Pixel Format

- [cglPixelFormatObj](cglpixelformatobj.md): Deprecated. The low-level, platform-specific Core OpenGL (CGL) pixel format object represented by the receiver.
- [getValues(\_:forAttribute:forVirtualScreen:)](getvalues%28__forattribute_forvirtualscreen_%29.md): Deprecated. Gets the value for the specified pixel format attribute.

# numberOfVirtualScreens (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The number of virtual screens associated with the OpenGL pixel format.

> Please use Metal or MetalKit.

## Declaration

```objectivec
@property (readonly) GLint numberOfVirtualScreens;
```

<a id="return-value"></a>

## Return Value

The number of virtual screens.

<a id="Discussion"></a>

## Discussion

When the attributes are set, OpenGL searches for drivers matching the requested attributes. Each matching driver drives a set of displays. For example, a graphics card in a portable computer might drive the internal screen and an external display. This portable computer would have one virtual screen. A desktop computer might have two different graphics cards, each driving one or more displays. The pairing of an OpenGL driver with its set of associated displays corresponds to one virtual screen. In the above examples, the portable computer would have one virtual screen, while the desktop computer would have two. Another desktop computer with a video card driving two displays at once would have one virtual screen.

For more information on virtual screens, consult [OpenGL Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/OpenGL-MacProgGuide/opengl_intro/opengl_intro.html#//apple_ref/doc/uid/TP40001987).

## See Also

### Managing the Pixel Format

- [CGLPixelFormatObj](cglpixelformatobj.md): Deprecated. The low-level, platform-specific Core OpenGL (CGL) pixel format object represented by the receiver.
- [getValues:forAttribute:forVirtualScreen:](getvalues%28__forattribute_forvirtualscreen_%29.md): Deprecated. Gets the value for the specified pixel format attribute.
