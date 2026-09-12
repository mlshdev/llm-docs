> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/removeanimation(forkey:)](https://developer.apple.com/documentation/quartzcore/calayer/removeanimation(forkey:))

# removeAnimation(forKey:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Remove the animation object with the specified key.

## Declaration

```swift
func removeAnimation(forKey key: String)
```

## Parameters

- `key`: The identifier of the animation to remove.

## See Also

### Layer animations

- [add(\_:forKey:)](add%28__forkey_%29.md): Add the specified animation object to the layer’s render tree.
- [animation(forKey:)](animation%28forkey_%29.md): Returns the animation object with the specified identifier.
- [removeAllAnimations()](removeallanimations%28%29.md): Remove all animations attached to the layer.
- [animationKeys()](animationkeys%28%29.md): Returns an array of strings that identify the animations currently attached to the layer.

# removeAnimationForKey: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Remove the animation object with the specified key.

## Declaration

```objectivec
- (void) removeAnimationForKey:(NSString *) key;
```

## Parameters

- `key`: The identifier of the animation to remove.

## See Also

### Layer animations

- [addAnimation:forKey:](add%28__forkey_%29.md): Add the specified animation object to the layer’s render tree.
- [animationForKey:](animation%28forkey_%29.md): Returns the animation object with the specified identifier.
- [removeAllAnimations](removeallanimations%28%29.md): Remove all animations attached to the layer.
- [animationKeys](animationkeys%28%29.md): Returns an array of strings that identify the animations currently attached to the layer.
