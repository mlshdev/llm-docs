> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescriptioninvalidator/invalidatetypedescription(for:)](https://developer.apple.com/documentation/photosui/phprojecttypedescriptioninvalidator/invalidatetypedescription(for:))

# invalidateTypeDescription(for:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Invalidates the type description for the given project type.

## Declaration

```swift
func invalidateTypeDescription(for projectType: PHProjectType)
```

## Parameters

- `projectType`: The project type to invalidate.

<a id="Discussion"></a>

## Discussion

If you call this method for project types other than [undefined](../phprojecttype/undefined.md), you must implement [typeDescription(for:)](../phprojecttypedescriptiondatasource/typedescription%28for_%29.md) with functionality for the invalidated project type.

## See Also

### Invalidating a Project Type

- [invalidateFooterText(forSubtypesOf:)](invalidatefootertext%28forsubtypesof_%29.md): Invalidates the footer text for the subtypes of the given project type.

# invalidateTypeDescriptionForProjectType: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Invalidates the type description for the given project type.

## Declaration

```objectivec
- (void) invalidateTypeDescriptionForProjectType:(PHProjectType) projectType;
```

## Parameters

- `projectType`: The project type to invalidate.

<a id="Discussion"></a>

## Discussion

If you call this method for project types other than [PHProjectTypeUndefined](../phprojecttype/undefined.md), you must implement [typeDescriptionForProjectType:](../phprojecttypedescriptiondatasource/typedescription%28for_%29.md) with functionality for the invalidated project type.

## See Also

### Invalidating a Project Type

- [invalidateFooterTextForSubtypesOfProjectType:](invalidatefootertext%28forsubtypesof_%29.md): Invalidates the footer text for the subtypes of the given project type.
