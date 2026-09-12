> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimatablepropertycontainer/animations](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer/animations)

# animations (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Sets the option dictionary that maps event trigger keys to animation objects.

## Declaration

```swift
var animations: [NSAnimatablePropertyKey : Any] { get set }
```

## Parameters

- `dict`: A dictionary containing the event trigger keys and associated animation objects.

## See Also

### Related Documentation

- [animator()](animator%28%29.md): Returns a proxy object for the receiver that can be used to initiate implied animation for property changes.
- [NSAnimatablePropertyContainer](../nsanimatablepropertycontainer.md): A set of methods that defines a way to add animation to an existing class with a minimum of API impact.

### Managing Animations for Properties

- [animation(forKey:)](animation%28forkey_%29.md): Returns the animation that should be performed for the specified key.
- [defaultAnimation(forKey:)](defaultanimation%28forkey_%29.md): Returns the default animation that should be performed for the specified key.
- [NSAnimatablePropertyKey](../nsanimatablepropertykey.md)

# animations (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Sets the option dictionary that maps event trigger keys to animation objects.

## Declaration

```objectivec
@property (copy, readwrite) NSDictionary<NSString *,id> * animations;
```

## Parameters

- `dict`: A dictionary containing the event trigger keys and associated animation objects.

## See Also

### Related Documentation

- [animator](animator%28%29.md): Returns a proxy object for the receiver that can be used to initiate implied animation for property changes.
- [NSAnimatablePropertyContainer](../nsanimatablepropertycontainer.md): A set of methods that defines a way to add animation to an existing class with a minimum of API impact.

### Managing Animations for Properties

- [animationForKey:](animation%28forkey_%29.md): Returns the animation that should be performed for the specified key.
- [defaultAnimationForKey:](defaultanimation%28forkey_%29.md): Returns the default animation that should be performed for the specified key.
- [NSAnimatablePropertyKey](../nsanimatablepropertykey.md)
