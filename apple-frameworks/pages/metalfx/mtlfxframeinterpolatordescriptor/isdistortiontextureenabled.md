> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatordescriptor/isdistortiontextureenabled](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatordescriptor/isdistortiontextureenabled)

# isDistortionTextureEnabled (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A Boolean value that indicates whether the frame interpolator supports barrel distortion correction.

## Declaration

```swift
var isDistortionTextureEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to create a frame interpolator that can apply barrel distortion correction using a distortion field texture.

When you enable this property, you can assign a distortion texture to the interpolator’s [distortionTexture](../mtlfxframeinterpolatorbase/distortiontexture.md) property to correct lens distortion artifacts during frame interpolation.

This property’s default value is [false](https://developer.apple.com/documentation/swift/false).

# distortionTextureEnabled (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A Boolean value that indicates whether the frame interpolator supports barrel distortion correction.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isDistortionTextureEnabled) BOOL distortionTextureEnabled;
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to create a frame interpolator that can apply barrel distortion correction using a distortion field texture.

When you enable this property, you can assign a distortion texture to the interpolator’s [distortionTexture](../mtlfxframeinterpolatorbase/distortiontexture.md) property to correct lens distortion artifacts during frame interpolation.

This property’s default value is [false](https://developer.apple.com/documentation/swift/false).
