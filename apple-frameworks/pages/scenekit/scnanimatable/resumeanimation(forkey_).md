> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimatable/resumeanimation(forkey:)](https://developer.apple.com/documentation/scenekit/scnanimatable/resumeanimation(forkey:))

# resumeAnimation(forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Resumes a previously paused animation attached to the object with the specified key.

> Use -\[SCNAnimationPlayer setPaused:\] instead

## Declaration

```swift
func resumeAnimation(forKey key: String)
```

## Parameters

- `key`: A string identifying an attached animation.

<a id="Discussion"></a>

## Discussion

This method has no effect if no animation is attached to the object with the specified key or if the specified animation is not currently paused.

## See Also

### Pausing and Resuming Animations

- [pauseAnimation(forKey:)](pauseanimation%28forkey_%29.md): Deprecated. Pauses the animation attached to the object with the specified key.
- [isAnimationPaused(forKey:)](isanimationpaused%28forkey_%29.md): Deprecated. Returns a Boolean value indicating whether the animation attached to the object with the specified key is paused.

# resumeAnimationForKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Resumes a previously paused animation attached to the object with the specified key.

> Use -\[SCNAnimationPlayer setPaused:\] instead

## Declaration

```objectivec
- (void) resumeAnimationForKey:(NSString *) key;
```

## Parameters

- `key`: A string identifying an attached animation.

<a id="Discussion"></a>

## Discussion

This method has no effect if no animation is attached to the object with the specified key or if the specified animation is not currently paused.

## See Also

### Pausing and Resuming Animations

- [pauseAnimationForKey:](pauseanimation%28forkey_%29.md): Deprecated. Pauses the animation attached to the object with the specified key.
- [isAnimationForKeyPaused:](isanimationpaused%28forkey_%29.md): Deprecated. Returns a Boolean value indicating whether the animation attached to the object with the specified key is paused.
