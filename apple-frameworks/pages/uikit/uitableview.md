> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview](https://developer.apple.com/documentation/uikit/uitableview)

# UITableView (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view that presents data using rows in a single column.

## Declaration

```swift
@MainActor class UITableView
```

## Mentioned In

- [About app development with UIKit](about-app-development-with-uikit.md)
- [Adding headers and footers to table sections](adding-headers-and-footers-to-table-sections.md)
- [Configuring the cells for your table](configuring-the-cells-for-your-table.md)
- [Estimating the height of a table’s scrolling area](estimating-the-height-of-a-table-s-scrolling-area.md)
- [Making a view into a drag source](making-a-view-into-a-drag-source.md)
- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)

<a id="overview"></a>

## Overview

Table views in iOS display rows of vertically scrolling content in a single column. Each row in the table contains one piece of your app’s content. You can configure a table to display a single long list of rows, or you can group related rows into sections to make navigating the content easier.

When you organize rows into sections in a table, you can choose to present sections in a plain or grouped visual [UITableView.Style](uitableview/style-swift.enum.md). For example, the Contacts app displays the name of each contact in a separate row, organized into sections by the first letter of each contact’s last name. It presents the sections with a plain style. The main page of the Settings app displays the available settings organized into related sections, and presents those sections in a grouped visual style.

![A screenshot of the Contacts app, which uses a table to organize the user's individual contacts in a scrolling list.](https://developer.apple.com/images/com.apple.uikit/uitableview-1@2x.png)

![A screenshot of the Settings app, which displays different groups of settings in a scrolling list.](https://developer.apple.com/images/com.apple.uikit/uitableview-2@2x.png)

Tables are common in apps with data that’s highly structured or organized hierarchically. Apps that contain hierarchical data often use tables in conjunction with a navigation view controller, which facilitates navigation between different levels of the hierarchy. For example, the Settings app uses tables and a navigation controller to organize the system settings.

[UITableView](uitableview.md) manages the basic appearance of the table, but your app provides the cells ([UITableViewCell](uitableviewcell.md) objects) that display the actual content. The standard cell configurations display a simple combination of text and images, but you can define custom cells that display any content you want. You can also supply header and footer views to provide additional information for groups of cells.

<a id="Add-a-table-view-to-your-interface"></a>

### Add a table view to your interface

To add a table view to your interface, drag a table view controller ([UITableViewController](uitableviewcontroller.md)) object to your storyboard. Xcode creates a new scene that includes both the view controller and a table view, ready for you to configure and use.

Table views are data-driven, normally getting their data from a data source object that you provide. The data source object manages your app’s data and is responsible for creating and configuring the table’s cells. If the content of your table never changes, you can configure that content in your storyboard file instead.

For information about how to specify your table’s data, see [Filling a table with data](filling-a-table-with-data.md).

<a id="Save-and-restore-the-tables-current-state"></a>

### Save and restore the table’s current state

Table views support UIKit app restoration. To save and restore the table’s data, assign a nonempty value to the table view’s [restorationIdentifier](uiviewcontroller/restorationidentifier.md) property. When you save its parent view controller, the table view automatically saves the index paths for the currently selected and visible rows. If the table’s data source object adopts the [UIDataSourceModelAssociation](uidatasourcemodelassociation.md) protocol, the table stores the unique IDs that you provide for those items instead of their index paths.

For information about how to save and restore your app’s state information, see [Preserving your app’s UI across launches](preserving-your-app-s-ui-across-launches.md).

## Topics

### Creating a table view

- [init(frame:style:)](uitableview/init%28frame_style_%29.md): Creates and returns a table view with the specified frame and style.
- [init(coder:)](uitableview/init%28coder_%29.md): Creates a table view object from data in an unarchiver.

### Providing the data and cells

- [dataSource](uitableview/datasource.md): The object that acts as the data source of the table view.
- [prefetchDataSource](uitableview/prefetchdatasource.md): The object that acts as the prefetching data source for the table view, receiving notifications of upcoming cell data requirements.
- [isPrefetchingEnabled](uitableview/isprefetchingenabled.md): A Boolean value that indicates whether to allow cell and data prefetching.
- [UITableViewDataSource](uitableviewdatasource.md): The methods that an object adopts to manage data and provide cells for a table view.
- [UITableViewDataSourcePrefetching](uitableviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a table view, allowing you to start potentially long-running data operations early.

### Recycling table view cells

- [register(\_:forCellReuseIdentifier:)](uitableview/register%28__forcellreuseidentifier_%29-5q6bo.md): Deprecated. Registers a nib object that contains a cell with the table view under a specified identifier.
- [register(\_:forCellReuseIdentifier:)](uitableview/register%28__forcellreuseidentifier_%29-3l3ct.md): Registers a class to use in creating new table cells.
- [dequeueReusableCell(withIdentifier:for:)](uitableview/dequeuereusablecell%28withidentifier_for_%29.md): Returns a reusable table-view cell object for the specified reuse identifier and adds it to the table.
- [dequeueReusableCell(withIdentifier:)](uitableview/dequeuereusablecell%28withidentifier_%29.md): Returns a reusable table-view cell object after locating it by its identifier.

### Recycling section headers and footers

- [register(\_:forHeaderFooterViewReuseIdentifier:)](uitableview/register%28__forheaderfooterviewreuseidentifier_%29-1rgvc.md): Deprecated. Registers a nib object that contains a header or footer with the table view under a specified identifier.
- [register(\_:forHeaderFooterViewReuseIdentifier:)](uitableview/register%28__forheaderfooterviewreuseidentifier_%29-20ybb.md): Registers a class to use in creating new table header or footer views.
- [dequeueReusableHeaderFooterView(withIdentifier:)](uitableview/dequeuereusableheaderfooterview%28withidentifier_%29.md): Returns a reusable header or footer view after locating it by its identifier.

### Managing interactions with the table

- [delegate](uitableview/delegate.md): The object that acts as the delegate of the table view.
- [UITableViewDelegate](uitableviewdelegate.md): Methods for managing selections, configuring section headers and footers, deleting and reordering cells, and performing other actions in a table view.

### Configuring the table’s appearance

- [style](uitableview/style-swift.property.md): The style of the table view.
- [UITableView.Style](uitableview/style-swift.enum.md): Constants for the table view styles.
- [tableHeaderView](uitableview/tableheaderview.md): The view that displays above the table’s content.
- [tableFooterView](uitableview/tablefooterview.md): The view that displays below the table’s content.
- [backgroundView](uitableview/backgroundview.md): The background view of the table view.

### Configuring cell height and layout

- [rowHeight](uitableview/rowheight.md): The default height in points of each row in the table view.
- [estimatedRowHeight](uitableview/estimatedrowheight.md): The estimated height of rows in the table view.
- [fillerRowHeight](uitableview/fillerrowheight.md): The height for empty rows that fill the table view.
- [cellLayoutMarginsFollowReadableWidth](uitableview/celllayoutmarginsfollowreadablewidth.md): A Boolean value that indicates whether the cell margins derive from the width of the readable content guide.
- [insetsContentViewsToSafeArea](uitableview/insetscontentviewstosafearea.md): A Boolean value that indicates whether the table view adjusts the content views of its cells, headers, and footers to fit within the safe area.

### Configuring header and footer appearance

- [sectionHeaderHeight](uitableview/sectionheaderheight.md): The height of section headers in the table view.
- [sectionFooterHeight](uitableview/sectionfooterheight.md): The height of section footers in the table view.
- [estimatedSectionHeaderHeight](uitableview/estimatedsectionheaderheight.md): The estimated height of section headers in the table view.
- [estimatedSectionFooterHeight](uitableview/estimatedsectionfooterheight.md): The estimated height of section footers in the table view.
- [sectionHeaderTopPadding](uitableview/sectionheadertoppadding.md): The amount of padding above each section header.

### Customizing the separator appearance

- [separatorStyle](uitableview/separatorstyle.md): The style for table cells to use as separators.
- [UITableViewCell.SeparatorStyle](uitableviewcell/separatorstyle.md): The style for cells to use as separators.
- [separatorColor](uitableview/separatorcolor.md): The color of separator rows in the table view.
- [separatorEffect](uitableview/separatoreffect.md): The effect to apply to table separators.
- [separatorInset](uitableview/separatorinset.md): The default inset of cell separators.
- [separatorInsetReference](uitableview/separatorinsetreference-swift.property.md): An indicator of how to interpret the separator inset value.
- [UITableView.SeparatorInsetReference](uitableview/separatorinsetreference-swift.enum.md): Constants that indicate how to interpret the separator inset value of a table view.

### Getting the number of rows and sections

- [numberOfRows(inSection:)](uitableview/numberofrows%28insection_%29.md): Returns the number of rows (table cells) in a specified section.
- [numberOfSections](uitableview/numberofsections.md): The number of sections in the table view.

### Getting cells and section-based views

- [cellForRow(at:)](uitableview/cellforrow%28at_%29.md): Returns the table cell at the index path you specify.
- [headerView(forSection:)](uitableview/headerview%28forsection_%29.md): Returns the header view for the specified section.
- [footerView(forSection:)](uitableview/footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPath(for:)](uitableview/indexpath%28for_%29.md): Returns an index path that represents the row and section of a specified table-view cell.
- [indexPathForRow(at:)](uitableview/indexpathforrow%28at_%29.md): Returns an index path that identifies the row and section at the specified point.
- [indexPathsForRows(in:)](uitableview/indexpathsforrows%28in_%29.md): Returns an array of index paths, each representing a row that the specified rectangle encloses.
- [visibleCells](uitableview/visiblecells.md): The table cells that are visible in the table view.
- [indexPathsForVisibleRows](uitableview/indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.

### Selecting rows

- [indexPathForSelectedRow](uitableview/indexpathforselectedrow.md): An index path that identifies the row and section of the selected row.
- [indexPathsForSelectedRows](uitableview/indexpathsforselectedrows.md): The index paths that represent the selected rows.
- [selectRow(at:animated:scrollPosition:)](uitableview/selectrow%28at_animated_scrollposition_%29.md): Selects a row in the table view that an index path identifies, optionally scrolling the row to a location in the table view.
- [deselectRow(at:animated:)](uitableview/deselectrow%28at_animated_%29.md): Deselects a row that an index path identifies, with an option to animate the deselection.
- [allowsSelection](uitableview/allowsselection.md): A Boolean value that determines whether users can select a row.
- [allowsMultipleSelection](uitableview/allowsmultipleselection.md): A Boolean value that determines whether users can select more than one row outside of editing mode.
- [allowsSelectionDuringEditing](uitableview/allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the table view is in editing mode.
- [allowsMultipleSelectionDuringEditing](uitableview/allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](uitableview/selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [selectionDidChangeNotification](uitableview/selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.

### Inserting, deleting, and moving rows and sections

- [insertRows(at:with:)](uitableview/insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [deleteRows(at:with:)](uitableview/deleterows%28at_with_%29.md): Deletes the rows that an array of index paths identifies, with an option to animate the deletion.
- [insertSections(\_:with:)](uitableview/insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.
- [deleteSections(\_:with:)](uitableview/deletesections%28__with_%29.md): Deletes one or more sections in the table view, with an option to animate the deletion.
- [UITableView.RowAnimation](uitableview/rowanimation.md): The type of animation to use when inserting or deleting rows.
- [moveRow(at:to:)](uitableview/moverow%28at_to_%29.md): Moves the row at a specified location to a destination location.
- [moveSection(\_:toSection:)](uitableview/movesection%28__tosection_%29.md): Moves a section to a new location in the table view.

### Performing batch updates to rows and sections

- [performBatchUpdates(\_:completion:)](uitableview/performbatchupdates%28__completion_%29.md): Animates multiple insert, delete, reload, and move operations as a group.
- [beginUpdates()](uitableview/beginupdates%28%29.md): Begins a series of method calls that insert, delete, or select rows and sections of the table view.
- [endUpdates()](uitableview/endupdates%28%29.md): Concludes a series of method calls that insert, delete, select, or reload rows and sections of the table view.

### Reloading the table view

- [hasUncommittedUpdates](uitableview/hasuncommittedupdates.md): A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.
- [reconfigureRows(at:)](uitableview/reconfigurerows%28at_%29.md): Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.
- [reloadData()](uitableview/reloaddata%28%29.md): Reloads the rows and sections of the table view.
- [reloadRows(at:with:)](uitableview/reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.
- [reloadSections(\_:with:)](uitableview/reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.
- [reloadSectionIndexTitles()](uitableview/reloadsectionindextitles%28%29.md): Reloads the items in the index bar along the right side of the table view.

### Managing drag interactions

- [dragDelegate](uitableview/dragdelegate.md): The delegate object that manages the dragging of items from the table view.
- [UITableViewDragDelegate](uitableviewdragdelegate.md): The interface for initiating drags from a table view.
- [hasActiveDrag](uitableview/hasactivedrag.md): A Boolean value that indicates whether the table view is currently tracking a drag session.
- [dragInteractionEnabled](uitableview/draginteractionenabled.md): A Boolean value that indicates whether the table view supports dragging content.

### Managing drop interactions

- [dropDelegate](uitableview/dropdelegate.md): The delegate object that manages the dropping of content into the table view.
- [UITableViewDropDelegate](uitableviewdropdelegate.md): The interface for handling drops in a table view.
- [hasActiveDrop](uitableview/hasactivedrop.md): A Boolean value that indicates whether the table view is currently tracking a drop session.

### Scrolling the table view

- [scrollToRow(at:at:animated:)](uitableview/scrolltorow%28at_at_animated_%29.md): Scrolls through the table view until a row that an index path identifies is at a particular location on the screen.
- [scrollToNearestSelectedRow(at:animated:)](uitableview/scrolltonearestselectedrow%28at_animated_%29.md): Scrolls the table view so that the selected row nearest to a specified position in the table view is at that position.
- [UITableView.ScrollPosition](uitableview/scrollposition.md): The position in the table view (top, middle, bottom) to scroll a specified row to.

### Putting the table into edit mode

- [setEditing(\_:animated:)](uitableview/setediting%28__animated_%29.md): Toggles the table view into and out of editing mode.
- [isEditing](uitableview/isediting.md): A Boolean value that determines whether the table view is in editing mode.

### Configuring the table index

- [sectionIndexMinimumDisplayRowCount](uitableview/sectionindexminimumdisplayrowcount.md): The number of table rows at which to display the index list on the right edge of the table.
- [sectionIndexColor](uitableview/sectionindexcolor.md): The color to use for the table view’s index text.
- [sectionIndexBackgroundColor](uitableview/sectionindexbackgroundcolor.md): The color to use for the background of the table view’s section index.
- [sectionIndexTrackingBackgroundColor](uitableview/sectionindextrackingbackgroundcolor.md): The color to use for the table view’s index background area.
- [indexSearch](uitableview/indexsearch.md): A constant for adding the magnifying glass icon to the section index of a table view.

### Getting the drawing areas for the table

- [rect(forSection:)](uitableview/rect%28forsection_%29.md): Returns the drawing area for a specified section of the table view.
- [rectForRow(at:)](uitableview/rectforrow%28at_%29.md): Returns the drawing area for a row that an index path identifies.
- [rectForFooter(inSection:)](uitableview/rectforfooter%28insection_%29.md): Returns the drawing area for the footer of the specified section.
- [rectForHeader(inSection:)](uitableview/rectforheader%28insection_%29.md): Returns the drawing area for the header of the specified section.

### Working with focus

- [allowsFocus](uitableview/allowsfocus.md): A Boolean value that determines whether the table view allows its cells to become focused.
- [allowsFocusDuringEditing](uitableview/allowsfocusduringediting.md): A Boolean value that determines whether the table view allows its cells to become focused in edit mode.
- [selectionFollowsFocus](uitableview/selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [remembersLastFocusedIndexPath](uitableview/rememberslastfocusedindexpath.md): A Boolean value that indicates whether the table view automatically returns the focus to the cell at the last focused index path.

### Managing context menus

- [contextMenuInteraction](uitableview/contextmenuinteraction.md): The table view’s context menu interaction.

### Resizing self-sizing cells

- [selfSizingInvalidation](uitableview/selfsizinginvalidation-swift.property.md): The mode that the table view uses for invalidating the size of self-sizing cells.
- [UITableView.SelfSizingInvalidation](uitableview/selfsizinginvalidation-swift.enum.md): Constants that describe modes for invalidating the size of self-sizing table view cells.

### Managing content-hugging behavior

- [contentHuggingElements](uitableview/contenthuggingelements.md): A setting that determines which type of items tightly hug their content.
- [UITableViewContentHuggingElements](uitableviewcontenthuggingelements.md): Constants that determine which types of items in a table view tightly hug their content.

### Structures

- [UITableView.SelectionDidChangeMessage](uitableview/selectiondidchangemessage.md)

### Instance Properties

- [appIntentsDataSource](uitableview/appintentsdatasource.md): The object acting as the table view’s data source for app entity identifiers that make a cell’s content discoverable by Apple Intelligence and Siri.

## Relationships

### Inherits From

- [UIScrollView](uiscrollview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearance](uiappearance.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UICoordinateSpace](uicoordinatespace.md)
- [UIDataSourceTranslating](uidatasourcetranslating.md)
- [UIDynamicItem](uidynamicitem.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIFocusItem](uifocusitem.md)
- [UIFocusItemContainer](uifocusitemcontainer.md)
- [UIFocusItemScrollableContainer](uifocusitemscrollablecontainer.md)
- [UILargeContentViewerItem](uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

# UITableView (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view that presents data using rows in a single column.

## Declaration

```objectivec
@interface UITableView : UIScrollView
```

## Mentioned In

- [About app development with UIKit](about-app-development-with-uikit.md)
- [Adding headers and footers to table sections](adding-headers-and-footers-to-table-sections.md)
- [Configuring the cells for your table](configuring-the-cells-for-your-table.md)
- [Estimating the height of a table’s scrolling area](estimating-the-height-of-a-table-s-scrolling-area.md)
- [Making a view into a drag source](making-a-view-into-a-drag-source.md)
- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)

<a id="overview"></a>

## Overview

Table views in iOS display rows of vertically scrolling content in a single column. Each row in the table contains one piece of your app’s content. You can configure a table to display a single long list of rows, or you can group related rows into sections to make navigating the content easier.

When you organize rows into sections in a table, you can choose to present sections in a plain or grouped visual [UITableViewStyle](uitableview/style-swift.enum.md). For example, the Contacts app displays the name of each contact in a separate row, organized into sections by the first letter of each contact’s last name. It presents the sections with a plain style. The main page of the Settings app displays the available settings organized into related sections, and presents those sections in a grouped visual style.

![A screenshot of the Contacts app, which uses a table to organize the user's individual contacts in a scrolling list.](https://developer.apple.com/images/com.apple.uikit/uitableview-1@2x.png)

![A screenshot of the Settings app, which displays different groups of settings in a scrolling list.](https://developer.apple.com/images/com.apple.uikit/uitableview-2@2x.png)

Tables are common in apps with data that’s highly structured or organized hierarchically. Apps that contain hierarchical data often use tables in conjunction with a navigation view controller, which facilitates navigation between different levels of the hierarchy. For example, the Settings app uses tables and a navigation controller to organize the system settings.

[UITableView](uitableview.md) manages the basic appearance of the table, but your app provides the cells ([UITableViewCell](uitableviewcell.md) objects) that display the actual content. The standard cell configurations display a simple combination of text and images, but you can define custom cells that display any content you want. You can also supply header and footer views to provide additional information for groups of cells.

<a id="Add-a-table-view-to-your-interface"></a>

### Add a table view to your interface

To add a table view to your interface, drag a table view controller ([UITableViewController](uitableviewcontroller.md)) object to your storyboard. Xcode creates a new scene that includes both the view controller and a table view, ready for you to configure and use.

Table views are data-driven, normally getting their data from a data source object that you provide. The data source object manages your app’s data and is responsible for creating and configuring the table’s cells. If the content of your table never changes, you can configure that content in your storyboard file instead.

For information about how to specify your table’s data, see [Filling a table with data](filling-a-table-with-data.md).

<a id="Save-and-restore-the-tables-current-state"></a>

### Save and restore the table’s current state

Table views support UIKit app restoration. To save and restore the table’s data, assign a nonempty value to the table view’s [restorationIdentifier](uiviewcontroller/restorationidentifier.md) property. When you save its parent view controller, the table view automatically saves the index paths for the currently selected and visible rows. If the table’s data source object adopts the [UIDataSourceModelAssociation](uidatasourcemodelassociation.md) protocol, the table stores the unique IDs that you provide for those items instead of their index paths.

For information about how to save and restore your app’s state information, see [Preserving your app’s UI across launches](preserving-your-app-s-ui-across-launches.md).

## Topics

### Creating a table view

- [initWithFrame:style:](uitableview/init%28frame_style_%29.md): Creates and returns a table view with the specified frame and style.
- [initWithCoder:](uitableview/init%28coder_%29.md): Creates a table view object from data in an unarchiver.

### Providing the data and cells

- [dataSource](uitableview/datasource.md): The object that acts as the data source of the table view.
- [prefetchDataSource](uitableview/prefetchdatasource.md): The object that acts as the prefetching data source for the table view, receiving notifications of upcoming cell data requirements.
- [prefetchingEnabled](uitableview/isprefetchingenabled.md): A Boolean value that indicates whether to allow cell and data prefetching.
- [UITableViewDataSource](uitableviewdatasource.md): The methods that an object adopts to manage data and provide cells for a table view.
- [UITableViewDataSourcePrefetching](uitableviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a table view, allowing you to start potentially long-running data operations early.

### Recycling table view cells

- [registerNib:forCellReuseIdentifier:](uitableview/register%28__forcellreuseidentifier_%29-5q6bo.md): Deprecated. Registers a nib object that contains a cell with the table view under a specified identifier.
- [registerClass:forCellReuseIdentifier:](uitableview/register%28__forcellreuseidentifier_%29-3l3ct.md): Registers a class to use in creating new table cells.
- [dequeueReusableCellWithIdentifier:forIndexPath:](uitableview/dequeuereusablecell%28withidentifier_for_%29.md): Returns a reusable table-view cell object for the specified reuse identifier and adds it to the table.
- [dequeueReusableCellWithIdentifier:](uitableview/dequeuereusablecell%28withidentifier_%29.md): Returns a reusable table-view cell object after locating it by its identifier.

### Recycling section headers and footers

- [registerNib:forHeaderFooterViewReuseIdentifier:](uitableview/register%28__forheaderfooterviewreuseidentifier_%29-1rgvc.md): Deprecated. Registers a nib object that contains a header or footer with the table view under a specified identifier.
- [registerClass:forHeaderFooterViewReuseIdentifier:](uitableview/register%28__forheaderfooterviewreuseidentifier_%29-20ybb.md): Registers a class to use in creating new table header or footer views.
- [dequeueReusableHeaderFooterViewWithIdentifier:](uitableview/dequeuereusableheaderfooterview%28withidentifier_%29.md): Returns a reusable header or footer view after locating it by its identifier.

### Managing interactions with the table

- [delegate](uitableview/delegate.md): The object that acts as the delegate of the table view.
- [UITableViewDelegate](uitableviewdelegate.md): Methods for managing selections, configuring section headers and footers, deleting and reordering cells, and performing other actions in a table view.

### Configuring the table’s appearance

- [style](uitableview/style-swift.property.md): The style of the table view.
- [UITableViewStyle](uitableview/style-swift.enum.md): Constants for the table view styles.
- [tableHeaderView](uitableview/tableheaderview.md): The view that displays above the table’s content.
- [tableFooterView](uitableview/tablefooterview.md): The view that displays below the table’s content.
- [backgroundView](uitableview/backgroundview.md): The background view of the table view.

### Configuring cell height and layout

- [rowHeight](uitableview/rowheight.md): The default height in points of each row in the table view.
- [estimatedRowHeight](uitableview/estimatedrowheight.md): The estimated height of rows in the table view.
- [fillerRowHeight](uitableview/fillerrowheight.md): The height for empty rows that fill the table view.
- [cellLayoutMarginsFollowReadableWidth](uitableview/celllayoutmarginsfollowreadablewidth.md): A Boolean value that indicates whether the cell margins derive from the width of the readable content guide.
- [insetsContentViewsToSafeArea](uitableview/insetscontentviewstosafearea.md): A Boolean value that indicates whether the table view adjusts the content views of its cells, headers, and footers to fit within the safe area.

### Configuring header and footer appearance

- [sectionHeaderHeight](uitableview/sectionheaderheight.md): The height of section headers in the table view.
- [sectionFooterHeight](uitableview/sectionfooterheight.md): The height of section footers in the table view.
- [estimatedSectionHeaderHeight](uitableview/estimatedsectionheaderheight.md): The estimated height of section headers in the table view.
- [estimatedSectionFooterHeight](uitableview/estimatedsectionfooterheight.md): The estimated height of section footers in the table view.
- [sectionHeaderTopPadding](uitableview/sectionheadertoppadding.md): The amount of padding above each section header.

### Customizing the separator appearance

- [separatorStyle](uitableview/separatorstyle.md): The style for table cells to use as separators.
- [UITableViewCellSeparatorStyle](uitableviewcell/separatorstyle.md): The style for cells to use as separators.
- [separatorColor](uitableview/separatorcolor.md): The color of separator rows in the table view.
- [separatorEffect](uitableview/separatoreffect.md): The effect to apply to table separators.
- [separatorInset](uitableview/separatorinset.md): The default inset of cell separators.
- [separatorInsetReference](uitableview/separatorinsetreference-swift.property.md): An indicator of how to interpret the separator inset value.
- [UITableViewSeparatorInsetReference](uitableview/separatorinsetreference-swift.enum.md): Constants that indicate how to interpret the separator inset value of a table view.

### Getting the number of rows and sections

- [numberOfRowsInSection:](uitableview/numberofrows%28insection_%29.md): Returns the number of rows (table cells) in a specified section.
- [numberOfSections](uitableview/numberofsections.md): The number of sections in the table view.

### Getting cells and section-based views

- [cellForRowAtIndexPath:](uitableview/cellforrow%28at_%29.md): Returns the table cell at the index path you specify.
- [headerViewForSection:](uitableview/headerview%28forsection_%29.md): Returns the header view for the specified section.
- [footerViewForSection:](uitableview/footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPathForCell:](uitableview/indexpath%28for_%29.md): Returns an index path that represents the row and section of a specified table-view cell.
- [indexPathForRowAtPoint:](uitableview/indexpathforrow%28at_%29.md): Returns an index path that identifies the row and section at the specified point.
- [indexPathsForRowsInRect:](uitableview/indexpathsforrows%28in_%29.md): Returns an array of index paths, each representing a row that the specified rectangle encloses.
- [visibleCells](uitableview/visiblecells.md): The table cells that are visible in the table view.
- [indexPathsForVisibleRows](uitableview/indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.

### Selecting rows

- [indexPathForSelectedRow](uitableview/indexpathforselectedrow.md): An index path that identifies the row and section of the selected row.
- [indexPathsForSelectedRows](uitableview/indexpathsforselectedrows.md): The index paths that represent the selected rows.
- [selectRowAtIndexPath:animated:scrollPosition:](uitableview/selectrow%28at_animated_scrollposition_%29.md): Selects a row in the table view that an index path identifies, optionally scrolling the row to a location in the table view.
- [deselectRowAtIndexPath:animated:](uitableview/deselectrow%28at_animated_%29.md): Deselects a row that an index path identifies, with an option to animate the deselection.
- [allowsSelection](uitableview/allowsselection.md): A Boolean value that determines whether users can select a row.
- [allowsMultipleSelection](uitableview/allowsmultipleselection.md): A Boolean value that determines whether users can select more than one row outside of editing mode.
- [allowsSelectionDuringEditing](uitableview/allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the table view is in editing mode.
- [allowsMultipleSelectionDuringEditing](uitableview/allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](uitableview/selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [UITableViewSelectionDidChangeNotification](uitableview/selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.

### Inserting, deleting, and moving rows and sections

- [insertRowsAtIndexPaths:withRowAnimation:](uitableview/insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [deleteRowsAtIndexPaths:withRowAnimation:](uitableview/deleterows%28at_with_%29.md): Deletes the rows that an array of index paths identifies, with an option to animate the deletion.
- [insertSections:withRowAnimation:](uitableview/insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.
- [deleteSections:withRowAnimation:](uitableview/deletesections%28__with_%29.md): Deletes one or more sections in the table view, with an option to animate the deletion.
- [UITableViewRowAnimation](uitableview/rowanimation.md): The type of animation to use when inserting or deleting rows.
- [moveRowAtIndexPath:toIndexPath:](uitableview/moverow%28at_to_%29.md): Moves the row at a specified location to a destination location.
- [moveSection:toSection:](uitableview/movesection%28__tosection_%29.md): Moves a section to a new location in the table view.

### Performing batch updates to rows and sections

- [performBatchUpdates:completion:](uitableview/performbatchupdates%28__completion_%29.md): Animates multiple insert, delete, reload, and move operations as a group.
- [beginUpdates](uitableview/beginupdates%28%29.md): Begins a series of method calls that insert, delete, or select rows and sections of the table view.
- [endUpdates](uitableview/endupdates%28%29.md): Concludes a series of method calls that insert, delete, select, or reload rows and sections of the table view.

### Reloading the table view

- [hasUncommittedUpdates](uitableview/hasuncommittedupdates.md): A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.
- [reconfigureRowsAtIndexPaths:](uitableview/reconfigurerows%28at_%29.md): Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.
- [reloadData](uitableview/reloaddata%28%29.md): Reloads the rows and sections of the table view.
- [reloadRowsAtIndexPaths:withRowAnimation:](uitableview/reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.
- [reloadSections:withRowAnimation:](uitableview/reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.
- [reloadSectionIndexTitles](uitableview/reloadsectionindextitles%28%29.md): Reloads the items in the index bar along the right side of the table view.

### Managing drag interactions

- [dragDelegate](uitableview/dragdelegate.md): The delegate object that manages the dragging of items from the table view.
- [UITableViewDragDelegate](uitableviewdragdelegate.md): The interface for initiating drags from a table view.
- [hasActiveDrag](uitableview/hasactivedrag.md): A Boolean value that indicates whether the table view is currently tracking a drag session.
- [dragInteractionEnabled](uitableview/draginteractionenabled.md): A Boolean value that indicates whether the table view supports dragging content.

### Managing drop interactions

- [dropDelegate](uitableview/dropdelegate.md): The delegate object that manages the dropping of content into the table view.
- [UITableViewDropDelegate](uitableviewdropdelegate.md): The interface for handling drops in a table view.
- [hasActiveDrop](uitableview/hasactivedrop.md): A Boolean value that indicates whether the table view is currently tracking a drop session.

### Scrolling the table view

- [scrollToRowAtIndexPath:atScrollPosition:animated:](uitableview/scrolltorow%28at_at_animated_%29.md): Scrolls through the table view until a row that an index path identifies is at a particular location on the screen.
- [scrollToNearestSelectedRowAtScrollPosition:animated:](uitableview/scrolltonearestselectedrow%28at_animated_%29.md): Scrolls the table view so that the selected row nearest to a specified position in the table view is at that position.
- [UITableViewScrollPosition](uitableview/scrollposition.md): The position in the table view (top, middle, bottom) to scroll a specified row to.

### Putting the table into edit mode

- [setEditing:animated:](uitableview/setediting%28__animated_%29.md): Toggles the table view into and out of editing mode.
- [editing](uitableview/isediting.md): A Boolean value that determines whether the table view is in editing mode.

### Configuring the table index

- [sectionIndexMinimumDisplayRowCount](uitableview/sectionindexminimumdisplayrowcount.md): The number of table rows at which to display the index list on the right edge of the table.
- [sectionIndexColor](uitableview/sectionindexcolor.md): The color to use for the table view’s index text.
- [sectionIndexBackgroundColor](uitableview/sectionindexbackgroundcolor.md): The color to use for the background of the table view’s section index.
- [sectionIndexTrackingBackgroundColor](uitableview/sectionindextrackingbackgroundcolor.md): The color to use for the table view’s index background area.
- [UITableViewIndexSearch](uitableview/indexsearch.md): A constant for adding the magnifying glass icon to the section index of a table view.

### Getting the drawing areas for the table

- [rectForSection:](uitableview/rect%28forsection_%29.md): Returns the drawing area for a specified section of the table view.
- [rectForRowAtIndexPath:](uitableview/rectforrow%28at_%29.md): Returns the drawing area for a row that an index path identifies.
- [rectForFooterInSection:](uitableview/rectforfooter%28insection_%29.md): Returns the drawing area for the footer of the specified section.
- [rectForHeaderInSection:](uitableview/rectforheader%28insection_%29.md): Returns the drawing area for the header of the specified section.

### Working with focus

- [allowsFocus](uitableview/allowsfocus.md): A Boolean value that determines whether the table view allows its cells to become focused.
- [allowsFocusDuringEditing](uitableview/allowsfocusduringediting.md): A Boolean value that determines whether the table view allows its cells to become focused in edit mode.
- [selectionFollowsFocus](uitableview/selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [remembersLastFocusedIndexPath](uitableview/rememberslastfocusedindexpath.md): A Boolean value that indicates whether the table view automatically returns the focus to the cell at the last focused index path.

### Managing context menus

- [contextMenuInteraction](uitableview/contextmenuinteraction.md): The table view’s context menu interaction.

### Resizing self-sizing cells

- [selfSizingInvalidation](uitableview/selfsizinginvalidation-swift.property.md): The mode that the table view uses for invalidating the size of self-sizing cells.
- [UITableViewSelfSizingInvalidation](uitableview/selfsizinginvalidation-swift.enum.md): Constants that describe modes for invalidating the size of self-sizing table view cells.

### Managing content-hugging behavior

- [contentHuggingElements](uitableview/contenthuggingelements.md): A setting that determines which type of items tightly hug their content.
- [UITableViewContentHuggingElements](uitableviewcontenthuggingelements.md): Constants that determine which types of items in a table view tightly hug their content.

## Relationships

### Inherits From

- [UIScrollView](uiscrollview.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [UIDataSourceTranslating](uidatasourcetranslating.md)
- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md)
