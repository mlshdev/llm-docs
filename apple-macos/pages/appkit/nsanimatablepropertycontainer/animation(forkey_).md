> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimatablepropertycontainer/animation(forkey:)](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer/animation(forkey:))

# animation(forKey:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the animation that should be performed for the specified key.

## Declaration

```swift
func animation(forKey key: NSAnimatablePropertyKey) -> Any?
```

## Parameters

- `key`: The action name or property specified as a string.

<a id="return-value"></a>

## Return Value

The animation to perform. A subclass of [CAAnimation](https://developer.apple.com/documentation/quartzcore/caanimation).

<a id="Discussion"></a>

## Discussion

When the action specified by `key` is triggered for an object, this method is consulted to find the animation, if any, that should be performed in response.

Like its Core Animation [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) counterpart, [action(forKey:)](https://developer.apple.com/documentation/quartzcore/calayer/action%28forkey:%29), this method is a funnel point that defines the order in which the search for an animation proceeds.It first checks the receiver’s Getting the Animator Proxy dictionary for a value matching `key`, then falls back to  [animator()](animator%28%29.md) for the receiver’s class.

Subclasses should not typically need to override this method.

## See Also

### Related Documentation

- [animator()](animator%28%29.md): Returns a proxy object for the receiver that can be used to initiate implied animation for property changes.

### Managing Animations for Properties

- [animations](animations.md): Sets the option dictionary that maps event trigger keys to animation objects.
- [defaultAnimation(forKey:)](defaultanimation%28forkey_%29.md): Returns the default animation that should be performed for the specified key.
- [NSAnimatablePropertyKey](../nsanimatablepropertykey.md)

# animationForKey: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the animation that should be performed for the specified key.

## Declaration

```objectivec
- (id) animationForKey:(NSAnimatablePropertyKey) key;
```

## Parameters

- `key`: The action name or property specified as a string.

<a id="return-value"></a>

## Return Value

The animation to perform. A subclass of [CAAnimation](https://developer.apple.com/documentation/quartzcore/caanimation).

<a id="Discussion"></a>

## Discussion

When the action specified by `key` is triggered for an object, this method is consulted to find the animation, if any, that should be performed in response.

Like its Core Animation [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) counterpart, [actionForKey:](https://developer.apple.com/documentation/quartzcore/calayer/action%28forkey:%29), this method is a funnel point that defines the order in which the search for an animation proceeds.It first checks the receiver’s Getting the Animator Proxy dictionary for a value matching `key`, then falls back to  [animator](animator%28%29.md) for the receiver’s class.

Subclasses should not typically need to override this method.

## See Also

### Related Documentation

- [animator](animator%28%29.md): Returns a proxy object for the receiver that can be used to initiate implied animation for property changes.

### Managing Animations for Properties

- [animations](animations.md): Sets the option dictionary that maps event trigger keys to animation objects.
- [defaultAnimationForKey:](defaultanimation%28forkey_%29.md): Returns the default animation that should be performed for the specified key.
- [NSAnimatablePropertyKey](../nsanimatablepropertykey.md)
