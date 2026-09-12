> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerpreviewingdelegate](https://developer.apple.com/documentation/uikit/uiviewcontrollerpreviewingdelegate)

# UIViewControllerPreviewingDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A set of methods used by the delegate to respond, with a preview view controller and a commit view controller, to the user pressing a view object on the screen of a device that supports 3D Touch.

> Use [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md) instead.

## Declaration

```swift
@MainActor protocol UIViewControllerPreviewingDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

To learn about 3D Touch, read [Adopting 3D Touch on iPhone](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/index.html#//apple_ref/doc/uid/TP40016543).

> **Terminology Note**

>  The end-user terminology for the views presented during the phases of force-based touches includes *peek* and *pop*. For clarity here, and to align with the API names, this document uses the corresponding terms *preview* and *commit view*.

## Topics

### Providing preview and commit views for 3D Touch

- [previewingContext(\_:viewControllerForLocation:)](uiviewcontrollerpreviewingdelegate/previewingcontext%28__viewcontrollerforlocation_%29.md): Deprecated. Called when the user has pressed a source view in a previewing view controller, thereby obtaining a surrounding blur to indicate that a preview (peek) is available.
- [previewingContext(\_:commit:)](uiviewcontrollerpreviewingdelegate/previewingcontext%28__commit_%29.md): Deprecated. Called to let you prepare the presentation of a commit (pop) view from your commit view controller.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [UIActionSheetDelegate](uiactionsheetdelegate.md): Deprecated. The interface for the delegate of an action sheet object.
- [UIAlertViewDelegate](uialertviewdelegate.md): Deprecated. The interface for the delegate of an alert view object.
- [UIPopoverControllerDelegate](uipopovercontrollerdelegate.md): Deprecated. The interface for the delegate of a popover controller object.
- [UISearchDisplayDelegate](uisearchdisplaydelegate.md): Deprecated. The interface for the delegate of a search display controller.
- [UIViewControllerPreviewing](uiviewcontrollerpreviewing.md): Deprecated. A set of methods that define the interface for configuring a previewing view controller on devices that support 3D Touch.

# UIViewControllerPreviewingDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A set of methods used by the delegate to respond, with a preview view controller and a commit view controller, to the user pressing a view object on the screen of a device that supports 3D Touch.

> Use [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md) instead.

## Declaration

```objectivec
@protocol UIViewControllerPreviewingDelegate <NSObject>
```

<a id="overview"></a>

## Overview

To learn about 3D Touch, read [Adopting 3D Touch on iPhone](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/index.html#//apple_ref/doc/uid/TP40016543).

> **Terminology Note**

>  The end-user terminology for the views presented during the phases of force-based touches includes *peek* and *pop*. For clarity here, and to align with the API names, this document uses the corresponding terms *preview* and *commit view*.

## Topics

### Providing preview and commit views for 3D Touch

- [previewingContext:viewControllerForLocation:](uiviewcontrollerpreviewingdelegate/previewingcontext%28__viewcontrollerforlocation_%29.md): Deprecated. Called when the user has pressed a source view in a previewing view controller, thereby obtaining a surrounding blur to indicate that a preview (peek) is available.
- [previewingContext:commitViewController:](uiviewcontrollerpreviewingdelegate/previewingcontext%28__commit_%29.md): Deprecated. Called to let you prepare the presentation of a commit (pop) view from your commit view controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [UIAccelerometerDelegate](uiaccelerometerdelegate.md): Deprecated. The interface for receiving acceleration-related data from the system.
- [UIActionSheetDelegate](uiactionsheetdelegate.md): Deprecated. The interface for the delegate of an action sheet object.
- [UIAlertViewDelegate](uialertviewdelegate.md): Deprecated. The interface for the delegate of an alert view object.
- [UIPopoverControllerDelegate](uipopovercontrollerdelegate.md): Deprecated. The interface for the delegate of a popover controller object.
- [UISearchDisplayDelegate](uisearchdisplaydelegate.md): Deprecated. The interface for the delegate of a search display controller.
- [UIViewControllerPreviewing](uiviewcontrollerpreviewing.md): Deprecated. A set of methods that define the interface for configuring a previewing view controller on devices that support 3D Touch.
