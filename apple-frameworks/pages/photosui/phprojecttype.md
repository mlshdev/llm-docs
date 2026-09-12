> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttype](https://developer.apple.com/documentation/photosui/phprojecttype)

# PHProjectType (Swift)

**Framework:** PhotosUI  
**Kind:** Structure  
**Availability:** macOS

The type descriptor of a project extension.

## Declaration

```swift
struct PHProjectType
```

## Topics

### Initializing a Project Type

- [init(\_:)](phprojecttype/init%28__%29.md): Initializes a project type from a string.
- [init(rawValue:)](phprojecttype/init%28rawvalue_%29.md): Initializes a project type from its raw string value.

### Defining a Project Type

- [undefined](phprojecttype/undefined.md): An undefined project type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining Project Type

- [projectType](phprojectinfo/projecttype.md): The project type that the user selected from the project extension options.
- [creationSource](phprojectinfo/creationsource-swift.property.md): The source from which the project was created.
- [sections](phprojectinfo/sections.md): An array of project sections, each containing one or more section content objects.
- [PHProjectTypeDescription](phprojecttypedescription.md): An extensible enumerator for [PHProjectType](phprojecttype.md) that’s presented to users in the project picker.
- [PHProjectTypeDescriptionDataSource](phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectTypeDescriptionInvalidator](phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
- [PHProjectInfo.CreationSource](phprojectinfo/creationsource-swift.enum.md): Defines the source of a project extension.

# PHProjectType (Objective-C)

**Framework:** PhotosUI  
**Kind:** Type Alias  
**Availability:** macOS

The type descriptor of a project extension.

## Declaration

```objectivec
typedef NSString * PHProjectType;
```

## Topics

### Defining a Project Type

- [PHProjectTypeUndefined](phprojecttype/undefined.md): An undefined project type.

## See Also

### Determining Project Type

- [projectType](phprojectinfo/projecttype.md): The project type that the user selected from the project extension options.
- [creationSource](phprojectinfo/creationsource-swift.property.md): The source from which the project was created.
- [sections](phprojectinfo/sections.md): An array of project sections, each containing one or more section content objects.
- [PHProjectTypeDescription](phprojecttypedescription.md): An extensible enumerator for [PHProjectType](phprojecttype.md) that’s presented to users in the project picker.
- [PHProjectTypeDescriptionDataSource](phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectTypeDescriptionInvalidator](phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
- [PHProjectCreationSource](phprojectinfo/creationsource-swift.enum.md): Defines the source of a project extension.
