> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolimage/init(texture:size:)](https://developer.apple.com/documentation/touchcontroller/tccontrolimage/init(texture:size:))

# init(texture:size:) (Swift)

**Framework:** Touch Controller  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new image with the specified texture and size.

## Declaration

```swift
convenience init(texture: any MTLTexture, size: CGSize)
```

## Parameters

- `texture`: The Metal texture to use for the image.
- `size`: The size of the image in points.

<a id="return-value"></a>

## Return Value

A new `TCControlImage` instance.

## See Also

### Creating a control image

- [init(cgImage:size:device:)](init%28cgimage_size_device_%29-22z05.md): Creates a new image from a CGImage.
- [init(texture:size:highlight:offset:tintColor:)](init%28texture_size_highlight_offset_tintcolor_%29.md): Creates a new image with the specified texture, size, highlight texture, offset, and color tint.
- [init(uiImage:size:device:)](init%28uiimage_size_device_%29-3hqf.md): Creates a new image from a UIImage.

# initWithTexture:size: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new image with the specified texture and size.

## Declaration

```objectivec
- (instancetype) initWithTexture:(id<MTLTexture>) texture size:(CGSize) size;
```

## Parameters

- `texture`: The Metal texture to use for the image.
- `size`: The size of the image in points.

<a id="return-value"></a>

## Return Value

A new `TCControlImage` instance.

## See Also

### Creating a control image

- [initWithCGImage:size:device:](init%28cgimage_size_device_%29-22z05.md): Creates a new image from a CGImage.
- [initWithTexture:size:highlightTexture:offset:tintColor:](init%28texture_size_highlight_offset_tintcolor_%29.md): Creates a new image with the specified texture, size, highlight texture, offset, and color tint.
- [initWithUIImage:size:device:](init%28uiimage_size_device_%29-3hqf.md): Creates a new image from a UIImage.
