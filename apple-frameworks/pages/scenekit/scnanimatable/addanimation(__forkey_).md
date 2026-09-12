> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimatable/addanimation(_:forkey:)](https://developer.apple.com/documentation/scenekit/scnanimatable/addanimation(_:forkey:))

# addAnimation(\_:forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Adds an animation object for the specified key.

## Declaration

```swift
func addAnimation(_ animation: any SCNAnimationProtocol, forKey key: String?)
```

## Parameters

- `animation`: The animation object to be added.
- `key`: An string identifying the animation for later retrieval. You may pass `nil` if you don’t need to reference the animation later.

<a id="Discussion"></a>

## Discussion

Newly added animations begin executing after the current run loop cycle ends.

SceneKit does not define any requirements for the contents of the `key` parameter—it need only be unique among the keys for other animations you add. If you add an animation with an existing key, this method overwrites the existing animation.

## See Also

### Managing Animations

- [animation(forKey:)](animation%28forkey_%29.md): Deprecated. Returns the animation with the specified key.
- [animationKeys](animationkeys.md): An array containing the keys of all animations currently attached to the object.
- [removeAllAnimations()](removeallanimations%28%29.md): Removes all the animations currently attached to the object.
- [removeAnimation(forKey:)](removeanimation%28forkey_%29.md): Removes the animation attached to the object with the specified key.
- [removeAnimation(forKey:fadeOutDuration:)](removeanimation%28forkey_fadeoutduration_%29.md): Deprecated. Removes the animation attached to the object with the specified key, smoothly transitioning out of the animation’s effect.

# addAnimation:forKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds an animation object for the specified key.

## Declaration

```objectivec
- (void) addAnimation:(id<SCNAnimation>) animation forKey:(NSString *) key;
```

## Parameters

- `animation`: The animation object to be added.
- `key`: An string identifying the animation for later retrieval. You may pass `nil` if you don’t need to reference the animation later.

<a id="Discussion"></a>

## Discussion

Newly added animations begin executing after the current run loop cycle ends.

SceneKit does not define any requirements for the contents of the `key` parameter—it need only be unique among the keys for other animations you add. If you add an animation with an existing key, this method overwrites the existing animation.

## See Also

### Managing Animations

- [animationForKey:](animation%28forkey_%29.md): Deprecated. Returns the animation with the specified key.
- [animationKeys](animationkeys.md): An array containing the keys of all animations currently attached to the object.
- [removeAllAnimations](removeallanimations%28%29.md): Removes all the animations currently attached to the object.
- [removeAnimationForKey:](removeanimation%28forkey_%29.md): Removes the animation attached to the object with the specified key.
- [removeAnimationForKey:fadeOutDuration:](removeanimation%28forkey_fadeoutduration_%29.md): Deprecated. Removes the animation attached to the object with the specified key, smoothly transitioning out of the animation’s effect.
