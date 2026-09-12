> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescription/subtypedescriptions](https://developer.apple.com/documentation/photosui/phprojecttypedescription/subtypedescriptions)

# subtypeDescriptions (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An array of type descriptions used for subtype descriptions.

## Declaration

```swift
var subtypeDescriptions: [PHProjectTypeDescription] { get }
```

<a id="Discussion"></a>

## Discussion

This array may be empty.

## See Also

### Describing a Project Type

- [projectType](projecttype.md): An identifier for the project type.
- [localizedTitle](localizedtitle.md): The localized title of the project type as shown to the user.
- [localizedDescription](localizeddescription.md): The localized description of the project type as shown to the user.
- [localizedAttributedDescription](localizedattributeddescription.md): The localized attributed description of the project type as shown to the user.
- [image](image.md): An optional image associated with the project type in the picker.
- [canProvideSubtypes](canprovidesubtypes.md): A Boolean variable indicating whether subtypes can be fetched from the data source.

# subtypeDescriptions (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An array of type descriptions used for subtype descriptions.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<PHProjectTypeDescription *> * subtypeDescriptions;
```

<a id="Discussion"></a>

## Discussion

This array may be empty.

## See Also

### Describing a Project Type

- [projectType](projecttype.md): An identifier for the project type.
- [localizedTitle](localizedtitle.md): The localized title of the project type as shown to the user.
- [localizedDescription](localizeddescription.md): The localized description of the project type as shown to the user.
- [localizedAttributedDescription](localizedattributeddescription.md): The localized attributed description of the project type as shown to the user.
- [image](image.md): An optional image associated with the project type in the picker.
- [canProvideSubtypes](canprovidesubtypes.md): A Boolean variable indicating whether subtypes can be fetched from the data source.
