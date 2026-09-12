> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/contentaveragelightlevel](https://developer.apple.com/documentation/coreimage/ciimage/contentaveragelightlevel)

# contentAverageLightLevel (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the content average light level of the image.

## Declaration

```swift
var contentAverageLightLevel: Float { get }
```

<a id="discussion"></a>

## Discussion

If the image average light level is unknown, then the value 0.0 will be returned.

If the image headroom is known, then a value greater than or equal to 0.0 will be returned.

The image average light level may known when a CIImage is first initialized. If the a CIImage is initialized with a:

- `CGImage` : then the headroom will be determined by `CGImageGetContentAverageLightLevel()`.
- `CVPixelBuffer` : then the headroom will be determined by `kCVImageBufferContentLightLevelInfoKey`.

If the image is the result of applying a [CIFilter](../cifilter-swift.class.md) or [CIKernel](../cikernel.md), this property will return `0.0`.

There are exceptions to this.  Applying a [CIWarpKernel](../ciwarpkernel.md) or certain [CIFilter](../cifilter-swift.class.md) (e.g. `CIGaussianBlur`, `CILanczosScaleTransform`, `CIAreaAverage` and some others) to an image will result in a [CIImage](../ciimage.md) instance with the same `contentAverageLightLevel` property value.

# contentAverageLightLevel (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the content average light level of the image.

## Declaration

```objectivec
@property (nonatomic, readonly) float contentAverageLightLevel;
```

<a id="discussion"></a>

## Discussion

If the image average light level is unknown, then the value 0.0 will be returned.

If the image headroom is known, then a value greater than or equal to 0.0 will be returned.

The image average light level may known when a CIImage is first initialized. If the a CIImage is initialized with a:

- `CGImage` : then the headroom will be determined by `CGImageGetContentAverageLightLevel()`.
- `CVPixelBuffer` : then the headroom will be determined by `kCVImageBufferContentLightLevelInfoKey`.

If the image is the result of applying a [CIFilter](../cifilter-swift.class.md) or [CIKernel](../cikernel.md), this property will return `0.0`.

There are exceptions to this.  Applying a [CIWarpKernel](../ciwarpkernel.md) or certain [CIFilter](../cifilter-swift.class.md) (e.g. `CIGaussianBlur`, `CILanczosScaleTransform`, `CIAreaAverage` and some others) to an image will result in a [CIImage](../ciimage.md) instance with the same `contentAverageLightLevel` property value.
