> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimatable/removeanimation(forkey:fadeoutduration:)](https://developer.apple.com/documentation/scenekit/scnanimatable/removeanimation(forkey:fadeoutduration:))

# removeAnimation(forKey:fadeOutDuration:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Removes the animation attached to the object with the specified key, smoothly transitioning out of the animation’s effect.

## Declaration

```swift
func removeAnimation(forKey key: String, fadeOutDuration duration: CGFloat)
```

## Parameters

- `key`: A string identifying an attached animation to remove.
- `duration`: The duration for transitioning out of the animation’s effect before it is removed.

<a id="Discussion"></a>

## Discussion

Use this method to create smooth transitions between the effects of multiple animations. For example, the geometry loaded from a scene file for a game character may have associated animations for player actions such as walking and jumping. When the player lands from a jump, you remove the jump animation so the character continues walking. If you use the [removeAnimation(forKey:)](removeanimation%28forkey_%29.md) method to remove the jump animation, SceneKit abruptly switches from the current frame of the jump animation to the current frame of the walk animation. If you use the [removeAnimation(forKey:fadeOutDuration:)](removeanimation%28forkey_fadeoutduration_%29.md) method instead, SceneKit plays both animations at once during that duration and interpolates vertex positions from one animation to the other, creating a smooth transition.

## See Also

### Managing Animations

- [addAnimation(\_:forKey:)](addanimation%28__forkey_%29.md): Adds an animation object for the specified key.
- [animation(forKey:)](animation%28forkey_%29.md): Deprecated. Returns the animation with the specified key.
- [animationKeys](animationkeys.md): An array containing the keys of all animations currently attached to the object.
- [removeAllAnimations()](removeallanimations%28%29.md): Removes all the animations currently attached to the object.
- [removeAnimation(forKey:)](removeanimation%28forkey_%29.md): Removes the animation attached to the object with the specified key.

# removeAnimationForKey:fadeOutDuration: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Removes the animation attached to the object with the specified key, smoothly transitioning out of the animation’s effect.

## Declaration

```objectivec
- (void) removeAnimationForKey:(NSString *) key fadeOutDuration:(CGFloat) duration;
```

## Parameters

- `key`: A string identifying an attached animation to remove.
- `duration`: The duration for transitioning out of the animation’s effect before it is removed.

<a id="Discussion"></a>

## Discussion

Use this method to create smooth transitions between the effects of multiple animations. For example, the geometry loaded from a scene file for a game character may have associated animations for player actions such as walking and jumping. When the player lands from a jump, you remove the jump animation so the character continues walking. If you use the [removeAnimationForKey:](removeanimation%28forkey_%29.md) method to remove the jump animation, SceneKit abruptly switches from the current frame of the jump animation to the current frame of the walk animation. If you use the [removeAnimationForKey:fadeOutDuration:](removeanimation%28forkey_fadeoutduration_%29.md) method instead, SceneKit plays both animations at once during that duration and interpolates vertex positions from one animation to the other, creating a smooth transition.

## See Also

### Managing Animations

- [addAnimation:forKey:](addanimation%28__forkey_%29.md): Adds an animation object for the specified key.
- [animationForKey:](animation%28forkey_%29.md): Deprecated. Returns the animation with the specified key.
- [animationKeys](animationkeys.md): An array containing the keys of all animations currently attached to the object.
- [removeAllAnimations](removeallanimations%28%29.md): Removes all the animations currently attached to the object.
- [removeAnimationForKey:](removeanimation%28forkey_%29.md): Removes the animation attached to the object with the specified key.
