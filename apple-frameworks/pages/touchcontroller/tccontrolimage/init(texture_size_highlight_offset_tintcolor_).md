> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolimage/init(texture:size:highlight:offset:tintcolor:)](https://developer.apple.com/documentation/touchcontroller/tccontrolimage/init(texture:size:highlight:offset:tintcolor:))

# init(texture:size:highlight:offset:tintColor:) (Swift)

**Framework:** Touch Controller  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new image with the specified texture, size, highlight texture, offset, and color tint.

## Declaration

```swift
init(texture: any MTLTexture, size: CGSize, highlight highlightTexture: (any MTLTexture)?, offset: CGPoint, tintColor: CGColor)
```

## Parameters

- `texture`: The Metal texture to use for the image.
- `size`: The size of the image in points.
- `highlightTexture`: The Metal texture to use for the image when highlighted. May be `nil`.
- `offset`: The offset from the center of the parent control in points.
- `tintColor`: The color tint to apply to the texture. The color ref is retained.

<a id="return-value"></a>

## Return Value

A new `TCControlImage` instance.

## See Also

### Creating a control image

- [init(cgImage:size:device:)](init%28cgimage_size_device_%29-22z05.md): Creates a new image from a CGImage.
- [init(texture:size:)](init%28texture_size_%29.md): Creates a new image with the specified texture and size.
- [init(uiImage:size:device:)](init%28uiimage_size_device_%29-3hqf.md): Creates a new image from a UIImage.

# initWithTexture:size:highlightTexture:offset:tintColor: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new image with the specified texture, size, highlight texture, offset, and color tint.

## Declaration

```objectivec
- (instancetype) initWithTexture:(id<MTLTexture>) texture size:(CGSize) size highlightTexture:(id<MTLTexture>) highlightTexture offset:(CGPoint) offset tintColor:(CGColorRef) tintColor;
```

## Parameters

- `texture`: The Metal texture to use for the image.
- `size`: The size of the image in points.
- `highlightTexture`: The Metal texture to use for the image when highlighted. May be `nil`.
- `offset`: The offset from the center of the parent control in points.
- `tintColor`: The color tint to apply to the texture. The color ref is retained.

<a id="return-value"></a>

## Return Value

A new `TCControlImage` instance.

## See Also

### Creating a control image

- [initWithCGImage:size:device:](init%28cgimage_size_device_%29-22z05.md): Creates a new image from a CGImage.
- [initWithTexture:size:](init%28texture_size_%29.md): Creates a new image with the specified texture and size.
- [initWithUIImage:size:device:](init%28uiimage_size_device_%29-3hqf.md): Creates a new image from a UIImage.
