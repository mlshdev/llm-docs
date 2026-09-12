> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxspatialscalerbase/outputtexture](https://developer.apple.com/documentation/metalfx/mtlfxspatialscalerbase/outputtexture)

# outputTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.11+ · tvOS · visionOS 1.0+

The output texture into which this scaler writes its output.

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
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS · visionOS 1.0+

The output texture into which this scaler writes its output.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> outputTexture;
```

<a id="discussion"></a>

## Discussion

You are responsible for providing a texture with a private `storageMode` to this property.
