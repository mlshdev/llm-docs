> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatordescriptor/requiresprevcolortexture](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatordescriptor/requiresprevcolortexture)

# requiresPrevColorTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A Boolean value that indicates whether the frame interpolator requires the client to provide a previous color texture.

## Declaration

```swift
var requiresPrevColorTexture: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When this property is YES (the default), you must assign a valid texture to the interpolator’s `prevColorTexture` property before encoding. When NO, the frame interpolator internally manages the previous color data and `prevColorTexture` may be nil.

This property’s default value is [true](https://developer.apple.com/documentation/swift/true).

# requiresPrevColorTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A Boolean value that indicates whether the frame interpolator requires the client to provide a previous color texture.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL requiresPrevColorTexture;
```

<a id="discussion"></a>

## Discussion

When this property is YES (the default), you must assign a valid texture to the interpolator’s `prevColorTexture` property before encoding. When NO, the frame interpolator internally manages the previous color data and `prevColorTexture` may be nil.

This property’s default value is [true](https://developer.apple.com/documentation/swift/true).
