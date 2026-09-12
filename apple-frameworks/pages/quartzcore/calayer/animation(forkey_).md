> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/animation(forkey:)](https://developer.apple.com/documentation/quartzcore/calayer/animation(forkey:))

# animation(forKey:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the animation object with the specified identifier.

## Declaration

```swift
func animation(forKey key: String) -> CAAnimation?
```

## Parameters

- `key`: A string that specifies the identifier of the animation. This string corresponds to the identifier string you passed to the [add(\_:forKey:)](add%28__forkey_%29.md) method.

<a id="return-value"></a>

## Return Value

The animation object matching the identifier, or `nil` if no such animation exists.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve only animation objects already associated with a layer. Modifying any properties of the returned object results in undefined behavior.

## See Also

### Layer animations

- [add(\_:forKey:)](add%28__forkey_%29.md): Add the specified animation object to the layer’s render tree.
- [removeAllAnimations()](removeallanimations%28%29.md): Remove all animations attached to the layer.
- [removeAnimation(forKey:)](removeanimation%28forkey_%29.md): Remove the animation object with the specified key.
- [animationKeys()](animationkeys%28%29.md): Returns an array of strings that identify the animations currently attached to the layer.

# animationForKey: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the animation object with the specified identifier.

## Declaration

```objectivec
- (CAAnimation *) animationForKey:(NSString *) key;
```

## Parameters

- `key`: A string that specifies the identifier of the animation. This string corresponds to the identifier string you passed to the [addAnimation:forKey:](add%28__forkey_%29.md) method.

<a id="return-value"></a>

## Return Value

The animation object matching the identifier, or `nil` if no such animation exists.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve only animation objects already associated with a layer. Modifying any properties of the returned object results in undefined behavior.

## See Also

### Layer animations

- [addAnimation:forKey:](add%28__forkey_%29.md): Add the specified animation object to the layer’s render tree.
- [removeAllAnimations](removeallanimations%28%29.md): Remove all animations attached to the layer.
- [removeAnimationForKey:](removeanimation%28forkey_%29.md): Remove the animation object with the specified key.
- [animationKeys](animationkeys%28%29.md): Returns an array of strings that identify the animations currently attached to the layer.
