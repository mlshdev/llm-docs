> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimatable/isanimationpaused(forkey:)](https://developer.apple.com/documentation/scenekit/scnanimatable/isanimationpaused(forkey:))

# isAnimationPaused(forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a Boolean value indicating whether the animation attached to the object with the specified key is paused.

> Use -\[SCNAnimationPlayer paused\] instead

## Declaration

```swift
func isAnimationPaused(forKey key: String) -> Bool
```

## Parameters

- `key`: A string identifying an attached animation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified animation is paused. [false](https://developer.apple.com/documentation/swift/false) if the animation is running or no animation is attached to the object with that key.

## See Also

### Pausing and Resuming Animations

- [pauseAnimation(forKey:)](pauseanimation%28forkey_%29.md): Deprecated. Pauses the animation attached to the object with the specified key.
- [resumeAnimation(forKey:)](resumeanimation%28forkey_%29.md): Deprecated. Resumes a previously paused animation attached to the object with the specified key.

# isAnimationForKeyPaused: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Returns a Boolean value indicating whether the animation attached to the object with the specified key is paused.

> Use -\[SCNAnimationPlayer paused\] instead

## Declaration

```objectivec
- (BOOL) isAnimationForKeyPaused:(NSString *) key;
```

## Parameters

- `key`: A string identifying an attached animation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified animation is paused. [false](https://developer.apple.com/documentation/swift/false) if the animation is running or no animation is attached to the object with that key.

## See Also

### Pausing and Resuming Animations

- [pauseAnimationForKey:](pauseanimation%28forkey_%29.md): Deprecated. Pauses the animation attached to the object with the specified key.
- [resumeAnimationForKey:](resumeanimation%28forkey_%29.md): Deprecated. Resumes a previously paused animation attached to the object with the specified key.
