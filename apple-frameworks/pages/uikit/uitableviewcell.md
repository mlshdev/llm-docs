> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell](https://developer.apple.com/documentation/uikit/uitableviewcell)

# UITableViewCell (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The visual representation of a single row in a table view.

## Declaration

```swift
@MainActor class UITableViewCell
```

## Mentioned In

- [Filling a table with data](filling-a-table-with-data.md)
- [Configuring the cells for your table](configuring-the-cells-for-your-table.md)
- [Adding user-focusable elements to a tvOS app](adding-user-focusable-elements-to-a-tvos-app.md)

<a id="overview"></a>

## Overview

A [UITableViewCell](uitableviewcell.md) object is a specialized type of view that manages the content of a single table row. You use cells primarily to organize and present your app’s custom content, but [UITableViewCell](uitableviewcell.md) provides some specific customizations to support table-related behaviors, including:

- Applying a selection or highlight color to the cell
- Adding standard accessory views, such as a detail or disclosure control
- Putting the cell into an editable state
- Indenting the cell’s content to create a visual hierarchy in your table

Your app’s content occupies most of the cell’s bounds, but the cell may adjust that space to make room for other content. Cells display accessory views on the trailing edge of their content area. When you put your table into edit mode, the cell adds a delete control to the leading edge of its content area, and optionally swaps out an accessory view for a reorder control.

![Illustration showing the area of a cell by itself and with an accessory view and edit control. The content area of a cell shrinks as needed to accommodate the accessory view or edit controls.](https://developer.apple.com/images/com.apple.uikit/media-3113230@2x.png)

Every table view must have at least one type of cell for displaying content, and tables may have multiple cell types to display different types of content. Your table’s data source object handles the creation and configuration of cells immediately before they appear onscreen. For information about how to create your table’s cells, see [Filling a table with data](filling-a-table-with-data.md).

<a id="Configure-your-cells-content"></a>

### Configure your cell’s content

Configure the content and layout of your cells in your storyboard file. Tables have one cell type by default, but you can add more by changing the value in the table’s Prototype Cells attribute. In addition to configuring the cell’s content, make sure you configure the following attributes:

- Identifier. Use this identifier (also known as a reuse identifier) to create the cell.
- Style. Choose one of the standard types or define a custom cell.
- Class. Specify a [UITableViewCell](uitableviewcell.md) subclass with your custom behavior.

To configure the content and appearance of your cell, you can set its [contentConfiguration](uitableviewcell/contentconfiguration-9ktox.md) and [backgroundConfiguration](uitableviewcell/backgroundconfiguration-24e8e.md).

## Topics

### Creating a table view cell

- [init(style:reuseIdentifier:)](uitableviewcell/init%28style_reuseidentifier_%29.md): Initializes a table cell with a style and a reuse identifier and returns it to the caller.
- [UITableViewCell.CellStyle](uitableviewcell/cellstyle.md): An enumeration for the various styles of cells.
- [init(coder:)](uitableviewcell/init%28coder_%29.md): Creates a table view from data in an unarchiver.

### Reusing cells

- [reuseIdentifier](uitableviewcell/reuseidentifier.md): A string for identifying a reusable cell.
- [prepareForReuse()](uitableviewcell/prepareforreuse%28%29.md): Prepares a reusable cell for reuse by the table view’s delegate.

### Configuring the background

- [defaultBackgroundConfiguration()](uitableviewcell/defaultbackgroundconfiguration%28%29.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](uitableviewcell/backgroundconfiguration-24e8e.md): The current background configuration of the cell.
- [automaticallyUpdatesBackgroundConfiguration](uitableviewcell/automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](uitableviewcell/backgroundview.md): The view to use as the background of the cell.
- [selectedBackgroundView](uitableviewcell/selectedbackgroundview.md): The view to use as the background for a selected cell.
- [multipleSelectionBackgroundView](uitableviewcell/multipleselectionbackgroundview.md): The background view to use for a selected cell when the table view allows multiple row selections.

### Managing the content

- [defaultContentConfiguration()](uitableviewcell/defaultcontentconfiguration%28%29.md): Retrieves a default list content configuration for the cell’s style.
- [contentConfiguration](uitableviewcell/contentconfiguration-9ktox.md): The current content configuration of the cell.
- [automaticallyUpdatesContentConfiguration](uitableviewcell/automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the cell automatically updates its content configuration when its state changes.
- [contentView](uitableviewcell/contentview.md): The content view of the cell object.

### Managing the state

- [configurationState](uitableviewcell/configurationstate-4xwj0.md): The current configuration state of the cell.
- [setNeedsUpdateConfiguration()](uitableviewcell/setneedsupdateconfiguration%28%29.md): Informs the cell to update its configuration for its current state.
- [updateConfiguration(using:)](uitableviewcell/updateconfiguration%28using_%29.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](uitableviewcell/configurationupdatehandler-974.md): A block for handling updates to the cell’s configuration using the current state.
- [UITableViewCell.ConfigurationUpdateHandler](uitableviewcell/configurationupdatehandler-swift.typealias.md): The type of block for handling updates to the cell’s configuration using the current state.

### Managing accessory views

- [accessoryType](uitableviewcell/accessorytype-swift.property.md): The type of standard accessory view for the cell to use in the table view’s normal state.
- [accessoryView](uitableviewcell/accessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s normal state.
- [editingAccessoryType](uitableviewcell/editingaccessorytype.md): The type of standard accessory view for the cell to use in the table view’s editing state.
- [editingAccessoryView](uitableviewcell/editingaccessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s editing state.
- [UITableViewCell.AccessoryType](uitableviewcell/accessorytype-swift.enum.md): The type of standard accessory control used by a cell.

### Managing cell selection and highlighting

- [selectionStyle](uitableviewcell/selectionstyle-swift.property.md): The style of selection for a cell.
- [UITableViewCell.SelectionStyle](uitableviewcell/selectionstyle-swift.enum.md): The style of selected cells.
- [isSelected](uitableviewcell/isselected.md): A Boolean value that indicates whether the cell is selected.
- [setSelected(\_:animated:)](uitableviewcell/setselected%28__animated_%29.md): Sets the selected state of the cell, optionally animating the transition between states.
- [isHighlighted](uitableviewcell/ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
- [setHighlighted(\_:animated:)](uitableviewcell/sethighlighted%28__animated_%29.md): Sets the highlighted state of the cell, optionally animating the transition between states.

### Editing the cell

- [isEditing](uitableviewcell/isediting.md): A Boolean value that indicates whether the cell is in an editable state.
- [setEditing(\_:animated:)](uitableviewcell/setediting%28__animated_%29.md): Toggles the cell into and out of editing mode.
- [editingStyle](uitableviewcell/editingstyle-swift.property.md): The editing style of the cell.
- [UITableViewCell.EditingStyle](uitableviewcell/editingstyle-swift.enum.md): The editing control used by a cell.
- [showingDeleteConfirmation](uitableviewcell/showingdeleteconfirmation.md): A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.
- [showsReorderControl](uitableviewcell/showsreordercontrol.md): A Boolean value that determines whether the cell shows the reordering control.

### Dragging the row

- [userInteractionEnabledWhileDragging](uitableviewcell/userinteractionenabledwhiledragging.md): A Boolean value indicating whether users can interact with a cell while it is being dragged.
- [dragStateDidChange(\_:)](uitableviewcell/dragstatedidchange%28__%29.md): Notifies the cell that its drag status changed.
- [UITableViewCell.DragState](uitableviewcell/dragstate.md): Constants indicating the current state of a row involved in a drag operation.

### Adjusting to state transitions

- [willTransition(to:)](uitableviewcell/willtransition%28to_%29.md): Notifies the cell that it’s about to transition to a new cell state.
- [didTransition(to:)](uitableviewcell/didtransition%28to_%29.md): Notifies the cell that it transitioned to a new cell state.
- [UITableViewCell.StateMask](uitableviewcell/statemask.md): Constants used to determine the new state of a cell as it transitions between states.

### Managing content indentation

- [indentationLevel](uitableviewcell/indentationlevel.md): The indentation level of the cell’s content.
- [indentationWidth](uitableviewcell/indentationwidth.md): The width for each level of indentation of a cell’s content.
- [shouldIndentWhileEditing](uitableviewcell/shouldindentwhileediting.md): A Boolean value that controls whether the cell background is indented when the table view is in editing mode.
- [separatorInset](uitableviewcell/separatorinset.md): The inset values for the separator line drawn beneath the cell.
- [UITableViewCell.SeparatorStyle](uitableviewcell/separatorstyle.md): The style for cells to use as separators.

### Managing focus

- [focusStyle](uitableviewcell/focusstyle-swift.property.md): The appearance of the cell when focused.
- [UITableViewCell.FocusStyle](uitableviewcell/focusstyle-swift.enum.md): The style of focused cells.

### Deprecated

- [textLabel](uitableviewcell/textlabel.md): Deprecated. The label to use for the main textual content of the table cell.
- [detailTextLabel](uitableviewcell/detailtextlabel.md): Deprecated. The secondary label of the table cell, if one exists.
- [imageView](uitableviewcell/imageview.md): Deprecated. The image view of the table cell.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
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
- [UIDynamicItem](uidynamicitem.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIFocusItem](uifocusitem.md)
- [UIFocusItemContainer](uifocusitemcontainer.md)
- [UIGestureRecognizerDelegate](uigesturerecognizerdelegate.md)
- [UILargeContentViewerItem](uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Cells, headers, and footers

- [Configuring the cells for your table](configuring-the-cells-for-your-table.md): Specify the appearance and content of your table’s rows by defining one or more prototype cells in your storyboard.
- [Creating self-sizing table view cells](creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [Adding headers and footers to table sections](adding-headers-and-footers-to-table-sections.md): Differentiate groups of rows visually by adding header and footer views to your table view’s sections.
- [UITableViewHeaderFooterView](uitableviewheaderfooterview.md): A reusable view that you place at the top or bottom of a table section to display additional information for that section.

# UITableViewCell (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The visual representation of a single row in a table view.

## Declaration

```objectivec
@interface UITableViewCell : UIView
```

## Mentioned In

- [Filling a table with data](filling-a-table-with-data.md)
- [Configuring the cells for your table](configuring-the-cells-for-your-table.md)
- [Adding user-focusable elements to a tvOS app](adding-user-focusable-elements-to-a-tvos-app.md)

<a id="overview"></a>

## Overview

A [UITableViewCell](uitableviewcell.md) object is a specialized type of view that manages the content of a single table row. You use cells primarily to organize and present your app’s custom content, but [UITableViewCell](uitableviewcell.md) provides some specific customizations to support table-related behaviors, including:

- Applying a selection or highlight color to the cell
- Adding standard accessory views, such as a detail or disclosure control
- Putting the cell into an editable state
- Indenting the cell’s content to create a visual hierarchy in your table

Your app’s content occupies most of the cell’s bounds, but the cell may adjust that space to make room for other content. Cells display accessory views on the trailing edge of their content area. When you put your table into edit mode, the cell adds a delete control to the leading edge of its content area, and optionally swaps out an accessory view for a reorder control.

![Illustration showing the area of a cell by itself and with an accessory view and edit control. The content area of a cell shrinks as needed to accommodate the accessory view or edit controls.](https://developer.apple.com/images/com.apple.uikit/media-3113230@2x.png)

Every table view must have at least one type of cell for displaying content, and tables may have multiple cell types to display different types of content. Your table’s data source object handles the creation and configuration of cells immediately before they appear onscreen. For information about how to create your table’s cells, see [Filling a table with data](filling-a-table-with-data.md).

<a id="Configure-your-cells-content"></a>

### Configure your cell’s content

Configure the content and layout of your cells in your storyboard file. Tables have one cell type by default, but you can add more by changing the value in the table’s Prototype Cells attribute. In addition to configuring the cell’s content, make sure you configure the following attributes:

- Identifier. Use this identifier (also known as a reuse identifier) to create the cell.
- Style. Choose one of the standard types or define a custom cell.
- Class. Specify a [UITableViewCell](uitableviewcell.md) subclass with your custom behavior.

To configure the content and appearance of your cell, you can set its [contentConfiguration](uitableviewcell/contentconfiguration-9ktox.md) and [backgroundConfiguration](uitableviewcell/backgroundconfiguration-24e8e.md).

## Topics

### Creating a table view cell

- [initWithStyle:reuseIdentifier:](uitableviewcell/init%28style_reuseidentifier_%29.md): Initializes a table cell with a style and a reuse identifier and returns it to the caller.
- [UITableViewCellStyle](uitableviewcell/cellstyle.md): An enumeration for the various styles of cells.
- [initWithCoder:](uitableviewcell/init%28coder_%29.md): Creates a table view from data in an unarchiver.

### Reusing cells

- [reuseIdentifier](uitableviewcell/reuseidentifier.md): A string for identifying a reusable cell.
- [prepareForReuse](uitableviewcell/prepareforreuse%28%29.md): Prepares a reusable cell for reuse by the table view’s delegate.

### Configuring the background

- [defaultBackgroundConfiguration](uitableviewcell/defaultbackgroundconfiguration.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](uitableviewcell/backgroundconfiguration-93a2v.md): The current background configuration of the cell.
- [automaticallyUpdatesBackgroundConfiguration](uitableviewcell/automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](uitableviewcell/backgroundview.md): The view to use as the background of the cell.
- [selectedBackgroundView](uitableviewcell/selectedbackgroundview.md): The view to use as the background for a selected cell.
- [multipleSelectionBackgroundView](uitableviewcell/multipleselectionbackgroundview.md): The background view to use for a selected cell when the table view allows multiple row selections.

### Managing the content

- [defaultContentConfiguration](uitableviewcell/defaultcontentconfiguration.md): Retrieves a default list content configuration for the cell’s style.
- [contentConfiguration](uitableviewcell/contentconfiguration-2lzvp.md): The current content configuration of the cell.
- [automaticallyUpdatesContentConfiguration](uitableviewcell/automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the cell automatically updates its content configuration when its state changes.
- [contentView](uitableviewcell/contentview.md): The content view of the cell object.

### Managing the state

- [configurationState](uitableviewcell/configurationstate-5gw4n.md): The current configuration state of the cell.
- [setNeedsUpdateConfiguration](uitableviewcell/setneedsupdateconfiguration%28%29.md): Informs the cell to update its configuration for its current state.
- [updateConfigurationUsingState:](uitableviewcell/updateconfigurationusingstate_.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](uitableviewcell/configurationupdatehandler-746ya.md): A block for handling updates to the cell’s configuration using the current state.
- [UITableViewCellConfigurationUpdateHandler](uitableviewcellconfigurationupdatehandler.md): The type of block for handling updates to the cell’s configuration using the current state.

### Managing accessory views

- [accessoryType](uitableviewcell/accessorytype-swift.property.md): The type of standard accessory view for the cell to use in the table view’s normal state.
- [accessoryView](uitableviewcell/accessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s normal state.
- [editingAccessoryType](uitableviewcell/editingaccessorytype.md): The type of standard accessory view for the cell to use in the table view’s editing state.
- [editingAccessoryView](uitableviewcell/editingaccessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s editing state.
- [UITableViewCellAccessoryType](uitableviewcell/accessorytype-swift.enum.md): The type of standard accessory control used by a cell.

### Managing cell selection and highlighting

- [selectionStyle](uitableviewcell/selectionstyle-swift.property.md): The style of selection for a cell.
- [UITableViewCellSelectionStyle](uitableviewcell/selectionstyle-swift.enum.md): The style of selected cells.
- [selected](uitableviewcell/isselected.md): A Boolean value that indicates whether the cell is selected.
- [setSelected:animated:](uitableviewcell/setselected%28__animated_%29.md): Sets the selected state of the cell, optionally animating the transition between states.
- [highlighted](uitableviewcell/ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
- [setHighlighted:animated:](uitableviewcell/sethighlighted%28__animated_%29.md): Sets the highlighted state of the cell, optionally animating the transition between states.

### Editing the cell

- [editing](uitableviewcell/isediting.md): A Boolean value that indicates whether the cell is in an editable state.
- [setEditing:animated:](uitableviewcell/setediting%28__animated_%29.md): Toggles the cell into and out of editing mode.
- [editingStyle](uitableviewcell/editingstyle-swift.property.md): The editing style of the cell.
- [UITableViewCellEditingStyle](uitableviewcell/editingstyle-swift.enum.md): The editing control used by a cell.
- [showingDeleteConfirmation](uitableviewcell/showingdeleteconfirmation.md): A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.
- [showsReorderControl](uitableviewcell/showsreordercontrol.md): A Boolean value that determines whether the cell shows the reordering control.

### Dragging the row

- [userInteractionEnabledWhileDragging](uitableviewcell/userinteractionenabledwhiledragging.md): A Boolean value indicating whether users can interact with a cell while it is being dragged.
- [dragStateDidChange:](uitableviewcell/dragstatedidchange%28__%29.md): Notifies the cell that its drag status changed.
- [UITableViewCellDragState](uitableviewcell/dragstate.md): Constants indicating the current state of a row involved in a drag operation.

### Adjusting to state transitions

- [willTransitionToState:](uitableviewcell/willtransition%28to_%29.md): Notifies the cell that it’s about to transition to a new cell state.
- [didTransitionToState:](uitableviewcell/didtransition%28to_%29.md): Notifies the cell that it transitioned to a new cell state.
- [UITableViewCellStateMask](uitableviewcell/statemask.md): Constants used to determine the new state of a cell as it transitions between states.

### Managing content indentation

- [indentationLevel](uitableviewcell/indentationlevel.md): The indentation level of the cell’s content.
- [indentationWidth](uitableviewcell/indentationwidth.md): The width for each level of indentation of a cell’s content.
- [shouldIndentWhileEditing](uitableviewcell/shouldindentwhileediting.md): A Boolean value that controls whether the cell background is indented when the table view is in editing mode.
- [separatorInset](uitableviewcell/separatorinset.md): The inset values for the separator line drawn beneath the cell.
- [UITableViewCellSeparatorStyle](uitableviewcell/separatorstyle.md): The style for cells to use as separators.

### Managing focus

- [focusStyle](uitableviewcell/focusstyle-swift.property.md): The appearance of the cell when focused.
- [UITableViewCellFocusStyle](uitableviewcell/focusstyle-swift.enum.md): The style of focused cells.

### Deprecated

- [textLabel](uitableviewcell/textlabel.md): Deprecated. The label to use for the main textual content of the table cell.
- [detailTextLabel](uitableviewcell/detailtextlabel.md): Deprecated. The secondary label of the table cell, if one exists.
- [imageView](uitableviewcell/imageview.md): Deprecated. The image view of the table cell.
- [initWithFrame:reuseIdentifier:](uitableviewcell/initwithframe_reuseidentifier_.md): Deprecated. Initializes and returns a table cell object.
- [text](uitableviewcell/text.md): Deprecated. The text of the cell.
- [font](uitableviewcell/font.md): Deprecated. The font of the title.
- [textAlignment](uitableviewcell/textalignment.md): Deprecated. A constant that specifies the alignment of text in the cell.
- [textColor](uitableviewcell/textcolor.md): Deprecated. The color of the title text.
- [selectedTextColor](uitableviewcell/selectedtextcolor.md): Deprecated. The color of the title text when the cell is selected.
- [lineBreakMode](uitableviewcell/linebreakmode.md): Deprecated. The mode for wrapping and truncating text in the cell.
- [image](uitableviewcell/image.md): Deprecated. The image to use as content for the cell.
- [selectedImage](uitableviewcell/selectedimage.md): Deprecated. The image to use a cell content when the cell is selected.
- [hidesAccessoryWhenEditing](uitableviewcell/hidesaccessorywhenediting.md): Deprecated. A Boolean value that determines whether the accessory view is hidden when the cell is being edited.
- [target](uitableviewcell/target.md): Deprecated. The target object to receive action messages.
- [editAction](uitableviewcell/editaction.md): Deprecated. The selector defining the action message to invoke when users tap the insert or delete button.
- [accessoryAction](uitableviewcell/accessoryaction.md): Deprecated. The selector defining the action message to invoke when users tap the accessory view.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [UIGestureRecognizerDelegate](uigesturerecognizerdelegate.md)

## See Also

### Cells, headers, and footers

- [Configuring the cells for your table](configuring-the-cells-for-your-table.md): Specify the appearance and content of your table’s rows by defining one or more prototype cells in your storyboard.
- [Creating self-sizing table view cells](creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [Adding headers and footers to table sections](adding-headers-and-footers-to-table-sections.md): Differentiate groups of rows visually by adding header and footer views to your table view’s sections.
- [UITableViewHeaderFooterView](uitableviewheaderfooterview.md): A reusable view that you place at the top or bottom of a table section to display additional information for that section.
