> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectelement](https://developer.apple.com/documentation/photosui/phprojectelement)

# PHProjectElement (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

The superclass for all element objects.

## Declaration

```swift
class PHProjectElement
```

<a id="overview"></a>

## Overview

You should never use this class directly; opt instead for one of its subclasses. It defines the shared properties of any element in an instance of [PHProjectSectionContent](phprojectsectioncontent.md).

## Topics

### Subclassing Project Elements

- [PHProjectAssetElement](phprojectassetelement.md): An element that represents a media asset within project section content.
- [PHProjectTextElement](phprojecttextelement.md): An element that represents text within project section content.
- [PHProjectJournalEntryElement](phprojectjournalentryelement.md): An element that represents a journal entry within project section content.
- [PHProjectMapElement](phprojectmapelement.md): An element that represents a map within project section content.

### Describing Project Elements

- [weight](phprojectelement/weight.md): A value between 0 and 1 representing relative significance of the element in its section.
- [placement](phprojectelement/placement.md): A rectangle defining where an element is placed in grid space coordinates.

### Initializers

- [init(coder:)](phprojectelement/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHProjectAssetElement](phprojectassetelement.md)
- [PHProjectJournalEntryElement](phprojectjournalentryelement.md)
- [PHProjectMapElement](phprojectmapelement.md)
- [PHProjectTextElement](phprojecttextelement.md)

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
- [PHProjectSection](phprojectsection.md): A collection of content representing curated asset and text elements.
- [PHProjectRegionOfInterest](phprojectregionofinterest.md): A representation of a region of interest in a photo asset.
- [PHProjectChangeRequest](../photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
- [PHProjectCategory](phprojectcategory.md): A representation of Photos project extension categories.

# PHProjectElement (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

The superclass for all element objects.

## Declaration

```objectivec
@interface PHProjectElement : NSObject
```

<a id="overview"></a>

## Overview

You should never use this class directly; opt instead for one of its subclasses. It defines the shared properties of any element in an instance of [PHProjectSectionContent](phprojectsectioncontent.md).

## Topics

### Subclassing Project Elements

- [PHProjectAssetElement](phprojectassetelement.md): An element that represents a media asset within project section content.
- [PHProjectTextElement](phprojecttextelement.md): An element that represents text within project section content.
- [PHProjectJournalEntryElement](phprojectjournalentryelement.md): An element that represents a journal entry within project section content.
- [PHProjectMapElement](phprojectmapelement.md): An element that represents a map within project section content.

### Describing Project Elements

- [weight](phprojectelement/weight.md): A value between 0 and 1 representing relative significance of the element in its section.
- [placement](phprojectelement/placement.md): A rectangle defining where an element is placed in grid space coordinates.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHProjectAssetElement](phprojectassetelement.md)
- [PHProjectJournalEntryElement](phprojectjournalentryelement.md)
- [PHProjectMapElement](phprojectmapelement.md)
- [PHProjectTextElement](phprojecttextelement.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### macOS Photos project extensions

- [Creating a Slideshow Project Extension for Photos](../photokit/creating-a-slideshow-project-extension-for-photos.md): Augment the macOS Photos app with extensions that support project creation.
- [PHProject](../photos/phproject.md): A representation of a Photos app project extension.
- [PHProjectInfo](phprojectinfo.md): Information about the project extension.
- [PHProjectExtensionContext](phprojectextensioncontext.md): An object that provides Photos project extensions with access to the underlying project, as well as to the user’s photo library for editing.
- [PHProjectSection](phprojectsection.md): A collection of content representing curated asset and text elements.
- [PHProjectRegionOfInterest](phprojectregionofinterest.md): A representation of a region of interest in a photo asset.
- [PHProjectChangeRequest](../photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
- [PHProjectCategory](phprojectcategory.md): A representation of Photos project extension categories.
