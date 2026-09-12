> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectextensioncontext](https://developer.apple.com/documentation/photosui/phprojectextensioncontext)

# PHProjectExtensionContext (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

An object that provides Photos project extensions with access to the underlying project, as well as to the user’s photo library for editing.

## Declaration

```swift
class PHProjectExtensionContext
```

<a id="overview"></a>

## Overview

When a Photos project extension is initialized, it is handed an extension context object. This object provides the extension with access to the underlying project, as well as the photo library from which assets are fetched and edited.

## Topics

### Accessing the Project and the Photo Library

- [project](phprojectextensioncontext/project.md): A read-only version of the project being edited.
- [photoLibrary](phprojectextensioncontext/photolibrary.md): A read-only version of the photo library being modified.

### Updating Assets

- [showEditor(for:)](phprojectextensioncontext/showeditor%28for_%29.md): Invokes the built-in photo editor for the given asset.
- [updatedProjectInfo(from:completion:)](phprojectextensioncontext/updatedprojectinfo%28from_completion_%29.md): Creates an updated [PHProjectInfo](phprojectinfo.md) instance from existing project information and current assets.

## Relationships

### Inherits From

- [NSExtensionContext](../foundation/nsextensioncontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### macOS Photos project extensions

- [Creating a Slideshow Project Extension for Photos](../photokit/creating-a-slideshow-project-extension-for-photos.md): Augment the macOS Photos app with extensions that support project creation.
- [PHProject](../photos/phproject.md): A representation of a Photos app project extension.
- [PHProjectInfo](phprojectinfo.md): Information about the project extension.
- [PHProjectElement](phprojectelement.md): The superclass for all element objects.
- [PHProjectSection](phprojectsection.md): A collection of content representing curated asset and text elements.
- [PHProjectRegionOfInterest](phprojectregionofinterest.md): A representation of a region of interest in a photo asset.
- [PHProjectChangeRequest](../photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
- [PHProjectCategory](phprojectcategory.md): A representation of Photos project extension categories.

# PHProjectExtensionContext (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

An object that provides Photos project extensions with access to the underlying project, as well as to the user’s photo library for editing.

## Declaration

```objectivec
@interface PHProjectExtensionContext : NSExtensionContext
```

<a id="overview"></a>

## Overview

When a Photos project extension is initialized, it is handed an extension context object. This object provides the extension with access to the underlying project, as well as the photo library from which assets are fetched and edited.

## Topics

### Accessing the Project and the Photo Library

- [project](phprojectextensioncontext/project.md): A read-only version of the project being edited.
- [photoLibrary](phprojectextensioncontext/photolibrary.md): A read-only version of the photo library being modified.

### Updating Assets

- [showEditorForAsset:](phprojectextensioncontext/showeditor%28for_%29.md): Invokes the built-in photo editor for the given asset.
- [updatedProjectInfoFromProjectInfo:completion:](phprojectextensioncontext/updatedprojectinfo%28from_completion_%29.md): Creates an updated [PHProjectInfo](phprojectinfo.md) instance from existing project information and current assets.

## Relationships

### Inherits From

- [NSExtensionContext](../foundation/nsextensioncontext.md)

## See Also

### macOS Photos project extensions

- [Creating a Slideshow Project Extension for Photos](../photokit/creating-a-slideshow-project-extension-for-photos.md): Augment the macOS Photos app with extensions that support project creation.
- [PHProject](../photos/phproject.md): A representation of a Photos app project extension.
- [PHProjectInfo](phprojectinfo.md): Information about the project extension.
- [PHProjectElement](phprojectelement.md): The superclass for all element objects.
- [PHProjectSection](phprojectsection.md): A collection of content representing curated asset and text elements.
- [PHProjectRegionOfInterest](phprojectregionofinterest.md): A representation of a region of interest in a photo asset.
- [PHProjectChangeRequest](../photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
- [PHProjectCategory](phprojectcategory.md): A representation of Photos project extension categories.
