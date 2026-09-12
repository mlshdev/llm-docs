> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/animationkeys()](https://developer.apple.com/documentation/quartzcore/calayer/animationkeys())

# animationKeys() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns an array of strings that identify the animations currently attached to the layer.

## Declaration

```swift
func animationKeys() -> [String]?
```

<a id="return-value"></a>

## Return Value

An array of [NSString](../../foundation/nsstring.md) objects identifying the current animations.

<a id="Discussion"></a>

## Discussion

The order of the array matches the order in which animations will be applied to the layer.

## See Also

### Layer animations

- [add(\_:forKey:)](add%28__forkey_%29.md): Add the specified animation object to the layer’s render tree.
- [animation(forKey:)](animation%28forkey_%29.md): Returns the animation object with the specified identifier.
- [removeAllAnimations()](removeallanimations%28%29.md): Remove all animations attached to the layer.
- [removeAnimation(forKey:)](removeanimation%28forkey_%29.md): Remove the animation object with the specified key.

# animationKeys (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns an array of strings that identify the animations currently attached to the layer.

## Declaration

```objectivec
- (NSArray<NSString *> *) animationKeys;
```

<a id="return-value"></a>

## Return Value

An array of [NSString](../../foundation/nsstring.md) objects identifying the current animations.

<a id="Discussion"></a>

## Discussion

The order of the array matches the order in which animations will be applied to the layer.

## See Also

### Layer animations

- [addAnimation:forKey:](add%28__forkey_%29.md): Add the specified animation object to the layer’s render tree.
- [animationForKey:](animation%28forkey_%29.md): Returns the animation object with the specified identifier.
- [removeAllAnimations](removeallanimations%28%29.md): Remove all animations attached to the layer.
- [removeAnimationForKey:](removeanimation%28forkey_%29.md): Remove the animation object with the specified key.
