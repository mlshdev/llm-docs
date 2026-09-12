> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewtransitionlayout/value(foranimatedkey:)](https://developer.apple.com/documentation/appkit/nscollectionviewtransitionlayout/value(foranimatedkey:))

# value(forAnimatedKey:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the most recently set value for the specified key.

## Declaration

```swift
func value(forAnimatedKey key: NSCollectionViewTransitionLayout.AnimatedKey) -> CGFloat
```

## Parameters

- `key`: A key whose value you set previously using the [updateValue(\_:forAnimatedKey:)](updatevalue%28__foranimatedkey_%29.md) method.

<a id="return-value"></a>

## Return Value

The last value set for the key.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve floating-point values that relate to laying out the contents of your collection view. The key you specify is a string that you define and that has some meaning to your layout’s implementation. At points during an interactive transition, you can assign new values to that key using the [updateValue(\_:forAnimatedKey:)](updatevalue%28__foranimatedkey_%29.md) method.

## See Also

### Updating the Transition Information

- [transitionProgress](transitionprogress.md): The completion percentage of the transition.
- [updateValue(\_:forAnimatedKey:)](updatevalue%28__foranimatedkey_%29.md): Sets the value of a key whose value you use during the animation.
- [NSCollectionViewTransitionLayout.AnimatedKey](animatedkey.md)

# valueForAnimatedKey: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the most recently set value for the specified key.

## Declaration

```objectivec
- (CGFloat) valueForAnimatedKey:(NSCollectionViewTransitionLayoutAnimatedKey) key;
```

## Parameters

- `key`: A key whose value you set previously using the [updateValue:forAnimatedKey:](updatevalue%28__foranimatedkey_%29.md) method.

<a id="return-value"></a>

## Return Value

The last value set for the key.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve floating-point values that relate to laying out the contents of your collection view. The key you specify is a string that you define and that has some meaning to your layout’s implementation. At points during an interactive transition, you can assign new values to that key using the [updateValue:forAnimatedKey:](updatevalue%28__foranimatedkey_%29.md) method.

## See Also

### Updating the Transition Information

- [transitionProgress](transitionprogress.md): The completion percentage of the transition.
- [updateValue:forAnimatedKey:](updatevalue%28__foranimatedkey_%29.md): Sets the value of a key whose value you use during the animation.
- [NSCollectionViewTransitionLayoutAnimatedKey](animatedkey.md)
