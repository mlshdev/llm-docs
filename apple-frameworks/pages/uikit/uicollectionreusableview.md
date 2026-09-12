> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionreusableview](https://developer.apple.com/documentation/uikit/uicollectionreusableview)

# UICollectionReusableView (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view that defines the behavior for all cells and supplementary views presented by a collection view.

## Declaration

```swift
@MainActor class UICollectionReusableView
```

<a id="overview"></a>

## Overview

Reusable views are so named because the collection view places them on a reuse queue rather than deleting them when they’re scrolled out of the visible bounds. Such a view can then be retrieved and repurposed for a different set of content.

<a id="Subclassing-notes"></a>

### Subclassing notes

This class is intended to be subclassed. Most methods defined by this class have minimal or no implementations. You aren’t required to override any of the methods but can do so in cases where you want to respond to changes in the view’s usage or layout.

## Topics

### Reusing cells

- [reuseIdentifier](uicollectionreusableview/reuseidentifier.md): A string that identifies the purpose of the view.
- [prepareForReuse()](uicollectionreusableview/prepareforreuse%28%29.md): Performs any clean up necessary to prepare the view for use again.

### Managing layout changes

- [preferredLayoutAttributesFitting(\_:)](uicollectionreusableview/preferredlayoutattributesfitting%28__%29.md): Gives the cell a chance to modify the attributes provided by the layout object.
- [apply(\_:)](uicollectionreusableview/apply%28__%29.md): Applies the specified layout attributes to the view.
- [willTransition(from:to:)](uicollectionreusableview/willtransition%28from_to_%29.md): Tells your view that the layout object of the collection view is about to change.
- [didTransition(from:to:)](uicollectionreusableview/didtransition%28from_to_%29.md): Tells your view that the layout object of the collection view changed.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Inherited By

- [UICollectionViewCell](uicollectionviewcell.md)

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

- [UICollectionViewCell](uicollectionviewcell.md): A single data item when that item is within the collection view’s visible bounds.
- [UICollectionViewListCell](uicollectionviewlistcell.md): A collection view cell that provides list features and default styling.

# UICollectionReusableView (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view that defines the behavior for all cells and supplementary views presented by a collection view.

## Declaration

```objectivec
@interface UICollectionReusableView : UIView
```

<a id="overview"></a>

## Overview

Reusable views are so named because the collection view places them on a reuse queue rather than deleting them when they’re scrolled out of the visible bounds. Such a view can then be retrieved and repurposed for a different set of content.

<a id="Subclassing-notes"></a>

### Subclassing notes

This class is intended to be subclassed. Most methods defined by this class have minimal or no implementations. You aren’t required to override any of the methods but can do so in cases where you want to respond to changes in the view’s usage or layout.

## Topics

### Reusing cells

- [reuseIdentifier](uicollectionreusableview/reuseidentifier.md): A string that identifies the purpose of the view.
- [prepareForReuse](uicollectionreusableview/prepareforreuse%28%29.md): Performs any clean up necessary to prepare the view for use again.

### Managing layout changes

- [preferredLayoutAttributesFittingAttributes:](uicollectionreusableview/preferredlayoutattributesfitting%28__%29.md): Gives the cell a chance to modify the attributes provided by the layout object.
- [applyLayoutAttributes:](uicollectionreusableview/apply%28__%29.md): Applies the specified layout attributes to the view.
- [willTransitionFromLayout:toLayout:](uicollectionreusableview/willtransition%28from_to_%29.md): Tells your view that the layout object of the collection view is about to change.
- [didTransitionFromLayout:toLayout:](uicollectionreusableview/didtransition%28from_to_%29.md): Tells your view that the layout object of the collection view changed.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Inherited By

- [UICollectionViewCell](uicollectionviewcell.md)

## See Also

### Cells

- [UICollectionViewCell](uicollectionviewcell.md): A single data item when that item is within the collection view’s visible bounds.
- [UICollectionViewListCell](uicollectionviewlistcell.md): A collection view cell that provides list features and default styling.
