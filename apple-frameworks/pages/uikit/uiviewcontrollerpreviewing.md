> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerpreviewing](https://developer.apple.com/documentation/uikit/uiviewcontrollerpreviewing)

# UIViewControllerPreviewing (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that define the interface for configuring a previewing view controller on devices that support 3D Touch.

> Use [UIContextMenuInteraction](uicontextmenuinteraction.md) instead.

## Declaration

```swift
@MainActor protocol UIViewControllerPreviewing : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The system returns a context object conforming to this protocol when you call a view controller’s [registerForPreviewing(with:sourceView:)](uiviewcontroller/registerforpreviewing%28with_sourceview_%29.md) method. This method registers the view controller to participate in 3D Touch preview (peek) and commit (pop) behaviors.

> **Terminology Note**

>  The end-user terminology for the views presented during the phases of force-based touches includes *peek* and *pop*. For clarity here, and to align with the API names, this document uses the corresponding terms *preview* and *commit view*.

To learn about 3D Touch, read [Adopting 3D Touch on iPhone](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/index.html#//apple_ref/doc/uid/TP40016543).

> **Important**

>  Don’t adopt this protocol in custom classes.

## Topics

### Configuring a source view for a 3D Touch previewing view controller

- [sourceRect](uiviewcontrollerpreviewing/sourcerect.md): Deprecated. The rectangle, in the source view’s coordinate system, that responds to a 3D Touch by a user and remains visually sharp while surrounding content blurs.
- [previewingGestureRecognizerForFailureRelationship](uiviewcontrollerpreviewing/previewinggesturerecognizerforfailurerelationship.md): Deprecated. A gesture recognizer suitable for setting up failure requirements for a preview’s (peek’s) gestures.

### Accessing properties of a 3D Touch previewing view controller

- [delegate](uiviewcontrollerpreviewing/delegate.md): Deprecated. The previewing view controller’s delegate for managing preview (peek) and commit (pop) view controllers.
- [sourceView](uiviewcontrollerpreviewing/sourceview.md): Deprecated. A source view, in a previewing view controller’s view hierarchy, responds to a 3D Touch by the user.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [UIActionSheetDelegate](uiactionsheetdelegate.md): Deprecated. The interface for the delegate of an action sheet object.
- [UIAlertViewDelegate](uialertviewdelegate.md): Deprecated. The interface for the delegate of an alert view object.
- [UIPopoverControllerDelegate](uipopovercontrollerdelegate.md): Deprecated. The interface for the delegate of a popover controller object.
- [UISearchDisplayDelegate](uisearchdisplaydelegate.md): Deprecated. The interface for the delegate of a search display controller.
- [UIViewControllerPreviewingDelegate](uiviewcontrollerpreviewingdelegate.md): Deprecated. A set of methods used by the delegate to respond, with a preview view controller and a commit view controller, to the user pressing a view object on the screen of a device that supports 3D Touch.

# UIViewControllerPreviewing (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that define the interface for configuring a previewing view controller on devices that support 3D Touch.

> Use [UIContextMenuInteraction](uicontextmenuinteraction.md) instead.

## Declaration

```objectivec
@protocol UIViewControllerPreviewing <NSObject>
```

<a id="overview"></a>

## Overview

The system returns a context object conforming to this protocol when you call a view controller’s [registerForPreviewingWithDelegate:sourceView:](uiviewcontroller/registerforpreviewing%28with_sourceview_%29.md) method. This method registers the view controller to participate in 3D Touch preview (peek) and commit (pop) behaviors.

> **Terminology Note**

>  The end-user terminology for the views presented during the phases of force-based touches includes *peek* and *pop*. For clarity here, and to align with the API names, this document uses the corresponding terms *preview* and *commit view*.

To learn about 3D Touch, read [Adopting 3D Touch on iPhone](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/index.html#//apple_ref/doc/uid/TP40016543).

> **Important**

>  Don’t adopt this protocol in custom classes.

## Topics

### Configuring a source view for a 3D Touch previewing view controller

- [sourceRect](uiviewcontrollerpreviewing/sourcerect.md): Deprecated. The rectangle, in the source view’s coordinate system, that responds to a 3D Touch by a user and remains visually sharp while surrounding content blurs.
- [previewingGestureRecognizerForFailureRelationship](uiviewcontrollerpreviewing/previewinggesturerecognizerforfailurerelationship.md): Deprecated. A gesture recognizer suitable for setting up failure requirements for a preview’s (peek’s) gestures.

### Accessing properties of a 3D Touch previewing view controller

- [delegate](uiviewcontrollerpreviewing/delegate.md): Deprecated. The previewing view controller’s delegate for managing preview (peek) and commit (pop) view controllers.
- [sourceView](uiviewcontrollerpreviewing/sourceview.md): Deprecated. A source view, in a previewing view controller’s view hierarchy, responds to a 3D Touch by the user.

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
- [UIViewControllerPreviewingDelegate](uiviewcontrollerpreviewingdelegate.md): Deprecated. A set of methods used by the delegate to respond, with a preview view controller and a commit view controller, to the user pressing a view object on the screen of a device that supports 3D Touch.
