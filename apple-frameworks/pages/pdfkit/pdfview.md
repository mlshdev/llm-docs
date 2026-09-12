> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview](https://developer.apple.com/documentation/pdfkit/pdfview)

# PDFView (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

An object that encapsulates the functionality of PDF Kit into a single widget that you can add to your application using Interface Builder.

## Declaration

```swift
class PDFView
```

## Mentioned In

- [Adding Custom Graphics to a PDF](adding-custom-graphics-to-a-pdf.md)

<a id="overview"></a>

## Overview

`PDFView` may be the only class you need to deal with for adding PDF functionality to your application. It lets you display PDF data and allows users to select content, navigate through a document, set zoom level, and copy textual content to the Pasteboard. `PDFView` also keeps track of page history.

You can subclass `PDFView` to create a custom PDF viewer.

You can also create a custom PDF viewer by using the PDF Kit utility classes directly and not using `PDFView` at all.

## Topics

### Associating a Document with a View

- [document](pdfview/document.md): Returns the document associated with a `PDFView` object.
- [takePasswordFrom(\_:)](pdfview/takepasswordfrom%28__%29.md): Deprecated. Unlocks with the password from the specified sender.

### Configuring Document View

- [Configurations](configurations.md): Define display modes, scaling, rendering, printing and graphics properties.

### Interacting in a View

- [Document Interactions](document-interactions.md): Handle selections, work with annotation actions, convert page and view points, and work with mouse events in a document.

### Navigating Within a Document

- [currentPage](pdfview/currentpage.md): Returns the current page.
- [currentDestination](pdfview/currentdestination.md): Returns a `PDFDestination` object representing the current page and the current point in the view specified in page space.
- [visiblePages](pdfview/visiblepages.md): Returns an array of `PDFPage` objects that represent the currently visible pages.
- [Navigation](navigation.md): Operations for moving through page history and seeking to a page in a document.

### Setting the Delegate

- [delegate](pdfview/delegate.md): Returns the view’s delegate.
- [PDFViewDelegate](pdfviewdelegate.md): The delegate for the `PDFView` object.

### Instance Properties

- [findInteraction](pdfview/findinteraction.md)
- [isFindInteractionEnabled](pdfview/isfindinteractionenabled.md)
- [isInMarkupMode](pdfview/isinmarkupmode.md)
- [pageOverlayViewProvider](pdfview/pageoverlayviewprovider.md)
- [pageShadowsEnabled](pdfview/pageshadowsenabled.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAnimationDelegate](https://developer.apple.com/documentation/appkit/nsanimationdelegate)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSMenuDelegate](https://developer.apple.com/documentation/appkit/nsmenudelegate)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFindInteractionDelegate](../uikit/uifindinteractiondelegate.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIGestureRecognizerDelegate](../uikit/uigesturerecognizerdelegate.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Views

- [PDFThumbnailView](pdfthumbnailview.md): An object that contains a set of thumbnails, each of which represents a page in a PDF document.

# PDFView (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

An object that encapsulates the functionality of PDF Kit into a single widget that you can add to your application using Interface Builder.

## Declaration

```objectivec
@interface PDFView : UIView
```

```objectivec
@interface PDFView : NSView
```

## Mentioned In

- [Adding Custom Graphics to a PDF](adding-custom-graphics-to-a-pdf.md)

<a id="overview"></a>

## Overview

`PDFView` may be the only class you need to deal with for adding PDF functionality to your application. It lets you display PDF data and allows users to select content, navigate through a document, set zoom level, and copy textual content to the Pasteboard. `PDFView` also keeps track of page history.

You can subclass `PDFView` to create a custom PDF viewer.

You can also create a custom PDF viewer by using the PDF Kit utility classes directly and not using `PDFView` at all.

## Topics

### Associating a Document with a View

- [document](pdfview/document.md): Returns the document associated with a `PDFView` object.
- [takePasswordFrom:](pdfview/takepasswordfrom%28__%29.md): Deprecated. Unlocks with the password from the specified sender.

### Configuring Document View

- [Configurations](configurations.md): Define display modes, scaling, rendering, printing and graphics properties.

### Interacting in a View

- [Document Interactions](document-interactions.md): Handle selections, work with annotation actions, convert page and view points, and work with mouse events in a document.

### Navigating Within a Document

- [currentPage](pdfview/currentpage.md): Returns the current page.
- [currentDestination](pdfview/currentdestination.md): Returns a `PDFDestination` object representing the current page and the current point in the view specified in page space.
- [visiblePages](pdfview/visiblepages.md): Returns an array of `PDFPage` objects that represent the currently visible pages.
- [Navigation](navigation.md): Operations for moving through page history and seeking to a page in a document.

### Setting the Delegate

- [delegate](pdfview/delegate.md): Returns the view’s delegate.
- [PDFViewDelegate](pdfviewdelegate.md): The delegate for the `PDFView` object.

### Notifications

- [PDFViewChangedHistoryNotification](pdfviewchangedhistorynotification.md): A notification posted when the page history changes.
- [PDFViewDocumentChangedNotification](pdfviewdocumentchangednotification.md): A notification posted when a new document is associated with the view.
- [PDFViewPageChangedNotification](pdfviewpagechangednotification.md): A notification posted when a new page becomes the current page.
- [PDFViewScaleChangedNotification](pdfviewscalechangednotification.md): A notification posted when the scale factor changes.
- [PDFViewAnnotationHitNotification](pdfviewannotationhitnotification.md): A notification posted when the user clicks on an annotation.
- [PDFViewCopyPermissionNotification](pdfviewcopypermissionnotification.md): A notification posted when the user attempts to copy to the pasteboard without the appropriate permissions.
- [PDFViewPrintPermissionNotification](pdfviewprintpermissionnotification.md): A notification posted when the user attempts to print without the appropriate permissions.
- [PDFViewAnnotationWillHitNotification](pdfviewannotationwillhitnotification.md): A notification posted before the user clicks an annotation.
- [PDFViewSelectionChangedNotification](pdfviewselectionchangednotification.md): A notification posted when the current selection has changed.
- [PDFViewDisplayModeChangedNotification](pdfviewdisplaymodechangednotification.md): A notification posted when the display mode has changed.
- [PDFViewDisplayBoxChangedNotification](pdfviewdisplayboxchangednotification.md): A notification posted when the display box has changed.
- [PDFViewVisiblePagesChangedNotification](pdfviewvisiblepageschangednotification.md): A notification posted when the visible pages have changed.

### Instance Properties

- [findInteraction](pdfview/findinteraction.md)
- [findInteractionEnabled](pdfview/isfindinteractionenabled.md)
- [inMarkupMode](pdfview/isinmarkupmode.md)
- [pageOverlayViewProvider](pdfview/pageoverlayviewprovider.md)
- [pageShadowsEnabled](pdfview/pageshadowsenabled.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [NSAnimationDelegate](https://developer.apple.com/documentation/appkit/nsanimationdelegate)
- [NSMenuDelegate](https://developer.apple.com/documentation/appkit/nsmenudelegate)
- [UIFindInteractionDelegate](../uikit/uifindinteractiondelegate.md)
- [UIGestureRecognizerDelegate](../uikit/uigesturerecognizerdelegate.md)

## See Also

### Views

- [PDFThumbnailView](pdfthumbnailview.md): An object that contains a set of thumbnails, each of which represents a page in a PDF document.
