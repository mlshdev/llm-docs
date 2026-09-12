> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimationeventblock](https://developer.apple.com/documentation/scenekit/scnanimationeventblock)

# SCNAnimationEventBlock (Swift)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Signature for the block called when an animation event triggers.

## Declaration

```swift
typealias SCNAnimationEventBlock = (any SCNAnimationProtocol, Any, Bool) -> Void
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **animation**: The animation triggering the animation event.
- **animatedObject**: The Scene Kit object affected by the animation.
- **playingBackward**: [true](https://developer.apple.com/documentation/swift/true) if the animation is playing in reverse; otherwise, [false](https://developer.apple.com/documentation/swift/false).

# SCNAnimationEventBlock (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Signature for the block called when an animation event triggers.

## Declaration

```objectivec
typedef void (^)(id<SCNAnimation>, id, _Bool) SCNAnimationEventBlock;
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **animation**: The animation triggering the animation event.
- **animatedObject**: The Scene Kit object affected by the animation.
- **playingBackward**: [true](https://developer.apple.com/documentation/swift/true) if the animation is playing in reverse; otherwise, [false](https://developer.apple.com/documentation/swift/false).
