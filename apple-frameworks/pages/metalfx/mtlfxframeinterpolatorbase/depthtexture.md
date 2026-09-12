> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/depthtexture](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/depthtexture)

# depthTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The depth texture this frame interpolator evaluates.

## Declaration

```swift
var depthTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [depthTextureUsage](depthtextureusage.md) requests and the pixel format that [depthTextureFormat](depthtextureformat.md) requests.

# depthTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The depth texture this frame interpolator evaluates.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> depthTexture;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [depthTextureUsage](depthtextureusage.md) requests and the pixel format that [depthTextureFormat](depthtextureformat.md) requests.
