> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontrollerdescriptor/samplecount](https://developer.apple.com/documentation/touchcontroller/tctouchcontrollerdescriptor/samplecount)

# sampleCount (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The number of samples per pixel for multisampling.

## Declaration

```swift
var sampleCount: Int { get set }
```

## See Also

### Inspecting the controller descriptor

- [colorPixelFormat](colorpixelformat.md): The pixel format for the drawable texture.
- [depthAttachmentPixelFormat](depthattachmentpixelformat.md): The pixel format for the depth attachment.
- [device](device.md): The Metal device to use for rendering.
- [drawableSize](drawablesize.md): The size of the drawable to which the touch controller’s contents be drawn, in native pixels.
- [size](size.md): The size of the view the touch controller’s drawable is embedded in, in points.
- [stencilAttachmentPixelFormat](stencilattachmentpixelformat.md): The pixel format for the stencil attachment.

# sampleCount (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The number of samples per pixel for multisampling.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) NSUInteger sampleCount;
```

## See Also

### Inspecting the controller descriptor

- [colorPixelFormat](colorpixelformat.md): The pixel format for the drawable texture.
- [depthAttachmentPixelFormat](depthattachmentpixelformat.md): The pixel format for the depth attachment.
- [device](device.md): The Metal device to use for rendering.
- [drawableSize](drawablesize.md): The size of the drawable to which the touch controller’s contents be drawn, in native pixels.
- [size](size.md): The size of the view the touch controller’s drawable is embedded in, in points.
- [stencilAttachmentPixelFormat](stencilattachmentpixelformat.md): The pixel format for the stencil attachment.
