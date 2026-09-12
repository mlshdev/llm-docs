> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/isuitexturecomposited](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/isuitexturecomposited)

# isUITextureComposited (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A Boolean value that controls whether this frame interpolator interprets the color texture to include your game’s custom UI.

## Declaration

```swift
var isUITextureComposited: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) when property [uiTexture](uitexture.md) contains a precomposition of any custom UI image on top of the color image.

When you enable this property, the frame interpolator decomposites the color image [colorTexture](colortexture.md) references from the UI [uiTexture](uitexture.md) references before compositing the UI on to the [outputTexture](outputtexture.md).

This property’s default value is [false](https://developer.apple.com/documentation/swift/false).

# uiTextureComposited (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A Boolean value that controls whether this frame interpolator interprets the color texture to include your game’s custom UI.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isUITextureComposited, setter=setIsUITextureComposited:) BOOL uiTextureComposited;
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) when property [uiTexture](uitexture.md) contains a precomposition of any custom UI image on top of the color image.

When you enable this property, the frame interpolator decomposites the color image [colorTexture](colortexture.md) references from the UI [uiTexture](uitexture.md) references before compositing the UI on to the [outputTexture](outputtexture.md).

This property’s default value is [false](https://developer.apple.com/documentation/swift/false).
