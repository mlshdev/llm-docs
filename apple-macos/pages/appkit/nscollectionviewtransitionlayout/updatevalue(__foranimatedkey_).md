> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewtransitionlayout/updatevalue(_:foranimatedkey:)](https://developer.apple.com/documentation/appkit/nscollectionviewtransitionlayout/updatevalue(_:foranimatedkey:))

# updateValue(\_:forAnimatedKey:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Sets the value of a key whose value you use during the animation.

## Declaration

```swift
func updateValue(_ value: CGFloat, forAnimatedKey key: NSCollectionViewTransitionLayout.AnimatedKey)
```

## Parameters

- `value`: The value of the key.
- `key`: The key that you define for your custom transition layout.

<a id="Discussion"></a>

## Discussion

Use this method to update the value of a specific key that you use in your custom transition layout.

## See Also

### Updating the Transition Information

- [transitionProgress](transitionprogress.md): The completion percentage of the transition.
- [value(forAnimatedKey:)](value%28foranimatedkey_%29.md): Returns the most recently set value for the specified key.
- [NSCollectionViewTransitionLayout.AnimatedKey](animatedkey.md)

# updateValue:forAnimatedKey: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Sets the value of a key whose value you use during the animation.

## Declaration

```objectivec
- (void) updateValue:(CGFloat) value forAnimatedKey:(NSCollectionViewTransitionLayoutAnimatedKey) key;
```

## Parameters

- `value`: The value of the key.
- `key`: The key that you define for your custom transition layout.

<a id="Discussion"></a>

## Discussion

Use this method to update the value of a specific key that you use in your custom transition layout.

## See Also

### Updating the Transition Information

- [transitionProgress](transitionprogress.md): The completion percentage of the transition.
- [valueForAnimatedKey:](value%28foranimatedkey_%29.md): Returns the most recently set value for the specified key.
- [NSCollectionViewTransitionLayoutAnimatedKey](animatedkey.md)
