> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimationevent](https://developer.apple.com/documentation/scenekit/scnanimationevent)

# SCNAnimationEvent (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A container for a closure, a block in Objective-C, to be executed at a specific time during playback of an animation.

## Declaration

```swift
class SCNAnimationEvent
```

<a id="overview"></a>

## Overview

Use animation events to add actions to animations, such as playing a sound to coincide with the movement of an animated character, or removing a node from the scene after playing an animation that fades out its visible geometry.

After you create an animation event, you attach it to an animation object using the object’s [animationEvents](../quartzcore/caanimation/animationevents.md) property.

## Topics

### Creating an Animation Event

- [init(keyTime:block:)](scnanimationevent/init%28keytime_block_%29.md): Creates an animation event.

### Constants

- [SCNAnimationEventBlock](scnanimationeventblock.md): Signature for the block called when an animation event triggers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Explicit Animation

- [SCNAnimatable](scnanimatable.md): The common interface for attaching animations to nodes, geometries, materials, and other SceneKit objects.
- [SCNAnimation](scnanimation-swift.class.md)
- [SCNAnimationPlayer](scnanimationplayer.md)
- [SCNTimingFunction](scntimingfunction.md)
- [SCNAnimationProtocol](scnanimationprotocol.md)
- [SCNAnimation](scnanimation-swift.class.md)

# SCNAnimationEvent (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A container for a closure, a block in Objective-C, to be executed at a specific time during playback of an animation.

## Declaration

```objectivec
@interface SCNAnimationEvent : NSObject
```

<a id="overview"></a>

## Overview

Use animation events to add actions to animations, such as playing a sound to coincide with the movement of an animated character, or removing a node from the scene after playing an animation that fades out its visible geometry.

After you create an animation event, you attach it to an animation object using the object’s [animationEvents](../quartzcore/caanimation/animationevents.md) property.

## Topics

### Creating an Animation Event

- [animationEventWithKeyTime:block:](scnanimationevent/init%28keytime_block_%29.md): Creates an animation event.

### Constants

- [SCNAnimationEventBlock](scnanimationeventblock.md): Signature for the block called when an animation event triggers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Explicit Animation

- [SCNAnimatable](scnanimatable.md): The common interface for attaching animations to nodes, geometries, materials, and other SceneKit objects.
- [SCNAnimation](scnanimation-swift.class.md)
- [SCNAnimationPlayer](scnanimationplayer.md)
- [SCNTimingFunction](scntimingfunction.md)
- [SCNAnimation](scnanimationprotocol.md)
- [SCNAnimation](scnanimation-swift.class.md)
