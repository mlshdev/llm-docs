> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescription/localizedattributeddescription](https://developer.apple.com/documentation/photosui/phprojecttypedescription/localizedattributeddescription)

# localizedAttributedDescription (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

The localized attributed description of the project type as shown to the user.

## Declaration

```swift
@NSCopying var localizedAttributedDescription: NSAttributedString? { get }
```

<a id="Discussion"></a>

## Discussion

The attributed description is optional. If you don’t provide one, it defaults to the standard nonattributed description.

## See Also

### Describing a Project Type

- [projectType](projecttype.md): An identifier for the project type.
- [localizedTitle](localizedtitle.md): The localized title of the project type as shown to the user.
- [localizedDescription](localizeddescription.md): The localized description of the project type as shown to the user.
- [image](image.md): An optional image associated with the project type in the picker.
- [subtypeDescriptions](subtypedescriptions.md): An array of type descriptions used for subtype descriptions.
- [canProvideSubtypes](canprovidesubtypes.md): A Boolean variable indicating whether subtypes can be fetched from the data source.

# localizedAttributedDescription (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

The localized attributed description of the project type as shown to the user.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSAttributedString * localizedAttributedDescription;
```

<a id="Discussion"></a>

## Discussion

The attributed description is optional. If you don’t provide one, it defaults to the standard nonattributed description.

## See Also

### Describing a Project Type

- [projectType](projecttype.md): An identifier for the project type.
- [localizedTitle](localizedtitle.md): The localized title of the project type as shown to the user.
- [localizedDescription](localizeddescription.md): The localized description of the project type as shown to the user.
- [image](image.md): An optional image associated with the project type in the picker.
- [subtypeDescriptions](subtypedescriptions.md): An array of type descriptions used for subtype descriptions.
- [canProvideSubtypes](canprovidesubtypes.md): A Boolean variable indicating whether subtypes can be fetched from the data source.
