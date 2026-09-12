> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimagecreatewithmaskingcolors](https://developer.apple.com/documentation/coregraphics/cgimagecreatewithmaskingcolors)

# CGImageCreateWithMaskingColors

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a bitmap image by masking an existing bitmap image with the provided color values.

## Declaration

```objectivec
extern CGImageRefCGImageCreateWithMaskingColors(CGImageRef image, const CGFloat *components);
```

## Parameters

- `image`: The image to mask. This parameter may not be an image mask, may not already have an image mask or masking color associated with it, and cannot have an alpha component.
- `components`: An array of color components that specify a color or range of colors to mask the image with. The array must contain `2N` values `{ min[1], max[1], ... min[N], max[N] }` where `N` is the number of components in color space of `image`. Each value in `components` must be a valid image sample value. If `image` has integer pixel components, then each value must be in the range `[0 .. 2**bitsPerComponent - 1]` (where `bitsPerComponent` is the number of bits/component of `image`). If `image` has floating-point pixel components, then each value may be any floating-point number which is a valid color component.

<a id="return-value"></a>

## Return Value

An image created by masking `image` with the colors specified in the `components` array. In Objective-C, you’re responsible for releasing this object by calling [CGImageRelease](cgimagerelease.md).

<a id="Discussion"></a>

## Discussion

Any image sample with color value `{c[1], ... c[N]}` where `min[i] <= c[i] <= max[i]` for `1 <= i <= N` is masked out (that is, not painted). This means that anything underneath the unpainted samples, such as the current fill color, shows through.

## See Also

### Creating image masks

- [CGImageMaskCreate](cgimage/init%28maskwidth_height_bitspercomponent_bitsperpixel_bytesperrow_provider_decode_shouldinterpolate_%29.md): Creates a bitmap image mask from data supplied by a data provider.
