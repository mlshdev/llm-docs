> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontrollerdescriptor/drawablesize](https://developer.apple.com/documentation/touchcontroller/tctouchcontrollerdescriptor/drawablesize)

# drawableSize (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The size of the drawable to which the touch controller’s contents be drawn, in native pixels.

## Declaration

```swift
var drawableSize: CGSize { get set }
```

## See Also

### Inspecting the controller descriptor

- [colorPixelFormat](colorpixelformat.md): The pixel format for the drawable texture.
- [depthAttachmentPixelFormat](depthattachmentpixelformat.md): The pixel format for the depth attachment.
- [device](device.md): The Metal device to use for rendering.
- [sampleCount](samplecount.md): The number of samples per pixel for multisampling.
- [size](size.md): The size of the view the touch controller’s drawable is embedded in, in points.
- [stencilAttachmentPixelFormat](stencilattachmentpixelformat.md): The pixel format for the stencil attachment.

# drawableSize (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The size of the drawable to which the touch controller’s contents be drawn, in native pixels.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) CGSize drawableSize;
```

## See Also

### Inspecting the controller descriptor

- [colorPixelFormat](colorpixelformat.md): The pixel format for the drawable texture.
- [depthAttachmentPixelFormat](depthattachmentpixelformat.md): The pixel format for the depth attachment.
- [device](device.md): The Metal device to use for rendering.
- [sampleCount](samplecount.md): The number of samples per pixel for multisampling.
- [size](size.md): The size of the view the touch controller’s drawable is embedded in, in points.
- [stencilAttachmentPixelFormat](stencilattachmentpixelformat.md): The pixel format for the stencil attachment.
