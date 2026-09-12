> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciformat](https://developer.apple.com/documentation/coreimage/ciformat)

# CIFormat (Swift)

**Framework:** Core Image  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Pixel data formats for image input, output, and processing.

## Declaration

```swift
struct CIFormat
```

## Topics

### Image Formats

- [A16](ciformat/a16.md): A 16-bit-per-pixel, fixed-point pixel format in which the sole component is alpha.
- [A8](ciformat/a8.md): An 8-bit-per-pixel, fixed-point pixel format in which the sole component is alpha.
- [ABGR8](ciformat/abgr8.md): A 32-bit-per-pixel, fixed-point pixel format in which the alpha value precedes the blue, green, and red color components.
- [ARGB8](ciformat/argb8.md): A 32-bit-per-pixel, fixed-point pixel format in which the alpha value precedes the red, green, and blue color components.
- [Af](ciformat/af.md): A 32-bit-per-pixel, full-width floating-point pixel format in which the sole component is alpha.
- [Ah](ciformat/ah.md): A 16-bit-per-pixel, half-width floating-point pixel format in which the sole component is alpha.
- [BGRA8](ciformat/bgra8.md): A 32-bit-per-pixel, fixed-point pixel format in which the blue, green, and red color components precede the alpha value.
- [R16](ciformat/r16.md): A 16-bit-per-pixel, fixed-point pixel format in which the sole component is a red color value.
- [R8](ciformat/r8.md): An 8-bit-per-pixel, fixed-point pixel format in which the sole component is a red color value.
- [RG16](ciformat/rg16.md): A 32-bit-per-pixel, fixed-point pixel format with only red and green color components.
- [RG8](ciformat/rg8.md): A 16-bit-per-pixel, fixed-point pixel format with only red and green color components.
- [RGB10](ciformat/rgb10.md)
- [RGBA16](ciformat/rgba16.md): A 64-bit-per-pixel, fixed-point pixel format.
- [RGBX16](ciformat/rgbx16.md)
- [RGBA8](ciformat/rgba8.md): A 32-bit-per-pixel, fixed-point pixel format in which the red, green, and blue color components precede the alpha value.
- [RGBAf](ciformat/rgbaf.md): A 128-bit-per-pixel, floating-point pixel format.
- [rgbXf](ciformat/rgbxf.md)
- [RGBAh](ciformat/rgbah.md): A 64-bit-per-pixel, floating-point pixel format.
- [rgbXh](ciformat/rgbxh.md)
- [RGf](ciformat/rgf.md): A 64-bit-per-pixel, floating-point pixel format with only red and green color components.
- [RGh](ciformat/rgh.md): A 32-bit-per-pixel, floating-point pixel format with only red and green color components.
- [Rf](ciformat/rf.md): A 32-bit-per-pixel, floating-point pixel format in which the sole component is a red color value.
- [Rh](ciformat/rh.md): A 16-bit-per-pixel, floating-point pixel format in which the sole component is a red color value.
- [L16](ciformat/l16.md): A 16-bit-per-pixel, fixed-point pixel format in which the sole component is luminance.
- [L8](ciformat/l8.md): An 8-bit-per-pixel, fixed-point pixel format in which the sole component is luminance.
- [LA16](ciformat/la16.md): A 32-bit-per-pixel, fixed-point pixel format with only 16-bit luminance and alpha components.
- [LA8](ciformat/la8.md): A 16-bit-per-pixel, fixed-point pixel format with only 8-bit luminance and alpha components.
- [LAf](ciformat/laf.md): A 64-bit-per-pixel, full-width floating-point pixel format with 32-bit luminance and alpha components.
- [LAh](ciformat/lah.md): A 32-bit-per-pixel, half-width floating-point pixel format with 16-bit luminance and alpha components.
- [Lf](ciformat/lf.md): A 32-bit-per-pixel, full-width floating-point pixel format in which the sole component is luminance.
- [Lh](ciformat/lh.md): A 16-bit-per-pixel, half-width floating-point pixel format in which the sole component is luminance.

### Initializers

- [init(rawValue:)](ciformat/init%28rawvalue_%29.md)

### Type Properties

- [RGBX8](ciformat/rgbx8.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom Filters

- [Writing Custom Kernels](writing-custom-kernels.md): Write your own custom kernels in either the Core Image Kernel Language or the Metal Shading Language.
- [CIKernel](cikernel.md): A GPU-based image-processing routine used to create custom Core Image filters.
- [CIColorKernel](cicolorkernel.md): A GPU-based image-processing routine that processes only the color information in images, used to create custom Core Image filters.
- [CIWarpKernel](ciwarpkernel.md): A GPU-based image-processing routine that processes only the geometry information in an image, used to create custom Core Image filters.
- [CIBlendKernel](ciblendkernel.md): A GPU-based image-processing routine that is optimized for blending two images.
- [CISampler](cisampler.md): An object that retrieves pixel samples for processing by a filter kernel.
- [CIFilterShape](cifiltershape.md): A description of the bounding shape of a filter and the domain of definition for a filter operation.

# CIFormat (Objective-C)

**Framework:** Core Image  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Pixel data formats for image input, output, and processing.

## Declaration

```objectivec
typedef int CIFormat;
```

## Topics

### Image Formats

- [kCIFormatA16](ciformat/a16.md): A 16-bit-per-pixel, fixed-point pixel format in which the sole component is alpha.
- [kCIFormatA8](ciformat/a8.md): An 8-bit-per-pixel, fixed-point pixel format in which the sole component is alpha.
- [kCIFormatABGR8](ciformat/abgr8.md): A 32-bit-per-pixel, fixed-point pixel format in which the alpha value precedes the blue, green, and red color components.
- [kCIFormatARGB8](ciformat/argb8.md): A 32-bit-per-pixel, fixed-point pixel format in which the alpha value precedes the red, green, and blue color components.
- [kCIFormatAf](ciformat/af.md): A 32-bit-per-pixel, full-width floating-point pixel format in which the sole component is alpha.
- [kCIFormatAh](ciformat/ah.md): A 16-bit-per-pixel, half-width floating-point pixel format in which the sole component is alpha.
- [kCIFormatBGRA8](ciformat/bgra8.md): A 32-bit-per-pixel, fixed-point pixel format in which the blue, green, and red color components precede the alpha value.
- [kCIFormatR16](ciformat/r16.md): A 16-bit-per-pixel, fixed-point pixel format in which the sole component is a red color value.
- [kCIFormatR8](ciformat/r8.md): An 8-bit-per-pixel, fixed-point pixel format in which the sole component is a red color value.
- [kCIFormatRG16](ciformat/rg16.md): A 32-bit-per-pixel, fixed-point pixel format with only red and green color components.
- [kCIFormatRG8](ciformat/rg8.md): A 16-bit-per-pixel, fixed-point pixel format with only red and green color components.
- [kCIFormatRGB10](ciformat/rgb10.md)
- [kCIFormatRGBA16](ciformat/rgba16.md): A 64-bit-per-pixel, fixed-point pixel format.
- [kCIFormatRGBX16](ciformat/rgbx16.md)
- [kCIFormatRGBA8](ciformat/rgba8.md): A 32-bit-per-pixel, fixed-point pixel format in which the red, green, and blue color components precede the alpha value.
- [kCIFormatRGBAf](ciformat/rgbaf.md): A 128-bit-per-pixel, floating-point pixel format.
- [kCIFormatRGBXf](ciformat/rgbxf.md)
- [kCIFormatRGBAh](ciformat/rgbah.md): A 64-bit-per-pixel, floating-point pixel format.
- [kCIFormatRGBXh](ciformat/rgbxh.md)
- [kCIFormatRGf](ciformat/rgf.md): A 64-bit-per-pixel, floating-point pixel format with only red and green color components.
- [kCIFormatRGh](ciformat/rgh.md): A 32-bit-per-pixel, floating-point pixel format with only red and green color components.
- [kCIFormatRf](ciformat/rf.md): A 32-bit-per-pixel, floating-point pixel format in which the sole component is a red color value.
- [kCIFormatRh](ciformat/rh.md): A 16-bit-per-pixel, floating-point pixel format in which the sole component is a red color value.
- [kCIFormatL16](ciformat/l16.md): A 16-bit-per-pixel, fixed-point pixel format in which the sole component is luminance.
- [kCIFormatL8](ciformat/l8.md): An 8-bit-per-pixel, fixed-point pixel format in which the sole component is luminance.
- [kCIFormatLA16](ciformat/la16.md): A 32-bit-per-pixel, fixed-point pixel format with only 16-bit luminance and alpha components.
- [kCIFormatLA8](ciformat/la8.md): A 16-bit-per-pixel, fixed-point pixel format with only 8-bit luminance and alpha components.
- [kCIFormatLAf](ciformat/laf.md): A 64-bit-per-pixel, full-width floating-point pixel format with 32-bit luminance and alpha components.
- [kCIFormatLAh](ciformat/lah.md): A 32-bit-per-pixel, half-width floating-point pixel format with 16-bit luminance and alpha components.
- [kCIFormatLf](ciformat/lf.md): A 32-bit-per-pixel, full-width floating-point pixel format in which the sole component is luminance.
- [kCIFormatLh](ciformat/lh.md): A 16-bit-per-pixel, half-width floating-point pixel format in which the sole component is luminance.

## See Also

### Custom Filters

- [Writing Custom Kernels](writing-custom-kernels.md): Write your own custom kernels in either the Core Image Kernel Language or the Metal Shading Language.
- [CIKernel](cikernel.md): A GPU-based image-processing routine used to create custom Core Image filters.
- [CIColorKernel](cicolorkernel.md): A GPU-based image-processing routine that processes only the color information in images, used to create custom Core Image filters.
- [CIWarpKernel](ciwarpkernel.md): A GPU-based image-processing routine that processes only the geometry information in an image, used to create custom Core Image filters.
- [CIBlendKernel](ciblendkernel.md): A GPU-based image-processing routine that is optimized for blending two images.
- [CISampler](cisampler.md): An object that retrieves pixel samples for processing by a filter kernel.
- [CIFilterShape](cifiltershape.md): A description of the bounding shape of a filter and the domain of definition for a filter operation.
