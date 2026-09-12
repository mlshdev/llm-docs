> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate](https://developer.apple.com/documentation/uikit/uitableviewdelegate)

# UITableViewDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Methods for managing selections, configuring section headers and footers, deleting and reordering cells, and performing other actions in a table view.

## Declaration

```swift
@MainActor protocol UITableViewDelegate : UIScrollViewDelegate
```

<a id="overview"></a>

## Overview

Use the methods of this protocol to manage the following features:

- Create and manage custom header and footer views.
- Specify custom heights for rows, headers, and footers.
- Provide height estimates for better scrolling support.
- Indent row content.
- Respond to row selections.
- Respond to swipes and other actions in table rows.
- Support editing the table’s content.

The table view specifies rows and sections using [IndexPath](../foundation/indexpath.md). For information about how to interpret row and section indexes, see [Specify the location of rows and sections](uitableviewdatasource.md#Specify-the-location-of-rows-and-sections).

## Topics

### Configuring rows for the table view

- [tableView(\_:willDisplay:forRowAt:)](uitableviewdelegate/tableview%28__willdisplay_forrowat_%29.md): Tells the delegate the table view is about to draw a cell for a particular row.
- [tableView(\_:indentationLevelForRowAt:)](uitableviewdelegate/tableview%28__indentationlevelforrowat_%29.md): Asks the delegate to return the level of indentation for a row in a given section.
- [tableView(\_:shouldSpringLoadRowAt:with:)](uitableviewdelegate/tableview%28__shouldspringloadrowat_with_%29.md): Called to let you fine tune the spring-loading behavior of the rows in a table.

### Responding to row selections

- [Handling row selection in a table view](handling-row-selection-in-a-table-view.md): Detect when a user taps a table view cell so your app can take the next indicated action.
- [Selecting multiple items with a two-finger pan gesture](selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [tableView(\_:willSelectRowAt:)](uitableviewdelegate/tableview%28__willselectrowat_%29.md): Tells the delegate a row is about to be selected.
- [tableView(\_:didSelectRowAt:)](uitableviewdelegate/tableview%28__didselectrowat_%29.md): Tells the delegate a row is selected.
- [tableView(\_:willDeselectRowAt:)](uitableviewdelegate/tableview%28__willdeselectrowat_%29.md): Tells the delegate that a specified row is about to be deselected.
- [tableView(\_:didDeselectRowAt:)](uitableviewdelegate/tableview%28__diddeselectrowat_%29.md): Tells the delegate that the specified row is now deselected.
- [tableView(\_:shouldBeginMultipleSelectionInteractionAt:)](uitableviewdelegate/tableview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can use a two-finger pan gesture to select multiple items in a table view.
- [tableView(\_:didBeginMultipleSelectionInteractionAt:)](uitableviewdelegate/tableview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple rows in a table view.
- [tableViewDidEndMultipleSelectionInteraction(\_:)](uitableviewdelegate/tableviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple rows in a table view.

### Providing custom header and footer views

- [tableView(\_:viewForHeaderInSection:)](uitableviewdelegate/tableview%28__viewforheaderinsection_%29.md): Asks the delegate for a view to display in the header of the specified section of the table view.
- [tableView(\_:viewForFooterInSection:)](uitableviewdelegate/tableview%28__viewforfooterinsection_%29.md): Asks the delegate for a view to display in the footer of the specified section of the table view.
- [tableView(\_:willDisplayHeaderView:forSection:)](uitableviewdelegate/tableview%28__willdisplayheaderview_forsection_%29.md): Tells the delegate that the table is about to display the header view for the specified section.
- [tableView(\_:willDisplayFooterView:forSection:)](uitableviewdelegate/tableview%28__willdisplayfooterview_forsection_%29.md): Tells the delegate that the table is about to display the footer view for the specified section.

### Providing header, footer, and row heights

- [tableView(\_:heightForRowAt:)](uitableviewdelegate/tableview%28__heightforrowat_%29.md): Asks the delegate for the height to use for a row in a specified location.
- [tableView(\_:heightForHeaderInSection:)](uitableviewdelegate/tableview%28__heightforheaderinsection_%29.md): Asks the delegate for the height to use for the header of a particular section.
- [tableView(\_:heightForFooterInSection:)](uitableviewdelegate/tableview%28__heightforfooterinsection_%29.md): Asks the delegate for the height to use for the footer of a particular section.
- [automaticDimension](uitableview/automaticdimension.md): A constant representing the default value for a given dimension.

### Estimating heights for the table’s content

- [tableView(\_:estimatedHeightForRowAt:)](uitableviewdelegate/tableview%28__estimatedheightforrowat_%29.md): Asks the delegate for the estimated height of a row in a specified location.
- [tableView(\_:estimatedHeightForHeaderInSection:)](uitableviewdelegate/tableview%28__estimatedheightforheaderinsection_%29.md): Asks the delegate for the estimated height of the header of a particular section.
- [tableView(\_:estimatedHeightForFooterInSection:)](uitableviewdelegate/tableview%28__estimatedheightforfooterinsection_%29.md): Asks the delegate for the estimated height of the footer of a particular section.

### Managing accessory views

- [tableView(\_:accessoryButtonTappedForRowWith:)](uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md): Tells the delegate that the user tapped the detail button for the specified row.

### Managing context menus

- [Adding context menus in your app](adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [tableView(\_:contextMenuConfigurationForRowAt:point:)](uitableviewdelegate/tableview%28__contextmenuconfigurationforrowat_point_%29.md): Returns a context menu configuration for the row at a point.
- [tableView(\_:previewForDismissingContextMenuWithConfiguration:)](uitableviewdelegate/tableview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Returns the destination view when dismissing a context menu.
- [tableView(\_:previewForHighlightingContextMenuWithConfiguration:)](uitableviewdelegate/tableview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Returns a view to override the default preview the table view created.
- [tableView(\_:willDisplayContextMenu:animator:)](uitableviewdelegate/tableview%28__willdisplaycontextmenu_animator_%29.md): Informs the delegate when a context menu will appear.
- [tableView(\_:willEndContextMenuInteraction:animator:)](uitableviewdelegate/tableview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [tableView(\_:willPerformPreviewActionForMenuWith:animator:)](uitableviewdelegate/tableview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.

### Responding to row actions

- [tableView(\_:leadingSwipeActionsConfigurationForRowAt:)](uitableviewdelegate/tableview%28__leadingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the leading edge of the row.
- [tableView(\_:trailingSwipeActionsConfigurationForRowAt:)](uitableviewdelegate/tableview%28__trailingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the trailing edge of the row.
- [tableView(\_:shouldShowMenuForRowAt:)](uitableviewdelegate/tableview%28__shouldshowmenuforrowat_%29.md): Deprecated. Asks the delegate if the editing menu should be shown for a certain row.
- [tableView(\_:canPerformAction:forRowAt:withSender:)](uitableviewdelegate/tableview%28__canperformaction_forrowat_withsender_%29.md): Deprecated. Asks the delegate if the editing menu should omit the Copy or Paste command for a given row.
- [tableView(\_:performAction:forRowAt:withSender:)](uitableviewdelegate/tableview%28__performaction_forrowat_withsender_%29.md): Deprecated. Tells the delegate to perform a copy or paste operation on the content of a given row.
- [tableView(\_:editActionsForRowAt:)](uitableviewdelegate/tableview%28__editactionsforrowat_%29.md): Deprecated. Asks the delegate for the actions to display in response to a swipe in the specified row.

### Managing table view highlights

- [tableView(\_:shouldHighlightRowAt:)](uitableviewdelegate/tableview%28__shouldhighlightrowat_%29.md): Asks the delegate if the specified row should be highlighted.
- [tableView(\_:didHighlightRowAt:)](uitableviewdelegate/tableview%28__didhighlightrowat_%29.md): Tells the delegate that the specified row was highlighted.
- [tableView(\_:didUnhighlightRowAt:)](uitableviewdelegate/tableview%28__didunhighlightrowat_%29.md): Tells the delegate that the highlight was removed from the row at the specified index path.

### Editing table rows

- [tableView(\_:willBeginEditingRowAt:)](uitableviewdelegate/tableview%28__willbegineditingrowat_%29.md): Tells the delegate that the table view is about to go into editing mode.
- [tableView(\_:didEndEditingRowAt:)](uitableviewdelegate/tableview%28__didendeditingrowat_%29.md): Tells the delegate that the table view has left editing mode.
- [tableView(\_:editingStyleForRowAt:)](uitableviewdelegate/tableview%28__editingstyleforrowat_%29.md): Asks the delegate for the editing style of a row at a particular location in a table view.
- [tableView(\_:titleForDeleteConfirmationButtonForRowAt:)](uitableviewdelegate/tableview%28__titlefordeleteconfirmationbuttonforrowat_%29.md): Changes the default title of the delete-confirmation button.
- [tableView(\_:shouldIndentWhileEditingRowAt:)](uitableviewdelegate/tableview%28__shouldindentwhileeditingrowat_%29.md): Asks the delegate whether the background of the specified row should be indented while the table view is in editing mode.

### Reordering table rows

- [tableView(\_:targetIndexPathForMoveFromRowAt:toProposedIndexPath:)](uitableviewdelegate/tableview%28__targetindexpathformovefromrowat_toproposedindexpath_%29.md): Asks the delegate to return a new index path to retarget a proposed move of a row.

### Tracking the removal of views

- [tableView(\_:didEndDisplaying:forRowAt:)](uitableviewdelegate/tableview%28__didenddisplaying_forrowat_%29.md): Tells the delegate that the specified cell was removed from the table.
- [tableView(\_:didEndDisplayingHeaderView:forSection:)](uitableviewdelegate/tableview%28__didenddisplayingheaderview_forsection_%29.md): Tells the delegate that the specified header view was removed from the table.
- [tableView(\_:didEndDisplayingFooterView:forSection:)](uitableviewdelegate/tableview%28__didenddisplayingfooterview_forsection_%29.md): Tells the delegate that the specified footer view was removed from the table.

### Managing table view focus

- [tableView(\_:canFocusRowAt:)](uitableviewdelegate/tableview%28__canfocusrowat_%29.md): Asks the delegate whether the cell at the specified index path is itself focusable.
- [tableView(\_:shouldUpdateFocusIn:)](uitableviewdelegate/tableview%28__shouldupdatefocusin_%29.md): Asks the delegate whether the focus update specified by the context is allowed to occur.
- [tableView(\_:didUpdateFocusIn:with:)](uitableviewdelegate/tableview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update specified by the context has just occurred.
- [indexPathForPreferredFocusedView(in:)](uitableviewdelegate/indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the table view’s index path for the preferred focused view.
- [tableView(\_:selectionFollowsFocusForRowAt:)](uitableviewdelegate/tableview%28__selectionfollowsfocusforrowat_%29.md): Asks the delegate whether to relate selection and focus behavior for the row at the corresponding index path.

### Performing primary actions

- [tableView(\_:canPerformPrimaryActionForRowAt:)](uitableviewdelegate/tableview%28__canperformprimaryactionforrowat_%29.md): Asks the delegate whether to perform a primary action for the row at the specified index path.
- [tableView(\_:performPrimaryActionForRowAt:)](uitableviewdelegate/tableview%28__performprimaryactionforrowat_%29.md): Tells the delegate to perform the primary action for the row at the specified index path.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIScrollViewDelegate](uiscrollviewdelegate.md)

### Conforming Types

- [UITableViewController](uitableviewcontroller.md)

## See Also

### Table management

- [Estimating the height of a table’s scrolling area](estimating-the-height-of-a-table-s-scrolling-area.md): Provide height estimates for your table view’s headers, footers, and rows to ensure that scrolling accurately reflects the size of your content.
- [UITableViewController](uitableviewcontroller.md): A view controller that specializes in managing a table view.
- [UITableViewFocusUpdateContext](uitableviewfocusupdatecontext.md): A context object that provides information relevant to a specific focus update from one view to another.

# UITableViewDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Methods for managing selections, configuring section headers and footers, deleting and reordering cells, and performing other actions in a table view.

## Declaration

```objectivec
@protocol UITableViewDelegate <NSObject, UIScrollViewDelegate>
```

<a id="overview"></a>

## Overview

Use the methods of this protocol to manage the following features:

- Create and manage custom header and footer views.
- Specify custom heights for rows, headers, and footers.
- Provide height estimates for better scrolling support.
- Indent row content.
- Respond to row selections.
- Respond to swipes and other actions in table rows.
- Support editing the table’s content.

The table view specifies rows and sections using [IndexPath](../foundation/indexpath.md). For information about how to interpret row and section indexes, see [Specify the location of rows and sections](uitableviewdatasource.md#Specify-the-location-of-rows-and-sections).

## Topics

### Configuring rows for the table view

- [tableView:willDisplayCell:forRowAtIndexPath:](uitableviewdelegate/tableview%28__willdisplay_forrowat_%29.md): Tells the delegate the table view is about to draw a cell for a particular row.
- [tableView:indentationLevelForRowAtIndexPath:](uitableviewdelegate/tableview%28__indentationlevelforrowat_%29.md): Asks the delegate to return the level of indentation for a row in a given section.
- [tableView:shouldSpringLoadRowAtIndexPath:withContext:](uitableviewdelegate/tableview%28__shouldspringloadrowat_with_%29.md): Called to let you fine tune the spring-loading behavior of the rows in a table.

### Responding to row selections

- [Handling row selection in a table view](handling-row-selection-in-a-table-view.md): Detect when a user taps a table view cell so your app can take the next indicated action.
- [Selecting multiple items with a two-finger pan gesture](selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [tableView:willSelectRowAtIndexPath:](uitableviewdelegate/tableview%28__willselectrowat_%29.md): Tells the delegate a row is about to be selected.
- [tableView:didSelectRowAtIndexPath:](uitableviewdelegate/tableview%28__didselectrowat_%29.md): Tells the delegate a row is selected.
- [tableView:willDeselectRowAtIndexPath:](uitableviewdelegate/tableview%28__willdeselectrowat_%29.md): Tells the delegate that a specified row is about to be deselected.
- [tableView:didDeselectRowAtIndexPath:](uitableviewdelegate/tableview%28__diddeselectrowat_%29.md): Tells the delegate that the specified row is now deselected.
- [tableView:shouldBeginMultipleSelectionInteractionAtIndexPath:](uitableviewdelegate/tableview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can use a two-finger pan gesture to select multiple items in a table view.
- [tableView:didBeginMultipleSelectionInteractionAtIndexPath:](uitableviewdelegate/tableview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple rows in a table view.
- [tableViewDidEndMultipleSelectionInteraction:](uitableviewdelegate/tableviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple rows in a table view.

### Providing custom header and footer views

- [tableView:viewForHeaderInSection:](uitableviewdelegate/tableview%28__viewforheaderinsection_%29.md): Asks the delegate for a view to display in the header of the specified section of the table view.
- [tableView:viewForFooterInSection:](uitableviewdelegate/tableview%28__viewforfooterinsection_%29.md): Asks the delegate for a view to display in the footer of the specified section of the table view.
- [tableView:willDisplayHeaderView:forSection:](uitableviewdelegate/tableview%28__willdisplayheaderview_forsection_%29.md): Tells the delegate that the table is about to display the header view for the specified section.
- [tableView:willDisplayFooterView:forSection:](uitableviewdelegate/tableview%28__willdisplayfooterview_forsection_%29.md): Tells the delegate that the table is about to display the footer view for the specified section.

### Providing header, footer, and row heights

- [tableView:heightForRowAtIndexPath:](uitableviewdelegate/tableview%28__heightforrowat_%29.md): Asks the delegate for the height to use for a row in a specified location.
- [tableView:heightForHeaderInSection:](uitableviewdelegate/tableview%28__heightforheaderinsection_%29.md): Asks the delegate for the height to use for the header of a particular section.
- [tableView:heightForFooterInSection:](uitableviewdelegate/tableview%28__heightforfooterinsection_%29.md): Asks the delegate for the height to use for the footer of a particular section.
- [UITableViewAutomaticDimension](uitableview/automaticdimension.md): A constant representing the default value for a given dimension.

### Estimating heights for the table’s content

- [tableView:estimatedHeightForRowAtIndexPath:](uitableviewdelegate/tableview%28__estimatedheightforrowat_%29.md): Asks the delegate for the estimated height of a row in a specified location.
- [tableView:estimatedHeightForHeaderInSection:](uitableviewdelegate/tableview%28__estimatedheightforheaderinsection_%29.md): Asks the delegate for the estimated height of the header of a particular section.
- [tableView:estimatedHeightForFooterInSection:](uitableviewdelegate/tableview%28__estimatedheightforfooterinsection_%29.md): Asks the delegate for the estimated height of the footer of a particular section.

### Managing accessory views

- [tableView:accessoryTypeForRowWithIndexPath:](uitableviewdelegate/tableview_accessorytypeforrowwithindexpath_.md): Deprecated. Asks the delegate for the type of standard accessory view to use as a disclosure control for the specified row.
- [tableView:accessoryButtonTappedForRowWithIndexPath:](uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md): Tells the delegate that the user tapped the detail button for the specified row.

### Managing context menus

- [Adding context menus in your app](adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [tableView:contextMenuConfigurationForRowAtIndexPath:point:](uitableviewdelegate/tableview%28__contextmenuconfigurationforrowat_point_%29.md): Returns a context menu configuration for the row at a point.
- [tableView:previewForDismissingContextMenuWithConfiguration:](uitableviewdelegate/tableview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Returns the destination view when dismissing a context menu.
- [tableView:previewForHighlightingContextMenuWithConfiguration:](uitableviewdelegate/tableview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Returns a view to override the default preview the table view created.
- [tableView:willDisplayContextMenuWithConfiguration:animator:](uitableviewdelegate/tableview%28__willdisplaycontextmenu_animator_%29.md): Informs the delegate when a context menu will appear.
- [tableView:willEndContextMenuInteractionWithConfiguration:animator:](uitableviewdelegate/tableview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [tableView:willPerformPreviewActionForMenuWithConfiguration:animator:](uitableviewdelegate/tableview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.

### Responding to row actions

- [tableView:leadingSwipeActionsConfigurationForRowAtIndexPath:](uitableviewdelegate/tableview%28__leadingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the leading edge of the row.
- [tableView:trailingSwipeActionsConfigurationForRowAtIndexPath:](uitableviewdelegate/tableview%28__trailingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the trailing edge of the row.
- [tableView:shouldShowMenuForRowAtIndexPath:](uitableviewdelegate/tableview%28__shouldshowmenuforrowat_%29.md): Deprecated. Asks the delegate if the editing menu should be shown for a certain row.
- [tableView:canPerformAction:forRowAtIndexPath:withSender:](uitableviewdelegate/tableview%28__canperformaction_forrowat_withsender_%29.md): Deprecated. Asks the delegate if the editing menu should omit the Copy or Paste command for a given row.
- [tableView:performAction:forRowAtIndexPath:withSender:](uitableviewdelegate/tableview%28__performaction_forrowat_withsender_%29.md): Deprecated. Tells the delegate to perform a copy or paste operation on the content of a given row.
- [tableView:editActionsForRowAtIndexPath:](uitableviewdelegate/tableview%28__editactionsforrowat_%29.md): Deprecated. Asks the delegate for the actions to display in response to a swipe in the specified row.

### Managing table view highlights

- [tableView:shouldHighlightRowAtIndexPath:](uitableviewdelegate/tableview%28__shouldhighlightrowat_%29.md): Asks the delegate if the specified row should be highlighted.
- [tableView:didHighlightRowAtIndexPath:](uitableviewdelegate/tableview%28__didhighlightrowat_%29.md): Tells the delegate that the specified row was highlighted.
- [tableView:didUnhighlightRowAtIndexPath:](uitableviewdelegate/tableview%28__didunhighlightrowat_%29.md): Tells the delegate that the highlight was removed from the row at the specified index path.

### Editing table rows

- [tableView:willBeginEditingRowAtIndexPath:](uitableviewdelegate/tableview%28__willbegineditingrowat_%29.md): Tells the delegate that the table view is about to go into editing mode.
- [tableView:didEndEditingRowAtIndexPath:](uitableviewdelegate/tableview%28__didendeditingrowat_%29.md): Tells the delegate that the table view has left editing mode.
- [tableView:editingStyleForRowAtIndexPath:](uitableviewdelegate/tableview%28__editingstyleforrowat_%29.md): Asks the delegate for the editing style of a row at a particular location in a table view.
- [tableView:titleForDeleteConfirmationButtonForRowAtIndexPath:](uitableviewdelegate/tableview%28__titlefordeleteconfirmationbuttonforrowat_%29.md): Changes the default title of the delete-confirmation button.
- [tableView:shouldIndentWhileEditingRowAtIndexPath:](uitableviewdelegate/tableview%28__shouldindentwhileeditingrowat_%29.md): Asks the delegate whether the background of the specified row should be indented while the table view is in editing mode.

### Reordering table rows

- [tableView:targetIndexPathForMoveFromRowAtIndexPath:toProposedIndexPath:](uitableviewdelegate/tableview%28__targetindexpathformovefromrowat_toproposedindexpath_%29.md): Asks the delegate to return a new index path to retarget a proposed move of a row.

### Tracking the removal of views

- [tableView:didEndDisplayingCell:forRowAtIndexPath:](uitableviewdelegate/tableview%28__didenddisplaying_forrowat_%29.md): Tells the delegate that the specified cell was removed from the table.
- [tableView:didEndDisplayingHeaderView:forSection:](uitableviewdelegate/tableview%28__didenddisplayingheaderview_forsection_%29.md): Tells the delegate that the specified header view was removed from the table.
- [tableView:didEndDisplayingFooterView:forSection:](uitableviewdelegate/tableview%28__didenddisplayingfooterview_forsection_%29.md): Tells the delegate that the specified footer view was removed from the table.

### Managing table view focus

- [tableView:canFocusRowAtIndexPath:](uitableviewdelegate/tableview%28__canfocusrowat_%29.md): Asks the delegate whether the cell at the specified index path is itself focusable.
- [tableView:shouldUpdateFocusInContext:](uitableviewdelegate/tableview%28__shouldupdatefocusin_%29.md): Asks the delegate whether the focus update specified by the context is allowed to occur.
- [tableView:didUpdateFocusInContext:withAnimationCoordinator:](uitableviewdelegate/tableview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update specified by the context has just occurred.
- [indexPathForPreferredFocusedViewInTableView:](uitableviewdelegate/indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the table view’s index path for the preferred focused view.
- [tableView:selectionFollowsFocusForRowAtIndexPath:](uitableviewdelegate/tableview%28__selectionfollowsfocusforrowat_%29.md): Asks the delegate whether to relate selection and focus behavior for the row at the corresponding index path.

### Performing primary actions

- [tableView:canPerformPrimaryActionForRowAtIndexPath:](uitableviewdelegate/tableview%28__canperformprimaryactionforrowat_%29.md): Asks the delegate whether to perform a primary action for the row at the specified index path.
- [tableView:performPrimaryActionForRowAtIndexPath:](uitableviewdelegate/tableview%28__performprimaryactionforrowat_%29.md): Tells the delegate to perform the primary action for the row at the specified index path.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
- [UIScrollViewDelegate](uiscrollviewdelegate.md)

### Conforming Types

- [UITableViewController](uitableviewcontroller.md)

## See Also

### Table management

- [Estimating the height of a table’s scrolling area](estimating-the-height-of-a-table-s-scrolling-area.md): Provide height estimates for your table view’s headers, footers, and rows to ensure that scrolling accurately reflects the size of your content.
- [UITableViewController](uitableviewcontroller.md): A view controller that specializes in managing a table view.
- [UITableViewFocusUpdateContext](uitableviewfocusupdatecontext.md): A context object that provides information relevant to a specific focus update from one view to another.
