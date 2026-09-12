> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescriptiondatasource/subtypes(for:)](https://developer.apple.com/documentation/photosui/phprojecttypedescriptiondatasource/subtypes(for:))

# subtypes(for:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Provides the root-level project type descriptions and descriptions of any promised subtypes with [canProvideSubtypes](../phprojecttypedescription/canprovidesubtypes.md) set to `true`.

## Declaration

```swift
func subtypes(for projectType: PHProjectType) -> [PHProjectTypeDescription]
```

## Parameters

- `projectType`: The project type whose subtypes are being requested. The value is [undefined](../phprojecttype/undefined.md) when fetching the root level.

<a id="return-value"></a>

## Return Value

An array of subtype descriptions for the queried project type.

## See Also

### Providing Required Fields

- [typeDescription(for:)](typedescription%28for_%29.md): Provides the updated project type description for previously invalidated project types.
- [footerText(forSubtypesOf:)](footertext%28forsubtypesof_%29.md): Provides the footer text for the subtypes of the given project type.

# subtypesForProjectType: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Provides the root-level project type descriptions and descriptions of any promised subtypes with [canProvideSubtypes](../phprojecttypedescription/canprovidesubtypes.md) set to `true`.

## Declaration

```objectivec
- (NSArray<PHProjectTypeDescription *> *) subtypesForProjectType:(PHProjectType) projectType;
```

## Parameters

- `projectType`: The project type whose subtypes are being requested. The value is [PHProjectTypeUndefined](../phprojecttype/undefined.md) when fetching the root level.

<a id="return-value"></a>

## Return Value

An array of subtype descriptions for the queried project type.

## See Also

### Providing Required Fields

- [typeDescriptionForProjectType:](typedescription%28for_%29.md): Provides the updated project type description for previously invalidated project types.
- [footerTextForSubtypesOfProjectType:](footertext%28forsubtypesof_%29.md): Provides the footer text for the subtypes of the given project type.
