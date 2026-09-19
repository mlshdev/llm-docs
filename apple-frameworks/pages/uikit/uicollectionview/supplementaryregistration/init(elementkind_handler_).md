> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionview/supplementaryregistration/init(elementkind:handler:)

# init(elementKind:handler:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a supplementary registration for the specified element kind with a registration handler.

## Declaration

```swift
init(elementKind: String, handler: @escaping UICollectionView.SupplementaryRegistration<Supplementary>.Handler)
```

## See Also

### Creating a supplementary registration

- [init(supplementaryNib:elementKind:handler:)](init%28supplementarynib_elementkind_handler_%29.md): Deprecated. Creates a supplementary registration for the specified element kind with a registration handler and nib file.
- [UICollectionView.SupplementaryRegistration.Handler](handler.md): A closure that handles the supplementary view registration and configuration.
