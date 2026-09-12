> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/isautoexposureenabled](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/isautoexposureenabled)

# isAutoExposureEnabled (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

A Boolean value that indicates whether MetalFX calculates the exposure for each frame.

## Declaration

```swift
var isAutoExposureEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to create a scaler that automatically calculates the exposure level for each image it scales.

> **Note**

> Denoiser scaler instances that use auto exposure ignore their [exposureTexture](../mtlfxtemporalscalerbase/exposuretexture.md) property.

This property’s default value is [false](https://developer.apple.com/documentation/swift/false).

# autoExposureEnabled (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

A Boolean value that indicates whether MetalFX calculates the exposure for each frame.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isAutoExposureEnabled) BOOL autoExposureEnabled;
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to create a scaler that automatically calculates the exposure level for each image it scales.

> **Note**

> Denoiser scaler instances that use auto exposure ignore their [exposureTexture](../mtlfxtemporalscalerbase/exposuretexture.md) property.

This property’s default value is [false](https://developer.apple.com/documentation/swift/false).
