> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescriptioninvalidator](https://developer.apple.com/documentation/photosui/phprojecttypedescriptioninvalidator)

# PHProjectTypeDescriptionInvalidator (Swift)

**Framework:** PhotosUI  
**Kind:** Protocol  
**Availability:** macOS 10.14+

A protocol that you use to tell the project when and how to invalidate type and footer text.

## Declaration

```swift
protocol PHProjectTypeDescriptionInvalidator : NSObjectProtocol
```

<a id="overview"></a>

## Overview

An object adheres to this protocol to implement custom behavior when you invalidate project information, such as type description and footer text.

## Topics

### Invalidating a Project Type

- [invalidateTypeDescription(for:)](phprojecttypedescriptioninvalidator/invalidatetypedescription%28for_%29.md): Invalidates the type description for the given project type.
- [invalidateFooterText(forSubtypesOf:)](phprojecttypedescriptioninvalidator/invalidatefootertext%28forsubtypesof_%29.md): Invalidates the footer text for the subtypes of the given project type.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Determining Project Type

- [projectType](phprojectinfo/projecttype.md): The project type that the user selected from the project extension options.
- [PHProjectType](phprojecttype.md): The type descriptor of a project extension.
- [creationSource](phprojectinfo/creationsource-swift.property.md): The source from which the project was created.
- [sections](phprojectinfo/sections.md): An array of project sections, each containing one or more section content objects.
- [PHProjectTypeDescription](phprojecttypedescription.md): An extensible enumerator for [PHProjectType](phprojecttype.md) that’s presented to users in the project picker.
- [PHProjectTypeDescriptionDataSource](phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectInfo.CreationSource](phprojectinfo/creationsource-swift.enum.md): Defines the source of a project extension.

# PHProjectTypeDescriptionInvalidator (Objective-C)

**Framework:** PhotosUI  
**Kind:** Protocol  
**Availability:** macOS 10.14+

A protocol that you use to tell the project when and how to invalidate type and footer text.

## Declaration

```objectivec
@protocol PHProjectTypeDescriptionInvalidator <NSObject>
```

<a id="overview"></a>

## Overview

An object adheres to this protocol to implement custom behavior when you invalidate project information, such as type description and footer text.

## Topics

### Invalidating a Project Type

- [invalidateTypeDescriptionForProjectType:](phprojecttypedescriptioninvalidator/invalidatetypedescription%28for_%29.md): Invalidates the type description for the given project type.
- [invalidateFooterTextForSubtypesOfProjectType:](phprojecttypedescriptioninvalidator/invalidatefootertext%28forsubtypesof_%29.md): Invalidates the footer text for the subtypes of the given project type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Determining Project Type

- [projectType](phprojectinfo/projecttype.md): The project type that the user selected from the project extension options.
- [PHProjectType](phprojecttype.md): The type descriptor of a project extension.
- [creationSource](phprojectinfo/creationsource-swift.property.md): The source from which the project was created.
- [sections](phprojectinfo/sections.md): An array of project sections, each containing one or more section content objects.
- [PHProjectTypeDescription](phprojecttypedescription.md): An extensible enumerator for [PHProjectType](phprojecttype.md) that’s presented to users in the project picker.
- [PHProjectTypeDescriptionDataSource](phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectCreationSource](phprojectinfo/creationsource-swift.enum.md): Defines the source of a project extension.
