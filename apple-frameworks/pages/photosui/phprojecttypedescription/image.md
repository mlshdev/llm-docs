> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescription/image](https://developer.apple.com/documentation/photosui/phprojecttypedescription/image)

# image (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An optional image associated with the project type in the picker.

## Declaration

```swift
@NSCopying var image: NSImage? { get }
```

<a id="Discussion"></a>

## Discussion

PNG images with transparent backgrounds are recommended.

## See Also

### Describing a Project Type

- [projectType](projecttype.md): An identifier for the project type.
- [localizedTitle](localizedtitle.md): The localized title of the project type as shown to the user.
- [localizedDescription](localizeddescription.md): The localized description of the project type as shown to the user.
- [localizedAttributedDescription](localizedattributeddescription.md): The localized attributed description of the project type as shown to the user.
- [subtypeDescriptions](subtypedescriptions.md): An array of type descriptions used for subtype descriptions.
- [canProvideSubtypes](canprovidesubtypes.md): A Boolean variable indicating whether subtypes can be fetched from the data source.

# image (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An optional image associated with the project type in the picker.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSImage * image;
```

<a id="Discussion"></a>

## Discussion

PNG images with transparent backgrounds are recommended.

## See Also

### Describing a Project Type

- [projectType](projecttype.md): An identifier for the project type.
- [localizedTitle](localizedtitle.md): The localized title of the project type as shown to the user.
- [localizedDescription](localizeddescription.md): The localized description of the project type as shown to the user.
- [localizedAttributedDescription](localizedattributeddescription.md): The localized attributed description of the project type as shown to the user.
- [subtypeDescriptions](subtypedescriptions.md): An array of type descriptions used for subtype descriptions.
- [canProvideSubtypes](canprovidesubtypes.md): A Boolean variable indicating whether subtypes can be fetched from the data source.
