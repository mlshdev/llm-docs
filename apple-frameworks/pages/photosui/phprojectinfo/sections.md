> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectinfo/sections](https://developer.apple.com/documentation/photosui/phprojectinfo/sections)

# sections (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An array of project sections, each containing one or more section content objects.

## Declaration

```swift
var sections: [PHProjectSection] { get }
```

## See Also

### Determining Project Type

- [projectType](projecttype.md): The project type that the user selected from the project extension options.
- [PHProjectType](../phprojecttype.md): The type descriptor of a project extension.
- [creationSource](creationsource-swift.property.md): The source from which the project was created.
- [PHProjectTypeDescription](../phprojecttypedescription.md): An extensible enumerator for [PHProjectType](../phprojecttype.md) that’s presented to users in the project picker.
- [PHProjectTypeDescriptionDataSource](../phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectTypeDescriptionInvalidator](../phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
- [PHProjectInfo.CreationSource](creationsource-swift.enum.md): Defines the source of a project extension.

# sections (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An array of project sections, each containing one or more section content objects.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<PHProjectSection *> * sections;
```

## See Also

### Determining Project Type

- [projectType](projecttype.md): The project type that the user selected from the project extension options.
- [PHProjectType](../phprojecttype.md): The type descriptor of a project extension.
- [creationSource](creationsource-swift.property.md): The source from which the project was created.
- [PHProjectTypeDescription](../phprojecttypedescription.md): An extensible enumerator for [PHProjectType](../phprojecttype.md) that’s presented to users in the project picker.
- [PHProjectTypeDescriptionDataSource](../phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectTypeDescriptionInvalidator](../phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
- [PHProjectCreationSource](creationsource-swift.enum.md): Defines the source of a project extension.
