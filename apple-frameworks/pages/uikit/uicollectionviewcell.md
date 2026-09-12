> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcell](https://developer.apple.com/documentation/uikit/uicollectionviewcell)

# UICollectionViewCell (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A single data item when that item is within the collection view’s visible bounds.

## Declaration

```swift
@MainActor class UICollectionViewCell
```

<a id="overview"></a>

## Overview

You can use [UICollectionViewCell](uicollectionviewcell.md) as-is or subclass it to add additional properties and methods. The layout and presentation of cells is managed by the collection view and its corresponding layout object.

To configure the content and appearance of your cell, you can set its [contentConfiguration](uicollectionviewcell/contentconfiguration-13e7k.md) and [backgroundConfiguration](uicollectionviewcell/backgroundconfiguration-rgj4.md). Alternatively, add the views needed to present the data item’s content as subviews to the view in the [contentView](uicollectionviewcell/contentview.md) property. Don’t directly add subviews to the cell itself. The cell manages multiple layers of content, of which the content view is only one. In addition to the content view, the cell manages two background views that display the cell in its selected and unselected states.

You typically don’t create instances of this class yourself. Instead, you register your specific cell subclass (or a nib file containing a configured instance of your class) using a cell registration. When you want a new instance of your cell class, call the [dequeueConfiguredReusableCell(using:for:item:)](uicollectionview/dequeueconfiguredreusablecell%28using_for_item_%29.md) (Swift) or [dequeueConfiguredReusableCellWithRegistration:forIndexPath:item:](uicollectionview/dequeueconfiguredreusablecellwithregistration_forindexpath_item_.md) (Objective-C) method of the collection view object to retrieve one.

## Topics

### Configuring the background

- [defaultBackgroundConfiguration()](uicollectionviewcell/defaultbackgroundconfiguration%28%29.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](uicollectionviewcell/backgroundconfiguration-rgj4.md): The current background configuration of the cell.
- [automaticallyUpdatesBackgroundConfiguration](uicollectionviewcell/automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](uicollectionviewcell/backgroundview.md): The view that displays behind the cell’s other content.
- [selectedBackgroundView](uicollectionviewcell/selectedbackgroundview.md): The view that displays just above the background view for a selected cell.

### Managing the content

- [contentConfiguration](uicollectionviewcell/contentconfiguration-13e7k.md): The current content configuration of the cell.
- [automaticallyUpdatesContentConfiguration](uicollectionviewcell/automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the cell automatically updates its content configuration when its state changes.
- [contentView](uicollectionviewcell/contentview.md): The main view that you add your cell’s custom content to.

### Managing the state

- [configurationState](uicollectionviewcell/configurationstate-4u37h.md): The current configuration state of the cell.
- [setNeedsUpdateConfiguration()](uicollectionviewcell/setneedsupdateconfiguration%28%29.md): Informs the cell to update its configuration for its current state.
- [updateConfiguration(using:)](uicollectionviewcell/updateconfiguration%28using_%29.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](uicollectionviewcell/configurationupdatehandler-7rqbu.md): A block for handling updates to the cell’s configuration using the current state.
- [UICollectionViewCell.ConfigurationUpdateHandler](uicollectionviewcell/configurationupdatehandler-swift.typealias.md): The type of block for handling updates to the cell’s configuration using the current state.
- [isSelected](uicollectionviewcell/isselected.md): The selection state of the cell.
- [isHighlighted](uicollectionviewcell/ishighlighted.md): The highlight state of the cell.

### Managing drag state changes

- [dragStateDidChange(\_:)](uicollectionviewcell/dragstatedidchange%28__%29.md): Called when the drag state of the cell changes.
- [UICollectionViewCell.DragState](uicollectionviewcell/dragstate.md): Constants indicating the current state of the drag operation.

## Relationships

### Inherits From

- [UICollectionReusableView](uicollectionreusableview.md)

### Inherited By

- [UICollectionViewListCell](uicollectionviewlistcell.md)

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

### Cells

- [UICollectionViewListCell](uicollectionviewlistcell.md): A collection view cell that provides list features and default styling.
- [UICollectionReusableView](uicollectionreusableview.md): A view that defines the behavior for all cells and supplementary views presented by a collection view.

# UICollectionViewCell (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A single data item when that item is within the collection view’s visible bounds.

## Declaration

```objectivec
@interface UICollectionViewCell : UICollectionReusableView
```

<a id="overview"></a>

## Overview

You can use [UICollectionViewCell](uicollectionviewcell.md) as-is or subclass it to add additional properties and methods. The layout and presentation of cells is managed by the collection view and its corresponding layout object.

To configure the content and appearance of your cell, you can set its [contentConfiguration](uicollectionviewcell/contentconfiguration-13e7k.md) and [backgroundConfiguration](uicollectionviewcell/backgroundconfiguration-rgj4.md). Alternatively, add the views needed to present the data item’s content as subviews to the view in the [contentView](uicollectionviewcell/contentview.md) property. Don’t directly add subviews to the cell itself. The cell manages multiple layers of content, of which the content view is only one. In addition to the content view, the cell manages two background views that display the cell in its selected and unselected states.

You typically don’t create instances of this class yourself. Instead, you register your specific cell subclass (or a nib file containing a configured instance of your class) using a cell registration. When you want a new instance of your cell class, call the [dequeueConfiguredReusableCell(using:for:item:)](uicollectionview/dequeueconfiguredreusablecell%28using_for_item_%29.md) (Swift) or [dequeueConfiguredReusableCellWithRegistration:forIndexPath:item:](uicollectionview/dequeueconfiguredreusablecellwithregistration_forindexpath_item_.md) (Objective-C) method of the collection view object to retrieve one.

## Topics

### Configuring the background

- [defaultBackgroundConfiguration](uicollectionviewcell/defaultbackgroundconfiguration.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](uicollectionviewcell/backgroundconfiguration-39dc0.md): The current background configuration of the cell.
- [automaticallyUpdatesBackgroundConfiguration](uicollectionviewcell/automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](uicollectionviewcell/backgroundview.md): The view that displays behind the cell’s other content.
- [selectedBackgroundView](uicollectionviewcell/selectedbackgroundview.md): The view that displays just above the background view for a selected cell.

### Managing the content

- [contentConfiguration](uicollectionviewcell/contentconfiguration-1lcqh.md): The current content configuration of the cell.
- [automaticallyUpdatesContentConfiguration](uicollectionviewcell/automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the cell automatically updates its content configuration when its state changes.
- [contentView](uicollectionviewcell/contentview.md): The main view that you add your cell’s custom content to.

### Managing the state

- [configurationState](uicollectionviewcell/configurationstate-4269k.md): The current configuration state of the cell.
- [setNeedsUpdateConfiguration](uicollectionviewcell/setneedsupdateconfiguration%28%29.md): Informs the cell to update its configuration for its current state.
- [updateConfigurationUsingState:](uicollectionviewcell/updateconfigurationusingstate_.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](uicollectionviewcell/configurationupdatehandler-ajhn.md): A block for handling updates to the cell’s configuration using the current state.
- [UICollectionViewCellConfigurationUpdateHandler](uicollectionviewcellconfigurationupdatehandler.md): The type of block for handling updates to the cell’s configuration using the current state.
- [selected](uicollectionviewcell/isselected.md): The selection state of the cell.
- [highlighted](uicollectionviewcell/ishighlighted.md): The highlight state of the cell.

### Managing drag state changes

- [dragStateDidChange:](uicollectionviewcell/dragstatedidchange%28__%29.md): Called when the drag state of the cell changes.
- [UICollectionViewCellDragState](uicollectionviewcell/dragstate.md): Constants indicating the current state of the drag operation.

## Relationships

### Inherits From

- [UICollectionReusableView](uicollectionreusableview.md)

### Inherited By

- [UICollectionViewListCell](uicollectionviewlistcell.md)

## See Also

### Cells

- [UICollectionViewListCell](uicollectionviewlistcell.md): A collection view cell that provides list features and default styling.
- [UICollectionReusableView](uicollectionreusableview.md): A view that defines the behavior for all cells and supplementary views presented by a collection view.
