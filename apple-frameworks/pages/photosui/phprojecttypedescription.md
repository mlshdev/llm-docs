> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescription](https://developer.apple.com/documentation/photosui/phprojecttypedescription)

# PHProjectTypeDescription (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

An extensible enumerator for [PHProjectType](phprojecttype.md) that’s presented to users in the project picker.

## Declaration

```swift
class PHProjectTypeDescription
```

<a id="overview"></a>

## Overview

This object represents one project type choice presented in the project picker when a user is creating a project through project extensions. The [PHProjectTypeDescriptionDataSource](phprojecttypedescriptiondatasource.md) object returns this descriptor from [typeDescriptionDataSource(for:invalidator:)](phprojectextensioncontroller/typedescriptiondatasource%28for_invalidator_%29.md).

## Topics

### Creating a Project Type Description

- [init(projectType:title:description:image:)](phprojecttypedescription/init%28projecttype_title_description_image_%29.md): A convenience initializer without subtype descriptions.
- [init(projectType:title:description:image:subtypeDescriptions:)](phprojecttypedescription/init%28projecttype_title_description_image_subtypedescriptions_%29.md): A designated initializer for project type descriptions with the full subtype hierarchy specified up front and a standard string for description text.
- [init(projectType:title:attributedDescription:image:subtypeDescriptions:)](phprojecttypedescription/init%28projecttype_title_attributeddescription_image_subtypedescriptions_%29.md): A designated initializer for project type descriptions with the full subtype hierarchy specified up front and an attributed string for description text.
- [init(projectType:title:description:image:canProvideSubtypes:)](phprojecttypedescription/init%28projecttype_title_description_image_canprovidesubtypes_%29.md): A designated initializer for project type descriptions with lazily fetched subtypes and a standard description string.
- [init(projectType:title:attributedDescription:image:canProvideSubtypes:)](phprojecttypedescription/init%28projecttype_title_attributeddescription_image_canprovidesubtypes_%29.md): A designated initializer for project type descriptions with lazily fetched subtypes and an attributed description string.

### Describing a Project Type

- [projectType](phprojecttypedescription/projecttype.md): An identifier for the project type.
- [localizedTitle](phprojecttypedescription/localizedtitle.md): The localized title of the project type as shown to the user.
- [localizedDescription](phprojecttypedescription/localizeddescription.md): The localized description of the project type as shown to the user.
- [localizedAttributedDescription](phprojecttypedescription/localizedattributeddescription.md): The localized attributed description of the project type as shown to the user.
- [image](phprojecttypedescription/image.md): An optional image associated with the project type in the picker.
- [subtypeDescriptions](phprojecttypedescription/subtypedescriptions.md): An array of type descriptions used for subtype descriptions.
- [canProvideSubtypes](phprojecttypedescription/canprovidesubtypes.md): A Boolean variable indicating whether subtypes can be fetched from the data source.

### Initializers

- [init(coder:)](phprojecttypedescription/init%28coder_%29.md)

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

### Determining Project Type

- [projectType](phprojectinfo/projecttype.md): The project type that the user selected from the project extension options.
- [PHProjectType](phprojecttype.md): The type descriptor of a project extension.
- [creationSource](phprojectinfo/creationsource-swift.property.md): The source from which the project was created.
- [sections](phprojectinfo/sections.md): An array of project sections, each containing one or more section content objects.
- [PHProjectTypeDescriptionDataSource](phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectTypeDescriptionInvalidator](phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
- [PHProjectInfo.CreationSource](phprojectinfo/creationsource-swift.enum.md): Defines the source of a project extension.

# PHProjectTypeDescription (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

An extensible enumerator for [PHProjectType](phprojecttype.md) that’s presented to users in the project picker.

## Declaration

```objectivec
@interface PHProjectTypeDescription : NSObject
```

<a id="overview"></a>

## Overview

This object represents one project type choice presented in the project picker when a user is creating a project through project extensions. The [PHProjectTypeDescriptionDataSource](phprojecttypedescriptiondatasource.md) object returns this descriptor from [typeDescriptionDataSourceForCategory:invalidator:](phprojectextensioncontroller/typedescriptiondatasource%28for_invalidator_%29.md).

## Topics

### Creating a Project Type Description

- [initWithProjectType:title:description:image:](phprojecttypedescription/init%28projecttype_title_description_image_%29.md): A convenience initializer without subtype descriptions.
- [initWithProjectType:title:description:image:subtypeDescriptions:](phprojecttypedescription/init%28projecttype_title_description_image_subtypedescriptions_%29.md): A designated initializer for project type descriptions with the full subtype hierarchy specified up front and a standard string for description text.
- [initWithProjectType:title:attributedDescription:image:subtypeDescriptions:](phprojecttypedescription/init%28projecttype_title_attributeddescription_image_subtypedescriptions_%29.md): A designated initializer for project type descriptions with the full subtype hierarchy specified up front and an attributed string for description text.
- [initWithProjectType:title:description:image:canProvideSubtypes:](phprojecttypedescription/init%28projecttype_title_description_image_canprovidesubtypes_%29.md): A designated initializer for project type descriptions with lazily fetched subtypes and a standard description string.
- [initWithProjectType:title:attributedDescription:image:canProvideSubtypes:](phprojecttypedescription/init%28projecttype_title_attributeddescription_image_canprovidesubtypes_%29.md): A designated initializer for project type descriptions with lazily fetched subtypes and an attributed description string.

### Describing a Project Type

- [projectType](phprojecttypedescription/projecttype.md): An identifier for the project type.
- [localizedTitle](phprojecttypedescription/localizedtitle.md): The localized title of the project type as shown to the user.
- [localizedDescription](phprojecttypedescription/localizeddescription.md): The localized description of the project type as shown to the user.
- [localizedAttributedDescription](phprojecttypedescription/localizedattributeddescription.md): The localized attributed description of the project type as shown to the user.
- [image](phprojecttypedescription/image.md): An optional image associated with the project type in the picker.
- [subtypeDescriptions](phprojecttypedescription/subtypedescriptions.md): An array of type descriptions used for subtype descriptions.
- [canProvideSubtypes](phprojecttypedescription/canprovidesubtypes.md): A Boolean variable indicating whether subtypes can be fetched from the data source.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Determining Project Type

- [projectType](phprojectinfo/projecttype.md): The project type that the user selected from the project extension options.
- [PHProjectType](phprojecttype.md): The type descriptor of a project extension.
- [creationSource](phprojectinfo/creationsource-swift.property.md): The source from which the project was created.
- [sections](phprojectinfo/sections.md): An array of project sections, each containing one or more section content objects.
- [PHProjectTypeDescriptionDataSource](phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectTypeDescriptionInvalidator](phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
- [PHProjectCreationSource](phprojectinfo/creationsource-swift.enum.md): Defines the source of a project extension.
