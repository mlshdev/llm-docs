> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpixelformat/rgb16snorm](https://developer.apple.com/documentation/metal/mtlpixelformat/rgb16snorm)

# MTLPixelFormat.rgb16Snorm (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An ordinary format with three components of 16-bit normalized, signed integer values in RGB order.

## Declaration

```swift
case rgb16Snorm
```

<a id="discussion"></a>

## Discussion

The order of the color components in this format are red, green and blue.

You can apply this format to a texture you create only with an [MTLTextureDescriptor](../mtltexturedescriptor.md) instance with all of the following property configurations:

- The [usage](../mtltexturedescriptor/usage.md) property can’t include the [shaderWrite](../mtltextureusage/shaderwrite.md) option.
- The [textureType](../mtltexturedescriptor/texturetype.md) property needs to be equal to [MTLTextureType.typeTextureBuffer](../mtltexturetype/typetexturebuffer.md).

# MTLPixelFormatRGB16Snorm (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An ordinary format with three components of 16-bit normalized, signed integer values in RGB order.

## Declaration

```objectivec
MTLPixelFormatRGB16Snorm
```

<a id="discussion"></a>

## Discussion

The order of the color components in this format are red, green and blue.

You can apply this format to a texture you create only with an [MTLTextureDescriptor](../mtltexturedescriptor.md) instance with all of the following property configurations:

- The [usage](../mtltexturedescriptor/usage.md) property can’t include the [MTLTextureUsageShaderWrite](../mtltextureusage/shaderwrite.md) option.
- The [textureType](../mtltexturedescriptor/texturetype.md) property needs to be equal to [MTLTextureTypeTextureBuffer](../mtltexturetype/typetexturebuffer.md).
