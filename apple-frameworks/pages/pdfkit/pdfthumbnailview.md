> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfthumbnailview](https://developer.apple.com/documentation/pdfkit/pdfthumbnailview)

# PDFThumbnailView (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

An object that contains a set of thumbnails, each of which represents a page in a PDF document.

## Declaration

```swift
class PDFThumbnailView
```

## Topics

### Accessing the Associated PDF View

- [pdfView](pdfthumbnailview/pdfview.md): Returns the `PDFView` object associated with the thumbnail view.

### Managing the Size of a Thumbnail View

- [thumbnailSize](pdfthumbnailview/thumbnailsize.md): Returns the maximum width and height of the thumbnails in the thumbnail view.

### Working with Thumbnail View Display Characteristics

- [maximumNumberOfColumns](pdfthumbnailview/maximumnumberofcolumns.md): Returns the maximum number of columns of thumbnails the thumbnail view can display.
- [labelFont](pdfthumbnailview/labelfont.md): Returns the font used to label the thumbnails.
- [backgroundColor](pdfthumbnailview/backgroundcolor.md): Returns the color used in the background of the thumbnail view.

### Managing the Behavior of a Thumbnail View

- [allowsDragging](pdfthumbnailview/allowsdragging.md): Returns a Boolean value indicating whether users can drag thumbnails (that is, re-order pages in the document) within the thumbnail view.
- [allowsMultipleSelection](pdfthumbnailview/allowsmultipleselection.md): Returns a Boolean value indicating whether users can select multiple thumbnails in the thumbnail view at one time.
- [selectedPages](pdfthumbnailview/selectedpages.md): Returns an array of PDF pages that correspond to the selected thumbnails in the thumbnail view.

### Instance Properties

- [contentInset](pdfthumbnailview/contentinset.md)
- [layoutMode](pdfthumbnailview/layoutmode.md)

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
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
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

### Views

- [PDFView](pdfview.md): An object that encapsulates the functionality of PDF Kit into a single widget that you can add to your application using Interface Builder.

# PDFThumbnailView (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

An object that contains a set of thumbnails, each of which represents a page in a PDF document.

## Declaration

```objectivec
@interface PDFThumbnailView : UIView
```

```objectivec
@interface PDFThumbnailView : NSView
```

## Topics

### Accessing the Associated PDF View

- [PDFView](pdfthumbnailview/pdfview.md): Returns the `PDFView` object associated with the thumbnail view.

### Managing the Size of a Thumbnail View

- [thumbnailSize](pdfthumbnailview/thumbnailsize.md): Returns the maximum width and height of the thumbnails in the thumbnail view.

### Working with Thumbnail View Display Characteristics

- [maximumNumberOfColumns](pdfthumbnailview/maximumnumberofcolumns.md): Returns the maximum number of columns of thumbnails the thumbnail view can display.
- [labelFont](pdfthumbnailview/labelfont.md): Returns the font used to label the thumbnails.
- [backgroundColor](pdfthumbnailview/backgroundcolor.md): Returns the color used in the background of the thumbnail view.

### Managing the Behavior of a Thumbnail View

- [allowsDragging](pdfthumbnailview/allowsdragging.md): Returns a Boolean value indicating whether users can drag thumbnails (that is, re-order pages in the document) within the thumbnail view.
- [allowsMultipleSelection](pdfthumbnailview/allowsmultipleselection.md): Returns a Boolean value indicating whether users can select multiple thumbnails in the thumbnail view at one time.
- [selectedPages](pdfthumbnailview/selectedpages.md): Returns an array of PDF pages that correspond to the selected thumbnails in the thumbnail view.

### Constants

- [PDFThumbnailViewDocumentEditedNotification](pdfthumbnailviewdocumenteditednotification.md)

### Instance Properties

- [contentInset](pdfthumbnailview/contentinset.md)
- [layoutMode](pdfthumbnailview/layoutmode.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)

## See Also

### Views

- [PDFView](pdfview.md): An object that encapsulates the functionality of PDF Kit into a single widget that you can add to your application using Interface Builder.
