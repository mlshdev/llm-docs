> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescription/canprovidesubtypes](https://developer.apple.com/documentation/photosui/phprojecttypedescription/canprovidesubtypes)

# canProvideSubtypes (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

A Boolean variable indicating whether subtypes can be fetched from the data source.

## Declaration

```swift
var canProvideSubtypes: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value is `true` if [subtypeDescriptions](subtypedescriptions.md) is not empty.

## See Also

### Describing a Project Type

- [projectType](projecttype.md): An identifier for the project type.
- [localizedTitle](localizedtitle.md): The localized title of the project type as shown to the user.
- [localizedDescription](localizeddescription.md): The localized description of the project type as shown to the user.
- [localizedAttributedDescription](localizedattributeddescription.md): The localized attributed description of the project type as shown to the user.
- [image](image.md): An optional image associated with the project type in the picker.
- [subtypeDescriptions](subtypedescriptions.md): An array of type descriptions used for subtype descriptions.

# canProvideSubtypes (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

A Boolean variable indicating whether subtypes can be fetched from the data source.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canProvideSubtypes;
```

<a id="Discussion"></a>

## Discussion

The value is `true` if [subtypeDescriptions](subtypedescriptions.md) is not empty.

## See Also

### Describing a Project Type

- [projectType](projecttype.md): An identifier for the project type.
- [localizedTitle](localizedtitle.md): The localized title of the project type as shown to the user.
- [localizedDescription](localizeddescription.md): The localized description of the project type as shown to the user.
- [localizedAttributedDescription](localizedattributeddescription.md): The localized attributed description of the project type as shown to the user.
- [image](image.md): An optional image associated with the project type in the picker.
- [subtypeDescriptions](subtypedescriptions.md): An array of type descriptions used for subtype descriptions.
