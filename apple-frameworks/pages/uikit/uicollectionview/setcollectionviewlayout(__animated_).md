> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/setcollectionviewlayout(_:animated:)](https://developer.apple.com/documentation/uikit/uicollectionview/setcollectionviewlayout(_:animated:))

# setCollectionViewLayout(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Changes the collection view’s layout and optionally animates the change.

## Declaration

```swift
func setCollectionViewLayout(_ layout: UICollectionViewLayout, animated: Bool)
```

## Parameters

- `layout`: The new layout object for the collection view.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want to animate changes from the current layout to the new layout specified by the `layout` parameter. Specify [false](https://developer.apple.com/documentation/swift/false) to make the change without animations.

<a id="Discussion"></a>

## Discussion

This method makes the layout change without further interaction from the user. If you choose to animate the layout change, the animation timing and parameters are controlled by the collection view.

## See Also

### Changing the layout

- [collectionViewLayout](collectionviewlayout.md): The layout used to organize the collected view’s items.
- [setCollectionViewLayout(\_:animated:completion:)](setcollectionviewlayout%28__animated_completion_%29.md): Changes the collection view’s layout and notifies you when the animations complete.
- [startInteractiveTransition(to:completion:)](startinteractivetransition%28to_completion_%29.md): Changes the collection view’s current layout using an interactive transition effect.
- [finishInteractiveTransition()](finishinteractivetransition%28%29.md): Tells the collection view to finish an interactive transition by installing the intended target layout.
- [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md): Tells the collection view to cancel an interactive transition and return to its original layout object.
- [UICollectionView.LayoutInteractiveTransitionCompletion](layoutinteractivetransitioncompletion.md): The completion block called at the end of an interactive transition for a collection view.

# setCollectionViewLayout:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Changes the collection view’s layout and optionally animates the change.

## Declaration

```objectivec
- (void) setCollectionViewLayout:(UICollectionViewLayout *) layout animated:(BOOL) animated;
```

## Parameters

- `layout`: The new layout object for the collection view.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want to animate changes from the current layout to the new layout specified by the `layout` parameter. Specify [false](https://developer.apple.com/documentation/swift/false) to make the change without animations.

<a id="Discussion"></a>

## Discussion

This method makes the layout change without further interaction from the user. If you choose to animate the layout change, the animation timing and parameters are controlled by the collection view.

## See Also

### Changing the layout

- [collectionViewLayout](collectionviewlayout.md): The layout used to organize the collected view’s items.
- [setCollectionViewLayout:animated:completion:](setcollectionviewlayout%28__animated_completion_%29.md): Changes the collection view’s layout and notifies you when the animations complete.
- [startInteractiveTransitionToCollectionViewLayout:completion:](startinteractivetransition%28to_completion_%29.md): Changes the collection view’s current layout using an interactive transition effect.
- [finishInteractiveTransition](finishinteractivetransition%28%29.md): Tells the collection view to finish an interactive transition by installing the intended target layout.
- [cancelInteractiveTransition](cancelinteractivetransition%28%29.md): Tells the collection view to cancel an interactive transition and return to its original layout object.
- [UICollectionViewLayoutInteractiveTransitionCompletion](layoutinteractivetransitioncompletion.md): The completion block called at the end of an interactive transition for a collection view.
