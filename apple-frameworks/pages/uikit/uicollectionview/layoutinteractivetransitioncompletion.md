> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/layoutinteractivetransitioncompletion](https://developer.apple.com/documentation/uikit/uicollectionview/layoutinteractivetransitioncompletion)

# UICollectionView.LayoutInteractiveTransitionCompletion (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The completion block called at the end of an interactive transition for a collection view.

## Declaration

```swift
typealias LayoutInteractiveTransitionCompletion = (Bool, Bool) -> Void
```

<a id="Discussion"></a>

## Discussion

This completion block takes the following parameters:

- **completed**: A Boolean indicating whether the animations ran to completion.
- **finish**: A Boolean indicating whether the transition finished or was canceled. This parameter is [true](https://developer.apple.com/documentation/swift/true) if the transition ran to completion and the new layout is installed. It is [false](https://developer.apple.com/documentation/swift/false) if the user canceled the transition and the old layout is installed.

## See Also

### Changing the layout

- [collectionViewLayout](collectionviewlayout.md): The layout used to organize the collected view’s items.
- [setCollectionViewLayout(\_:animated:)](setcollectionviewlayout%28__animated_%29.md): Changes the collection view’s layout and optionally animates the change.
- [setCollectionViewLayout(\_:animated:completion:)](setcollectionviewlayout%28__animated_completion_%29.md): Changes the collection view’s layout and notifies you when the animations complete.
- [startInteractiveTransition(to:completion:)](startinteractivetransition%28to_completion_%29.md): Changes the collection view’s current layout using an interactive transition effect.
- [finishInteractiveTransition()](finishinteractivetransition%28%29.md): Tells the collection view to finish an interactive transition by installing the intended target layout.
- [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md): Tells the collection view to cancel an interactive transition and return to its original layout object.

# UICollectionViewLayoutInteractiveTransitionCompletion (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The completion block called at the end of an interactive transition for a collection view.

## Declaration

```objectivec
typedef void (^)(_Bool, _Bool) UICollectionViewLayoutInteractiveTransitionCompletion;
```

<a id="Discussion"></a>

## Discussion

This completion block takes the following parameters:

- **completed**: A Boolean indicating whether the animations ran to completion.
- **finish**: A Boolean indicating whether the transition finished or was canceled. This parameter is [true](https://developer.apple.com/documentation/swift/true) if the transition ran to completion and the new layout is installed. It is [false](https://developer.apple.com/documentation/swift/false) if the user canceled the transition and the old layout is installed.

## See Also

### Changing the layout

- [collectionViewLayout](collectionviewlayout.md): The layout used to organize the collected view’s items.
- [setCollectionViewLayout:animated:](setcollectionviewlayout%28__animated_%29.md): Changes the collection view’s layout and optionally animates the change.
- [setCollectionViewLayout:animated:completion:](setcollectionviewlayout%28__animated_completion_%29.md): Changes the collection view’s layout and notifies you when the animations complete.
- [startInteractiveTransitionToCollectionViewLayout:completion:](startinteractivetransition%28to_completion_%29.md): Changes the collection view’s current layout using an interactive transition effect.
- [finishInteractiveTransition](finishinteractivetransition%28%29.md): Tells the collection view to finish an interactive transition by installing the intended target layout.
- [cancelInteractiveTransition](cancelinteractivetransition%28%29.md): Tells the collection view to cancel an interactive transition and return to its original layout object.
