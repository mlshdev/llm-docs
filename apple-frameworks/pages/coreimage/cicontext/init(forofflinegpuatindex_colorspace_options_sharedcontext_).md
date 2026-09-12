> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/init(forofflinegpuatindex:colorspace:options:sharedcontext:)](https://developer.apple.com/documentation/coreimage/cicontext/init(forofflinegpuatindex:colorspace:options:sharedcontext:))

# init(forOfflineGPUAtIndex:colorSpace:options:sharedContext:)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** macOS 10.10+ (deprecated in 10.14)

Creates an OpenGL-based Core Image context using a GPU that is not currently driving a display, with the specified options.

## Declaration

```swift
init?(forOfflineGPUAtIndex index: UInt32, colorSpace: CGColorSpace?, options: [CIContextOption : Any]? = nil, sharedContext: CGLContextObj?)
```

## Parameters

- `index`: The index of the offline GPU with which to create the context; a number between zero and the value returned by the [offlineGPUCount()](offlinegpucount%28%29.md) method.
- `colorSpace`: A color space object encapsulating color space information that is used to specify how color values are interpreted.
- `options`: A dictionary that contains options for creating a [CIContext](../cicontext.md) object. You can pass any of the keys defined in [CIContextOption](../cicontextoption.md) along with the appropriate value.
- `sharedContext`: A CGL context with which to share OpenGL resources, obtained by calling the CGL function `CGLCreateContext(_:_:_:)`. Pass `NULL` to use a context that does not share OpenGL resources.

<a id="return-value"></a>

## Return Value

A Core Image context.

<a id="Discussion"></a>

## Discussion

GPU devices that are not currently being used to drive a display can be used for Core Image rendering. Use the [offlineGPUCount()](offlinegpucount%28%29.md) method to determine whether any such GPUs are available.

To create a Metal-based Core Image context using an offline GPU, use the [MTLCopyAllDevices()](../../metal/mtlcopyalldevices%28%29.md) function to list Metal devices, then choose a device without a display to pass to the [init(mtlDevice:)](init%28mtldevice_%29-swey.md) method.

## See Also

### Deprecated

- [init(cglContext:pixelFormat:colorSpace:options:)](init%28cglcontext_pixelformat_colorspace_options_%29-6rp6d.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options, color space, and pixel format object.
- [init(eaglContext:)](init%28eaglcontext_%29-8ajef.md): Deprecated. Creates a Core Image context from an EAGL context.
- [init(eaglContext:options:)](init%28eaglcontext_options_%29-6uyqj.md): Deprecated. Creates a Core Image context from an EAGL context using the specified options.
- [init(forOfflineGPUAtIndex:)](init%28forofflinegpuatindex_%29.md): Deprecated. Creates an OpenGL-based Core Image context using a GPU that is not currently driving a display.
- [createCGLayer(with:info:)](createcglayer%28with_info_%29.md): Deprecated. Creates a CGLayer object from the provided parameters.
- [draw(\_:at:from:)](draw%28__at_from_%29.md): Deprecated. Renders a region of an image to a point in the context destination.
