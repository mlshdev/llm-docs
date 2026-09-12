> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectcategory](https://developer.apple.com/documentation/photosui/phprojectcategory)

# PHProjectCategory (Swift)

**Framework:** PhotosUI  
**Kind:** Structure  
**Availability:** macOS

A representation of Photos project extension categories.

## Declaration

```swift
struct PHProjectCategory
```

<a id="overview"></a>

## Overview

This structure encapsulates macOS Photos project extension categories. Use this category to designate the types of projects your extension can create, such as books, calendars, cards, and slideshows.

## Topics

### Creating a Project Category

- [init(rawValue:)](phprojectcategory/init%28rawvalue_%29.md): Intializes a project category from its raw string value.

### Designating Type Properties

- [book](phprojectcategory/book.md): The project category for a printed book.
- [calendar](phprojectcategory/calendar.md): The project category for a printed calendar.
- [card](phprojectcategory/card.md): The project category for a printed card.
- [prints](phprojectcategory/prints.md): The project category for physical prints.
- [slideshow](phprojectcategory/slideshow.md): The project category for a slideshow.
- [wallDecor](phprojectcategory/walldecor.md): The project category for wall décor.
- [other](phprojectcategory/other.md): The project category for a custom extension type.
- [undefined](phprojectcategory/undefined.md): An undefined project category.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### macOS Photos project extensions

- [Creating a Slideshow Project Extension for Photos](../photokit/creating-a-slideshow-project-extension-for-photos.md): Augment the macOS Photos app with extensions that support project creation.
- [PHProject](../photos/phproject.md): A representation of a Photos app project extension.
- [PHProjectInfo](phprojectinfo.md): Information about the project extension.
- [PHProjectExtensionContext](phprojectextensioncontext.md): An object that provides Photos project extensions with access to the underlying project, as well as to the user’s photo library for editing.
- [PHProjectElement](phprojectelement.md): The superclass for all element objects.
- [PHProjectSection](phprojectsection.md): A collection of content representing curated asset and text elements.
- [PHProjectRegionOfInterest](phprojectregionofinterest.md): A representation of a region of interest in a photo asset.
- [PHProjectChangeRequest](../photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.

# PHProjectCategory (Objective-C)

**Framework:** PhotosUI  
**Kind:** Type Alias  
**Availability:** macOS

A representation of Photos project extension categories.

## Declaration

```objectivec
typedef NSString * PHProjectCategory;
```

<a id="overview"></a>

## Overview

This structure encapsulates macOS Photos project extension categories. Use this category to designate the types of projects your extension can create, such as books, calendars, cards, and slideshows.

## Topics

### Designating Type Properties

- [PHProjectCategoryBook](phprojectcategory/book.md): The project category for a printed book.
- [PHProjectCategoryCalendar](phprojectcategory/calendar.md): The project category for a printed calendar.
- [PHProjectCategoryCard](phprojectcategory/card.md): The project category for a printed card.
- [PHProjectCategoryPrints](phprojectcategory/prints.md): The project category for physical prints.
- [PHProjectCategorySlideshow](phprojectcategory/slideshow.md): The project category for a slideshow.
- [PHProjectCategoryWallDecor](phprojectcategory/walldecor.md): The project category for wall décor.
- [PHProjectCategoryOther](phprojectcategory/other.md): The project category for a custom extension type.
- [PHProjectCategoryUndefined](phprojectcategory/undefined.md): An undefined project category.

## See Also

### macOS Photos project extensions

- [Creating a Slideshow Project Extension for Photos](../photokit/creating-a-slideshow-project-extension-for-photos.md): Augment the macOS Photos app with extensions that support project creation.
- [PHProject](../photos/phproject.md): A representation of a Photos app project extension.
- [PHProjectInfo](phprojectinfo.md): Information about the project extension.
- [PHProjectExtensionContext](phprojectextensioncontext.md): An object that provides Photos project extensions with access to the underlying project, as well as to the user’s photo library for editing.
- [PHProjectElement](phprojectelement.md): The superclass for all element objects.
- [PHProjectSection](phprojectsection.md): A collection of content representing curated asset and text elements.
- [PHProjectRegionOfInterest](phprojectregionofinterest.md): A representation of a region of interest in a photo asset.
- [PHProjectChangeRequest](../photos/phprojectchangerequest.md): A request to change asset data in a Photos project extension.
- [PHProjectExtensionController](phprojectextensioncontroller.md): A protocol defining the life cycle and supported types of project extensions.
