> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate)

# UICollectionViewDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The methods adopted by the object you use to manage user interactions with items in a collection view.

## Declaration

```swift
@MainActor protocol UICollectionViewDelegate : UIScrollViewDelegate
```

<a id="overview"></a>

## Overview

A collection view delegate manages user interactions with the collection view’s contents, including item selection, highlighting, and performing actions on those items. The methods of this protocol are all optional.

When configuring the collection view object, assign your delegate object to its [delegate](uicollectionview/delegate.md) property. For more information, see [UICollectionView](uicollectionview.md).

## Topics

### Managing the selected cells

- [Changing the appearance of selected and highlighted cells](changing-the-appearance-of-selected-and-highlighted-cells.md): Provide visual feedback to the user about the state of a cell and the transition between states.
- [Selecting multiple items with a two-finger pan gesture](selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [collectionView(\_:shouldSelectItemAt:)](uicollectionviewdelegate/collectionview%28__shouldselectitemat_%29.md): Asks the delegate if the specified item should be selected.
- [collectionView(\_:didSelectItemAt:)](uicollectionviewdelegate/collectionview%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index path was selected.
- [collectionView(\_:shouldDeselectItemAt:)](uicollectionviewdelegate/collectionview%28__shoulddeselectitemat_%29.md): Asks the delegate if the specified item should be deselected.
- [collectionView(\_:didDeselectItemAt:)](uicollectionviewdelegate/collectionview%28__diddeselectitemat_%29.md): Tells the delegate that the item at the specified path was deselected.
- [collectionView(\_:shouldBeginMultipleSelectionInteractionAt:)](uicollectionviewdelegate/collectionview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can select multiple items using a two-finger pan gesture in a collection view.
- [collectionView(\_:didBeginMultipleSelectionInteractionAt:)](uicollectionviewdelegate/collectionview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple items in a collection view.
- [collectionViewDidEndMultipleSelectionInteraction(\_:)](uicollectionviewdelegate/collectionviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple items in a collection view.

### Managing cell highlighting

- [collectionView(\_:shouldHighlightItemAt:)](uicollectionviewdelegate/collectionview%28__shouldhighlightitemat_%29.md): Asks the delegate if the item should be highlighted during tracking.
- [collectionView(\_:didHighlightItemAt:)](uicollectionviewdelegate/collectionview%28__didhighlightitemat_%29.md): Tells the delegate that the item at the specified index path was highlighted.
- [collectionView(\_:didUnhighlightItemAt:)](uicollectionviewdelegate/collectionview%28__didunhighlightitemat_%29.md): Tells the delegate that the highlight was removed from the item at the specified index path.

### Tracking the addition and removal of views

- [collectionView(\_:willDisplay:forItemAt:)](uicollectionviewdelegate/collectionview%28__willdisplay_foritemat_%29.md): Tells the delegate that the specified cell is about to be displayed in the collection view.
- [collectionView(\_:willDisplaySupplementaryView:forElementKind:at:)](uicollectionviewdelegate/collectionview%28__willdisplaysupplementaryview_forelementkind_at_%29.md): Tells the delegate that the specified supplementary view is about to be displayed in the collection view.
- [collectionView(\_:didEndDisplaying:forItemAt:)](uicollectionviewdelegate/collectionview%28__didenddisplaying_foritemat_%29.md): Tells the delegate that the specified cell was removed from the collection view.
- [collectionView(\_:didEndDisplayingSupplementaryView:forElementOfKind:at:)](uicollectionviewdelegate/collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Tells the delegate that the specified supplementary view was removed from the collection view.

### Handling layout changes

- [collectionView(\_:transitionLayoutForOldLayout:newLayout:)](uicollectionviewdelegate/collectionview%28__transitionlayoutforoldlayout_newlayout_%29.md): Asks for the custom transition layout to use when moving between the specified layouts.
- [collectionView(\_:targetContentOffsetForProposedContentOffset:)](uicollectionviewdelegate/collectionview%28__targetcontentoffsetforproposedcontentoffset_%29.md): Gives the delegate an opportunity to customize the content offset for layout changes and animated updates.
- [collectionView(\_:targetIndexPathForMoveOfItemFromOriginalIndexPath:atCurrentIndexPath:toProposedIndexPath:)](uicollectionviewdelegate/collectionview%28__targetindexpathformoveofitemfromoriginalindexpath_atcurrentindexpath_toproposedindexpath_%29.md): Asks the delegate for the index path to use when moving an item.

### Managing context menus

- [Adding context menus in your app](adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [collectionView(\_:willDisplayContextMenu:animator:)](uicollectionviewdelegate/collectionview%28__willdisplaycontextmenu_animator_%29.md): Informs the delegate when a context menu will appear.
- [collectionView(\_:willEndContextMenuInteraction:animator:)](uicollectionviewdelegate/collectionview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [collectionView(\_:willPerformPreviewActionForMenuWith:animator:)](uicollectionviewdelegate/collectionview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.
- [collectionView(\_:contextMenuConfigurationForItemsAt:point:)](uicollectionviewdelegate/collectionview%28__contextmenuconfigurationforitemsat_point_%29.md): Asks the delegate for a context-menu configuration for the items at the specified index paths.
- [collectionView(\_:contextMenuConfiguration:highlightPreviewForItemAt:)](uicollectionviewdelegate/collectionview%28__contextmenuconfiguration_highlightpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction begins.
- [collectionView(\_:contextMenuConfiguration:dismissalPreviewForItemAt:)](uicollectionviewdelegate/collectionview%28__contextmenuconfiguration_dismissalpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction ends.

### Working with focus

- [collectionView(\_:canFocusItemAt:)](uicollectionviewdelegate/collectionview%28__canfocusitemat_%29.md): Asks the delegate whether the item at the specified index path can be focused.
- [indexPathForPreferredFocusedView(in:)](uicollectionviewdelegate/indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the index path of the cell that should be focused.
- [collectionView(\_:shouldUpdateFocusIn:)](uicollectionviewdelegate/collectionview%28__shouldupdatefocusin_%29.md): Asks the delegate whether a change in focus should occur.
- [collectionView(\_:didUpdateFocusIn:with:)](uicollectionviewdelegate/collectionview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update occurred.
- [collectionView(\_:selectionFollowsFocusForItemAt:)](uicollectionviewdelegate/collectionview%28__selectionfollowsfocusforitemat_%29.md): Asks the delegate whether to relate selection and focus behavior for the cell at the corresponding index path.

### Editing items

- [collectionView(\_:canEditItemAt:)](uicollectionviewdelegate/collectionview%28__canedititemat_%29.md): Determines whether the specified item is editable.

### Managing actions for cells

- [collectionView(\_:canPerformPrimaryActionForItemAt:)](uicollectionviewdelegate/collectionview%28__canperformprimaryactionforitemat_%29.md): Asks the delegate whether to perform a primary action for the cell at the specified index path.
- [collectionView(\_:performPrimaryActionForItemAt:)](uicollectionviewdelegate/collectionview%28__performprimaryactionforitemat_%29.md): Tells the delegate to perform the primary action for the cell at the specified index path.

### Handling scene transitions

- [collectionView(\_:sceneActivationConfigurationForItemAt:point:)](uicollectionviewdelegate/collectionview%28__sceneactivationconfigurationforitemat_point_%29.md): Returns a scene activation configuration that allows the cell to expand into a new scene.

### Controlling the spring-loading behavior

- [collectionView(\_:shouldSpringLoadItemAt:with:)](uicollectionviewdelegate/collectionview%28__shouldspringloaditemat_with_%29.md): Determines whether the spring-loading interaction effect is displayed for the specified item.

### Deprecated

- [collectionView(\_:targetIndexPathForMoveFromItemAt:toProposedIndexPath:)](uicollectionviewdelegate/collectionview%28__targetindexpathformovefromitemat_toproposedindexpath_%29.md): Deprecated. Asks the delegate for the index path to use when moving an item.
- [collectionView(\_:contextMenuConfigurationForItemAt:point:)](uicollectionviewdelegate/collectionview%28__contextmenuconfigurationforitemat_point_%29.md): Deprecated. Returns a context menu configuration for the item at a point.
- [collectionView(\_:previewForDismissingContextMenuWithConfiguration:)](uicollectionviewdelegate/collectionview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Deprecated. Returns the destination view when dismissing a context menu.
- [collectionView(\_:previewForHighlightingContextMenuWithConfiguration:)](uicollectionviewdelegate/collectionview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Deprecated. Returns a view to override the default preview the collection view created.
- [collectionView(\_:shouldShowMenuForItemAt:)](uicollectionviewdelegate/collectionview%28__shouldshowmenuforitemat_%29.md): Deprecated. Asks the delegate if an action menu should be displayed for the specified item.
- [collectionView(\_:canPerformAction:forItemAt:withSender:)](uicollectionviewdelegate/collectionview%28__canperformaction_foritemat_withsender_%29.md): Deprecated. Asks the delegate if it can perform the specified action on an item in the collection view.
- [collectionView(\_:performAction:forItemAt:withSender:)](uicollectionviewdelegate/collectionview%28__performaction_foritemat_withsender_%29.md): Deprecated. Tells the delegate to perform the specified action on an item in the collection view.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIScrollViewDelegate](uiscrollviewdelegate.md)

### Inherited By

- [UICollectionViewDelegateFlowLayout](uicollectionviewdelegateflowlayout.md)

### Conforming Types

- [UICollectionViewController](uicollectionviewcontroller.md)

## See Also

### Managing collection view interactions

- [delegate](uicollectionview/delegate.md): The object that acts as the delegate of the collection view.

# UICollectionViewDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The methods adopted by the object you use to manage user interactions with items in a collection view.

## Declaration

```objectivec
@protocol UICollectionViewDelegate <UIScrollViewDelegate>
```

<a id="overview"></a>

## Overview

A collection view delegate manages user interactions with the collection view’s contents, including item selection, highlighting, and performing actions on those items. The methods of this protocol are all optional.

When configuring the collection view object, assign your delegate object to its [delegate](uicollectionview/delegate.md) property. For more information, see [UICollectionView](uicollectionview.md).

## Topics

### Managing the selected cells

- [Changing the appearance of selected and highlighted cells](changing-the-appearance-of-selected-and-highlighted-cells.md): Provide visual feedback to the user about the state of a cell and the transition between states.
- [Selecting multiple items with a two-finger pan gesture](selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [collectionView:shouldSelectItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__shouldselectitemat_%29.md): Asks the delegate if the specified item should be selected.
- [collectionView:didSelectItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index path was selected.
- [collectionView:shouldDeselectItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__shoulddeselectitemat_%29.md): Asks the delegate if the specified item should be deselected.
- [collectionView:didDeselectItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__diddeselectitemat_%29.md): Tells the delegate that the item at the specified path was deselected.
- [collectionView:shouldBeginMultipleSelectionInteractionAtIndexPath:](uicollectionviewdelegate/collectionview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can select multiple items using a two-finger pan gesture in a collection view.
- [collectionView:didBeginMultipleSelectionInteractionAtIndexPath:](uicollectionviewdelegate/collectionview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple items in a collection view.
- [collectionViewDidEndMultipleSelectionInteraction:](uicollectionviewdelegate/collectionviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple items in a collection view.

### Managing cell highlighting

- [collectionView:shouldHighlightItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__shouldhighlightitemat_%29.md): Asks the delegate if the item should be highlighted during tracking.
- [collectionView:didHighlightItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__didhighlightitemat_%29.md): Tells the delegate that the item at the specified index path was highlighted.
- [collectionView:didUnhighlightItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__didunhighlightitemat_%29.md): Tells the delegate that the highlight was removed from the item at the specified index path.

### Tracking the addition and removal of views

- [collectionView:willDisplayCell:forItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__willdisplay_foritemat_%29.md): Tells the delegate that the specified cell is about to be displayed in the collection view.
- [collectionView:willDisplaySupplementaryView:forElementKind:atIndexPath:](uicollectionviewdelegate/collectionview%28__willdisplaysupplementaryview_forelementkind_at_%29.md): Tells the delegate that the specified supplementary view is about to be displayed in the collection view.
- [collectionView:didEndDisplayingCell:forItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__didenddisplaying_foritemat_%29.md): Tells the delegate that the specified cell was removed from the collection view.
- [collectionView:didEndDisplayingSupplementaryView:forElementOfKind:atIndexPath:](uicollectionviewdelegate/collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Tells the delegate that the specified supplementary view was removed from the collection view.

### Handling layout changes

- [collectionView:transitionLayoutForOldLayout:newLayout:](uicollectionviewdelegate/collectionview%28__transitionlayoutforoldlayout_newlayout_%29.md): Asks for the custom transition layout to use when moving between the specified layouts.
- [collectionView:targetContentOffsetForProposedContentOffset:](uicollectionviewdelegate/collectionview%28__targetcontentoffsetforproposedcontentoffset_%29.md): Gives the delegate an opportunity to customize the content offset for layout changes and animated updates.
- [collectionView:targetIndexPathForMoveOfItemFromOriginalIndexPath:atCurrentIndexPath:toProposedIndexPath:](uicollectionviewdelegate/collectionview%28__targetindexpathformoveofitemfromoriginalindexpath_atcurrentindexpath_toproposedindexpath_%29.md): Asks the delegate for the index path to use when moving an item.

### Managing context menus

- [Adding context menus in your app](adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [collectionView:willDisplayContextMenuWithConfiguration:animator:](uicollectionviewdelegate/collectionview%28__willdisplaycontextmenu_animator_%29.md): Informs the delegate when a context menu will appear.
- [collectionView:willEndContextMenuInteractionWithConfiguration:animator:](uicollectionviewdelegate/collectionview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [collectionView:willPerformPreviewActionForMenuWithConfiguration:animator:](uicollectionviewdelegate/collectionview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.
- [collectionView:contextMenuConfigurationForItemsAtIndexPaths:point:](uicollectionviewdelegate/collectionview%28__contextmenuconfigurationforitemsat_point_%29.md): Asks the delegate for a context-menu configuration for the items at the specified index paths.
- [collectionView:contextMenuConfiguration:highlightPreviewForItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__contextmenuconfiguration_highlightpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction begins.
- [collectionView:contextMenuConfiguration:dismissalPreviewForItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__contextmenuconfiguration_dismissalpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction ends.

### Working with focus

- [collectionView:canFocusItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__canfocusitemat_%29.md): Asks the delegate whether the item at the specified index path can be focused.
- [indexPathForPreferredFocusedViewInCollectionView:](uicollectionviewdelegate/indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the index path of the cell that should be focused.
- [collectionView:shouldUpdateFocusInContext:](uicollectionviewdelegate/collectionview%28__shouldupdatefocusin_%29.md): Asks the delegate whether a change in focus should occur.
- [collectionView:didUpdateFocusInContext:withAnimationCoordinator:](uicollectionviewdelegate/collectionview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update occurred.
- [collectionView:selectionFollowsFocusForItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__selectionfollowsfocusforitemat_%29.md): Asks the delegate whether to relate selection and focus behavior for the cell at the corresponding index path.

### Editing items

- [collectionView:canEditItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__canedititemat_%29.md): Determines whether the specified item is editable.

### Managing actions for cells

- [collectionView:canPerformPrimaryActionForItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__canperformprimaryactionforitemat_%29.md): Asks the delegate whether to perform a primary action for the cell at the specified index path.
- [collectionView:performPrimaryActionForItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__performprimaryactionforitemat_%29.md): Tells the delegate to perform the primary action for the cell at the specified index path.

### Handling scene transitions

- [collectionView:sceneActivationConfigurationForItemAtIndexPath:point:](uicollectionviewdelegate/collectionview%28__sceneactivationconfigurationforitemat_point_%29.md): Returns a scene activation configuration that allows the cell to expand into a new scene.

### Controlling the spring-loading behavior

- [collectionView:shouldSpringLoadItemAtIndexPath:withContext:](uicollectionviewdelegate/collectionview%28__shouldspringloaditemat_with_%29.md): Determines whether the spring-loading interaction effect is displayed for the specified item.

### Deprecated

- [collectionView:targetIndexPathForMoveFromItemAtIndexPath:toProposedIndexPath:](uicollectionviewdelegate/collectionview%28__targetindexpathformovefromitemat_toproposedindexpath_%29.md): Deprecated. Asks the delegate for the index path to use when moving an item.
- [collectionView:contextMenuConfigurationForItemAtIndexPath:point:](uicollectionviewdelegate/collectionview%28__contextmenuconfigurationforitemat_point_%29.md): Deprecated. Returns a context menu configuration for the item at a point.
- [collectionView:previewForDismissingContextMenuWithConfiguration:](uicollectionviewdelegate/collectionview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Deprecated. Returns the destination view when dismissing a context menu.
- [collectionView:previewForHighlightingContextMenuWithConfiguration:](uicollectionviewdelegate/collectionview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Deprecated. Returns a view to override the default preview the collection view created.
- [collectionView:shouldShowMenuForItemAtIndexPath:](uicollectionviewdelegate/collectionview%28__shouldshowmenuforitemat_%29.md): Deprecated. Asks the delegate if an action menu should be displayed for the specified item.
- [collectionView:canPerformAction:forItemAtIndexPath:withSender:](uicollectionviewdelegate/collectionview%28__canperformaction_foritemat_withsender_%29.md): Deprecated. Asks the delegate if it can perform the specified action on an item in the collection view.
- [collectionView:performAction:forItemAtIndexPath:withSender:](uicollectionviewdelegate/collectionview%28__performaction_foritemat_withsender_%29.md): Deprecated. Tells the delegate to perform the specified action on an item in the collection view.

## Relationships

### Inherits From

- [UIScrollViewDelegate](uiscrollviewdelegate.md)

### Inherited By

- [UICollectionViewDelegateFlowLayout](uicollectionviewdelegateflowlayout.md)

### Conforming Types

- [UICollectionViewController](uicollectionviewcontroller.md)

## See Also

### Managing collection view interactions

- [delegate](uicollectionview/delegate.md): The object that acts as the delegate of the collection view.
