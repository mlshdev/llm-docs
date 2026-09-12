> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/provideimagedata(_:bytesperrow:origin:_:size:_:userinfo:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/provideimagedata(_:bytesperrow:origin:_:size:_:userinfo:))

# provideImageData(\_:bytesPerRow:origin:\_:size:\_:userInfo:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Supplies data to a `CIImage` object.

## Declaration

```swift
func provideImageData(_ data: UnsafeMutableRawPointer, bytesPerRow rowbytes: Int, origin originx: Int, _ originy: Int, size width: Int, _ height: Int, userInfo info: Any?)
```

## Parameters

- `data`: A pointer to image data. Note that `data[0]` refers to the first byte of the requested subimage, not the larger image buffer.
- `rowbytes`: The number of bytes per row.
- `width`: The width of the image data.
- `height`: The height of the image data.
- `info`: User supplied data, which is optional.

<a id="Discussion"></a>

## Discussion

You can supply the image provider to these methods of the `CIImage` class:

- [imageWithImageProvider:size::format:colorSpace:options:](../../coreimage/ciimage/imagewithimageprovider_size__format_colorspace_options_.md) to create a CIImage object from image data
- [init(imageProvider:size:\_:format:colorSpace:options:)](../../coreimage/ciimage/init%28imageprovider_size___format_colorspace_options_%29.md) to initialize an existing CIImage with data

You initialize the given bitmap with the subregion specified by the arguments `x`, `y`, `width`, and `height`. The subregion uses the local coordinate space of the image, with the origin at the upper-left corner of the image. If you change the virtual memory mapping of the buffer specified by the `data` argument (such as by using `vm_copy` to modify it), the behavior is undefined.

That this callback always requests the full image data regardless of what is actually visible. All of the image is loaded or none of it is. The exception is when you create a tiled image by specifying the `kCIImageProviderTileSize` option. In this case, only the needed tiles are requested.

## See Also

### Related Documentation

- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)

# provideImageData:bytesPerRow:origin::size::userInfo: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Supplies data to a `CIImage` object.

## Declaration

```objectivec
- (void) provideImageData:(void *) data bytesPerRow:(size_t) rowbytes origin:(size_t) originx :(size_t) originy size:(size_t) width :(size_t) height userInfo:(id) info;
```

## Parameters

- `data`: A pointer to image data. Note that `data[0]` refers to the first byte of the requested subimage, not the larger image buffer.
- `rowbytes`: The number of bytes per row.
- `width`: The width of the image data.
- `height`: The height of the image data.
- `info`: User supplied data, which is optional.

<a id="Discussion"></a>

## Discussion

You can supply the image provider to these methods of the `CIImage` class:

- [imageWithImageProvider:size::format:colorSpace:options:](../../coreimage/ciimage/imagewithimageprovider_size__format_colorspace_options_.md) to create a CIImage object from image data
- [initWithImageProvider:size::format:colorSpace:options:](../../coreimage/ciimage/init%28imageprovider_size___format_colorspace_options_%29.md) to initialize an existing CIImage with data

You initialize the given bitmap with the subregion specified by the arguments `x`, `y`, `width`, and `height`. The subregion uses the local coordinate space of the image, with the origin at the upper-left corner of the image. If you change the virtual memory mapping of the buffer specified by the `data` argument (such as by using `vm_copy` to modify it), the behavior is undefined.

That this callback always requests the full image data regardless of what is actually visible. All of the image is loaded or none of it is. The exception is when you create a tiled image by specifying the `kCIImageProviderTileSize` option. In this case, only the needed tiles are requested.

## See Also

### Related Documentation

- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)
