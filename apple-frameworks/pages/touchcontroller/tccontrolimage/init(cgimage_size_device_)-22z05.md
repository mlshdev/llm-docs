> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolimage/init(cgimage:size:device:)-22z05](https://developer.apple.com/documentation/touchcontroller/tccontrolimage/init(cgimage:size:device:)-22z05)

# init(cgImage:size:device:) (Swift)

**Framework:** Touch Controller  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new image from a CGImage.

## Declaration

```swift
convenience init?(cgImage: CGImage, size: CGSize, device: any MTLDevice)
```

## Parameters

- `cgImage`: The Core Graphics image to create the texture from.
- `size`: The size of the image in points.
- `device`: The Metal device used to create the texture.

<a id="return-value"></a>

## Return Value

A new `TCControlImage` instance, or `nil` if texture creation fails.

## See Also

### Creating a control image

- [init(texture:size:)](init%28texture_size_%29.md): Creates a new image with the specified texture and size.
- [init(texture:size:highlight:offset:tintColor:)](init%28texture_size_highlight_offset_tintcolor_%29.md): Creates a new image with the specified texture, size, highlight texture, offset, and color tint.
- [init(uiImage:size:device:)](init%28uiimage_size_device_%29-3hqf.md): Creates a new image from a UIImage.

# initWithCGImage:size:device: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new image from a CGImage.

## Declaration

```objectivec
- (instancetype) initWithCGImage:(CGImageRef) cgImage size:(CGSize) size device:(id<MTLDevice>) device;
```

## Parameters

- `cgImage`: The Core Graphics image to create the texture from.
- `size`: The size of the image in points.
- `device`: The Metal device used to create the texture.

<a id="return-value"></a>

## Return Value

A new `TCControlImage` instance, or `nil` if texture creation fails.

## See Also

### Creating a control image

- [initWithTexture:size:](init%28texture_size_%29.md): Creates a new image with the specified texture and size.
- [initWithTexture:size:highlightTexture:offset:tintColor:](init%28texture_size_highlight_offset_tintcolor_%29.md): Creates a new image with the specified texture, size, highlight texture, offset, and color tint.
- [initWithUIImage:size:device:](init%28uiimage_size_device_%29-3hqf.md): Creates a new image from a UIImage.
