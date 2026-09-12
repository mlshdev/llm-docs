> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview)

# ImageAnalysisOverlayView

**Framework:** VisionKit  
**Kind:** Class  
**Availability:** macOS 13.0+

A view that enables people to interact with recognized text, barcodes, and other objects in an image.

## Declaration

```swift
@MainActor @objc final class ImageAnalysisOverlayView
```

## Mentioned In

- [Enabling Live Text interactions with images](enabling-live-text-interactions-with-images.md)

<a id="overview"></a>

## Overview

This class enables people to interact with specific content types ([ImageAnalysisOverlayView.InteractionTypes](imageanalysisoverlayview/interactiontypes.md)) that the framework identifies in an image. For example:

- The Live Text interface enables them to select any text present in the image ([textSelection](imageanalysisoverlayview/interactiontypes/textselection.md)), or invoke a URL ([dataDetectors](imageanalysisoverlayview/interactiontypes/datadetectors.md)). The text selection UI offers framework-standard buttons for copying selected text, or looking it up on the web for more information.
- The *subject lift* feature identifies a wide variety of objects, or *subjects*, in images with the [imageSubject](imageanalysisoverlayview/interactiontypes/imagesubject.md) interaction type, and provides your app with an image of the objects with the background removed. The [visualLookUp](imageanalysisoverlayview/interactiontypes/visuallookup.md) type supplements this feature by adding a button in the bottom corner of the view that people can click or tap for more information about the recognized subjects.

<a id="Configure-the-interface-and-begin-interaction"></a>

## Configure the interface and begin interaction

To connect the interface with an image that your app displays, add a new instance of this class as a subview to your app’s image view.

Choose the items that the framework recognizes in an image by configuring the  [preferredInteractionTypes](imageanalysisoverlayview/preferredinteractiontypes.md) property. To recognize all types of content, specify the [automatic](imageanalysisoverlayview/interactiontypes/automatic.md) option, or choose a combination of types by assigning an array:

```swift
overlayView.preferredInteractionTypes = [.textSelection, .imageSubject]
```

To begin interaction, call one of the [ImageAnalyzer](imageanalyzer.md) class’s `analyze` methods, such as [analyze(\_:configuration:)](imageanalyzer/analyze%28__configuration_%29.md) and set the result onto this class’s [analysis](imageanalysisoverlayview/analysis.md) property.

You can take more control over the interaction or provide details about your app’s image view by implementing a delegate ([ImageAnalysisInteractionDelegate](imageanalysisinteractiondelegate.md)) and assigning it to the [delegate](imageanalysisinteraction/delegate.md) property. Your app needs to define the interactive area within the image either by setting the [trackingImageView](imageanalysisoverlayview/trackingimageview.md) property, or by implementing the delegate’s [contentsRect(for:)](imageanalysisoverlayviewdelegate/contentsrect%28for_%29.md) method.

## Topics

### Creating overlay views

- [init(\_:)](imageanalysisoverlayview/init%28__%29.md): Creates an overlay view with the specified delegate object.
- [init(frame:)](imageanalysisoverlayview/init%28frame_%29.md): Creates an overlay view with the specified frame rectangle.
- [init(coder:)](imageanalysisoverlayview/init%28coder_%29.md): Creates an overlay view from data in a coder object.

### Configuring overlay views

- [delegate](imageanalysisoverlayview/delegate.md): An object that handles image analysis interface callbacks.
- [analysis](imageanalysisoverlayview/analysis.md): The results of analyzing an image for items that people can interact with.
- [preferredInteractionTypes](imageanalysisoverlayview/preferredinteractiontypes.md): The types of interactions that people can perform with the image in this overlay view.
- [ImageAnalysisOverlayView.InteractionTypes](imageanalysisoverlayview/interactiontypes.md): The types of interactions that people can perform with an image.
- [trackingImageView](imageanalysisoverlayview/trackingimageview.md): The image view that contains the image.
- [activeInteractionTypes](imageanalysisoverlayview/activeinteractiontypes.md): The types of interactions that a person actively performs.

### Responding to view events

- [viewDidMoveToSuperview()](imageanalysisoverlayview/viewdidmovetosuperview%28%29.md): Notifies your app when the view initially appears.

### Accessing text information

- [text](imageanalysisoverlayview/text.md): The text contents of the current image analysis.
- [selectedText](imageanalysisoverlayview/selectedtext.md): The current selected text.
- [selectedAttributedText](imageanalysisoverlayview/selectedattributedtext.md): The current selected attributed text.
- [hasActiveTextSelection](imageanalysisoverlayview/hasactivetextselection.md): A Boolean value that indicates whether a person or the app has text selected within the image.
- [analysisHasText(at:)](imageanalysisoverlayview/analysishastext%28at_%29.md): Returns a Boolean value that indicates whether the analysis finds text at the specified point.
- [hasText(at:)](imageanalysisoverlayview/hastext%28at_%29.md): Returns a Boolean value that indicates whether active text exists at the specified point.
- [hasDataDetector(at:)](imageanalysisoverlayview/hasdatadetector%28at_%29.md): Returns a Boolean value that indicates whether the analysis detects data at the specified point.

### Managing text selection

- [selectedRanges](imageanalysisoverlayview/selectedranges.md): The current selected ranges.
- [resetSelection()](imageanalysisoverlayview/resetselection%28%29.md): Removes a person’s text selection from the interface.

### Accessing image subjects

- [subjects](imageanalysisoverlayview/subjects.md): The set of all subjects the framework identifies in an image.
- [ImageAnalysisOverlayView.Subject](imageanalysisoverlayview/subject.md): An area of interest in an image that the framework identifies as a primary focal point.
- [image(for:)](imageanalysisoverlayview/image%28for_%29.md): Provides an image asynchronously that contains the given subjects with the background removed.
- [subject(at:)](imageanalysisoverlayview/subject%28at_%29.md): Returns the subject at the given point within the overlay view’s image, if one exists.

### Managing image subjects

- [beginSubjectAnalysisIfNecessary()](imageanalysisoverlayview/beginsubjectanalysisifnecessary%28%29.md): Begins subject analysis on the overlay view’s image.
- [highlightedSubjects](imageanalysisoverlayview/highlightedsubjects.md): All highlighted subjects in the overlay view’s image.

### Querying the interface state

- [liveTextButtonVisible](imageanalysisoverlayview/livetextbuttonvisible.md): A Boolean value that indicates whether the Live Text button appears.
- [isSupplementaryInterfaceHidden](imageanalysisoverlayview/issupplementaryinterfacehidden.md): A Boolean value that indicates whether the view hides supplementary interface objects.
- [hasInteractiveItem(at:)](imageanalysisoverlayview/hasinteractiveitem%28at_%29.md): Returns a Boolean value that indicates whether active text, data detectors, or supplementary interface objects exist at the specified point.
- [hasSupplementaryInterface(at:)](imageanalysisoverlayview/hassupplementaryinterface%28at_%29.md): Returns a Boolean value that indicates whether supplementary interface objects exist at the specified point.
- [selectableItemsHighlighted](imageanalysisoverlayview/selectableitemshighlighted.md): A Boolean value that indicates whether the overlay view highlights actionable text or data that the analyzer detects in text.

### Customizing the interface

- [setSupplementaryInterfaceHidden(\_:animated:)](imageanalysisoverlayview/setsupplementaryinterfacehidden%28__animated_%29.md): Hides or shows supplementary interface objects, such as the Live Text button and the interface for Quick Actions, depending on the item type.
- [supplementaryInterfaceContentInsets](imageanalysisoverlayview/supplementaryinterfacecontentinsets.md): The distances the edges of content are inset from the supplementary interface.
- [supplementaryInterfaceFont](imageanalysisoverlayview/supplementaryinterfacefont.md): The font to use for the supplementary interface.
- [ImageAnalysisOverlayView.MenuTag](imageanalysisoverlayview/menutag.md): Tags that enable your app to manage image-analysis context menu items.

### Managing custom image views

- [contentsRect](imageanalysisoverlayview/contentsrect.md): Returns the rectangle, in unit coordinates, that contains the image within the superview.
- [setContentsRectNeedsUpdate()](imageanalysisoverlayview/setcontentsrectneedsupdate%28%29.md): Informs the view that contains the image when the layout changes and the view needs to reload its content.

### Errors

- [ImageAnalysisOverlayView.SubjectUnavailable](imageanalysisoverlayview/subjectunavailable.md): Error conditions that can occur during subject analysis.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)

## See Also

### Content recognition and interaction in images

- [Enabling Live Text interactions with images](enabling-live-text-interactions-with-images.md): Add a Live Text interface that enables users to perform actions with text and QR codes that appear in images.
- [ImageAnalyzer](imageanalyzer.md): An object that finds items in images that people can interact with, such as subjects, text, and QR codes.
- [ImageAnalysis](imageanalysis.md): An object that represents the results of analyzing an image, and provides the input for the Live Text interface object.
- [ImageAnalysisInteraction](imageanalysisinteraction.md): An interface that enables people to interact with recognized text, barcodes, and other objects in an image.
- [ImageAnalysisInteractionDelegate](imageanalysisinteractiondelegate.md): A delegate that handles image-analysis and user-interaction callbacks for an interaction object.
- [ImageAnalysisOverlayViewDelegate](imageanalysisoverlayviewdelegate.md): A delegate that handles image-analysis and user-interaction callbacks for an overlay view.
- [CameraRegionView](cameraregionview.md): This view displays a stabilized region of interest within a person’s view and provides passthrough camera feed for that selected region.
