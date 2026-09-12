> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimatable/animation(forkey:)](https://developer.apple.com/documentation/scenekit/scnanimatable/animation(forkey:))

# animation(forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the animation with the specified key.

## Declaration

```swift
func animation(forKey key: String) -> CAAnimation?
```

## Parameters

- `key`: A string identifying a previously added animation.

<a id="return-value"></a>

## Return Value

An animation object matching the key, or `nil` if no such animation exists.

<a id="Discussion"></a>

## Discussion

Attempting to modify any properties of the returned object results in undefined behavior.

## See Also

### Managing Animations

- [addAnimation(\_:forKey:)](addanimation%28__forkey_%29.md): Adds an animation object for the specified key.
- [animationKeys](animationkeys.md): An array containing the keys of all animations currently attached to the object.
- [removeAllAnimations()](removeallanimations%28%29.md): Removes all the animations currently attached to the object.
- [removeAnimation(forKey:)](removeanimation%28forkey_%29.md): Removes the animation attached to the object with the specified key.
- [removeAnimation(forKey:fadeOutDuration:)](removeanimation%28forkey_fadeoutduration_%29.md): Deprecated. Removes the animation attached to the object with the specified key, smoothly transitioning out of the animation’s effect.

# animationForKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the animation with the specified key.

## Declaration

```objectivec
- (CAAnimation *) animationForKey:(NSString *) key;
```

## Parameters

- `key`: A string identifying a previously added animation.

<a id="return-value"></a>

## Return Value

An animation object matching the key, or `nil` if no such animation exists.

<a id="Discussion"></a>

## Discussion

Attempting to modify any properties of the returned object results in undefined behavior.

## See Also

### Managing Animations

- [addAnimation:forKey:](addanimation%28__forkey_%29.md): Adds an animation object for the specified key.
- [animationKeys](animationkeys.md): An array containing the keys of all animations currently attached to the object.
- [removeAllAnimations](removeallanimations%28%29.md): Removes all the animations currently attached to the object.
- [removeAnimationForKey:](removeanimation%28forkey_%29.md): Removes the animation attached to the object with the specified key.
- [removeAnimationForKey:fadeOutDuration:](removeanimation%28forkey_fadeoutduration_%29.md): Deprecated. Removes the animation attached to the object with the specified key, smoothly transitioning out of the animation’s effect.
