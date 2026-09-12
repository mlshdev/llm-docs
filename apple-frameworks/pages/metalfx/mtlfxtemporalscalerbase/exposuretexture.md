> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporalscalerbase/exposuretexture](https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerbase/exposuretexture)

# exposureTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.11+ · tvOS · visionOS 1.0+

The exposure texture this scaler uses.

## Declaration

```swift
var exposureTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

Create and assign a 1x1  `MTLPixelFormatR16Float`  texture to assign to this property. MetalFX reads the R channel of the texel at position `(0,0)` and uses it as the exposure value. It then uses this value to multiply the input color.

For best performance, use the GPU to generate the exposure value and store it into this texture.

> **Note**

> The temporal scaler ignores this property if you create it with a descriptor that has its [isAutoExposureEnabled](../mtlfxtemporalscalerdescriptor/isautoexposureenabled.md) property set to [true](https://developer.apple.com/documentation/swift/true).

# exposureTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS · visionOS 1.0+

The exposure texture this scaler uses.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> exposureTexture;
```

<a id="discussion"></a>

## Discussion

Create and assign a 1x1  `MTLPixelFormatR16Float`  texture to assign to this property. MetalFX reads the R channel of the texel at position `(0,0)` and uses it as the exposure value. It then uses this value to multiply the input color.

For best performance, use the GPU to generate the exposure value and store it into this texture.

> **Note**

> The temporal scaler ignores this property if you create it with a descriptor that has its [autoExposureEnabled](../mtlfxtemporalscalerdescriptor/isautoexposureenabled.md) property set to [true](https://developer.apple.com/documentation/swift/true).
