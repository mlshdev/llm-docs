> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nscollectionlayoutsection/sectionwithlistconfiguration:layoutenvironment:

# sectionWithListConfiguration:layoutEnvironment:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a list section with the specified list configuration and layout environment.

## Declaration

```objectivec
+ (instancetype) sectionWithListConfiguration:(UICollectionLayoutListConfiguration *) configuration layoutEnvironment:(id<NSCollectionLayoutEnvironment>) layoutEnvironment;
```

## See Also

### Creating a section

- [sectionWithGroup:](init%28group_%29.md): Creates a section containing the specified group.
- [orthogonalLayoutSectionForMediaItems](orthogonallayoutsectionformediaitems%28%29.md): Creates an orthogonally scrolling section with system default spacing.
