> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundextensionview](https://developer.apple.com/documentation/uikit/uibackgroundextensionview)

# UIBackgroundExtensionView (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A view that extends content to fill its own bounds.

## Declaration

```swift
class UIBackgroundExtensionView
```

<a id="overview"></a>

## Overview

A background extension view can be laid out to extend outside the safe area, such as under a sidebar or an inspector. By default, the view lays out its content to stay within the safe area, and uses modifications of the content along the edges to fill the container view.

## Topics

### Instance Properties

- [automaticallyPlacesContentView](uibackgroundextensionview/automaticallyplacescontentview.md): Controls the automatic safe area placement of the `contentView` within the container.
- [contentView](uibackgroundextensionview/contentview.md): The content view to extend to fill the `UIBackgroundExtensionView`.

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

### Interacting with adjacent views

- [UIScrollEdgeElementContainerInteraction](uiscrolledgeelementcontainerinteraction.md): Add this interaction to a container view of views that overlay the edge of a scroll view. Any descendants of this view that should affect the shape of the edge effect, such as labels, images, glass views, and controls, will automatically do so.

# UIBackgroundExtensionView (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A view that extends content to fill its own bounds.

## Declaration

```objectivec
@interface UIBackgroundExtensionView : UIView
```

<a id="overview"></a>

## Overview

A background extension view can be laid out to extend outside the safe area, such as under a sidebar or an inspector. By default, the view lays out its content to stay within the safe area, and uses modifications of the content along the edges to fill the container view.

## Topics

### Instance Properties

- [automaticallyPlacesContentView](uibackgroundextensionview/automaticallyplacescontentview.md): Controls the automatic safe area placement of the `contentView` within the container.
- [contentView](uibackgroundextensionview/contentview.md): The content view to extend to fill the `UIBackgroundExtensionView`.

## Relationships

### Inherits From

- [UIView](uiview.md)

## See Also

### Interacting with adjacent views

- [UIScrollEdgeElementContainerInteraction](uiscrolledgeelementcontainerinteraction.md): Add this interaction to a container view of views that overlay the edge of a scroll view. Any descendants of this view that should affect the shape of the edge effect, such as labels, images, glass views, and controls, will automatically do so.
