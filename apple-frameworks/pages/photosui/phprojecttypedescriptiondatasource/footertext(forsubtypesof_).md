> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescriptiondatasource/footertext(forsubtypesof:)](https://developer.apple.com/documentation/photosui/phprojecttypedescriptiondatasource/footertext(forsubtypesof:))

# footerText(forSubtypesOf:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Provides the footer text for the subtypes of the given project type.

## Declaration

```swift
func footerText(forSubtypesOf projectType: PHProjectType) -> NSAttributedString?
```

## Parameters

- `projectType`: The project type whose footer text is being requested. The value is [undefined](../phprojecttype/undefined.md) when fetching footer text at the root level.

<a id="return-value"></a>

## Return Value

Attributed footer text for the queried project type.

## See Also

### Providing Required Fields

- [subtypes(for:)](subtypes%28for_%29.md): Provides the root-level project type descriptions and descriptions of any promised subtypes with [canProvideSubtypes](../phprojecttypedescription/canprovidesubtypes.md) set to `true`.
- [typeDescription(for:)](typedescription%28for_%29.md): Provides the updated project type description for previously invalidated project types.

# footerTextForSubtypesOfProjectType: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Provides the footer text for the subtypes of the given project type.

## Declaration

```objectivec
- (NSAttributedString *) footerTextForSubtypesOfProjectType:(PHProjectType) projectType;
```

## Parameters

- `projectType`: The project type whose footer text is being requested. The value is [PHProjectTypeUndefined](../phprojecttype/undefined.md) when fetching footer text at the root level.

<a id="return-value"></a>

## Return Value

Attributed footer text for the queried project type.

## See Also

### Providing Required Fields

- [subtypesForProjectType:](subtypes%28for_%29.md): Provides the root-level project type descriptions and descriptions of any promised subtypes with [canProvideSubtypes](../phprojecttypedescription/canprovidesubtypes.md) set to `true`.
- [typeDescriptionForProjectType:](typedescription%28for_%29.md): Provides the updated project type description for previously invalidated project types.
