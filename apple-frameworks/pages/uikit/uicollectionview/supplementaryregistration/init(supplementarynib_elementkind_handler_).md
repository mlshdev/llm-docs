> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/supplementaryregistration/init(supplementarynib:elementkind:handler:)](https://developer.apple.com/documentation/uikit/uicollectionview/supplementaryregistration/init(supplementarynib:elementkind:handler:))

# init(supplementaryNib:elementKind:handler:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ (deprecated in 1.0)

Creates a supplementary registration for the specified element kind with a registration handler and nib file.

## Declaration

```swift
init(supplementaryNib: UINib, elementKind: String, handler: @escaping UICollectionView.SupplementaryRegistration<Supplementary>.Handler)
```

## See Also

### Creating a supplementary registration

- [init(elementKind:handler:)](init%28elementkind_handler_%29.md): Creates a supplementary registration for the specified element kind with a registration handler.
- [UICollectionView.SupplementaryRegistration.Handler](handler.md): A closure that handles the supplementary view registration and configuration.
