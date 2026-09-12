> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/outputtexture](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/outputtexture)

# outputTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The output texture into which this frame interpolator writes its output.

## Declaration

```swift
var outputTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for providing a texture with a private `storageMode` to this property.

# outputTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The output texture into which this frame interpolator writes its output.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> outputTexture;
```

<a id="discussion"></a>

## Discussion

You are responsible for providing a texture with a private `storageMode` to this property.
