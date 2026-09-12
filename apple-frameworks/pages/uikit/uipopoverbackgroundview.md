> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverbackgroundview](https://developer.apple.com/documentation/uikit/uipopoverbackgroundview)

# UIPopoverBackgroundView (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The background appearance for a popover.

## Declaration

```swift
class UIPopoverBackgroundView
```

<a id="overview"></a>

## Overview

This class must be subclassed before it can be used. The implementation of your subclass is responsible for providing the border decoration and arrow for the popover. Subclasses must override all declared properties and methods to provide information about where to lay out the corresponding popover content and arrow. Subclasses must also provide implementations for all methods of the [UIPopoverBackgroundViewMethods](uipopoverbackgroundviewmethods.md) protocol.

<a id="Subclassing-notes"></a>

### Subclassing notes

Your subclass is responsible for providing the background visual styling of the popover, which includes the arrow and appropriately styled border. The popover controller places the actual popover content on top of your background view to finish the popover’s presentation.

The background contents of your view should be based on stretchable images. Because the popover is animated into place (and may require animated transitions), using images is the only way to ensure that the animations are smooth and not jittery. By creating images that can be stretched at appropriate places, your popover can still be resized and adjusted as needed. You can then incorporate those images using [UIImageView](uiimageview.md) subviews or Core Animation layers. When the size of the popover changes (perhaps to accommodate the keyboard), all you have to do is adjust the frame rectangles of your embedded image views.

> **Note**

>  The images you use for your popover background view shouldn’t contain any shadow effects. The popover controller adds a shadow to the popover for you.

In addition to providing the background content, your subclass must implement the [arrowOffset](uipopoverbackgroundview/arrowoffset.md) and [arrowDirection](uipopoverbackgroundview/arrowdirection.md) properties and the methods in the [UIPopoverBackgroundViewMethods](uipopoverbackgroundviewmethods.md) protocol. The popover controller uses these methods and properties to get and set information related to your background view. The protocol methods are called once and the values you return should never change. However, the values in the [arrowOffset](uipopoverbackgroundview/arrowoffset.md) and [arrowDirection](uipopoverbackgroundview/arrowdirection.md) properties can change while your popover is on the screen, so your setter methods should call [setNeedsLayout()](uiview/setneedslayout%28%29.md) when that happens to update the background image views or layers.

To create a stretchable image, use the [resizableImage(withCapInsets:)](uiimage/resizableimage%28withcapinsets_%29.md) method of [UIImage](uiimage.md).

## Topics

### Accessing the arrow metrics

- [arrowOffset](uipopoverbackgroundview/arrowoffset.md): The distance (measured in points) from the center of the view to the center line of the arrow.
- [arrowDirection](uipopoverbackgroundview/arrowdirection.md): The direction in which the popover arrow is pointing.

### Controlling the popover appearance

- [wantsDefaultContentAppearance](uipopoverbackgroundview/wantsdefaultcontentappearance.md): Deprecated. Determines whether the default content appearance should be used for the popover.

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
- [UIPopoverBackgroundViewMethods](uipopoverbackgroundviewmethods.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Popovers

- [Displaying transient content in a popover](displaying-transient-content-in-a-popover.md): Show a temporary interface on top of your app’s content on iPad.
- [UIPopoverPresentationController](uipopoverpresentationcontroller.md): An object that manages the display of content in a popover.
- [UIPopoverBackgroundViewMethods](uipopoverbackgroundviewmethods.md): A set of methods that popover background view subclasses must implement.

# UIPopoverBackgroundView (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The background appearance for a popover.

## Declaration

```objectivec
@interface UIPopoverBackgroundView : UIView
```

<a id="overview"></a>

## Overview

This class must be subclassed before it can be used. The implementation of your subclass is responsible for providing the border decoration and arrow for the popover. Subclasses must override all declared properties and methods to provide information about where to lay out the corresponding popover content and arrow. Subclasses must also provide implementations for all methods of the [UIPopoverBackgroundViewMethods](uipopoverbackgroundviewmethods.md) protocol.

<a id="Subclassing-notes"></a>

### Subclassing notes

Your subclass is responsible for providing the background visual styling of the popover, which includes the arrow and appropriately styled border. The popover controller places the actual popover content on top of your background view to finish the popover’s presentation.

The background contents of your view should be based on stretchable images. Because the popover is animated into place (and may require animated transitions), using images is the only way to ensure that the animations are smooth and not jittery. By creating images that can be stretched at appropriate places, your popover can still be resized and adjusted as needed. You can then incorporate those images using [UIImageView](uiimageview.md) subviews or Core Animation layers. When the size of the popover changes (perhaps to accommodate the keyboard), all you have to do is adjust the frame rectangles of your embedded image views.

> **Note**

>  The images you use for your popover background view shouldn’t contain any shadow effects. The popover controller adds a shadow to the popover for you.

In addition to providing the background content, your subclass must implement the [arrowOffset](uipopoverbackgroundview/arrowoffset.md) and [arrowDirection](uipopoverbackgroundview/arrowdirection.md) properties and the methods in the [UIPopoverBackgroundViewMethods](uipopoverbackgroundviewmethods.md) protocol. The popover controller uses these methods and properties to get and set information related to your background view. The protocol methods are called once and the values you return should never change. However, the values in the [arrowOffset](uipopoverbackgroundview/arrowoffset.md) and [arrowDirection](uipopoverbackgroundview/arrowdirection.md) properties can change while your popover is on the screen, so your setter methods should call [setNeedsLayout](uiview/setneedslayout%28%29.md) when that happens to update the background image views or layers.

To create a stretchable image, use the [resizableImageWithCapInsets:](uiimage/resizableimage%28withcapinsets_%29.md) method of [UIImage](uiimage.md).

## Topics

### Accessing the arrow metrics

- [arrowOffset](uipopoverbackgroundview/arrowoffset.md): The distance (measured in points) from the center of the view to the center line of the arrow.
- [arrowDirection](uipopoverbackgroundview/arrowdirection.md): The direction in which the popover arrow is pointing.

### Controlling the popover appearance

- [wantsDefaultContentAppearance](uipopoverbackgroundview/wantsdefaultcontentappearance.md): Deprecated. Determines whether the default content appearance should be used for the popover.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [UIPopoverBackgroundViewMethods](uipopoverbackgroundviewmethods.md)

## See Also

### Popovers

- [Displaying transient content in a popover](displaying-transient-content-in-a-popover.md): Show a temporary interface on top of your app’s content on iPad.
- [UIPopoverPresentationController](uipopoverpresentationcontroller.md): An object that manages the display of content in a popover.
- [UIPopoverBackgroundViewMethods](uipopoverbackgroundviewmethods.md): A set of methods that popover background view subclasses must implement.
