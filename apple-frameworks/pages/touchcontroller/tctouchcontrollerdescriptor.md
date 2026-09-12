> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontrollerdescriptor](https://developer.apple.com/documentation/touchcontroller/tctouchcontrollerdescriptor)

# TCTouchControllerDescriptor (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A descriptor for configuring a touch controller.

## Declaration

```swift
class TCTouchControllerDescriptor
```

## Topics

### Creating a touch controller descriptor

- [init()](tctouchcontrollerdescriptor/init%28%29.md)
- [init(mtkView:)](tctouchcontrollerdescriptor/init%28mtkview_%29-7cs6u.md)

### Inspecting the controller descriptor

- [colorPixelFormat](tctouchcontrollerdescriptor/colorpixelformat.md): The pixel format for the drawable texture.
- [depthAttachmentPixelFormat](tctouchcontrollerdescriptor/depthattachmentpixelformat.md): The pixel format for the depth attachment.
- [device](tctouchcontrollerdescriptor/device.md): The Metal device to use for rendering.
- [drawableSize](tctouchcontrollerdescriptor/drawablesize.md): The size of the drawable to which the touch controller’s contents be drawn, in native pixels.
- [sampleCount](tctouchcontrollerdescriptor/samplecount.md): The number of samples per pixel for multisampling.
- [size](tctouchcontrollerdescriptor/size.md): The size of the view the touch controller’s drawable is embedded in, in points.
- [stencilAttachmentPixelFormat](tctouchcontrollerdescriptor/stencilattachmentpixelformat.md): The pixel format for the stencil attachment.

### Initializers

- [init(MTKView:)](tctouchcontrollerdescriptor/init%28mtkview_%29-25g2c.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating a touch controller

- [init(descriptor:)](tctouchcontroller/init%28descriptor_%29.md): Creates a new instance with the provided descriptor.

# TCTouchControllerDescriptor (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A descriptor for configuring a touch controller.

## Declaration

```objectivec
@interface TCTouchControllerDescriptor : NSObject
```

## Topics

### Creating a touch controller descriptor

- [init](tctouchcontrollerdescriptor/init%28%29.md)
- [initWithMTKView:](tctouchcontrollerdescriptor/init%28mtkview_%29-7cs6u.md)

### Inspecting the controller descriptor

- [colorPixelFormat](tctouchcontrollerdescriptor/colorpixelformat.md): The pixel format for the drawable texture.
- [depthAttachmentPixelFormat](tctouchcontrollerdescriptor/depthattachmentpixelformat.md): The pixel format for the depth attachment.
- [device](tctouchcontrollerdescriptor/device.md): The Metal device to use for rendering.
- [drawableSize](tctouchcontrollerdescriptor/drawablesize.md): The size of the drawable to which the touch controller’s contents be drawn, in native pixels.
- [sampleCount](tctouchcontrollerdescriptor/samplecount.md): The number of samples per pixel for multisampling.
- [size](tctouchcontrollerdescriptor/size.md): The size of the view the touch controller’s drawable is embedded in, in points.
- [stencilAttachmentPixelFormat](tctouchcontrollerdescriptor/stencilattachmentpixelformat.md): The pixel format for the stencil attachment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Creating a touch controller

- [initWithDescriptor:](tctouchcontroller/init%28descriptor_%29.md): Creates a new instance with the provided descriptor.
