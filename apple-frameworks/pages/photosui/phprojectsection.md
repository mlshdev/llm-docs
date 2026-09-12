> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectsection](https://developer.apple.com/documentation/photosui/phprojectsection)

# PHProjectSection (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

A collection of content representing curated asset and text elements.

## Declaration

```swift
class PHProjectSection
```

<a id="overview"></a>

## Overview

Each project section contains at least one [PHProjectSectionContent](phprojectsectioncontent.md) object, which represents a suggested curation of the content. The number of sections included in [PHProjectInfo](phprojectinfo.md) varies depending on the source used to initialize the project:

- **A Memory.** There will be one cover section with a key asset element and title, as well as a section containing multiple levels of curation, mirroring the Show Summary and Show More options of the Memory in Photos.
- **A single Album.** The number of sections depends on the Album size. A small Album yields a single section, but an Album with a large quantity of photos is broken down into sections based on Moments in the user’s Photo Library.
- **An existing Apple Book, Card, or Calendar.** The sections will match the pagination in that project; for example, a book will break down into one section per page.

## Topics

### Determining Section Contents

- [title](phprojectsection/title.md): The optional section title.
- [sectionContents](phprojectsection/sectioncontents.md): An array containing PHProjectionSessionContent objects.
- [PHProjectSectionContent](phprojectsectioncontent.md): An object containing section elements and layout information for a single level of curation.

### Defining the Section Type

- [sectionType](phprojectsection/sectiontype-swift.property.md): The intended usage of the section: cover, content, or auxiliary.
- [PHProjectSection.SectionType](phprojectsection/sectiontype-swift.enum.md): The intended usage of the section: cover, content, or auxiliary.

### Initializers

- [init(coder:)](phprojectsection/init%28coder_%29.md)

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
- [PHProjectInfo](phprojectinfo.md): Information about the project extension.
- [PHProjectExtensionContext](phprojectextensioncontext.md): An object that provides Photos project extensions with access to the underlying project, as well as to the user’s photo library for editing.
- [PHProjectElement](phprojectelement.md): The superclass for all element objects.
- [PHProjectRegionOfInterest](phprojectregionofinterest.md): A representation of a region of interest in a photo asset.
- [PHProjectChangeRequest](../photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
- [PHProjectCategory](phprojectcategory.md): A representation of Photos project extension categories.

# PHProjectSection (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

A collection of content representing curated asset and text elements.

## Declaration

```objectivec
@interface PHProjectSection : NSObject
```

<a id="overview"></a>

## Overview

Each project section contains at least one [PHProjectSectionContent](phprojectsectioncontent.md) object, which represents a suggested curation of the content. The number of sections included in [PHProjectInfo](phprojectinfo.md) varies depending on the source used to initialize the project:

- **A Memory.** There will be one cover section with a key asset element and title, as well as a section containing multiple levels of curation, mirroring the Show Summary and Show More options of the Memory in Photos.
- **A single Album.** The number of sections depends on the Album size. A small Album yields a single section, but an Album with a large quantity of photos is broken down into sections based on Moments in the user’s Photo Library.
- **An existing Apple Book, Card, or Calendar.** The sections will match the pagination in that project; for example, a book will break down into one section per page.

## Topics

### Determining Section Contents

- [title](phprojectsection/title.md): The optional section title.
- [sectionContents](phprojectsection/sectioncontents.md): An array containing PHProjectionSessionContent objects.
- [PHProjectSectionContent](phprojectsectioncontent.md): An object containing section elements and layout information for a single level of curation.

### Defining the Section Type

- [sectionType](phprojectsection/sectiontype-swift.property.md): The intended usage of the section: cover, content, or auxiliary.
- [PHProjectSectionType](phprojectsection/sectiontype-swift.enum.md): The intended usage of the section: cover, content, or auxiliary.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### macOS Photos project extensions

- [Creating a Slideshow Project Extension for Photos](../photokit/creating-a-slideshow-project-extension-for-photos.md): Augment the macOS Photos app with extensions that support project creation.
- [PHProject](../photos/phproject.md): A representation of a Photos app project extension.
- [PHProjectInfo](phprojectinfo.md): Information about the project extension.
- [PHProjectExtensionContext](phprojectextensioncontext.md): An object that provides Photos project extensions with access to the underlying project, as well as to the user’s photo library for editing.
- [PHProjectElement](phprojectelement.md): The superclass for all element objects.
- [PHProjectRegionOfInterest](phprojectregionofinterest.md): A representation of a region of interest in a photo asset.
- [PHProjectChangeRequest](../photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
- [PHProjectCategory](phprojectcategory.md): A representation of Photos project extension categories.
