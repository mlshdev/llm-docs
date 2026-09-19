> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionview/supplementaryregistration/handler

# UICollectionView.SupplementaryRegistration.Handler

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A closure that handles the supplementary view registration and configuration.

## Declaration

```swift
typealias Handler = (Supplementary, String, IndexPath) -> Void
```

## See Also

### Creating a supplementary registration

- [init(elementKind:handler:)](init%28elementkind_handler_%29.md): Creates a supplementary registration for the specified element kind with a registration handler.
- [init(supplementaryNib:elementKind:handler:)](init%28supplementarynib_elementkind_handler_%29.md): Deprecated. Creates a supplementary registration for the specified element kind with a registration handler and nib file.
