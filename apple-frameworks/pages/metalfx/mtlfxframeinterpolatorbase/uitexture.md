> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/uitexture](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/uitexture)

# uiTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An optional texture containing your game’s custom UI that this frame interpolator evaluates.

## Declaration

```swift
var uiTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

The frame interpolator uses this property to overlay your custom UI on any frame data it produces into [outputTexture](outputtexture.md).

Use property [isUITextureComposited](isuitexturecomposited.md) to indicate to this frame interpolator if this texture contains a precomposition of [colorTexture](colortexture.md)and UI.

# uiTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An optional texture containing your game’s custom UI that this frame interpolator evaluates.

## Declaration

```objectivec
@property (nonatomic, retain, setter=setUITexture:, nullable) id<MTLTexture> uiTexture;
```

<a id="discussion"></a>

## Discussion

The frame interpolator uses this property to overlay your custom UI on any frame data it produces into [outputTexture](outputtexture.md).

Use property [uiTextureComposited](isuitexturecomposited.md) to indicate to this frame interpolator if this texture contains a precomposition of [colorTexture](colortexture.md)and UI.
