> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescriptiondatasource/typedescription(for:)](https://developer.apple.com/documentation/photosui/phprojecttypedescriptiondatasource/typedescription(for:))

# typeDescription(for:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Provides the updated project type description for previously invalidated project types.

## Declaration

```swift
func typeDescription(for projectType: PHProjectType) -> PHProjectTypeDescription?
```

## Parameters

- `projectType`: The previously invalidated project type whose type description is being requested.

<a id="return-value"></a>

## Return Value

The [PHProjectTypeDescription](../phprojecttypedescription.md) for the given project type.  The returned description’s project type must match the given project type.

## See Also

### Providing Required Fields

- [subtypes(for:)](subtypes%28for_%29.md): Provides the root-level project type descriptions and descriptions of any promised subtypes with [canProvideSubtypes](../phprojecttypedescription/canprovidesubtypes.md) set to `true`.
- [footerText(forSubtypesOf:)](footertext%28forsubtypesof_%29.md): Provides the footer text for the subtypes of the given project type.

# typeDescriptionForProjectType: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Provides the updated project type description for previously invalidated project types.

## Declaration

```objectivec
- (PHProjectTypeDescription *) typeDescriptionForProjectType:(PHProjectType) projectType;
```

## Parameters

- `projectType`: The previously invalidated project type whose type description is being requested.

<a id="return-value"></a>

## Return Value

The [PHProjectTypeDescription](../phprojecttypedescription.md) for the given project type.  The returned description’s project type must match the given project type.

## See Also

### Providing Required Fields

- [subtypesForProjectType:](subtypes%28for_%29.md): Provides the root-level project type descriptions and descriptions of any promised subtypes with [canProvideSubtypes](../phprojecttypedescription/canprovidesubtypes.md) set to `true`.
- [footerTextForSubtypesOfProjectType:](footertext%28forsubtypesof_%29.md): Provides the footer text for the subtypes of the given project type.
