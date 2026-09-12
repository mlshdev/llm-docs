> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate)

# ImageAnalysisOverlayViewDelegate

**Framework:** VisionKit  
**Kind:** Protocol  
**Availability:** macOS 13.0+

A delegate that handles image-analysis and user-interaction callbacks for an overlay view.

## Declaration

```swift
@MainActor protocol ImageAnalysisOverlayViewDelegate : AnyObject
```

## Mentioned In

- [Enabling Live Text interactions with images](enabling-live-text-interactions-with-images.md)

<a id="overview"></a>

## Overview

The delegate of an [ImageAnalysisOverlayView](imageanalysisoverlayview.md) object implements this protocol to provide interface details and to customize the response for a person’s interaction.

## Topics

### Providing interface details

- [contentView(for:)](imageanalysisoverlayviewdelegate/contentview%28for_%29.md): Provides the view that contains the image.
- [contentsRect(for:)](imageanalysisoverlayviewdelegate/contentsrect%28for_%29.md): Returns the rectangle, in unit coordinate space, that contains the image within the view.

### Starting the interaction

- [overlayView(\_:shouldBeginAt:forAnalysisType:)](imageanalysisoverlayviewdelegate/overlayview%28__shouldbeginat_foranalysistype_%29.md): Provides a Boolean value that indicates whether the interaction can begin at the given point.

### Tracking interface changes

- [overlayView(\_:liveTextButtonDidChangeToVisible:)](imageanalysisoverlayviewdelegate/overlayview%28__livetextbuttondidchangetovisible_%29.md): Notifies your app when the Live Text button’s visibility changes.
- [overlayView(\_:highlightSelectedItemsDidChange:)](imageanalysisoverlayviewdelegate/overlayview%28__highlightselecteditemsdidchange_%29.md): Notifies your app when recognized items in the image appear highlighted as a result of a person clicking or tapping the Live Text button.
- [textSelectionDidChange(\_:)](imageanalysisoverlayviewdelegate/textselectiondidchange%28__%29.md): Notifies your app when the interaction’s text selection changes.

### Responding to key and menu events

- [overlayView(\_:shouldHandleKeyDownEvent:)](imageanalysisoverlayviewdelegate/overlayview%28__shouldhandlekeydownevent_%29.md): Returns a Boolean value that indicates whether the overlay view consumes the given key-down event.
- [overlayView(\_:shouldShowMenuForEvent:atPoint:)](imageanalysisoverlayviewdelegate/overlayview%28__shouldshowmenuforevent_atpoint_%29.md): Provides a Boolean value that indicates whether the overlay view shows a menu for the given event.
- [overlayView(\_:menu:willHighlight:)](imageanalysisoverlayviewdelegate/overlayview%28__menu_willhighlight_%29.md): Notifies your app that the given menu item is highlighted.
- [overlayView(\_:willOpen:)](imageanalysisoverlayviewdelegate/overlayview%28__willopen_%29.md): Notifies your app that a given menu is opening imminently.
- [overlayView(\_:didClose:)](imageanalysisoverlayviewdelegate/overlayview%28__didclose_%29.md): Notifies your app that the given menu closed.
- [overlayView(\_:needsUpdate:)](imageanalysisoverlayviewdelegate/overlayview%28__needsupdate_%29.md): Notifies your app that the given menu needs updating.
- [overlayView(\_:updatedMenuFor:for:at:)](imageanalysisoverlayviewdelegate/overlayview%28__updatedmenufor_for_at_%29.md): Notifies your app before the framework presents a context menu.

## See Also

### Content recognition and interaction in images

- [Enabling Live Text interactions with images](enabling-live-text-interactions-with-images.md): Add a Live Text interface that enables users to perform actions with text and QR codes that appear in images.
- [ImageAnalyzer](imageanalyzer.md): An object that finds items in images that people can interact with, such as subjects, text, and QR codes.
- [ImageAnalysis](imageanalysis.md): An object that represents the results of analyzing an image, and provides the input for the Live Text interface object.
- [ImageAnalysisInteraction](imageanalysisinteraction.md): An interface that enables people to interact with recognized text, barcodes, and other objects in an image.
- [ImageAnalysisInteractionDelegate](imageanalysisinteractiondelegate.md): A delegate that handles image-analysis and user-interaction callbacks for an interaction object.
- [ImageAnalysisOverlayView](imageanalysisoverlayview.md): A view that enables people to interact with recognized text, barcodes, and other objects in an image.
- [CameraRegionView](cameraregionview.md): This view displays a stabilized region of interest within a person’s view and provides passthrough camera feed for that selected region.
