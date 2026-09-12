> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimationplayer](https://developer.apple.com/documentation/scenekit/scnanimationplayer)

# SCNAnimationPlayer (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
class SCNAnimationPlayer
```

## Topics

### Initializers

- [init(animation:)](scnanimationplayer/init%28animation_%29.md)
- [init(coder:)](scnanimationplayer/init%28coder_%29.md)

### Instance Properties

- [animation](scnanimationplayer/animation.md)
- [blendFactor](scnanimationplayer/blendfactor.md)
- [paused](scnanimationplayer/paused.md)
- [speed](scnanimationplayer/speed.md)

### Instance Methods

- [play()](scnanimationplayer/play%28%29.md)
- [stop()](scnanimationplayer/stop%28%29.md)
- [stop(withBlendOutDuration:)](scnanimationplayer/stop%28withblendoutduration_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)

## See Also

### Explicit Animation

- [SCNAnimatable](scnanimatable.md): The common interface for attaching animations to nodes, geometries, materials, and other SceneKit objects.
- [SCNAnimationEvent](scnanimationevent.md): A container for a closure, a block in Objective-C, to be executed at a specific time during playback of an animation.
- [SCNAnimation](scnanimation-swift.class.md)
- [SCNTimingFunction](scntimingfunction.md)
- [SCNAnimationProtocol](scnanimationprotocol.md)
- [SCNAnimation](scnanimation-swift.class.md)

# SCNAnimationPlayer (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
@interface SCNAnimationPlayer : NSObject
```

## Topics

### Instance Properties

- [animation](scnanimationplayer/animation.md)
- [blendFactor](scnanimationplayer/blendfactor.md)
- [paused](scnanimationplayer/paused.md)
- [speed](scnanimationplayer/speed.md)

### Instance Methods

- [play](scnanimationplayer/play%28%29.md)
- [stop](scnanimationplayer/stop%28%29.md)
- [stopWithBlendOutDuration:](scnanimationplayer/stop%28withblendoutduration_%29.md)

### Type Methods

- [animationPlayerWithAnimation:](scnanimationplayer/init%28animation_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)

## See Also

### Explicit Animation

- [SCNAnimatable](scnanimatable.md): The common interface for attaching animations to nodes, geometries, materials, and other SceneKit objects.
- [SCNAnimationEvent](scnanimationevent.md): A container for a closure, a block in Objective-C, to be executed at a specific time during playback of an animation.
- [SCNAnimation](scnanimation-swift.class.md)
- [SCNTimingFunction](scntimingfunction.md)
- [SCNAnimation](scnanimationprotocol.md)
- [SCNAnimation](scnanimation-swift.class.md)
