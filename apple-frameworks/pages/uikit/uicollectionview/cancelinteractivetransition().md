> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/cancelinteractivetransition()](https://developer.apple.com/documentation/uikit/uicollectionview/cancelinteractivetransition())

# cancelInteractiveTransition() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the collection view to cancel an interactive transition and return to its original layout object.

## Declaration

```swift
func cancelInteractiveTransition()
```

<a id="Discussion"></a>

## Discussion

Call this method after a call to the [startInteractiveTransition(to:completion:)](startinteractivetransition%28to_completion_%29.md) method and after you determine through a gesture recognizer or other event-handling code that the user wants to revert to the collection view’s original layout. This method removes the intermediate transition layout object from the collection view and reinstalls the original layout object. It then performs any final animations to get the collection view’s items from their current positions to the positions specified by the original layout object.

After calling this method, you can also remove the gesture recognizer or event-handling code you installed to manage the interactive portions of the transition.

## See Also

### Changing the layout

- [collectionViewLayout](collectionviewlayout.md): The layout used to organize the collected view’s items.
- [setCollectionViewLayout(\_:animated:)](setcollectionviewlayout%28__animated_%29.md): Changes the collection view’s layout and optionally animates the change.
- [setCollectionViewLayout(\_:animated:completion:)](setcollectionviewlayout%28__animated_completion_%29.md): Changes the collection view’s layout and notifies you when the animations complete.
- [startInteractiveTransition(to:completion:)](startinteractivetransition%28to_completion_%29.md): Changes the collection view’s current layout using an interactive transition effect.
- [finishInteractiveTransition()](finishinteractivetransition%28%29.md): Tells the collection view to finish an interactive transition by installing the intended target layout.
- [UICollectionView.LayoutInteractiveTransitionCompletion](layoutinteractivetransitioncompletion.md): The completion block called at the end of an interactive transition for a collection view.

# cancelInteractiveTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the collection view to cancel an interactive transition and return to its original layout object.

## Declaration

```objectivec
- (void) cancelInteractiveTransition;
```

<a id="Discussion"></a>

## Discussion

Call this method after a call to the [startInteractiveTransitionToCollectionViewLayout:completion:](startinteractivetransition%28to_completion_%29.md) method and after you determine through a gesture recognizer or other event-handling code that the user wants to revert to the collection view’s original layout. This method removes the intermediate transition layout object from the collection view and reinstalls the original layout object. It then performs any final animations to get the collection view’s items from their current positions to the positions specified by the original layout object.

After calling this method, you can also remove the gesture recognizer or event-handling code you installed to manage the interactive portions of the transition.

## See Also

### Changing the layout

- [collectionViewLayout](collectionviewlayout.md): The layout used to organize the collected view’s items.
- [setCollectionViewLayout:animated:](setcollectionviewlayout%28__animated_%29.md): Changes the collection view’s layout and optionally animates the change.
- [setCollectionViewLayout:animated:completion:](setcollectionviewlayout%28__animated_completion_%29.md): Changes the collection view’s layout and notifies you when the animations complete.
- [startInteractiveTransitionToCollectionViewLayout:completion:](startinteractivetransition%28to_completion_%29.md): Changes the collection view’s current layout using an interactive transition effect.
- [finishInteractiveTransition](finishinteractivetransition%28%29.md): Tells the collection view to finish an interactive transition by installing the intended target layout.
- [UICollectionViewLayoutInteractiveTransitionCompletion](layoutinteractivetransitioncompletion.md): The completion block called at the end of an interactive transition for a collection view.
