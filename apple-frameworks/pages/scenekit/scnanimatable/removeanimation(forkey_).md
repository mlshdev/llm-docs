> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimatable/removeanimation(forkey:)](https://developer.apple.com/documentation/scenekit/scnanimatable/removeanimation(forkey:))

# removeAnimation(forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Removes the animation attached to the object with the specified key.

## Declaration

```swift
func removeAnimation(forKey key: String)
```

## Parameters

- `key`: A string identifying an attached animation to remove.

## See Also

### Managing Animations

- [addAnimation(\_:forKey:)](addanimation%28__forkey_%29.md): Adds an animation object for the specified key.
- [animation(forKey:)](animation%28forkey_%29.md): Deprecated. Returns the animation with the specified key.
- [animationKeys](animationkeys.md): An array containing the keys of all animations currently attached to the object.
- [removeAllAnimations()](removeallanimations%28%29.md): Removes all the animations currently attached to the object.
- [removeAnimation(forKey:fadeOutDuration:)](removeanimation%28forkey_fadeoutduration_%29.md): Deprecated. Removes the animation attached to the object with the specified key, smoothly transitioning out of the animation’s effect.

# removeAnimationForKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes the animation attached to the object with the specified key.

## Declaration

```objectivec
- (void) removeAnimationForKey:(NSString *) key;
```

## Parameters

- `key`: A string identifying an attached animation to remove.

## See Also

### Managing Animations

- [addAnimation:forKey:](addanimation%28__forkey_%29.md): Adds an animation object for the specified key.
- [animationForKey:](animation%28forkey_%29.md): Deprecated. Returns the animation with the specified key.
- [animationKeys](animationkeys.md): An array containing the keys of all animations currently attached to the object.
- [removeAllAnimations](removeallanimations%28%29.md): Removes all the animations currently attached to the object.
- [removeAnimationForKey:fadeOutDuration:](removeanimation%28forkey_fadeoutduration_%29.md): Deprecated. Removes the animation attached to the object with the specified key, smoothly transitioning out of the animation’s effect.
