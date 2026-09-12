> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescriptiondatasource](https://developer.apple.com/documentation/photosui/phprojecttypedescriptiondatasource)

# PHProjectTypeDescriptionDataSource (Swift)

**Framework:** PhotosUI  
**Kind:** Protocol  
**Availability:** macOS 10.14+

A protocol that you use to provide the project with type description data.

## Declaration

```swift
protocol PHProjectTypeDescriptionDataSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

An object adheres to this protocol to provide a type description for your app’s Photos project extension. You must implement this protocol to provide subtypes, a description, and footer text. You can optionally respond to the system discarding the data source by implementing [extensionWillDiscardDataSource()](phprojecttypedescriptiondatasource/extensionwilldiscarddatasource%28%29.md).

## Topics

### Providing Required Fields

- [subtypes(for:)](phprojecttypedescriptiondatasource/subtypes%28for_%29.md): Provides the root-level project type descriptions and descriptions of any promised subtypes with [canProvideSubtypes](phprojecttypedescription/canprovidesubtypes.md) set to `true`.
- [typeDescription(for:)](phprojecttypedescriptiondatasource/typedescription%28for_%29.md): Provides the updated project type description for previously invalidated project types.
- [footerText(forSubtypesOf:)](phprojecttypedescriptiondatasource/footertext%28forsubtypesof_%29.md): Provides the footer text for the subtypes of the given project type.

### Responding to Removal

- [extensionWillDiscardDataSource()](phprojecttypedescriptiondatasource/extensionwilldiscarddatasource%28%29.md): Provides an opportunity to use the data source before it’s released.

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
- [PHProjectTypeDescriptionInvalidator](phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
- [PHProjectInfo.CreationSource](phprojectinfo/creationsource-swift.enum.md): Defines the source of a project extension.

# PHProjectTypeDescriptionDataSource (Objective-C)

**Framework:** PhotosUI  
**Kind:** Protocol  
**Availability:** macOS 10.14+

A protocol that you use to provide the project with type description data.

## Declaration

```objectivec
@protocol PHProjectTypeDescriptionDataSource <NSObject>
```

<a id="overview"></a>

## Overview

An object adheres to this protocol to provide a type description for your app’s Photos project extension. You must implement this protocol to provide subtypes, a description, and footer text. You can optionally respond to the system discarding the data source by implementing [extensionWillDiscardDataSource](phprojecttypedescriptiondatasource/extensionwilldiscarddatasource%28%29.md).

## Topics

### Providing Required Fields

- [subtypesForProjectType:](phprojecttypedescriptiondatasource/subtypes%28for_%29.md): Provides the root-level project type descriptions and descriptions of any promised subtypes with [canProvideSubtypes](phprojecttypedescription/canprovidesubtypes.md) set to `true`.
- [typeDescriptionForProjectType:](phprojecttypedescriptiondatasource/typedescription%28for_%29.md): Provides the updated project type description for previously invalidated project types.
- [footerTextForSubtypesOfProjectType:](phprojecttypedescriptiondatasource/footertext%28forsubtypesof_%29.md): Provides the footer text for the subtypes of the given project type.

### Responding to Removal

- [extensionWillDiscardDataSource](phprojecttypedescriptiondatasource/extensionwilldiscarddatasource%28%29.md): Provides an opportunity to use the data source before it’s released.

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
- [PHProjectTypeDescriptionInvalidator](phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
- [PHProjectCreationSource](phprojectinfo/creationsource-swift.enum.md): Defines the source of a project extension.
