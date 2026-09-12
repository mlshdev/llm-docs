> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectinfo/projecttype](https://developer.apple.com/documentation/photosui/phprojectinfo/projecttype)

# projectType (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The project type that the user selected from the project extension options.

## Declaration

```swift
var projectType: PHProjectType { get }
```

<a id="Discussion"></a>

## Discussion

See the [PHProjectExtensionController](../phprojectextensioncontroller.md) protocol for more information on configuring the options.

## See Also

### Determining Project Type

- [PHProjectType](../phprojecttype.md): The type descriptor of a project extension.
- [creationSource](creationsource-swift.property.md): The source from which the project was created.
- [sections](sections.md): An array of project sections, each containing one or more section content objects.
- [PHProjectTypeDescription](../phprojecttypedescription.md): An extensible enumerator for [PHProjectType](../phprojecttype.md) that’s presented to users in the project picker.
- [PHProjectTypeDescriptionDataSource](../phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectTypeDescriptionInvalidator](../phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
- [PHProjectInfo.CreationSource](creationsource-swift.enum.md): Defines the source of a project extension.

# projectType (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The project type that the user selected from the project extension options.

## Declaration

```objectivec
@property (nonatomic, readonly) PHProjectType projectType;
```

<a id="Discussion"></a>

## Discussion

See the [PHProjectExtensionController](../phprojectextensioncontroller.md) protocol for more information on configuring the options.

## See Also

### Determining Project Type

- [PHProjectType](../phprojecttype.md): The type descriptor of a project extension.
- [creationSource](creationsource-swift.property.md): The source from which the project was created.
- [sections](sections.md): An array of project sections, each containing one or more section content objects.
- [PHProjectTypeDescription](../phprojecttypedescription.md): An extensible enumerator for [PHProjectType](../phprojecttype.md) that’s presented to users in the project picker.
- [PHProjectTypeDescriptionDataSource](../phprojecttypedescriptiondatasource.md): A protocol that you use to provide the project with type description data.
- [PHProjectTypeDescriptionInvalidator](../phprojecttypedescriptioninvalidator.md): A protocol that you use to tell the project when and how to invalidate type and footer text.
- [PHProjectCreationSource](creationsource-swift.enum.md): Defines the source of a project extension.
