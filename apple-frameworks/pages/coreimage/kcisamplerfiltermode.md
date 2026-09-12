> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/kcisamplerfiltermode](https://developer.apple.com/documentation/coreimage/kcisamplerfiltermode)

# kCISamplerFilterMode (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

The key for the filtering to use when sampling the image. Possible values are [kCISamplerFilterNearest](kcisamplerfilternearest.md) and [kCISamplerFilterLinear](kcisamplerfilterlinear.md).

## Declaration

```swift
let kCISamplerFilterMode: String
```

## See Also

### Constants

- [kCISamplerAffineMatrix](kcisampleraffinematrix.md): The key for an affine matrix. The associated value is an `NSArray` object (\[*a b c d tx ty*\]) that defines the transformation to apply to the sampler.
- [kCISamplerWrapMode](kcisamplerwrapmode.md): The key for the sampler wrap mode. The wrap mode specifies how Core Image produces pixels that are outside the extent of the sample. Possible values are [kCISamplerWrapBlack](kcisamplerwrapblack.md) and [kCISamplerWrapClamp](kcisamplerwrapclamp.md).
- [kCISamplerColorSpace](kcisamplercolorspace.md): The key for the color space to use when sampling the image.

# kCISamplerFilterMode (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

The key for the filtering to use when sampling the image. Possible values are [kCISamplerFilterNearest](kcisamplerfilternearest.md) and [kCISamplerFilterLinear](kcisamplerfilterlinear.md).

## Declaration

```objectivec
extern NSString * const kCISamplerFilterMode;
```

## See Also

### Constants

- [kCISamplerAffineMatrix](kcisampleraffinematrix.md): The key for an affine matrix. The associated value is an `NSArray` object (\[*a b c d tx ty*\]) that defines the transformation to apply to the sampler.
- [kCISamplerWrapMode](kcisamplerwrapmode.md): The key for the sampler wrap mode. The wrap mode specifies how Core Image produces pixels that are outside the extent of the sample. Possible values are [kCISamplerWrapBlack](kcisamplerwrapblack.md) and [kCISamplerWrapClamp](kcisamplerwrapclamp.md).
- [kCISamplerColorSpace](kcisamplercolorspace.md): The key for the color space to use when sampling the image.
