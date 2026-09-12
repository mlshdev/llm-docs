> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolimage/init(uiimage:size:device:)-3hqf](https://developer.apple.com/documentation/touchcontroller/tccontrolimage/init(uiimage:size:device:)-3hqf)

# init(uiImage:size:device:) (Swift)

**Framework:** Touch Controller  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new image from a UIImage.

## Declaration

```swift
convenience init?(uiImage: UIImage, size: CGSize, device: any MTLDevice)
```

## Parameters

- `uiImage`: The UIKit image to create the texture from.
- `size`: The size of the image in points.
- `device`: The Metal device used to create the texture.

<a id="return-value"></a>

## Return Value

A new `TCControlImage` instance, or `nil` if the UIImage has no backing CGImage or if texture creation fails.

## See Also

### Creating a control image

- [init(cgImage:size:device:)](init%28cgimage_size_device_%29-22z05.md): Creates a new image from a CGImage.
- [init(texture:size:)](init%28texture_size_%29.md): Creates a new image with the specified texture and size.
- [init(texture:size:highlight:offset:tintColor:)](init%28texture_size_highlight_offset_tintcolor_%29.md): Creates a new image with the specified texture, size, highlight texture, offset, and color tint.

# initWithUIImage:size:device: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new image from a UIImage.

## Declaration

```objectivec
- (instancetype) initWithUIImage:(UIImage *) uiImage size:(CGSize) size device:(id<MTLDevice>) device;
```

## Parameters

- `uiImage`: The UIKit image to create the texture from.
- `size`: The size of the image in points.
- `device`: The Metal device used to create the texture.

<a id="return-value"></a>

## Return Value

A new `TCControlImage` instance, or `nil` if the UIImage has no backing CGImage or if texture creation fails.

## See Also

### Creating a control image

- [initWithCGImage:size:device:](init%28cgimage_size_device_%29-22z05.md): Creates a new image from a CGImage.
- [initWithTexture:size:](init%28texture_size_%29.md): Creates a new image with the specified texture and size.
- [initWithTexture:size:highlightTexture:offset:tintColor:](init%28texture_size_highlight_offset_tintcolor_%29.md): Creates a new image with the specified texture, size, highlight texture, offset, and color tint.
