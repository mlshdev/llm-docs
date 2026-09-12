> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectregionofinterest](https://developer.apple.com/documentation/photosui/phprojectregionofinterest)

# PHProjectRegionOfInterest (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

A representation of a region of interest in a photo asset.

## Declaration

```swift
class PHProjectRegionOfInterest
```

<a id="overview"></a>

## Overview

A region of interest defines a rectangular portion of a photo corresponding to a face. Use a region of interest to determine where to focus, zoom, or crop your image in your project extension; for example, you can customize your slideshow’s transitions based on each photo’s highest-quality region of interest, as shown in [Creating a Slideshow Project Extension for Photos](../photokit/creating-a-slideshow-project-extension-for-photos.md).

## Topics

### Identifying Regions of Interest

- [PHProjectRegionOfInterest.Identifier](phprojectregionofinterest/identifier-swift.struct.md): A descriptor identifying a region of interest.

### Determining Region Properties

- [rect](phprojectregionofinterest/rect.md): The rectangle representing the region’s location.
- [identifier](phprojectregionofinterest/identifier-swift.property.md): The region’s unique identifier.
- [weight](phprojectregionofinterest/weight.md): The face region’s weight.
- [quality](phprojectregionofinterest/quality.md): The region’s quality.

### Initializers

- [init(coder:)](phprojectregionofinterest/init%28coder_%29.md)

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

## See Also

### macOS Photos project extensions

- [Creating a Slideshow Project Extension for Photos](../photokit/creating-a-slideshow-project-extension-for-photos.md): Augment the macOS Photos app with extensions that support project creation.
- [PHProject](../photos/phproject.md): A representation of a Photos app project extension.
- [PHProjectInfo](phprojectinfo.md): Information about the project extension.
- [PHProjectExtensionContext](phprojectextensioncontext.md): An object that provides Photos project extensions with access to the underlying project, as well as to the user’s photo library for editing.
- [PHProjectElement](phprojectelement.md): The superclass for all element objects.
- [PHProjectSection](phprojectsection.md): A collection of content representing curated asset and text elements.
- [PHProjectChangeRequest](../photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
- [PHProjectCategory](phprojectcategory.md): A representation of Photos project extension categories.

# PHProjectRegionOfInterest (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

A representation of a region of interest in a photo asset.

## Declaration

```objectivec
@interface PHProjectRegionOfInterest : NSObject
```

<a id="overview"></a>

## Overview

A region of interest defines a rectangular portion of a photo corresponding to a face. Use a region of interest to determine where to focus, zoom, or crop your image in your project extension; for example, you can customize your slideshow’s transitions based on each photo’s highest-quality region of interest, as shown in [Creating a Slideshow Project Extension for Photos](../photokit/creating-a-slideshow-project-extension-for-photos.md).

## Topics

### Identifying Regions of Interest

- [PHProjectRegionOfInterestIdentifier](phprojectregionofinterest/identifier-swift.struct.md): A descriptor identifying a region of interest.

### Determining Region Properties

- [rect](phprojectregionofinterest/rect.md): The rectangle representing the region’s location.
- [identifier](phprojectregionofinterest/identifier-swift.property.md): The region’s unique identifier.
- [weight](phprojectregionofinterest/weight.md): The face region’s weight.
- [quality](phprojectregionofinterest/quality.md): The region’s quality.

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
- [PHProjectSection](phprojectsection.md): A collection of content representing curated asset and text elements.
- [PHProjectChangeRequest](../photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
- [PHProjectCategory](phprojectcategory.md): A representation of Photos project extension categories.
