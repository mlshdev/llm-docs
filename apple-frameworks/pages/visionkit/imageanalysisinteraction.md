> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction)

# ImageAnalysisInteraction

**Framework:** VisionKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

An interface that enables people to interact with recognized text, barcodes, and other objects in an image.

## Declaration

```swift
@MainActor @objc final class ImageAnalysisInteraction
```

## Mentioned In

- [Enabling Live Text interactions with images](enabling-live-text-interactions-with-images.md)

<a id="overview"></a>

## Overview

This class enables people to interact with specific content types ([ImageAnalysisInteraction.InteractionTypes](imageanalysisinteraction/interactiontypes.md)) that the framework identifies in an image. For example:

- The Live Text interface enables them to select any text present in the image ([textSelection](imageanalysisinteraction/interactiontypes/textselection.md)), or invoke a URL ([dataDetectors](imageanalysisinteraction/interactiontypes/datadetectors.md)). The text selection UI offers framework-standard buttons for copying selected text, or looking it up on the web for more information.
- The *subject lift* feature identifies a wide variety of objects, or *subjects*, in images with the [imageSubject](imageanalysisinteraction/interactiontypes/imagesubject.md) interaction type, and provides your app with an image of the objects with the background removed. The [visualLookUp](imageanalysisinteraction/interactiontypes/visuallookup.md) type supplements this feature by adding a button in the bottom corner of the view that people can click or tap for more information about the recognized subjects.

<a id="Configure-the-interface-and-begin-interaction"></a>

## Configure the interface and begin interaction

This class conforms to the [UIInteraction](../uikit/uiinteraction.md) protocol. To connect the interface with an image that your app displays, call [addInteraction(\_:)](../uikit/uiview/addinteraction%28__%29.md) on your app’s image view and pass in a new instance of this class.

Choose the items that the framework recognizes in an image by configuring the  [preferredInteractionTypes](imageanalysisinteraction/preferredinteractiontypes.md) property. To recognize all types of content, specify the [automatic](imageanalysisinteraction/interactiontypes/automatic.md) option, or choose a combination of types by assigning an array:

```swift
interaction.preferredInteractionTypes = [.textSelection, .imageSubject]
```

To begin interaction, call one of the [ImageAnalyzer](imageanalyzer.md) class’s `analyze` methods, such as [analyze(\_:configuration:)](imageanalyzer/analyze%28__configuration_%29.md) and set the result onto this class’s [analysis](imageanalysisoverlayview/analysis.md) property.

You can take more control over the interaction or provide details about your app’s image view by implementing a delegate ([ImageAnalysisInteractionDelegate](imageanalysisinteractiondelegate.md)) and assigning it to the [delegate](imageanalysisinteraction/delegate.md) property. If your image view isn’t an instance of [UIImageView](../uikit/uiimageview.md), your app needs to define the interactive area within the image by implementing the [contentsRect(for:)](imageanalysisinteractiondelegate/contentsrect%28for_%29.md) method.

## Topics

### Creating an image interaction

- [init()](imageanalysisinteraction/init%28%29.md): Creates an interaction for Live Text actions with items in an image.
- [init(\_:)](imageanalysisinteraction/init%28__%29.md): Creates an interaction for Live Text actions with the specified delegate.

### Configuring an image interaction

- [delegate](imageanalysisinteraction/delegate.md): The delegate that handles the interaction callbacks.
- [analysis](imageanalysisinteraction/analysis.md): The results of analyzing an image for items that people can interact with.
- [view](imageanalysisinteraction/view.md): The view that uses this interaction.
- [preferredInteractionTypes](imageanalysisinteraction/preferredinteractiontypes.md): The types of interactions that people can perform with the image.
- [ImageAnalysisInteraction.InteractionTypes](imageanalysisinteraction/interactiontypes.md): The types of interactions that people can perform with an image.
- [activeInteractionTypes](imageanalysisinteraction/activeinteractiontypes.md): The types of interactions that a person actively performs.

### Responding to view events

- [willMove(to:)](imageanalysisinteraction/willmove%28to_%29.md): Performs an action before the view adds or removes the interaction from its interaction array.
- [didMove(to:)](imageanalysisinteraction/didmove%28to_%29.md): Performs an action after the view adds or removes the interaction from its interaction array.

### Accessing text information

- [text](imageanalysisinteraction/text.md): The text contents of the current image analysis.
- [selectedText](imageanalysisinteraction/selectedtext.md): The current selected text.
- [selectedAttributedText](imageanalysisinteraction/selectedattributedtext.md): The current selected attributed text.
- [hasText(at:)](imageanalysisinteraction/hastext%28at_%29.md): Returns a Boolean value that indicates whether active text exists at the specified point.
- [hasActiveTextSelection](imageanalysisinteraction/hasactivetextselection.md): A Boolean value that indicates whether a person or the app has text selected within the image.
- [analysisHasText(at:)](imageanalysisinteraction/analysishastext%28at_%29.md): Returns a Boolean value that indicates whether the analysis finds text at the specified point.
- [hasDataDetector(at:)](imageanalysisinteraction/hasdatadetector%28at_%29.md): Returns a Boolean value that indicates whether the analysis detects data at the specified point.

### Managing text selection

- [selectedRanges](imageanalysisinteraction/selectedranges.md): Sets selected text ranges.
- [resetTextSelection()](imageanalysisinteraction/resettextselection%28%29.md): Removes a person’s text selection from the interface.

### Accessing image subjects

- [subjects](imageanalysisinteraction/subjects.md): The set of all subjects the framework identifies in an image.
- [ImageAnalysisInteraction.Subject](imageanalysisinteraction/subject.md): An area of interest in an image that the framework identifies as a primary focal point.
- [image(for:)](imageanalysisinteraction/image%28for_%29.md): Provides an image asynchronously that contains the given subjects with the background removed.
- [subject(at:)](imageanalysisinteraction/subject%28at_%29.md): Returns the subject at the given point within the interaction’s image, if one exists.

### Managing image subjects

- [highlightedSubjects](imageanalysisinteraction/highlightedsubjects.md): All highlighted subjects in the interaction image.

### Querying the interface state

- [liveTextButtonVisible](imageanalysisinteraction/livetextbuttonvisible.md): A Boolean value that indicates whether the Live Text button appears.
- [isSupplementaryInterfaceHidden](imageanalysisinteraction/issupplementaryinterfacehidden.md): A Boolean value that indicates whether the view hides supplementary interface objects.
- [hasInteractiveItem(at:)](imageanalysisinteraction/hasinteractiveitem%28at_%29.md): Returns a Boolean value that indicates whether active text, data detectors, or supplementary interface objects exist at the specified point.
- [hasSupplementaryInterface(at:)](imageanalysisinteraction/hassupplementaryinterface%28at_%29.md): Returns a Boolean value that indicates whether supplementary interface objects exist at the specified point.
- [selectableItemsHighlighted](imageanalysisinteraction/selectableitemshighlighted.md): A Boolean value that indicates whether the interaction highlights actionable text or data the analyzer detects in text.

### Customizing the interface

- [allowLongPressForDataDetectorsInTextMode](imageanalysisinteraction/allowlongpressfordatadetectorsintextmode.md): A Boolean value that indicates whether people can press and hold text to activate data detectors.
- [setSupplementaryInterfaceHidden(\_:animated:)](imageanalysisinteraction/setsupplementaryinterfacehidden%28__animated_%29.md): Hides or shows supplementary interface objects, such as the Live Action button and Quick Actions, depending on the item type.
- [supplementaryInterfaceContentInsets](imageanalysisinteraction/supplementaryinterfacecontentinsets.md): The distances the edges of content are inset from the supplementary interface.
- [supplementaryInterfaceFont](imageanalysisinteraction/supplementaryinterfacefont.md): The font to use for the supplementary interface.

### Managing custom image views

- [contentsRect](imageanalysisinteraction/contentsrect.md): A rectangle, in unit coordinate space, that describes the content area of the interaction.
- [setContentsRectNeedsUpdate()](imageanalysisinteraction/setcontentsrectneedsupdate%28%29.md): Informs the view that contains the image when the layout changes and the view needs to reload its content.

### Errors

- [ImageAnalysisInteraction.SubjectUnavailable](imageanalysisinteraction/subjectunavailable.md): Error conditions that can occur during subject analysis.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIInteraction](../uikit/uiinteraction.md)

## See Also

### Content recognition and interaction in images

- [Enabling Live Text interactions with images](enabling-live-text-interactions-with-images.md): Add a Live Text interface that enables users to perform actions with text and QR codes that appear in images.
- [ImageAnalyzer](imageanalyzer.md): An object that finds items in images that people can interact with, such as subjects, text, and QR codes.
- [ImageAnalysis](imageanalysis.md): An object that represents the results of analyzing an image, and provides the input for the Live Text interface object.
- [ImageAnalysisInteractionDelegate](imageanalysisinteractiondelegate.md): A delegate that handles image-analysis and user-interaction callbacks for an interaction object.
- [ImageAnalysisOverlayView](imageanalysisoverlayview.md): A view that enables people to interact with recognized text, barcodes, and other objects in an image.
- [ImageAnalysisOverlayViewDelegate](imageanalysisoverlayviewdelegate.md): A delegate that handles image-analysis and user-interaction callbacks for an overlay view.
- [CameraRegionView](cameraregionview.md): This view displays a stabilized region of interest within a person’s view and provides passthrough camera feed for that selected region.
