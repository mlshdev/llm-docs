> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescription/init(projecttype:title:attributeddescription:image:canprovidesubtypes:)](https://developer.apple.com/documentation/photosui/phprojecttypedescription/init(projecttype:title:attributeddescription:image:canprovidesubtypes:))

# init(projectType:title:attributedDescription:image:canProvideSubtypes:) (Swift)

**Framework:** PhotosUI  
**Kind:** Initializer  
**Availability:** macOS 10.14+

A designated initializer for project type descriptions with lazily fetched subtypes and an attributed description string.

## Declaration

```swift
init(projectType: PHProjectType, title localizedTitle: String, attributedDescription localizedAttributedDescription: NSAttributedString?, image: NSImage?, canProvideSubtypes: Bool)
```

## Parameters

- `projectType`: The type of project being described.
- `localizedTitle`: The localized title of the project type.
- `localizedAttributedDescription`: The localized attributed description of the project type.
- `image`: The image associated with the project type in the picker.
- `canProvideSubtypes`: A Boolean variable indicating whether subtypes can be fetched from the data source.

## See Also

### Creating a Project Type Description

- [init(projectType:title:description:image:)](init%28projecttype_title_description_image_%29.md): A convenience initializer without subtype descriptions.
- [init(projectType:title:description:image:subtypeDescriptions:)](init%28projecttype_title_description_image_subtypedescriptions_%29.md): A designated initializer for project type descriptions with the full subtype hierarchy specified up front and a standard string for description text.
- [init(projectType:title:attributedDescription:image:subtypeDescriptions:)](init%28projecttype_title_attributeddescription_image_subtypedescriptions_%29.md): A designated initializer for project type descriptions with the full subtype hierarchy specified up front and an attributed string for description text.
- [init(projectType:title:description:image:canProvideSubtypes:)](init%28projecttype_title_description_image_canprovidesubtypes_%29.md): A designated initializer for project type descriptions with lazily fetched subtypes and a standard description string.

# initWithProjectType:title:attributedDescription:image:canProvideSubtypes: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

A designated initializer for project type descriptions with lazily fetched subtypes and an attributed description string.

## Declaration

```objectivec
- (instancetype) initWithProjectType:(PHProjectType) projectType title:(NSString *) localizedTitle attributedDescription:(NSAttributedString *) localizedAttributedDescription image:(NSImage *) image canProvideSubtypes:(BOOL) canProvideSubtypes;
```

## Parameters

- `projectType`: The type of project being described.
- `localizedTitle`: The localized title of the project type.
- `localizedAttributedDescription`: The localized attributed description of the project type.
- `image`: The image associated with the project type in the picker.
- `canProvideSubtypes`: A Boolean variable indicating whether subtypes can be fetched from the data source.

## See Also

### Creating a Project Type Description

- [initWithProjectType:title:description:image:](init%28projecttype_title_description_image_%29.md): A convenience initializer without subtype descriptions.
- [initWithProjectType:title:description:image:subtypeDescriptions:](init%28projecttype_title_description_image_subtypedescriptions_%29.md): A designated initializer for project type descriptions with the full subtype hierarchy specified up front and a standard string for description text.
- [initWithProjectType:title:attributedDescription:image:subtypeDescriptions:](init%28projecttype_title_attributeddescription_image_subtypedescriptions_%29.md): A designated initializer for project type descriptions with the full subtype hierarchy specified up front and an attributed string for description text.
- [initWithProjectType:title:description:image:canProvideSubtypes:](init%28projecttype_title_description_image_canprovidesubtypes_%29.md): A designated initializer for project type descriptions with lazily fetched subtypes and a standard description string.
