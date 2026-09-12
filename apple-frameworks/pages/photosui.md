> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui](https://developer.apple.com/documentation/photosui)

# PhotosUI (Swift)

**Framework:** PhotosUI  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 9.0+

Present a person’s photo library using a picker interface, display Live Photos, or extend the Photos app with custom functionality.

<a id="overview"></a>

## Overview

PhotosUI offers a photo picker that lets people view their library and choose one or more photos for your app to display or process. The picker renders in a system view and only gives your app access to the photos someone chooses, which facilitates a user experience with enhanced privacy.

The framework also provides a view you can use to display Live Photos.

> **Note**

> PhotosUI is a [PhotoKit](photokit.md) framework.

## Topics

### Shared photo library

- [Delivering an Enhanced Privacy Experience in Your Photos App](photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md): Adopt the latest privacy enhancements to deliver advanced user-privacy controls.
- [PHLivePhotoView](photosui/phlivephotoview.md): A view that displays a Live Photo.

### Photos picker for UIKit, AppKit

- [Selecting Photos and Videos in iOS](photokit/selecting-photos-and-videos-in-ios.md): Improve the user experience of finding and selecting assets by using the Photos picker.
- [PHPickerViewController](photosui/phpickerviewcontroller.md): A view controller that provides the user interface for choosing assets from the photo library.
- [PHPickerViewControllerDelegate](photosui/phpickerviewcontrollerdelegate-5yntc.md): A set of methods that the delegate must implement to respond to `PHPickerViewController` user events.
- [PHPickerConfiguration](photosui/phpickerconfiguration-swift.struct.md): An object that contains information about how to configure a picker view controller.
- [PHPickerFilter](photosui/phpickerfilter-swift.struct.md): A type that defines the filter to apply to the photo library.
- [PHPickerResult](photosui/phpickerresult-swift.struct.md): Types that represent a selected asset from a person’s photo library.

### Photos picker for SwiftUI

- [Bringing Photos picker to your SwiftUI app](photokit/bringing-photos-picker-to-your-swiftui-app.md): Select media assets by using a Photos picker view that SwiftUI provides.
- [Implementing an inline Photos picker](photokit/implementing-an-inline-photos-picker.md): Embed a system-provided, half-height Photos picker into your app’s view.
- [PhotosPicker](photosui/photospicker.md): A view that displays a Photos picker for choosing assets from the photo library.
- [PhotosPickerItem](photosui/photospickeritem.md): A type that represents an item you use with a Photos picker.
- [PhotosPickerSelectionBehavior](photosui/photospickerselectionbehavior.md): A type that describes how the Photos picker handles user selection.
- [PhotosPickerStyle](photosui/photospickerstyle.md)

### Live Photos

- [Displaying Live Photos](photokit/displaying-live-photos.md): Provide the same interactive playback of Live Photos as in the iOS Photos app.

### Photo editing extensions

- [Creating Photo Editing Extensions](photokit/creating-photo-editing-extensions.md): Provide custom functionality in the Photos app by bundling an app extension.
- [PHContentEditingController](photosui/phcontenteditingcontroller.md): A protocol your custom view controller class implements to provide a user interface for your Photos extension.

### macOS Photos project extensions

- [Creating a Slideshow Project Extension for Photos](photokit/creating-a-slideshow-project-extension-for-photos.md): Augment the macOS Photos app with extensions that support project creation.
- [PHProject](photos/phproject.md): A representation of a Photos app project extension.
- [PHProjectInfo](photosui/phprojectinfo.md): Information about the project extension.
- [PHProjectExtensionContext](photosui/phprojectextensioncontext.md): An object that provides Photos project extensions with access to the underlying project, as well as to the user’s photo library for editing.
- [PHProjectElement](photosui/phprojectelement.md): The superclass for all element objects.
- [PHProjectSection](photosui/phprojectsection.md): A collection of content representing curated asset and text elements.
- [PHProjectRegionOfInterest](photosui/phprojectregionofinterest.md): A representation of a region of interest in a photo asset.
- [PHProjectChangeRequest](photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](photosui/phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
- [PHProjectCategory](photosui/phprojectcategory.md): A representation of Photos project extension categories.

### Classes

- [PHSharedAlbumCreationViewController](photosui/phsharedalbumcreationviewcontroller.md)
- [PHSharedAlbumCustomizationViewController](photosui/phsharedalbumcustomizationviewcontroller.md)
- [PHSharedAlbumPostingViewController](photosui/phsharedalbumpostingviewcontroller.md)

### Structures

- [PHPickerMetadataOptions](photosui/phpickermetadataoptions.md): Constants that specify metadata options for \\c PHPickerViewController.
- [PHPickerSearchText](photosui/phpickersearchtext-swift.struct.md): A search text for `PHPickerViewController`.
- [PHSharedAlbumCreationConfiguration](photosui/phsharedalbumcreationconfiguration-swift.struct.md): An object used to configure a `PHSharedAlbumCreationViewController`.
- [PHSharedAlbumCreationResult](photosui/phsharedalbumcreationresult-swift.struct.md): The result of a user creating a shared album.

### Enumerations

- [PHSharedAlbumCreationSharingPolicy](photosui/phsharedalbumcreationsharingpolicy.md): The sharing policy for creating shared albums.

## See Also

### Frameworks

- [Photos](photos.md): Work with image and video assets that the Photos app manages, including those from iCloud Photos and Live Photos.

# PhotosUI (Objective-C)

**Framework:** PhotosUI  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 9.0+

Present a person’s photo library using a picker interface, display Live Photos, or extend the Photos app with custom functionality.

<a id="overview"></a>

## Overview

PhotosUI offers a photo picker that lets people view their library and choose one or more photos for your app to display or process. The picker renders in a system view and only gives your app access to the photos someone chooses, which facilitates a user experience with enhanced privacy.

The framework also provides a view you can use to display Live Photos.

> **Note**

> PhotosUI is a [PhotoKit](photokit.md) framework.

## Topics

### Shared photo library

- [Delivering an Enhanced Privacy Experience in Your Photos App](photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md): Adopt the latest privacy enhancements to deliver advanced user-privacy controls.
- [PHLivePhotoView](photosui/phlivephotoview.md): A view that displays a Live Photo.

### Photos picker for UIKit, AppKit

- [Selecting Photos and Videos in iOS](photokit/selecting-photos-and-videos-in-ios.md): Improve the user experience of finding and selecting assets by using the Photos picker.
- [PHPickerViewController](photosui/phpickerviewcontroller.md): A view controller that provides the user interface for choosing assets from the photo library.
- [PHPickerConfiguration](https://developer.apple.com/documentation/photosui/phpickerconfiguration-c.class): An object that contains information about how to configure a picker view controller.
- [PHPickerFilter](https://developer.apple.com/documentation/photosui/phpickerfilter-c.class): A type that defines the filter to apply to the photo library.
- [PHPickerResult](https://developer.apple.com/documentation/photosui/phpickerresult-c.class): Types that represent a selected asset from a person’s photo library.

### Photos picker for SwiftUI

- [Bringing Photos picker to your SwiftUI app](photokit/bringing-photos-picker-to-your-swiftui-app.md): Select media assets by using a Photos picker view that SwiftUI provides.
- [Implementing an inline Photos picker](photokit/implementing-an-inline-photos-picker.md): Embed a system-provided, half-height Photos picker into your app’s view.

### Live Photos

- [Displaying Live Photos](photokit/displaying-live-photos.md): Provide the same interactive playback of Live Photos as in the iOS Photos app.

### Photo editing extensions

- [Creating Photo Editing Extensions](photokit/creating-photo-editing-extensions.md): Provide custom functionality in the Photos app by bundling an app extension.
- [PHContentEditingController](photosui/phcontenteditingcontroller.md): A protocol your custom view controller class implements to provide a user interface for your Photos extension.

### macOS Photos project extensions

- [Creating a Slideshow Project Extension for Photos](photokit/creating-a-slideshow-project-extension-for-photos.md): Augment the macOS Photos app with extensions that support project creation.
- [PHProject](photos/phproject.md): A representation of a Photos app project extension.
- [PHProjectInfo](photosui/phprojectinfo.md): Information about the project extension.
- [PHProjectExtensionContext](photosui/phprojectextensioncontext.md): An object that provides Photos project extensions with access to the underlying project, as well as to the user’s photo library for editing.
- [PHProjectElement](photosui/phprojectelement.md): The superclass for all element objects.
- [PHProjectSection](photosui/phprojectsection.md): A collection of content representing curated asset and text elements.
- [PHProjectRegionOfInterest](photosui/phprojectregionofinterest.md): A representation of a region of interest in a photo asset.
- [PHProjectChangeRequest](photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](photosui/phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
- [PHProjectCategory](photosui/phprojectcategory.md): A representation of Photos project extension categories.

### Classes

- [PHPickerSearchText](https://developer.apple.com/documentation/photosui/phpickersearchtext-c.class): A search text for \\c PHPickerViewController.
- [PHSharedAlbumCreationConfiguration](https://developer.apple.com/documentation/photosui/phsharedalbumcreationconfiguration-c.class): An object used to configure a `PHSharedAlbumCreationViewController`.
- [PHSharedAlbumCreationResult](https://developer.apple.com/documentation/photosui/phsharedalbumcreationresult-c.class): An object that contains useful information about a created shared album.
- [PHSharedAlbumCreationViewController](photosui/phsharedalbumcreationviewcontroller.md)
- [PHSharedAlbumCustomizationViewController](photosui/phsharedalbumcustomizationviewcontroller.md)
- [PHSharedAlbumPostingViewController](photosui/phsharedalbumpostingviewcontroller.md)

### Protocols

- [PHSharedAlbumCreationViewControllerDelegate](photosui/phsharedalbumcreationviewcontroller/delegate-swift.protocol.md)
- [PHSharedAlbumCustomizationViewControllerDelegate](photosui/phsharedalbumcustomizationviewcontroller/delegate-swift.protocol.md)
- [PHSharedAlbumPostingViewControllerDelegate](photosui/phsharedalbumpostingviewcontroller/delegate-swift.protocol.md)

### Enumerations

- [PHPickerMetadataOptions](photosui/phpickermetadataoptions.md): Constants that specify metadata options for \\c PHPickerViewController.
- [PHSharedAlbumCreationSharingPolicy](photosui/phsharedalbumcreationsharingpolicy.md): The sharing policy for creating shared albums.

## See Also

### Frameworks

- [Photos](photos.md): Work with image and video assets that the Photos app manages, including those from iCloud Photos and Live Photos.
