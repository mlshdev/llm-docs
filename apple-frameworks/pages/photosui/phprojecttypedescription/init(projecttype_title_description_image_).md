> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescription/init(projecttype:title:description:image:)](https://developer.apple.com/documentation/photosui/phprojecttypedescription/init(projecttype:title:description:image:))

# init(projectType:title:description:image:) (Swift)

**Framework:** PhotosUI  
**Kind:** Initializer  
**Availability:** macOS 10.13+

A convenience initializer without subtype descriptions.

## Declaration

```swift
convenience init(projectType: PHProjectType, title localizedTitle: String, description localizedDescription: String?, image: NSImage?)
```

## Parameters

- `projectType`: The type of project being described.
- `localizedTitle`: The localized title of the project type.
- `localizedDescription`: The localized attributed description of the project type.
- `image`: The image associated with the project type in the picker.

## See Also

### Creating a Project Type Description

- [init(projectType:title:description:image:subtypeDescriptions:)](init%28projecttype_title_description_image_subtypedescriptions_%29.md): A designated initializer for project type descriptions with the full subtype hierarchy specified up front and a standard string for description text.
- [init(projectType:title:attributedDescription:image:subtypeDescriptions:)](init%28projecttype_title_attributeddescription_image_subtypedescriptions_%29.md): A designated initializer for project type descriptions with the full subtype hierarchy specified up front and an attributed string for description text.
- [init(projectType:title:description:image:canProvideSubtypes:)](init%28projecttype_title_description_image_canprovidesubtypes_%29.md): A designated initializer for project type descriptions with lazily fetched subtypes and a standard description string.
- [init(projectType:title:attributedDescription:image:canProvideSubtypes:)](init%28projecttype_title_attributeddescription_image_canprovidesubtypes_%29.md): A designated initializer for project type descriptions with lazily fetched subtypes and an attributed description string.

# initWithProjectType:title:description:image: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

A convenience initializer without subtype descriptions.

## Declaration

```objectivec
- (instancetype) initWithProjectType:(PHProjectType) projectType title:(NSString *) localizedTitle description:(NSString *) localizedDescription image:(NSImage *) image;
```

## Parameters

- `projectType`: The type of project being described.
- `localizedTitle`: The localized title of the project type.
- `localizedDescription`: The localized attributed description of the project type.
- `image`: The image associated with the project type in the picker.

## See Also

### Creating a Project Type Description

- [initWithProjectType:title:description:image:subtypeDescriptions:](init%28projecttype_title_description_image_subtypedescriptions_%29.md): A designated initializer for project type descriptions with the full subtype hierarchy specified up front and a standard string for description text.
- [initWithProjectType:title:attributedDescription:image:subtypeDescriptions:](init%28projecttype_title_attributeddescription_image_subtypedescriptions_%29.md): A designated initializer for project type descriptions with the full subtype hierarchy specified up front and an attributed string for description text.
- [initWithProjectType:title:description:image:canProvideSubtypes:](init%28projecttype_title_description_image_canprovidesubtypes_%29.md): A designated initializer for project type descriptions with lazily fetched subtypes and a standard description string.
- [initWithProjectType:title:attributedDescription:image:canProvideSubtypes:](init%28projecttype_title_attributeddescription_image_canprovidesubtypes_%29.md): A designated initializer for project type descriptions with lazily fetched subtypes and an attributed description string.
