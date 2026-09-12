> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporalscalerdescriptor/isoutputresolutionmotionvectorsenabled](https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerdescriptor/isoutputresolutionmotionvectorsenabled)

# isOutputResolutionMotionVectorsEnabled (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A Boolean value that indicates whether the scaler expects motion vectors at output resolution.

## Declaration

```swift
var isOutputResolutionMotionVectorsEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) when your app provides motion vectors at the output resolution rather than the input resolution.

When you enable this property, the scaler interprets the [motionTexture](../mtlfxtemporalscalerbase/motiontexture.md) dimensions to match [outputWidth](outputwidth.md) and [outputHeight](outputheight.md) instead of [inputWidth](inputwidth.md) and [inputHeight](inputheight.md).

This property’s default value is [false](https://developer.apple.com/documentation/swift/false).

# outputResolutionMotionVectorsEnabled (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A Boolean value that indicates whether the scaler expects motion vectors at output resolution.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isOutputResolutionMotionVectorsEnabled) BOOL outputResolutionMotionVectorsEnabled;
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) when your app provides motion vectors at the output resolution rather than the input resolution.

When you enable this property, the scaler interprets the [motionTexture](../mtlfxtemporalscalerbase/motiontexture.md) dimensions to match [outputWidth](outputwidth.md) and [outputHeight](outputheight.md) instead of [inputWidth](inputwidth.md) and [inputHeight](inputheight.md).

This property’s default value is [false](https://developer.apple.com/documentation/swift/false).
