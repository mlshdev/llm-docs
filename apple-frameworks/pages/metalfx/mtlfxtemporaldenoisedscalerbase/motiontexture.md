> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerbase/motiontexture](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerbase/motiontexture)

# motionTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The motion texture this scaler evaluates.

## Declaration

```swift
var motionTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [motionTextureUsage](motiontextureusage.md) requests and the pixel format that [motionTextureFormat](../mtlfxtemporaldenoisedscalerdescriptor/motiontextureformat.md) requests.

# motionTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The motion texture this scaler evaluates.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> motionTexture;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [motionTextureUsage](motiontextureusage.md) requests and the pixel format that [motionTextureFormat](../mtlfxtemporaldenoisedscalerdescriptor/motiontextureformat.md) requests.
