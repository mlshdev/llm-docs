> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/distortiontexture](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/distortiontexture)

# distortionTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A distortion field texture that the frame interpolator uses to correct barrel distortion.

## Declaration

```swift
var distortionTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

Assign a texture containing a distortion field to this property to enable barrel distortion correction during frame interpolation. The distortion field describes how to remap pixels to correct lens distortion artifacts common in VR or wide-angle camera applications.

You are responsible for providing a texture that matches the output dimensions of the frame interpolator.

# distortionTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A distortion field texture that the frame interpolator uses to correct barrel distortion.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> distortionTexture;
```

<a id="discussion"></a>

## Discussion

Assign a texture containing a distortion field to this property to enable barrel distortion correction during frame interpolation. The distortion field describes how to remap pixels to correct lens distortion artifacts common in VR or wide-angle camera applications.

You are responsible for providing a texture that matches the output dimensions of the frame interpolator.
