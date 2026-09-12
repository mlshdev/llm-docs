> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescriptioninvalidator/invalidatefootertext(forsubtypesof:)](https://developer.apple.com/documentation/photosui/phprojecttypedescriptioninvalidator/invalidatefootertext(forsubtypesof:))

# invalidateFooterText(forSubtypesOf:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Invalidates the footer text for the subtypes of the given project type.

## Declaration

```swift
func invalidateFooterText(forSubtypesOf projectType: PHProjectType)
```

## Parameters

- `projectType`: The project type whose subtypes you’d like to invalidate.

<a id="Discussion"></a>

## Discussion

Use [undefined](../phprojecttype/undefined.md) to invalidate the root-level footer text.

## See Also

### Invalidating a Project Type

- [invalidateTypeDescription(for:)](invalidatetypedescription%28for_%29.md): Invalidates the type description for the given project type.

# invalidateFooterTextForSubtypesOfProjectType: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Invalidates the footer text for the subtypes of the given project type.

## Declaration

```objectivec
- (void) invalidateFooterTextForSubtypesOfProjectType:(PHProjectType) projectType;
```

## Parameters

- `projectType`: The project type whose subtypes you’d like to invalidate.

<a id="Discussion"></a>

## Discussion

Use [PHProjectTypeUndefined](../phprojecttype/undefined.md) to invalidate the root-level footer text.

## See Also

### Invalidating a Project Type

- [invalidateTypeDescriptionForProjectType:](invalidatetypedescription%28for_%29.md): Invalidates the type description for the given project type.
