> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerbase](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerbase)

# MTLFXTemporalDenoisedScalerBase (Swift)

**Framework:** MetalFX  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

## Declaration

```swift
protocol MTLFXTemporalDenoisedScalerBase : MTLFXFrameInterpolatableScaler
```

## Topics

### Instance Properties

- [colorTexture](mtlfxtemporaldenoisedscalerbase/colortexture.md): Assigns the color texture this scaler evaluates.
- [colorTextureFormat](mtlfxtemporaldenoisedscalerbase/colortextureformat.md): The pixel format of the input color texture for this denoiser scaler.
- [colorTextureUsage](mtlfxtemporaldenoisedscalerbase/colortextureusage.md): The minimal texture usage options that your app’s input color texture needs in order to support this denoiser scaler.
- [denoiseStrengthMaskTexture](mtlfxtemporaldenoisedscalerbase/denoisestrengthmasktexture.md): The denoise strength mask texture this scaler evaluates.
- [denoiseStrengthMaskTextureFormat](mtlfxtemporaldenoisedscalerbase/denoisestrengthmasktextureformat.md): The pixel format of the input denoise strength mask texture for this denoiser scaler.
- [denoiseStrengthMaskTextureUsage](mtlfxtemporaldenoisedscalerbase/denoisestrengthmasktextureusage.md): The minimal texture usage options that your app’s input denoise strength texture needs in order to support this denoiser scaler.
- [depthTexture](mtlfxtemporaldenoisedscalerbase/depthtexture.md): The depth texture this scaler evaluates.
- [depthTextureFormat](mtlfxtemporaldenoisedscalerbase/depthtextureformat.md): The pixel format of the input depth texture for this denoiser scaler.
- [depthTextureUsage](mtlfxtemporaldenoisedscalerbase/depthtextureusage.md): The minimal texture usage options that your app’s input depth texture needs in order to support this denoiser scaler.
- [diffuseAlbedoTexture](mtlfxtemporaldenoisedscalerbase/diffusealbedotexture.md): The diffuse albedo texture this scaler evaluates.
- [diffuseAlbedoTextureFormat](mtlfxtemporaldenoisedscalerbase/diffusealbedotextureformat.md): The pixel format of the input diffuse albedo texture for this denoiser scaler.
- [diffuseAlbedoTextureUsage](mtlfxtemporaldenoisedscalerbase/diffusealbedotextureusage.md): The minimal texture usage options that your app’s input diffuse albedo texture needs in order to support this denoiser scaler.
- [exposureTexture](mtlfxtemporaldenoisedscalerbase/exposuretexture.md): An exposure texture that this denoiser scaler evaluates.
- [fence](mtlfxtemporaldenoisedscalerbase/fence.md): An optional fence that this denoiser scaler waits for and updates.
- [inputContentMaxScale](mtlfxtemporaldenoisedscalerbase/inputcontentmaxscale.md): The maximum input content scale this scaler supports.
- [inputContentMinScale](mtlfxtemporaldenoisedscalerbase/inputcontentminscale.md): The minimum input content scale this scaler supports.
- [inputHeight](mtlfxtemporaldenoisedscalerbase/inputheight.md): The height, in pixels, of the input color texture for the scaler.
- [inputWidth](mtlfxtemporaldenoisedscalerbase/inputwidth.md): The width, in pixels, of the input color texture for the scaler.
- [isDepthReversed](mtlfxtemporaldenoisedscalerbase/isdepthreversed.md): A Boolean value that indicates whether the depth texture uses zero to represent the farthest distance.
- [jitterOffsetX](mtlfxtemporaldenoisedscalerbase/jitteroffsetx.md): The horizontal component of the subpixel sampling coordinate you use to generate the color texture input.
- [jitterOffsetY](mtlfxtemporaldenoisedscalerbase/jitteroffsety.md): The vertical component of the subpixel sampling coordinate you use to generate the color texture input.
- [motionTexture](mtlfxtemporaldenoisedscalerbase/motiontexture.md): The motion texture this scaler evaluates.
- [motionTextureFormat](mtlfxtemporaldenoisedscalerbase/motiontextureformat.md): The pixel format of the input motion texture for this denoiser scaler.
- [motionTextureUsage](mtlfxtemporaldenoisedscalerbase/motiontextureusage.md): The minimal texture usage options that your app’s input motion texture needs in order to support this denoiser scaler.
- [motionVectorScaleX](mtlfxtemporaldenoisedscalerbase/motionvectorscalex.md): The horizontal scale factor the denoiser scaler applies to the input motion texture.
- [motionVectorScaleY](mtlfxtemporaldenoisedscalerbase/motionvectorscaley.md): The vertical scale factor the denoiser scaler applies to the input motion texture.
- [normalTexture](mtlfxtemporaldenoisedscalerbase/normaltexture.md): The normal texture this scaler evaluates.
- [normalTextureFormat](mtlfxtemporaldenoisedscalerbase/normaltextureformat.md): The pixel format of the input normal texture for this denoiser scaler.
- [normalTextureUsage](mtlfxtemporaldenoisedscalerbase/normaltextureusage.md): The minimal texture usage options that your app’s input normal texture needs in order to support this denoiser scaler.
- [outputHeight](mtlfxtemporaldenoisedscalerbase/outputheight.md): The height, in pixels, of the output color texture for the scaler.
- [outputTexture](mtlfxtemporaldenoisedscalerbase/outputtexture.md): The output texture into which this denoiser scaler writes its output.
- [outputTextureFormat](mtlfxtemporaldenoisedscalerbase/outputtextureformat.md): The pixel format of the output color texture for this denoiser scaler.
- [outputTextureUsage](mtlfxtemporaldenoisedscalerbase/outputtextureusage.md): The minimal texture usage options that your app’s output texture needs in order to support this denoiser scaler.
- [outputWidth](mtlfxtemporaldenoisedscalerbase/outputwidth.md): The width, in pixels, of the output color texture for the scaler.
- [preExposure](mtlfxtemporaldenoisedscalerbase/preexposure.md): A pre-exposure value for this scaler to evaluate.
- [reactiveMaskTexture](mtlfxtemporaldenoisedscalerbase/reactivemasktexture.md): A reactive-mask texture input for this scaler to evaluate.
- [reactiveMaskTextureFormat](mtlfxtemporaldenoisedscalerbase/reactivemasktextureformat.md): The pixel format of the input reactive mask texture for this denoiser scaler.
- [reactiveMaskTextureUsage](mtlfxtemporaldenoisedscalerbase/reactivemasktextureusage.md): The minimal texture usage options that your app’s input reactive mask texture needs in order to support this denoiser scaler.
- [reactiveTextureUsage](mtlfxtemporaldenoisedscalerbase/reactivetextureusage.md): Deprecated. The minimal texture usage options that your app’s input reactive texture needs in order to support this denoiser scaler.
- [roughnessTexture](mtlfxtemporaldenoisedscalerbase/roughnesstexture.md): The roughness texture this scaler evaluates.
- [roughnessTextureFormat](mtlfxtemporaldenoisedscalerbase/roughnesstextureformat.md): The pixel format of the input normal texture for this denoiser scaler.
- [roughnessTextureUsage](mtlfxtemporaldenoisedscalerbase/roughnesstextureusage.md): The minimal texture usage options that your app’s input roughness texture needs in order to support this denoiser scaler.
- [shouldResetHistory](mtlfxtemporaldenoisedscalerbase/shouldresethistory.md): A Boolean property indicating whether to reset history.
- [specularAlbedoTexture](mtlfxtemporaldenoisedscalerbase/specularalbedotexture.md): The specular albedo texture this scaler evaluates.
- [specularAlbedoTextureFormat](mtlfxtemporaldenoisedscalerbase/specularalbedotextureformat.md): The pixel format of the input specular albedo for this denoiser scaler.
- [specularAlbedoTextureUsage](mtlfxtemporaldenoisedscalerbase/specularalbedotextureusage.md): The minimal texture usage options that your app’s input specular albedo texture needs in order to support this denoiser scaler.
- [specularHitDistanceTexture](mtlfxtemporaldenoisedscalerbase/specularhitdistancetexture.md): The specular hit texture this scaler evaluates.
- [specularHitDistanceTextureFormat](mtlfxtemporaldenoisedscalerbase/specularhitdistancetextureformat.md): The pixel format of the input specular hit distance texture for this denoiser scaler.
- [specularHitDistanceTextureUsage](mtlfxtemporaldenoisedscalerbase/specularhitdistancetextureusage.md): The minimal texture usage options that your app’s input specular hit texture needs in order to support this denoiser scaler.
- [transparencyOverlayTexture](mtlfxtemporaldenoisedscalerbase/transparencyoverlaytexture.md): The transparency overlay texture that this scaler evaluates.
- [transparencyOverlayTextureFormat](mtlfxtemporaldenoisedscalerbase/transparencyoverlaytextureformat.md): The pixel format of the input transparency overlay texture for this denoiser scaler.
- [transparencyOverlayTextureUsage](mtlfxtemporaldenoisedscalerbase/transparencyoverlaytextureusage.md): The minimal texture usage options that your app’s input transparency overlay texture needs in order to support this denoiser scaler.
- [viewToClipMatrix](mtlfxtemporaldenoisedscalerbase/viewtoclipmatrix.md): The view-to-clip coordinates transformation matrix this scaler uses as part of its operation.
- [worldToViewMatrix](mtlfxtemporaldenoisedscalerbase/worldtoviewmatrix.md): The world-to-view transformation matrix this scaler uses as part of its operation.

## Relationships

### Inherits From

- [MTLFXFrameInterpolatableScaler](mtlfxframeinterpolatablescaler.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTL4FXTemporalDenoisedScaler](mtl4fxtemporaldenoisedscaler.md)
- [MTLFXTemporalDenoisedScaler](mtlfxtemporaldenoisedscaler.md)

# MTLFXTemporalDenoisedScalerBase (Objective-C)

**Framework:** MetalFX  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

## Declaration

```objectivec
@protocol MTLFXTemporalDenoisedScalerBase <MTLFXFrameInterpolatableScaler>
```

## Topics

### Instance Properties

- [colorTexture](mtlfxtemporaldenoisedscalerbase/colortexture.md): Assigns the color texture this scaler evaluates.
- [colorTextureFormat](mtlfxtemporaldenoisedscalerbase/colortextureformat.md): The pixel format of the input color texture for this denoiser scaler.
- [colorTextureUsage](mtlfxtemporaldenoisedscalerbase/colortextureusage.md): The minimal texture usage options that your app’s input color texture needs in order to support this denoiser scaler.
- [denoiseStrengthMaskTexture](mtlfxtemporaldenoisedscalerbase/denoisestrengthmasktexture.md): The denoise strength mask texture this scaler evaluates.
- [denoiseStrengthMaskTextureFormat](mtlfxtemporaldenoisedscalerbase/denoisestrengthmasktextureformat.md): The pixel format of the input denoise strength mask texture for this denoiser scaler.
- [denoiseStrengthMaskTextureUsage](mtlfxtemporaldenoisedscalerbase/denoisestrengthmasktextureusage.md): The minimal texture usage options that your app’s input denoise strength texture needs in order to support this denoiser scaler.
- [depthTexture](mtlfxtemporaldenoisedscalerbase/depthtexture.md): The depth texture this scaler evaluates.
- [depthTextureFormat](mtlfxtemporaldenoisedscalerbase/depthtextureformat.md): The pixel format of the input depth texture for this denoiser scaler.
- [depthTextureUsage](mtlfxtemporaldenoisedscalerbase/depthtextureusage.md): The minimal texture usage options that your app’s input depth texture needs in order to support this denoiser scaler.
- [diffuseAlbedoTexture](mtlfxtemporaldenoisedscalerbase/diffusealbedotexture.md): The diffuse albedo texture this scaler evaluates.
- [diffuseAlbedoTextureFormat](mtlfxtemporaldenoisedscalerbase/diffusealbedotextureformat.md): The pixel format of the input diffuse albedo texture for this denoiser scaler.
- [diffuseAlbedoTextureUsage](mtlfxtemporaldenoisedscalerbase/diffusealbedotextureusage.md): The minimal texture usage options that your app’s input diffuse albedo texture needs in order to support this denoiser scaler.
- [exposureTexture](mtlfxtemporaldenoisedscalerbase/exposuretexture.md): An exposure texture that this denoiser scaler evaluates.
- [fence](mtlfxtemporaldenoisedscalerbase/fence.md): An optional fence that this denoiser scaler waits for and updates.
- [inputContentMaxScale](mtlfxtemporaldenoisedscalerbase/inputcontentmaxscale.md): The maximum input content scale this scaler supports.
- [inputContentMinScale](mtlfxtemporaldenoisedscalerbase/inputcontentminscale.md): The minimum input content scale this scaler supports.
- [inputHeight](mtlfxtemporaldenoisedscalerbase/inputheight.md): The height, in pixels, of the input color texture for the scaler.
- [inputWidth](mtlfxtemporaldenoisedscalerbase/inputwidth.md): The width, in pixels, of the input color texture for the scaler.
- [depthReversed](mtlfxtemporaldenoisedscalerbase/isdepthreversed.md): A Boolean value that indicates whether the depth texture uses zero to represent the farthest distance.
- [jitterOffsetX](mtlfxtemporaldenoisedscalerbase/jitteroffsetx.md): The horizontal component of the subpixel sampling coordinate you use to generate the color texture input.
- [jitterOffsetY](mtlfxtemporaldenoisedscalerbase/jitteroffsety.md): The vertical component of the subpixel sampling coordinate you use to generate the color texture input.
- [motionTexture](mtlfxtemporaldenoisedscalerbase/motiontexture.md): The motion texture this scaler evaluates.
- [motionTextureFormat](mtlfxtemporaldenoisedscalerbase/motiontextureformat.md): The pixel format of the input motion texture for this denoiser scaler.
- [motionTextureUsage](mtlfxtemporaldenoisedscalerbase/motiontextureusage.md): The minimal texture usage options that your app’s input motion texture needs in order to support this denoiser scaler.
- [motionVectorScaleX](mtlfxtemporaldenoisedscalerbase/motionvectorscalex.md): The horizontal scale factor the denoiser scaler applies to the input motion texture.
- [motionVectorScaleY](mtlfxtemporaldenoisedscalerbase/motionvectorscaley.md): The vertical scale factor the denoiser scaler applies to the input motion texture.
- [normalTexture](mtlfxtemporaldenoisedscalerbase/normaltexture.md): The normal texture this scaler evaluates.
- [normalTextureFormat](mtlfxtemporaldenoisedscalerbase/normaltextureformat.md): The pixel format of the input normal texture for this denoiser scaler.
- [normalTextureUsage](mtlfxtemporaldenoisedscalerbase/normaltextureusage.md): The minimal texture usage options that your app’s input normal texture needs in order to support this denoiser scaler.
- [outputHeight](mtlfxtemporaldenoisedscalerbase/outputheight.md): The height, in pixels, of the output color texture for the scaler.
- [outputTexture](mtlfxtemporaldenoisedscalerbase/outputtexture.md): The output texture into which this denoiser scaler writes its output.
- [outputTextureFormat](mtlfxtemporaldenoisedscalerbase/outputtextureformat.md): The pixel format of the output color texture for this denoiser scaler.
- [outputTextureUsage](mtlfxtemporaldenoisedscalerbase/outputtextureusage.md): The minimal texture usage options that your app’s output texture needs in order to support this denoiser scaler.
- [outputWidth](mtlfxtemporaldenoisedscalerbase/outputwidth.md): The width, in pixels, of the output color texture for the scaler.
- [preExposure](mtlfxtemporaldenoisedscalerbase/preexposure.md): A pre-exposure value for this scaler to evaluate.
- [reactiveMaskTexture](mtlfxtemporaldenoisedscalerbase/reactivemasktexture.md): A reactive-mask texture input for this scaler to evaluate.
- [reactiveMaskTextureFormat](mtlfxtemporaldenoisedscalerbase/reactivemasktextureformat.md): The pixel format of the input reactive mask texture for this denoiser scaler.
- [reactiveMaskTextureUsage](mtlfxtemporaldenoisedscalerbase/reactivemasktextureusage.md): The minimal texture usage options that your app’s input reactive mask texture needs in order to support this denoiser scaler.
- [reactiveTextureUsage](mtlfxtemporaldenoisedscalerbase/reactivetextureusage.md): Deprecated. The minimal texture usage options that your app’s input reactive texture needs in order to support this denoiser scaler.
- [roughnessTexture](mtlfxtemporaldenoisedscalerbase/roughnesstexture.md): The roughness texture this scaler evaluates.
- [roughnessTextureFormat](mtlfxtemporaldenoisedscalerbase/roughnesstextureformat.md): The pixel format of the input normal texture for this denoiser scaler.
- [roughnessTextureUsage](mtlfxtemporaldenoisedscalerbase/roughnesstextureusage.md): The minimal texture usage options that your app’s input roughness texture needs in order to support this denoiser scaler.
- [shouldResetHistory](mtlfxtemporaldenoisedscalerbase/shouldresethistory.md): A Boolean property indicating whether to reset history.
- [specularAlbedoTexture](mtlfxtemporaldenoisedscalerbase/specularalbedotexture.md): The specular albedo texture this scaler evaluates.
- [specularAlbedoTextureFormat](mtlfxtemporaldenoisedscalerbase/specularalbedotextureformat.md): The pixel format of the input specular albedo for this denoiser scaler.
- [specularAlbedoTextureUsage](mtlfxtemporaldenoisedscalerbase/specularalbedotextureusage.md): The minimal texture usage options that your app’s input specular albedo texture needs in order to support this denoiser scaler.
- [specularHitDistanceTexture](mtlfxtemporaldenoisedscalerbase/specularhitdistancetexture.md): The specular hit texture this scaler evaluates.
- [specularHitDistanceTextureFormat](mtlfxtemporaldenoisedscalerbase/specularhitdistancetextureformat.md): The pixel format of the input specular hit distance texture for this denoiser scaler.
- [specularHitDistanceTextureUsage](mtlfxtemporaldenoisedscalerbase/specularhitdistancetextureusage.md): The minimal texture usage options that your app’s input specular hit texture needs in order to support this denoiser scaler.
- [transparencyOverlayTexture](mtlfxtemporaldenoisedscalerbase/transparencyoverlaytexture.md): The transparency overlay texture that this scaler evaluates.
- [transparencyOverlayTextureFormat](mtlfxtemporaldenoisedscalerbase/transparencyoverlaytextureformat.md): The pixel format of the input transparency overlay texture for this denoiser scaler.
- [transparencyOverlayTextureUsage](mtlfxtemporaldenoisedscalerbase/transparencyoverlaytextureusage.md): The minimal texture usage options that your app’s input transparency overlay texture needs in order to support this denoiser scaler.
- [viewToClipMatrix](mtlfxtemporaldenoisedscalerbase/viewtoclipmatrix.md): The view-to-clip coordinates transformation matrix this scaler uses as part of its operation.
- [worldToViewMatrix](mtlfxtemporaldenoisedscalerbase/worldtoviewmatrix.md): The world-to-view transformation matrix this scaler uses as part of its operation.

## Relationships

### Inherits From

- [MTLFXFrameInterpolatableScaler](mtlfxframeinterpolatablescaler.md)

### Inherited By

- [MTL4FXTemporalDenoisedScaler](mtl4fxtemporaldenoisedscaler.md)
- [MTLFXTemporalDenoisedScaler](mtlfxtemporaldenoisedscaler.md)
