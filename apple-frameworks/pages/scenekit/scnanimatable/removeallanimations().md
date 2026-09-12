> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimatable/removeallanimations()](https://developer.apple.com/documentation/scenekit/scnanimatable/removeallanimations())

# removeAllAnimations() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Removes all the animations currently attached to the object.

## Declaration

```swift
func removeAllAnimations()
```

## See Also

### Managing Animations

- [addAnimation(\_:forKey:)](addanimation%28__forkey_%29.md): Adds an animation object for the specified key.
- [animation(forKey:)](animation%28forkey_%29.md): Deprecated. Returns the animation with the specified key.
- [animationKeys](animationkeys.md): An array containing the keys of all animations currently attached to the object.
- [removeAnimation(forKey:)](removeanimation%28forkey_%29.md): Removes the animation attached to the object with the specified key.
- [removeAnimation(forKey:fadeOutDuration:)](removeanimation%28forkey_fadeoutduration_%29.md): Deprecated. Removes the animation attached to the object with the specified key, smoothly transitioning out of the animation’s effect.

# removeAllAnimations (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes all the animations currently attached to the object.

## Declaration

```objectivec
- (void) removeAllAnimations;
```

## See Also

### Managing Animations

- [addAnimation:forKey:](addanimation%28__forkey_%29.md): Adds an animation object for the specified key.
- [animationForKey:](animation%28forkey_%29.md): Deprecated. Returns the animation with the specified key.
- [animationKeys](animationkeys.md): An array containing the keys of all animations currently attached to the object.
- [removeAnimationForKey:](removeanimation%28forkey_%29.md): Removes the animation attached to the object with the specified key.
- [removeAnimationForKey:fadeOutDuration:](removeanimation%28forkey_fadeoutduration_%29.md): Deprecated. Removes the animation attached to the object with the specified key, smoothly transitioning out of the animation’s effect.
