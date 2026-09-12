> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipuicollectionreusableview](https://developer.apple.com/documentation/tipkit/tipuicollectionreusableview)

# TipUICollectionReusableView

**Framework:** TipKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A UICollectionReusableView subclass that represents a tip.

## Declaration

```swift
@MainActor @objc @preconcurrency final class TipUICollectionReusableView
```

<a id="overview"></a>

## Overview

You create a tip view by providing a tip and an optional arrow edge. The tip is a type that conforms to the [Tip](tip.md) protocol. The arrow edge is a directional arrow pointing away from the tip.

## Topics

### Initializers

- [init(coder:)](tipuicollectionreusableview/init%28coder_%29.md)
- [init(frame:)](tipuicollectionreusableview/init%28frame_%29.md)

### Instance Properties

- [backgroundStyle](tipuicollectionreusableview/backgroundstyle.md): The background style to use for the tip view.
- [cornerRadius](tipuicollectionreusableview/cornerradius.md): Corner radius for the tip view.
- [imageSize](tipuicollectionreusableview/imagesize.md): Size of the image displayed in the tip view.
- [imageStyle](tipuicollectionreusableview/imagestyle.md): Foreground style for the tip’s image.
- [viewStyle](tipuicollectionreusableview/viewstyle.md): The given style for TipView within the view hierarchy

### Instance Methods

- [configureTip(\_:arrowEdge:actionHandler:)](tipuicollectionreusableview/configuretip%28__arrowedge_actionhandler_%29.md): Configures a reusable view with a tip view embedded.

## Relationships

### Inherits From

- [UICollectionReusableView](../uikit/uicollectionreusableview.md)

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
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### UIKit Views

- [TipUIView](tipuiview.md): A user interface element that represents a tip in UIKit applications.
- [TipUIPopoverViewController](tipuipopoverviewcontroller.md): A view controller that displays a popover tip in UIKit applications.
- [TipUICollectionViewCell](tipuicollectionviewcell.md): A collection view cell that embeds a tip.
