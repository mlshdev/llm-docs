> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase)

# MTLFXFrameInterpolatorBase (Swift)

**Framework:** MetalFX  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

## Declaration

```swift
protocol MTLFXFrameInterpolatorBase : NSObjectProtocol
```

## Topics

### Instance Properties

- [aspectRatio](mtlfxframeinterpolatorbase/aspectratio.md): The ratio between width and height of the screen.
- [colorTexture](mtlfxframeinterpolatorbase/colortexture.md): The color texture that this frame interpolator evaluates.
- [colorTextureFormat](mtlfxframeinterpolatorbase/colortextureformat.md): The pixel format of the input color texture for this frame interpolator.
- [colorTextureUsage](mtlfxframeinterpolatorbase/colortextureusage.md): The minimal texture usage options that your app’s input color texture needs in order to support this frame interpolator.
- [contentHeight](mtlfxframeinterpolatorbase/contentheight.md): The height, in pixels, of the content region within the input textures to process.
- [contentWidth](mtlfxframeinterpolatorbase/contentwidth.md): The width, in pixels, of the content region within the input textures to process.
- [deltaTime](mtlfxframeinterpolatorbase/deltatime.md): The length of the time interval, in seconds, between time of current and previous frame.
- [depthContentOffsetX](mtlfxframeinterpolatorbase/depthcontentoffsetx.md): The horizontal offset, in pixels, of the region within the depth texture to use as input.
- [depthContentOffsetY](mtlfxframeinterpolatorbase/depthcontentoffsety.md): The vertical offset, in pixels, of the region within the depth texture to use as input.
- [depthTexture](mtlfxframeinterpolatorbase/depthtexture.md): The depth texture this frame interpolator evaluates.
- [depthTextureFormat](mtlfxframeinterpolatorbase/depthtextureformat.md): The pixel format of the input depth texture for this frame interpolator.
- [depthTextureUsage](mtlfxframeinterpolatorbase/depthtextureusage.md): The minimal texture usage options that your app’s input depth texture needs in order to support this frame interpolator.
- [distortionHeight](mtlfxframeinterpolatorbase/distortionheight.md): The height, in pixels, of the content region within the distortion texture to use as input.
- [distortionOffsetX](mtlfxframeinterpolatorbase/distortionoffsetx.md): The horizontal offset, in pixels, of the region within the distortion texture to use as input.
- [distortionOffsetY](mtlfxframeinterpolatorbase/distortionoffsety.md): The vertical offset, in pixels, of the region within the distortion texture to use as input.
- [distortionTexture](mtlfxframeinterpolatorbase/distortiontexture.md): A distortion field texture that the frame interpolator uses to correct barrel distortion.
- [distortionWidth](mtlfxframeinterpolatorbase/distortionwidth.md): The width, in pixels, of the content region within the distortion texture to use as input.
- [farPlane](mtlfxframeinterpolatorbase/farplane.md): The far plane distance that corresponds to the frustrum that renders the scene into the color buffer.
- [fence](mtlfxframeinterpolatorbase/fence.md): An optional fence that this frame interpolator waits for and updates.
- [fieldOfView](mtlfxframeinterpolatorbase/fieldofview.md): The vertical field of view angle, in degrees, of the camera that renders the scene into the color buffer.
- [inputHeight](mtlfxframeinterpolatorbase/inputheight.md): The height, in pixels, of the input depth and motion texture for the frame interpolator.
- [inputWidth](mtlfxframeinterpolatorbase/inputwidth.md): The width, in pixels, of the input depth and motion texture for the frame interpolator.
- [isDepthReversed](mtlfxframeinterpolatorbase/isdepthreversed.md): A Boolean value that indicates whether the depth texture uses zero to represent the farthest distance.
- [isUITextureComposited](mtlfxframeinterpolatorbase/isuitexturecomposited.md): A Boolean value that controls whether this frame interpolator interprets the color texture to include your game’s custom UI.
- [jitterOffsetX](mtlfxframeinterpolatorbase/jitteroffsetx.md): The horizontal component of the subpixel sampling coordinate you use to generate the color texture input.
- [jitterOffsetY](mtlfxframeinterpolatorbase/jitteroffsety.md): The vertical component of the subpixel sampling coordinate you use to generate the color texture input.
- [motionContentOffsetX](mtlfxframeinterpolatorbase/motioncontentoffsetx.md): The horizontal offset, in pixels, of the region within the motion texture to use as input.
- [motionContentOffsetY](mtlfxframeinterpolatorbase/motioncontentoffsety.md): The vertical offset, in pixels, of the region within the motion texture to use as input.
- [motionTexture](mtlfxframeinterpolatorbase/motiontexture.md): The motion texture this frame interpolator evaluates.
- [motionTextureFormat](mtlfxframeinterpolatorbase/motiontextureformat.md): The pixel format of the input motion texture for this frame interpolator.
- [motionTextureUsage](mtlfxframeinterpolatorbase/motiontextureusage.md): The minimal texture usage options that your app’s input motion texture needs in order to support this frame interpolator.
- [motionVectorScaleX](mtlfxframeinterpolatorbase/motionvectorscalex.md): The horizontal scale factor the frame interpolator applies to the input motion texture.
- [motionVectorScaleY](mtlfxframeinterpolatorbase/motionvectorscaley.md): The vertical scale factor the frame interpolator applies to the input motion texture.
- [nearPlane](mtlfxframeinterpolatorbase/nearplane.md): The near plane distance that corresponds to the frustrum that renders the scene into the color buffer.
- [outputHeight](mtlfxframeinterpolatorbase/outputheight.md): The height, in pixels, of the output color texture for the frame interpolator.
- [outputOffsetX](mtlfxframeinterpolatorbase/outputoffsetx.md): The horizontal offset, in pixels, of the region within the output texture to write results. For regions outside the contents of the colorTexture are copied.
- [outputOffsetY](mtlfxframeinterpolatorbase/outputoffsety.md): The vertical offset, in pixels, of the region within the output texture to write results. . For regions outside the contents of the colorTexture are copied.
- [outputTexture](mtlfxframeinterpolatorbase/outputtexture.md): The output texture into which this frame interpolator writes its output.
- [outputTextureFormat](mtlfxframeinterpolatorbase/outputtextureformat.md): The pixel format of the output color texture for this frame interpolator.
- [outputTextureUsage](mtlfxframeinterpolatorbase/outputtextureusage.md): The minimal texture usage options that your app’s output color texture needs in order to support this frame interpolator.
- [outputWidth](mtlfxframeinterpolatorbase/outputwidth.md): The width, in pixels, of the output color texture for the frame interpolator.
- [prevColorTexture](mtlfxframeinterpolatorbase/prevcolortexture.md): The previous color texture for this frame interpolator during the last call to encode work into a command buffer.
- [shouldResetHistory](mtlfxframeinterpolatorbase/shouldresethistory.md): A Boolean property indicating whether to reset history.
- [uiTexture](mtlfxframeinterpolatorbase/uitexture.md): An optional texture containing your game’s custom UI that this frame interpolator evaluates.
- [uiTextureFormat](mtlfxframeinterpolatorbase/uitextureformat.md): The pixel format of the input UI texture for the frame interpolator.
- [uiTextureUsage](mtlfxframeinterpolatorbase/uitextureusage.md): The minimal texture usage options that your app’s input UI texture needs in order to support this frame interpolator.
- [viewToClipMatrix](mtlfxframeinterpolatorbase/viewtoclipmatrix.md): The view-to-clip coordinates transformation matrix this frame interpolator uses as part of its operation.
- [worldToViewMatrix](mtlfxframeinterpolatorbase/worldtoviewmatrix.md): The world-to-view transformation matrix this frame interpolator uses as part of its operation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTL4FXFrameInterpolator](mtl4fxframeinterpolator.md)
- [MTLFXFrameInterpolator](mtlfxframeinterpolator.md)

# MTLFXFrameInterpolatorBase (Objective-C)

**Framework:** MetalFX  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

## Declaration

```objectivec
@protocol MTLFXFrameInterpolatorBase <NSObject>
```

## Topics

### Instance Properties

- [aspectRatio](mtlfxframeinterpolatorbase/aspectratio.md): The ratio between width and height of the screen.
- [colorTexture](mtlfxframeinterpolatorbase/colortexture.md): The color texture that this frame interpolator evaluates.
- [colorTextureFormat](mtlfxframeinterpolatorbase/colortextureformat.md): The pixel format of the input color texture for this frame interpolator.
- [colorTextureUsage](mtlfxframeinterpolatorbase/colortextureusage.md): The minimal texture usage options that your app’s input color texture needs in order to support this frame interpolator.
- [contentHeight](mtlfxframeinterpolatorbase/contentheight.md): The height, in pixels, of the content region within the input textures to process.
- [contentWidth](mtlfxframeinterpolatorbase/contentwidth.md): The width, in pixels, of the content region within the input textures to process.
- [deltaTime](mtlfxframeinterpolatorbase/deltatime.md): The length of the time interval, in seconds, between time of current and previous frame.
- [depthContentOffsetX](mtlfxframeinterpolatorbase/depthcontentoffsetx.md): The horizontal offset, in pixels, of the region within the depth texture to use as input.
- [depthContentOffsetY](mtlfxframeinterpolatorbase/depthcontentoffsety.md): The vertical offset, in pixels, of the region within the depth texture to use as input.
- [depthTexture](mtlfxframeinterpolatorbase/depthtexture.md): The depth texture this frame interpolator evaluates.
- [depthTextureFormat](mtlfxframeinterpolatorbase/depthtextureformat.md): The pixel format of the input depth texture for this frame interpolator.
- [depthTextureUsage](mtlfxframeinterpolatorbase/depthtextureusage.md): The minimal texture usage options that your app’s input depth texture needs in order to support this frame interpolator.
- [distortionHeight](mtlfxframeinterpolatorbase/distortionheight.md): The height, in pixels, of the content region within the distortion texture to use as input.
- [distortionOffsetX](mtlfxframeinterpolatorbase/distortionoffsetx.md): The horizontal offset, in pixels, of the region within the distortion texture to use as input.
- [distortionOffsetY](mtlfxframeinterpolatorbase/distortionoffsety.md): The vertical offset, in pixels, of the region within the distortion texture to use as input.
- [distortionTexture](mtlfxframeinterpolatorbase/distortiontexture.md): A distortion field texture that the frame interpolator uses to correct barrel distortion.
- [distortionWidth](mtlfxframeinterpolatorbase/distortionwidth.md): The width, in pixels, of the content region within the distortion texture to use as input.
- [farPlane](mtlfxframeinterpolatorbase/farplane.md): The far plane distance that corresponds to the frustrum that renders the scene into the color buffer.
- [fence](mtlfxframeinterpolatorbase/fence.md): An optional fence that this frame interpolator waits for and updates.
- [fieldOfView](mtlfxframeinterpolatorbase/fieldofview.md): The vertical field of view angle, in degrees, of the camera that renders the scene into the color buffer.
- [inputHeight](mtlfxframeinterpolatorbase/inputheight.md): The height, in pixels, of the input depth and motion texture for the frame interpolator.
- [inputWidth](mtlfxframeinterpolatorbase/inputwidth.md): The width, in pixels, of the input depth and motion texture for the frame interpolator.
- [depthReversed](mtlfxframeinterpolatorbase/isdepthreversed.md): A Boolean value that indicates whether the depth texture uses zero to represent the farthest distance.
- [uiTextureComposited](mtlfxframeinterpolatorbase/isuitexturecomposited.md): A Boolean value that controls whether this frame interpolator interprets the color texture to include your game’s custom UI.
- [jitterOffsetX](mtlfxframeinterpolatorbase/jitteroffsetx.md): The horizontal component of the subpixel sampling coordinate you use to generate the color texture input.
- [jitterOffsetY](mtlfxframeinterpolatorbase/jitteroffsety.md): The vertical component of the subpixel sampling coordinate you use to generate the color texture input.
- [motionContentOffsetX](mtlfxframeinterpolatorbase/motioncontentoffsetx.md): The horizontal offset, in pixels, of the region within the motion texture to use as input.
- [motionContentOffsetY](mtlfxframeinterpolatorbase/motioncontentoffsety.md): The vertical offset, in pixels, of the region within the motion texture to use as input.
- [motionTexture](mtlfxframeinterpolatorbase/motiontexture.md): The motion texture this frame interpolator evaluates.
- [motionTextureFormat](mtlfxframeinterpolatorbase/motiontextureformat.md): The pixel format of the input motion texture for this frame interpolator.
- [motionTextureUsage](mtlfxframeinterpolatorbase/motiontextureusage.md): The minimal texture usage options that your app’s input motion texture needs in order to support this frame interpolator.
- [motionVectorScaleX](mtlfxframeinterpolatorbase/motionvectorscalex.md): The horizontal scale factor the frame interpolator applies to the input motion texture.
- [motionVectorScaleY](mtlfxframeinterpolatorbase/motionvectorscaley.md): The vertical scale factor the frame interpolator applies to the input motion texture.
- [nearPlane](mtlfxframeinterpolatorbase/nearplane.md): The near plane distance that corresponds to the frustrum that renders the scene into the color buffer.
- [outputHeight](mtlfxframeinterpolatorbase/outputheight.md): The height, in pixels, of the output color texture for the frame interpolator.
- [outputOffsetX](mtlfxframeinterpolatorbase/outputoffsetx.md): The horizontal offset, in pixels, of the region within the output texture to write results. For regions outside the contents of the colorTexture are copied.
- [outputOffsetY](mtlfxframeinterpolatorbase/outputoffsety.md): The vertical offset, in pixels, of the region within the output texture to write results. . For regions outside the contents of the colorTexture are copied.
- [outputTexture](mtlfxframeinterpolatorbase/outputtexture.md): The output texture into which this frame interpolator writes its output.
- [outputTextureFormat](mtlfxframeinterpolatorbase/outputtextureformat.md): The pixel format of the output color texture for this frame interpolator.
- [outputTextureUsage](mtlfxframeinterpolatorbase/outputtextureusage.md): The minimal texture usage options that your app’s output color texture needs in order to support this frame interpolator.
- [outputWidth](mtlfxframeinterpolatorbase/outputwidth.md): The width, in pixels, of the output color texture for the frame interpolator.
- [prevColorTexture](mtlfxframeinterpolatorbase/prevcolortexture.md): The previous color texture for this frame interpolator during the last call to encode work into a command buffer.
- [shouldResetHistory](mtlfxframeinterpolatorbase/shouldresethistory.md): A Boolean property indicating whether to reset history.
- [uiTexture](mtlfxframeinterpolatorbase/uitexture.md): An optional texture containing your game’s custom UI that this frame interpolator evaluates.
- [uiTextureFormat](mtlfxframeinterpolatorbase/uitextureformat.md): The pixel format of the input UI texture for the frame interpolator.
- [uiTextureUsage](mtlfxframeinterpolatorbase/uitextureusage.md): The minimal texture usage options that your app’s input UI texture needs in order to support this frame interpolator.
- [viewToClipMatrix](mtlfxframeinterpolatorbase/viewtoclipmatrix.md): The view-to-clip coordinates transformation matrix this frame interpolator uses as part of its operation.
- [worldToViewMatrix](mtlfxframeinterpolatorbase/worldtoviewmatrix.md): The world-to-view transformation matrix this frame interpolator uses as part of its operation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTL4FXFrameInterpolator](mtl4fxframeinterpolator.md)
- [MTLFXFrameInterpolator](mtlfxframeinterpolator.md)
