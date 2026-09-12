> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/snapshot(for:)](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/snapshot(for:))

# snapshot(for:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Returns a representation of the current state of the data in the specified section of the collection view.

## Declaration

```swift
@MainActor @preconcurrency func snapshot(for section: SectionIdentifierType) -> NSDiffableDataSourceSectionSnapshot<ItemIdentifierType>
```

## See Also

### Updating section data

- [apply(\_:to:animatingDifferences:completion:)](apply%28__to_animatingdifferences_completion_%29.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. Updates the section UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
- [apply(\_:to:animatingDifferences:)](apply%28__to_animatingdifferences_%29.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. Updates the section UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.
