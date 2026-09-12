> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewtransitionlayout/transitionprogress](https://developer.apple.com/documentation/appkit/nscollectionviewtransitionlayout/transitionprogress)

# transitionProgress (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The completion percentage of the transition.

## Declaration

```swift
var transitionProgress: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

During the transition, set the value of this property periodically and call the [invalidateLayout()](../nscollectionviewlayout/invalidatelayout%28%29.md) method to force the collection view to update item positions. For example, when driving a transition using a gesture recognizer, you can set this property from the handler method of your gesture recognizer.

## See Also

### Updating the Transition Information

- [updateValue(\_:forAnimatedKey:)](updatevalue%28__foranimatedkey_%29.md): Sets the value of a key whose value you use during the animation.
- [value(forAnimatedKey:)](value%28foranimatedkey_%29.md): Returns the most recently set value for the specified key.
- [NSCollectionViewTransitionLayout.AnimatedKey](animatedkey.md)

# transitionProgress (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The completion percentage of the transition.

## Declaration

```objectivec
@property (assign) CGFloat transitionProgress;
```

<a id="Discussion"></a>

## Discussion

During the transition, set the value of this property periodically and call the [invalidateLayout](../nscollectionviewlayout/invalidatelayout%28%29.md) method to force the collection view to update item positions. For example, when driving a transition using a gesture recognizer, you can set this property from the handler method of your gesture recognizer.

## See Also

### Updating the Transition Information

- [updateValue:forAnimatedKey:](updatevalue%28__foranimatedkey_%29.md): Sets the value of a key whose value you use during the animation.
- [valueForAnimatedKey:](value%28foranimatedkey_%29.md): Returns the most recently set value for the specified key.
- [NSCollectionViewTransitionLayoutAnimatedKey](animatedkey.md)
