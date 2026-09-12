> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/prevcolortexture](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/prevcolortexture)

# prevColorTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The previous color texture for this frame interpolator during the last call to encode work into a command buffer.

## Declaration

```swift
var prevColorTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

The frame interpolator typically uses the previous color texture as part of its operation. When you call [encode(commandBuffer:)](../mtlfxframeinterpolator/encode%28commandbuffer_%29.md) and its [shouldResetHistory](shouldresethistory.md) property is [false](https://developer.apple.com/documentation/swift/false), then you are responsible for assigning to this property the data that in [colorTexture](colortexture.md) from the previous call to [encode(commandBuffer:)](../mtlfxframeinterpolator/encode%28commandbuffer_%29.md).

Additionally, you are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [colorTextureUsage](colortextureusage.md) requests and the pixel format that [colorTextureFormat](colortextureformat.md) requests.

# prevColorTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The previous color texture for this frame interpolator during the last call to encode work into a command buffer.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> prevColorTexture;
```

<a id="discussion"></a>

## Discussion

The frame interpolator typically uses the previous color texture as part of its operation. When you call [encodeToCommandBuffer:](../mtlfxframeinterpolator/encode%28commandbuffer_%29.md) and its [shouldResetHistory](shouldresethistory.md) property is [false](https://developer.apple.com/documentation/swift/false), then you are responsible for assigning to this property the data that in [colorTexture](colortexture.md) from the previous call to [encodeToCommandBuffer:](../mtlfxframeinterpolator/encode%28commandbuffer_%29.md).

Additionally, you are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [colorTextureUsage](colortextureusage.md) requests and the pixel format that [colorTextureFormat](colortextureformat.md) requests.
