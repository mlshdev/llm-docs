> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerbase/colortexture](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerbase/colortexture)

# colorTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Assigns the color texture this scaler evaluates.

## Declaration

```swift
var colorTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [colorTextureUsage](colortextureusage.md) requests and the pixel format that [colorTextureFormat](../mtlfxtemporaldenoisedscalerdescriptor/colortextureformat.md) requests.

# colorTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Assigns the color texture this scaler evaluates.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> colorTexture;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [colorTextureUsage](colortextureusage.md) requests and the pixel format that [colorTextureFormat](../mtlfxtemporaldenoisedscalerdescriptor/colortextureformat.md) requests.
