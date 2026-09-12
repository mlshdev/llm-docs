> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectinfo/creationsource-swift.enum](https://developer.apple.com/documentation/photosui/phprojectinfo/creationsource-swift.enum)

# PHProjectInfo.CreationSource (Swift)

**Framework:** PhotosUI  
**Kind:** Enumeration  
**Availability:** macOS 10.13+

Defines the source of a project extension.

## Declaration

```swift
enum CreationSource
```

<a id="overview"></a>

## Overview

Each source represents a file type from which users can create a project extension.

## Topics

### Project Sources

- [PHProjectInfo.CreationSource.undefined](creationsource-swift.enum/undefined.md): An undefined project extension.
- [PHProjectInfo.CreationSource.userSelection](creationsource-swift.enum/userselection.md): A project extension created from a user selection of photos.
- [PHProjectInfo.CreationSource.album](creationsource-swift.enum/album.md): A project extension created from a photo album.
- [PHProjectInfo.CreationSource.memory](creationsource-swift.enum/memory.md): A project extension created from a memory.
- [PHProjectInfo.CreationSource.moment](creationsource-swift.enum/moment.md): A project extension created from a moment.
- [PHProjectInfo.CreationSource.project](creationsource-swift.enum/project.md): A project extension created from an existing Photos project.
- [PHProjectInfo.CreationSource.projectBook](creationsource-swift.enum/projectbook.md): A project extension created from a Photos project book.
- [PHProjectInfo.CreationSource.projectCalendar](creationsource-swift.enum/projectcalendar.md): A project extension created from a calendar.
- [PHProjectInfo.CreationSource.projectCard](creationsource-swift.enum/projectcard.md): A project extension created from a card.
- [PHProjectInfo.CreationSource.projectPrintOrder](creationsource-swift.enum/projectprintorder.md): A project extension created from a print order.
- [PHProjectInfo.CreationSource.projectSlideshow](creationsource-swift.enum/projectslideshow.md): A project slideshow extension.
- [PHProjectInfo.CreationSource.projectExtension](creationsource-swift.enum/projectextension.md): A project extension created from another project extension.

### Initializers

- [init(rawValue:)](creationsource-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining Project Type

- [projectType](projecttype.md): The project type that the user selected from the project extension options.
- [PHProjectType](../phprojecttype.md): The type descriptor of a project extension.
- [creationSource](creationsource-swift.property.md): The source from which the project was created.
- [sections](sections.md): An array of project sections, each containing one or more section content objects.
- [PHProjectTypeDescription](../phprojecttypedescription.md): An extensible enumerator for [PHProjectType](../phprojecttype.md) that’s presented to users in the project picker.
- [PHProjectTypeDescriptionDataSource](../phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectTypeDescriptionInvalidator](../phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.

# PHProjectCreationSource (Objective-C)

**Framework:** PhotosUI  
**Kind:** Enumeration  
**Availability:** macOS 10.13+

Defines the source of a project extension.

## Declaration

```objectivec
enum PHProjectCreationSource : NSInteger;
```

<a id="overview"></a>

## Overview

Each source represents a file type from which users can create a project extension.

## Topics

### Project Sources

- [PHProjectCreationSourceUndefined](creationsource-swift.enum/undefined.md): An undefined project extension.
- [PHProjectCreationSourceUserSelection](creationsource-swift.enum/userselection.md): A project extension created from a user selection of photos.
- [PHProjectCreationSourceAlbum](creationsource-swift.enum/album.md): A project extension created from a photo album.
- [PHProjectCreationSourceMemory](creationsource-swift.enum/memory.md): A project extension created from a memory.
- [PHProjectCreationSourceMoment](creationsource-swift.enum/moment.md): A project extension created from a moment.
- [PHProjectCreationSourceProject](creationsource-swift.enum/project.md): A project extension created from an existing Photos project.
- [PHProjectCreationSourceProjectBook](creationsource-swift.enum/projectbook.md): A project extension created from a Photos project book.
- [PHProjectCreationSourceProjectCalendar](creationsource-swift.enum/projectcalendar.md): A project extension created from a calendar.
- [PHProjectCreationSourceProjectCard](creationsource-swift.enum/projectcard.md): A project extension created from a card.
- [PHProjectCreationSourceProjectPrintOrder](creationsource-swift.enum/projectprintorder.md): A project extension created from a print order.
- [PHProjectCreationSourceProjectSlideshow](creationsource-swift.enum/projectslideshow.md): A project slideshow extension.
- [PHProjectCreationSourceProjectExtension](creationsource-swift.enum/projectextension.md): A project extension created from another project extension.

## See Also

### Determining Project Type

- [projectType](projecttype.md): The project type that the user selected from the project extension options.
- [PHProjectType](../phprojecttype.md): The type descriptor of a project extension.
- [creationSource](creationsource-swift.property.md): The source from which the project was created.
- [sections](sections.md): An array of project sections, each containing one or more section content objects.
- [PHProjectTypeDescription](../phprojecttypedescription.md): An extensible enumerator for [PHProjectType](../phprojecttype.md) that’s presented to users in the project picker.
- [PHProjectTypeDescriptionDataSource](../phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectTypeDescriptionInvalidator](../phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
