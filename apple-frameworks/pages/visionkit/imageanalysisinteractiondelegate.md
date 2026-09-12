> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteractiondelegate](https://developer.apple.com/documentation/visionkit/imageanalysisinteractiondelegate)

# ImageAnalysisInteractionDelegate

**Framework:** VisionKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A delegate that handles image-analysis and user-interaction callbacks for an interaction object.

## Declaration

```swift
@MainActor protocol ImageAnalysisInteractionDelegate : AnyObject
```

## Mentioned In

- [Enabling Live Text interactions with images](enabling-live-text-interactions-with-images.md)

<a id="overview"></a>

## Overview

The delegate of an [ImageAnalysisInteraction](imageanalysisinteraction.md) object implements this protocol to provide interface details and to customize the response for a person’s interaction.

## Topics

### Providing interface details

- [contentView(for:)](imageanalysisinteractiondelegate/contentview%28for_%29.md): Provides the view that contains the image.
- [contentsRect(for:)](imageanalysisinteractiondelegate/contentsrect%28for_%29.md): Returns the rectangle, in unit coordinates, that contains the image within the view.
- [presentingViewController(for:)](imageanalysisinteractiondelegate/presentingviewcontroller%28for_%29.md): Provides the view controller that presents the interface objects.

### Starting the interaction

- [interaction(\_:shouldBeginAt:for:)](imageanalysisinteractiondelegate/interaction%28__shouldbeginat_for_%29.md): Provides a Boolean value that indicates whether the interaction can begin at the given point.

### Tracking interface changes

- [interaction(\_:liveTextButtonDidChangeToVisible:)](imageanalysisinteractiondelegate/interaction%28__livetextbuttondidchangetovisible_%29.md): Notifies your app when the Live Text button’s visibility changes.
- [interaction(\_:highlightSelectedItemsDidChange:)](imageanalysisinteractiondelegate/interaction%28__highlightselecteditemsdidchange_%29.md): Notifies your app when recognized items in the image appear highlighted as a result of a person tapping the Live Text button.
- [textSelectionDidChange(\_:)](imageanalysisinteractiondelegate/textselectiondidchange%28__%29.md): Notifies your app when the interaction’s text selection changes.

## See Also

### Content recognition and interaction in images

- [Enabling Live Text interactions with images](enabling-live-text-interactions-with-images.md): Add a Live Text interface that enables users to perform actions with text and QR codes that appear in images.
- [ImageAnalyzer](imageanalyzer.md): An object that finds items in images that people can interact with, such as subjects, text, and QR codes.
- [ImageAnalysis](imageanalysis.md): An object that represents the results of analyzing an image, and provides the input for the Live Text interface object.
- [ImageAnalysisInteraction](imageanalysisinteraction.md): An interface that enables people to interact with recognized text, barcodes, and other objects in an image.
- [ImageAnalysisOverlayView](imageanalysisoverlayview.md): A view that enables people to interact with recognized text, barcodes, and other objects in an image.
- [ImageAnalysisOverlayViewDelegate](imageanalysisoverlayviewdelegate.md): A delegate that handles image-analysis and user-interaction callbacks for an overlay view.
- [CameraRegionView](cameraregionview.md): This view displays a stabilized region of interest within a person’s view and provides passthrough camera feed for that selected region.
