> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview)

# UITableViewHeaderFooterView (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A reusable view that you place at the top or bottom of a table section to display additional information for that section.

## Declaration

```swift
@MainActor class UITableViewHeaderFooterView
```

## Mentioned In

- [Adding headers and footers to table sections](adding-headers-and-footers-to-table-sections.md)

<a id="overview"></a>

## Overview

Use [UITableViewHeaderFooterView](uitableviewheaderfooterview.md) objects to manage the header and footer content of your table’s sections efficiently. A header-footer view is a reusable view that you can subclass or use as is. To configure the content and appearance of a header-footer view, you can set its [contentConfiguration](uitableviewheaderfooterview/contentconfiguration-6b4eg.md) and [backgroundConfiguration](uitableviewheaderfooterview/backgroundconfiguration-52wng.md).

To promote the reuse of your header-footer views, register them by calling the [register(\_:forHeaderFooterViewReuseIdentifier:)](uitableview/register%28__forheaderfooterviewreuseidentifier_%29-20ybb.md) or [register(\_:forHeaderFooterViewReuseIdentifier:)](uitableview/register%28__forheaderfooterviewreuseidentifier_%29-1rgvc.md) method of the table view. In the [tableView(\_:viewForHeaderInSection:)](uitableviewdelegate/tableview%28__viewforheaderinsection_%29.md) or [tableView(\_:viewForFooterInSection:)](uitableviewdelegate/tableview%28__viewforfooterinsection_%29.md) method of your delegate object, call the table view’s [dequeueReusableHeaderFooterView(withIdentifier:)](uitableview/dequeuereusableheaderfooterview%28withidentifier_%29.md) method to create your view. That method returns a recycled view (if one is available) or creates a new view using the information you registered.

A simple alternative to creating custom header-footer views is to implement the [tableView(\_:titleForHeaderInSection:)](uitableviewdatasource/tableview%28__titleforheaderinsection_%29.md) and [tableView(\_:titleForFooterInSection:)](uitableviewdatasource/tableview%28__titleforfooterinsection_%29.md) methods of your data source object. When you implement those methods, the table view creates a standard header or footer view and displays the text you supply.

## Topics

### Creating the view

- [init(reuseIdentifier:)](uitableviewheaderfooterview/init%28reuseidentifier_%29.md): Initializes a header-footer view with the specified reuse identifier.
- [init(coder:)](uitableviewheaderfooterview/init%28coder_%29.md): Creates a header-footer view from data in an unarchiver.

### Managing view reuse

- [reuseIdentifier](uitableviewheaderfooterview/reuseidentifier.md): A string used to identify a reusable header or footer.
- [prepareForReuse()](uitableviewheaderfooterview/prepareforreuse%28%29.md): Prepares a reusable header or footer view for reuse by the table.

### Configuring the background

- [defaultBackgroundConfiguration()](uitableviewheaderfooterview/defaultbackgroundconfiguration%28%29.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](uitableviewheaderfooterview/backgroundconfiguration-52wng.md): The current background configuration of the view.
- [automaticallyUpdatesBackgroundConfiguration](uitableviewheaderfooterview/automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the view automatically updates its background configuration when its state changes.
- [backgroundView](uitableviewheaderfooterview/backgroundview.md): The background view of the header or footer.

### Managing the content

- [defaultContentConfiguration()](uitableviewheaderfooterview/defaultcontentconfiguration%28%29.md): Retrieves a default list content configuration for the view’s style.
- [contentConfiguration](uitableviewheaderfooterview/contentconfiguration-6b4eg.md): The current content configuration of the view.
- [automaticallyUpdatesContentConfiguration](uitableviewheaderfooterview/automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the view automatically updates its content configuration when its state changes.
- [contentView](uitableviewheaderfooterview/contentview.md): The content view of the header or footer.

### Managing the state

- [configurationState](uitableviewheaderfooterview/configurationstate-7xj7r.md): The current configuration state of the view.
- [setNeedsUpdateConfiguration()](uitableviewheaderfooterview/setneedsupdateconfiguration%28%29.md): Informs the view to update its configuration for its current state.
- [updateConfiguration(using:)](uitableviewheaderfooterview/updateconfiguration%28using_%29.md): Updates the view’s configuration using the current state.
- [configurationUpdateHandler](uitableviewheaderfooterview/configurationupdatehandler-49slo.md): A block for handling updates to the view’s configuration using the current state.
- [UITableViewHeaderFooterView.ConfigurationUpdateHandler](uitableviewheaderfooterview/configurationupdatehandler-swift.typealias.md): The type of block for handling updates to the view’s configuration using the current state.

### Deprecated

- [textLabel](uitableviewheaderfooterview/textlabel.md): Deprecated. A primary text label for the view.
- [detailTextLabel](uitableviewheaderfooterview/detailtextlabel.md): Deprecated. A detail text label for the view.

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
- [UITableViewCell](uitableviewcell.md): The visual representation of a single row in a table view.

# UITableViewHeaderFooterView (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A reusable view that you place at the top or bottom of a table section to display additional information for that section.

## Declaration

```objectivec
@interface UITableViewHeaderFooterView : UIView
```

## Mentioned In

- [Adding headers and footers to table sections](adding-headers-and-footers-to-table-sections.md)

<a id="overview"></a>

## Overview

Use [UITableViewHeaderFooterView](uitableviewheaderfooterview.md) objects to manage the header and footer content of your table’s sections efficiently. A header-footer view is a reusable view that you can subclass or use as is. To configure the content and appearance of a header-footer view, you can set its [contentConfiguration](uitableviewheaderfooterview/contentconfiguration-6b4eg.md) and [backgroundConfiguration](uitableviewheaderfooterview/backgroundconfiguration-52wng.md).

To promote the reuse of your header-footer views, register them by calling the [registerClass:forHeaderFooterViewReuseIdentifier:](uitableview/register%28__forheaderfooterviewreuseidentifier_%29-20ybb.md) or [registerNib:forHeaderFooterViewReuseIdentifier:](uitableview/register%28__forheaderfooterviewreuseidentifier_%29-1rgvc.md) method of the table view. In the [tableView:viewForHeaderInSection:](uitableviewdelegate/tableview%28__viewforheaderinsection_%29.md) or [tableView:viewForFooterInSection:](uitableviewdelegate/tableview%28__viewforfooterinsection_%29.md) method of your delegate object, call the table view’s [dequeueReusableHeaderFooterViewWithIdentifier:](uitableview/dequeuereusableheaderfooterview%28withidentifier_%29.md) method to create your view. That method returns a recycled view (if one is available) or creates a new view using the information you registered.

A simple alternative to creating custom header-footer views is to implement the [tableView:titleForHeaderInSection:](uitableviewdatasource/tableview%28__titleforheaderinsection_%29.md) and [tableView:titleForFooterInSection:](uitableviewdatasource/tableview%28__titleforfooterinsection_%29.md) methods of your data source object. When you implement those methods, the table view creates a standard header or footer view and displays the text you supply.

## Topics

### Creating the view

- [initWithReuseIdentifier:](uitableviewheaderfooterview/init%28reuseidentifier_%29.md): Initializes a header-footer view with the specified reuse identifier.
- [initWithCoder:](uitableviewheaderfooterview/init%28coder_%29.md): Creates a header-footer view from data in an unarchiver.

### Managing view reuse

- [reuseIdentifier](uitableviewheaderfooterview/reuseidentifier.md): A string used to identify a reusable header or footer.
- [prepareForReuse](uitableviewheaderfooterview/prepareforreuse%28%29.md): Prepares a reusable header or footer view for reuse by the table.

### Configuring the background

- [defaultBackgroundConfiguration](uitableviewheaderfooterview/defaultbackgroundconfiguration.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](uitableviewheaderfooterview/backgroundconfiguration-2o8ke.md): The current background configuration of the view.
- [automaticallyUpdatesBackgroundConfiguration](uitableviewheaderfooterview/automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the view automatically updates its background configuration when its state changes.
- [backgroundView](uitableviewheaderfooterview/backgroundview.md): The background view of the header or footer.

### Managing the content

- [defaultContentConfiguration](uitableviewheaderfooterview/defaultcontentconfiguration.md): Retrieves a default list content configuration for the view’s style.
- [contentConfiguration](uitableviewheaderfooterview/contentconfiguration-r49e.md): The current content configuration of the view.
- [automaticallyUpdatesContentConfiguration](uitableviewheaderfooterview/automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the view automatically updates its content configuration when its state changes.
- [contentView](uitableviewheaderfooterview/contentview.md): The content view of the header or footer.

### Managing the state

- [configurationState](uitableviewheaderfooterview/configurationstate-9l60r.md): The current configuration state of the view.
- [setNeedsUpdateConfiguration](uitableviewheaderfooterview/setneedsupdateconfiguration%28%29.md): Informs the view to update its configuration for its current state.
- [updateConfigurationUsingState:](uitableviewheaderfooterview/updateconfigurationusingstate_.md): Updates the view’s configuration using the current state.
- [configurationUpdateHandler](uitableviewheaderfooterview/configurationupdatehandler-3oji2.md): A block for handling updates to the view’s configuration using the current state.
- [UITableViewHeaderFooterViewConfigurationUpdateHandler](uitableviewheaderfooterviewconfigurationupdatehandler.md): The type of block for handling updates to the view’s configuration using the current state.

### Deprecated

- [textLabel](uitableviewheaderfooterview/textlabel.md): Deprecated. A primary text label for the view.
- [detailTextLabel](uitableviewheaderfooterview/detailtextlabel.md): Deprecated. A detail text label for the view.

## Relationships

### Inherits From

- [UIView](uiview.md)

## See Also

### Cells, headers, and footers

- [Configuring the cells for your table](configuring-the-cells-for-your-table.md): Specify the appearance and content of your table’s rows by defining one or more prototype cells in your storyboard.
- [Creating self-sizing table view cells](creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [Adding headers and footers to table sections](adding-headers-and-footers-to-table-sections.md): Differentiate groups of rows visually by adding header and footer views to your table view’s sections.
- [UITableViewCell](uitableviewcell.md): The visual representation of a single row in a table view.
