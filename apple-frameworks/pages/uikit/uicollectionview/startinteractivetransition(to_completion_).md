> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/startinteractivetransition(to:completion:)](https://developer.apple.com/documentation/uikit/uicollectionview/startinteractivetransition(to:completion:))

# startInteractiveTransition(to:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Changes the collection view’s current layout using an interactive transition effect.

## Declaration

```swift
func startInteractiveTransition(to layout: UICollectionViewLayout, completion: UICollectionView.LayoutInteractiveTransitionCompletion? = nil) -> UICollectionViewTransitionLayout
```

## Parameters

- `layout`: The new layout object for the collected views. This is the layout that you want the collection view to use after the interactive transition is done.
- `completion`: A completion handler to execute after the transition finishes.

<a id="return-value"></a>

## Return Value

The intermediate transition layout object responsible for managing the interactive transition behavior.

<a id="Discussion"></a>

## Discussion

Call this method when you want to change the layout of your collection view using an intermediate transition. When you call this method, the collection view quietly makes the returned transition layout object its current layout object. It is your responsibility to set up a gesture recognizer or other touch-event handling code to track the transition progress. As progress changes, update the [transitionProgress](../uicollectionviewtransitionlayout/transitionprogress.md) property of the transition layout object and invalidate the layout. Invalidating its layout causes the transition layout object to update the position of items based on the new progress value.

When your event-handling code determines that the user has finished the transition to the new layout, call the [finishInteractiveTransition()](finishinteractivetransition%28%29.md) method. If your code determines that the user has canceled the transition, call the [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md) method to revert the changes instead. Calling either of these methods removes the transition layout object from the collection view and installs the appropriate target layout object.

This method returns an instance of the [UICollectionViewTransitionLayout](../uicollectionviewtransitionlayout.md) class by default. If you want it to return a custom transition object instead, implement the [collectionView(\_:transitionLayoutForOldLayout:newLayout:)](../uicollectionviewdelegate/collectionview%28__transitionlayoutforoldlayout_newlayout_%29.md) method of your collection view delegate and use that method to return your custom object.

## See Also

### Changing the layout

- [collectionViewLayout](collectionviewlayout.md): The layout used to organize the collected view’s items.
- [setCollectionViewLayout(\_:animated:)](setcollectionviewlayout%28__animated_%29.md): Changes the collection view’s layout and optionally animates the change.
- [setCollectionViewLayout(\_:animated:completion:)](setcollectionviewlayout%28__animated_completion_%29.md): Changes the collection view’s layout and notifies you when the animations complete.
- [finishInteractiveTransition()](finishinteractivetransition%28%29.md): Tells the collection view to finish an interactive transition by installing the intended target layout.
- [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md): Tells the collection view to cancel an interactive transition and return to its original layout object.
- [UICollectionView.LayoutInteractiveTransitionCompletion](layoutinteractivetransitioncompletion.md): The completion block called at the end of an interactive transition for a collection view.

# startInteractiveTransitionToCollectionViewLayout:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Changes the collection view’s current layout using an interactive transition effect.

## Declaration

```objectivec
- (UICollectionViewTransitionLayout *) startInteractiveTransitionToCollectionViewLayout:(UICollectionViewLayout *) layout completion:(UICollectionViewLayoutInteractiveTransitionCompletion) completion;
```

## Parameters

- `layout`: The new layout object for the collected views. This is the layout that you want the collection view to use after the interactive transition is done.
- `completion`: A completion handler to execute after the transition finishes.

<a id="return-value"></a>

## Return Value

The intermediate transition layout object responsible for managing the interactive transition behavior.

<a id="Discussion"></a>

## Discussion

Call this method when you want to change the layout of your collection view using an intermediate transition. When you call this method, the collection view quietly makes the returned transition layout object its current layout object. It is your responsibility to set up a gesture recognizer or other touch-event handling code to track the transition progress. As progress changes, update the [transitionProgress](../uicollectionviewtransitionlayout/transitionprogress.md) property of the transition layout object and invalidate the layout. Invalidating its layout causes the transition layout object to update the position of items based on the new progress value.

When your event-handling code determines that the user has finished the transition to the new layout, call the [finishInteractiveTransition](finishinteractivetransition%28%29.md) method. If your code determines that the user has canceled the transition, call the [cancelInteractiveTransition](cancelinteractivetransition%28%29.md) method to revert the changes instead. Calling either of these methods removes the transition layout object from the collection view and installs the appropriate target layout object.

This method returns an instance of the [UICollectionViewTransitionLayout](../uicollectionviewtransitionlayout.md) class by default. If you want it to return a custom transition object instead, implement the [collectionView:transitionLayoutForOldLayout:newLayout:](../uicollectionviewdelegate/collectionview%28__transitionlayoutforoldlayout_newlayout_%29.md) method of your collection view delegate and use that method to return your custom object.

## See Also

### Changing the layout

- [collectionViewLayout](collectionviewlayout.md): The layout used to organize the collected view’s items.
- [setCollectionViewLayout:animated:](setcollectionviewlayout%28__animated_%29.md): Changes the collection view’s layout and optionally animates the change.
- [setCollectionViewLayout:animated:completion:](setcollectionviewlayout%28__animated_completion_%29.md): Changes the collection view’s layout and notifies you when the animations complete.
- [finishInteractiveTransition](finishinteractivetransition%28%29.md): Tells the collection view to finish an interactive transition by installing the intended target layout.
- [cancelInteractiveTransition](cancelinteractivetransition%28%29.md): Tells the collection view to cancel an interactive transition and return to its original layout object.
- [UICollectionViewLayoutInteractiveTransitionCompletion](layoutinteractivetransitioncompletion.md): The completion block called at the end of an interactive transition for a collection view.
