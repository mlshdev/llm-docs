> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimation-swift.class](https://developer.apple.com/documentation/scenekit/scnanimation-swift.class)

# SCNAnimation (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
class SCNAnimation
```

## Topics

### Supporting Types

- [SCNAnimationDidStartBlock](scnanimationdidstartblock.md)
- [SCNAnimationDidStopBlock](scnanimationdidstopblock.md)

### Initializers

- [init(CAAnimation:)](scnanimation-swift.class/init%28caanimation_%29-3sfjw.md)
- [init(caAnimation:)](scnanimation-swift.class/init%28caanimation_%29-4t0rw.md)
- [init(coder:)](scnanimation-swift.class/init%28coder_%29.md)
- [init(contentsOf:)](scnanimation-swift.class/init%28contentsof_%29.md)
- [init(contentsOfURL:)](scnanimation-swift.class/init%28contentsofurl_%29.md)
- [init(named:)](scnanimation-swift.class/init%28named_%29.md)

### Instance Properties

- [animationDidStart](scnanimation-swift.class/animationdidstart.md)
- [animationDidStop](scnanimation-swift.class/animationdidstop.md)
- [animationEvents](scnanimation-swift.class/animationevents.md)
- [autoreverses](scnanimation-swift.class/autoreverses.md)
- [blendInDuration](scnanimation-swift.class/blendinduration.md)
- [blendOutDuration](scnanimation-swift.class/blendoutduration.md)
- [duration](scnanimation-swift.class/duration.md)
- [fillsBackward](scnanimation-swift.class/fillsbackward.md)
- [fillsForward](scnanimation-swift.class/fillsforward.md)
- [isAdditive](scnanimation-swift.class/isadditive.md)
- [isAppliedOnCompletion](scnanimation-swift.class/isappliedoncompletion.md)
- [isCumulative](scnanimation-swift.class/iscumulative.md)
- [isRemovedOnCompletion](scnanimation-swift.class/isremovedoncompletion.md)
- [keyPath](scnanimation-swift.class/keypath.md)
- [repeatCount](scnanimation-swift.class/repeatcount.md)
- [startDelay](scnanimation-swift.class/startdelay.md)
- [timeOffset](scnanimation-swift.class/timeoffset.md)
- [timingFunction](scnanimation-swift.class/timingfunction.md)
- [usesSceneTimeBase](scnanimation-swift.class/usesscenetimebase.md)

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
- [SCNAnimationProtocol](scnanimationprotocol.md)

## See Also

### Explicit Animation

- [SCNAnimatable](scnanimatable.md): The common interface for attaching animations to nodes, geometries, materials, and other SceneKit objects.
- [SCNAnimationEvent](scnanimationevent.md): A container for a closure, a block in Objective-C, to be executed at a specific time during playback of an animation.
- [SCNAnimationPlayer](scnanimationplayer.md)
- [SCNTimingFunction](scntimingfunction.md)
- [SCNAnimationProtocol](scnanimationprotocol.md)

# SCNAnimation (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
@interface SCNAnimation : NSObject
```

## Topics

### Supporting Types

- [SCNAnimationDidStartBlock](scnanimationdidstartblock.md)
- [SCNAnimationDidStopBlock](scnanimationdidstopblock.md)

### Instance Properties

- [animationDidStart](scnanimation-swift.class/animationdidstart.md)
- [animationDidStop](scnanimation-swift.class/animationdidstop.md)
- [animationEvents](scnanimation-swift.class/animationevents.md)
- [autoreverses](scnanimation-swift.class/autoreverses.md)
- [blendInDuration](scnanimation-swift.class/blendinduration.md)
- [blendOutDuration](scnanimation-swift.class/blendoutduration.md)
- [duration](scnanimation-swift.class/duration.md)
- [fillsBackward](scnanimation-swift.class/fillsbackward.md)
- [fillsForward](scnanimation-swift.class/fillsforward.md)
- [additive](scnanimation-swift.class/isadditive.md)
- [appliedOnCompletion](scnanimation-swift.class/isappliedoncompletion.md)
- [cumulative](scnanimation-swift.class/iscumulative.md)
- [removedOnCompletion](scnanimation-swift.class/isremovedoncompletion.md)
- [keyPath](scnanimation-swift.class/keypath.md)
- [repeatCount](scnanimation-swift.class/repeatcount.md)
- [startDelay](scnanimation-swift.class/startdelay.md)
- [timeOffset](scnanimation-swift.class/timeoffset.md)
- [timingFunction](scnanimation-swift.class/timingfunction.md)
- [usesSceneTimeBase](scnanimation-swift.class/usesscenetimebase.md)

### Type Methods

- [animationWithCAAnimation:](scnanimation-swift.class/init%28caanimation_%29-4t0rw.md)
- [animationWithContentsOfURL:](scnanimation-swift.class/init%28contentsof_%29.md)
- [animationNamed:](scnanimation-swift.class/init%28named_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimation](scnanimationprotocol.md)

## See Also

### Explicit Animation

- [SCNAnimatable](scnanimatable.md): The common interface for attaching animations to nodes, geometries, materials, and other SceneKit objects.
- [SCNAnimationEvent](scnanimationevent.md): A container for a closure, a block in Objective-C, to be executed at a specific time during playback of an animation.
- [SCNAnimationPlayer](scnanimationplayer.md)
- [SCNTimingFunction](scntimingfunction.md)
- [SCNAnimation](scnanimationprotocol.md)
