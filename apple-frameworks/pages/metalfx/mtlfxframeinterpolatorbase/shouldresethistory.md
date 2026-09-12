> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/shouldresethistory](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/shouldresethistory)

# shouldResetHistory (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A Boolean property indicating whether to reset history.

## Declaration

```swift
var shouldResetHistory: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to invalidate history, for example when there is a scene cut in your game.

When you set this property to [false](https://developer.apple.com/documentation/swift/false), you are responsible for ensuring the property [prevColorTexture](prevcolortexture.md) contains frame data corresponding to that in [colorTexture](colortexture.md) during your previous call to [encode(commandBuffer:)](../mtlfxframeinterpolator/encode%28commandbuffer_%29.md).

# shouldResetHistory (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A Boolean property indicating whether to reset history.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldResetHistory;
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to invalidate history, for example when there is a scene cut in your game.

When you set this property to [false](https://developer.apple.com/documentation/swift/false), you are responsible for ensuring the property [prevColorTexture](prevcolortexture.md) contains frame data corresponding to that in [colorTexture](colortexture.md) during your previous call to [encodeToCommandBuffer:](../mtlfxframeinterpolator/encode%28commandbuffer_%29.md).
