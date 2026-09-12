> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutsection/list(using:layoutenvironment:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutsection/list(using:layoutenvironment:))

# list(using:layoutEnvironment:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a list section with the specified list configuration and layout environment.

## Declaration

```swift
@MainActor @preconcurrency static func list(using configuration: UICollectionLayoutListConfiguration, layoutEnvironment: any NSCollectionLayoutEnvironment) -> NSCollectionLayoutSection
```

## See Also

### Creating a section

- [init(group:)](init%28group_%29.md): Creates a section containing the specified group.
- [orthogonalLayoutSectionForMediaItems()](orthogonallayoutsectionformediaitems%28%29.md): Creates an orthogonally scrolling section with system default spacing.
