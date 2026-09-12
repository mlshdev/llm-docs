> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectinfo](https://developer.apple.com/documentation/photosui/phprojectinfo)

# PHProjectInfo (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

Information about the project extension.

## Declaration

```swift
class PHProjectInfo
```

<a id="overview"></a>

## Overview

macOS Photos automatically generates a [PHProjectInfo](phprojectinfo.md) object when creating a new project. Photos passes along the project information with a [PHProjectExtensionContext](phprojectextensioncontext.md) object. This object contains metadata about the project’s creation source, sections, product type, branding, and page numbers. Your extension leverages project information to influence project layout, autoflow, and theme selection. The properties of this class are immutable, and your extension can’t instantiate the object directly.

## Topics

### Determining Project Type

- [projectType](phprojectinfo/projecttype.md): The project type that the user selected from the project extension options.
- [PHProjectType](phprojecttype.md): The type descriptor of a project extension.
- [creationSource](phprojectinfo/creationsource-swift.property.md): The source from which the project was created.
- [sections](phprojectinfo/sections.md): An array of project sections, each containing one or more section content objects.
- [PHProjectTypeDescription](phprojecttypedescription.md): An extensible enumerator for [PHProjectType](phprojecttype.md) that’s presented to users in the project picker.
- [PHProjectTypeDescriptionDataSource](phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectTypeDescriptionInvalidator](phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
- [PHProjectInfo.CreationSource](phprojectinfo/creationsource-swift.enum.md): Defines the source of a project extension.

### Creating a Project from an Apple Print Product

- [brandingEnabled](phprojectinfo/brandingenabled.md): A Boolean value indicating whether branding was enabled in the source project.
- [pageNumbersEnabled](phprojectinfo/pagenumbersenabled.md): A Boolean value indicating whether page numbering was enabled in the source project.
- [productIdentifier](phprojectinfo/productidentifier.md): The product identifier of the originating Apple Print Product.
- [themeIdentifier](phprojectinfo/themeidentifier.md): The product theme identifier of the originating Apple Print Product.

### Initializers

- [init(coder:)](phprojectinfo/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### macOS Photos project extensions

- [Creating a Slideshow Project Extension for Photos](../photokit/creating-a-slideshow-project-extension-for-photos.md): Augment the macOS Photos app with extensions that support project creation.
- [PHProject](../photos/phproject.md): A representation of a Photos app project extension.
- [PHProjectExtensionContext](phprojectextensioncontext.md): An object that provides Photos project extensions with access to the underlying project, as well as to the user’s photo library for editing.
- [PHProjectElement](phprojectelement.md): The superclass for all element objects.
- [PHProjectSection](phprojectsection.md): A collection of content representing curated asset and text elements.
- [PHProjectRegionOfInterest](phprojectregionofinterest.md): A representation of a region of interest in a photo asset.
- [PHProjectChangeRequest](../photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
- [PHProjectCategory](phprojectcategory.md): A representation of Photos project extension categories.

# PHProjectInfo (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

Information about the project extension.

## Declaration

```objectivec
@interface PHProjectInfo : NSObject
```

<a id="overview"></a>

## Overview

macOS Photos automatically generates a [PHProjectInfo](phprojectinfo.md) object when creating a new project. Photos passes along the project information with a [PHProjectExtensionContext](phprojectextensioncontext.md) object. This object contains metadata about the project’s creation source, sections, product type, branding, and page numbers. Your extension leverages project information to influence project layout, autoflow, and theme selection. The properties of this class are immutable, and your extension can’t instantiate the object directly.

## Topics

### Determining Project Type

- [projectType](phprojectinfo/projecttype.md): The project type that the user selected from the project extension options.
- [PHProjectType](phprojecttype.md): The type descriptor of a project extension.
- [creationSource](phprojectinfo/creationsource-swift.property.md): The source from which the project was created.
- [sections](phprojectinfo/sections.md): An array of project sections, each containing one or more section content objects.
- [PHProjectTypeDescription](phprojecttypedescription.md): An extensible enumerator for [PHProjectType](phprojecttype.md) that’s presented to users in the project picker.
- [PHProjectTypeDescriptionDataSource](phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectTypeDescriptionInvalidator](phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
- [PHProjectCreationSource](phprojectinfo/creationsource-swift.enum.md): Defines the source of a project extension.

### Creating a Project from an Apple Print Product

- [brandingEnabled](phprojectinfo/brandingenabled.md): A Boolean value indicating whether branding was enabled in the source project.
- [pageNumbersEnabled](phprojectinfo/pagenumbersenabled.md): A Boolean value indicating whether page numbering was enabled in the source project.
- [productIdentifier](phprojectinfo/productidentifier.md): The product identifier of the originating Apple Print Product.
- [themeIdentifier](phprojectinfo/themeidentifier.md): The product theme identifier of the originating Apple Print Product.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### macOS Photos project extensions

- [Creating a Slideshow Project Extension for Photos](../photokit/creating-a-slideshow-project-extension-for-photos.md): Augment the macOS Photos app with extensions that support project creation.
- [PHProject](../photos/phproject.md): A representation of a Photos app project extension.
- [PHProjectExtensionContext](phprojectextensioncontext.md): An object that provides Photos project extensions with access to the underlying project, as well as to the user’s photo library for editing.
- [PHProjectElement](phprojectelement.md): The superclass for all element objects.
- [PHProjectSection](phprojectsection.md): A collection of content representing curated asset and text elements.
- [PHProjectRegionOfInterest](phprojectregionofinterest.md): A representation of a region of interest in a photo asset.
- [PHProjectChangeRequest](../photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
- [PHProjectCategory](phprojectcategory.md): A representation of Photos project extension categories.
