> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/collectionviewlayout](https://developer.apple.com/documentation/uikit/uicollectionview/collectionviewlayout)

# collectionViewLayout (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The layout used to organize the collected view’s items.

## Declaration

```swift
var collectionViewLayout: UICollectionViewLayout { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a new layout object to this property causes the new layout to be applied (without animations) to the collection view’s items.

For more information, see [Layouts](../uicollectionview.md#Layouts).

## See Also

### Changing the layout

- [setCollectionViewLayout(\_:animated:)](setcollectionviewlayout%28__animated_%29.md): Changes the collection view’s layout and optionally animates the change.
- [setCollectionViewLayout(\_:animated:completion:)](setcollectionviewlayout%28__animated_completion_%29.md): Changes the collection view’s layout and notifies you when the animations complete.
- [startInteractiveTransition(to:completion:)](startinteractivetransition%28to_completion_%29.md): Changes the collection view’s current layout using an interactive transition effect.
- [finishInteractiveTransition()](finishinteractivetransition%28%29.md): Tells the collection view to finish an interactive transition by installing the intended target layout.
- [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md): Tells the collection view to cancel an interactive transition and return to its original layout object.
- [UICollectionView.LayoutInteractiveTransitionCompletion](layoutinteractivetransitioncompletion.md): The completion block called at the end of an interactive transition for a collection view.

# collectionViewLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The layout used to organize the collected view’s items.

## Declaration

```objectivec
@property (nonatomic, strong) UICollectionViewLayout * collectionViewLayout;
```

<a id="Discussion"></a>

## Discussion

Assigning a new layout object to this property causes the new layout to be applied (without animations) to the collection view’s items.

For more information, see [Layouts](../uicollectionview.md#Layouts).

## See Also

### Changing the layout

- [setCollectionViewLayout:animated:](setcollectionviewlayout%28__animated_%29.md): Changes the collection view’s layout and optionally animates the change.
- [setCollectionViewLayout:animated:completion:](setcollectionviewlayout%28__animated_completion_%29.md): Changes the collection view’s layout and notifies you when the animations complete.
- [startInteractiveTransitionToCollectionViewLayout:completion:](startinteractivetransition%28to_completion_%29.md): Changes the collection view’s current layout using an interactive transition effect.
- [finishInteractiveTransition](finishinteractivetransition%28%29.md): Tells the collection view to finish an interactive transition by installing the intended target layout.
- [cancelInteractiveTransition](cancelinteractivetransition%28%29.md): Tells the collection view to cancel an interactive transition and return to its original layout object.
- [UICollectionViewLayoutInteractiveTransitionCompletion](layoutinteractivetransitioncompletion.md): The completion block called at the end of an interactive transition for a collection view.
