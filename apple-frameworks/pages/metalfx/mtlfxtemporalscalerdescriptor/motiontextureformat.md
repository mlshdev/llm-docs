> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporalscalerdescriptor/motiontextureformat](https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerdescriptor/motiontextureformat)

# motionTextureFormat (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+

The pixel format of the input motion texture for the temporal scaler you create with this descriptor.

## Declaration

```swift
var motionTextureFormat: MTLPixelFormat { get set }
```

## See Also

### Configuring a temporal effect’s input

- [inputWidth](inputwidth.md): The width of the input color texture for the temporal scaler you create with this descriptor.
- [inputHeight](inputheight.md): The height of the input color texture for the temporal scaler you create with this descriptor.
- [isInputContentPropertiesEnabled](isinputcontentpropertiesenabled.md): A Boolean value that indicates whether the temporal scaler you create with this descriptor uses dynamic resolution.
- [inputContentMinScale](inputcontentminscale.md): The smallest scale factor the temporal scaler you create with this descriptor can use to generate output textures.
- [inputContentMaxScale](inputcontentmaxscale.md): The largest scale factor the temporal scaler you create with this descriptor can use to generate output textures.
- [colorTextureFormat](colortextureformat.md): The pixel format of the input color texture for the temporal scaler you create with this descriptor.
- [depthTextureFormat](depthtextureformat.md): The pixel format of the input depth texture for the temporal scaler you create with this descriptor.
- [isAutoExposureEnabled](isautoexposureenabled.md): A Boolean value that indicates whether MetalFX calculates the exposure for each frame.
- [requiresSynchronousInitialization](requiressynchronousinitialization.md): A Boolean value that indicates whether MetalFX compiles a temporal scaling effect’s underlying upscaler as it creates the instance.
- [isReactiveMaskTextureEnabled](isreactivemasktextureenabled.md): A Boolean value that indicates whether a temporal scaler you create with the descriptor applies a reactive mask.
- [reactiveMaskTextureFormat](reactivemasktextureformat.md): The pixel format of the reactive mask input texture for a temporal scaler you create with the descriptor.

# motionTextureFormat (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+

The pixel format of the input motion texture for the temporal scaler you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLPixelFormat motionTextureFormat;
```

## See Also

### Configuring a temporal effect’s input

- [inputWidth](inputwidth.md): The width of the input color texture for the temporal scaler you create with this descriptor.
- [inputHeight](inputheight.md): The height of the input color texture for the temporal scaler you create with this descriptor.
- [inputContentPropertiesEnabled](isinputcontentpropertiesenabled.md): A Boolean value that indicates whether the temporal scaler you create with this descriptor uses dynamic resolution.
- [inputContentMinScale](inputcontentminscale.md): The smallest scale factor the temporal scaler you create with this descriptor can use to generate output textures.
- [inputContentMaxScale](inputcontentmaxscale.md): The largest scale factor the temporal scaler you create with this descriptor can use to generate output textures.
- [colorTextureFormat](colortextureformat.md): The pixel format of the input color texture for the temporal scaler you create with this descriptor.
- [depthTextureFormat](depthtextureformat.md): The pixel format of the input depth texture for the temporal scaler you create with this descriptor.
- [autoExposureEnabled](isautoexposureenabled.md): A Boolean value that indicates whether MetalFX calculates the exposure for each frame.
- [requiresSynchronousInitialization](requiressynchronousinitialization.md): A Boolean value that indicates whether MetalFX compiles a temporal scaling effect’s underlying upscaler as it creates the instance.
- [reactiveMaskTextureEnabled](isreactivemasktextureenabled.md): A Boolean value that indicates whether a temporal scaler you create with the descriptor applies a reactive mask.
- [reactiveMaskTextureFormat](reactivemasktextureformat.md): The pixel format of the reactive mask input texture for a temporal scaler you create with the descriptor.
