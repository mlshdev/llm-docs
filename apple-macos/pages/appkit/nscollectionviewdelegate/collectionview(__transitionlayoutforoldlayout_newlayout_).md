> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:transitionlayoutforoldlayout:newlayout:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:transitionlayoutforoldlayout:newlayout:))

# collectionView(\_:transitionLayoutForOldLayout:newLayout:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the transition layout object to use when performing an animated change between different layouts.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, transitionLayoutForOldLayout fromLayout: NSCollectionViewLayout, newLayout toLayout: NSCollectionViewLayout) -> NSCollectionViewTransitionLayout
```

## Parameters

- `collectionView`: The collection view whose layout object is changing.
- `fromLayout`: The current layout object of the collection view. This is the starting point for the transition.
- `toLayout`: The new layout for the collection view.

<a id="return-value"></a>

## Return Value

The collection view transition layout object to use to perform the transition.

<a id="Discussion"></a>

## Discussion

When changing layouts for a collection view, you can use this method to customize the transition layout object used to make the change. A transition layout object lets you customize the behavior of collection view elements when transitioning from one layout to the next. Normally, transitioning between layouts causes the assorted items and views to animate from their current locations directly to their new locations. By returning a custom transition object, you could have those elements follow a nonlinear path, use a different timing algorithm, or move items in response to touch events.

If you do not implement this method in your delegate object, the collection view uses a standard [UICollectionViewTransitionLayout](https://developer.apple.com/documentation/uikit/uicollectionviewtransitionlayout) object for the transition.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X 10.11, this method is never called by the collection view.

# collectionView:transitionLayoutForOldLayout:newLayout: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the transition layout object to use when performing an animated change between different layouts.

## Declaration

```objectivec
- (NSCollectionViewTransitionLayout *) collectionView:(NSCollectionView *) collectionView transitionLayoutForOldLayout:(NSCollectionViewLayout *) fromLayout newLayout:(NSCollectionViewLayout *) toLayout;
```

## Parameters

- `collectionView`: The collection view whose layout object is changing.
- `fromLayout`: The current layout object of the collection view. This is the starting point for the transition.
- `toLayout`: The new layout for the collection view.

<a id="return-value"></a>

## Return Value

The collection view transition layout object to use to perform the transition.

<a id="Discussion"></a>

## Discussion

When changing layouts for a collection view, you can use this method to customize the transition layout object used to make the change. A transition layout object lets you customize the behavior of collection view elements when transitioning from one layout to the next. Normally, transitioning between layouts causes the assorted items and views to animate from their current locations directly to their new locations. By returning a custom transition object, you could have those elements follow a nonlinear path, use a different timing algorithm, or move items in response to touch events.

If you do not implement this method in your delegate object, the collection view uses a standard [UICollectionViewTransitionLayout](https://developer.apple.com/documentation/uikit/uicollectionviewtransitionlayout) object for the transition.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X 10.11, this method is never called by the collection view.
