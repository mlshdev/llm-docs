> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/cellregistration/init(cellnib:handler:)](https://developer.apple.com/documentation/uikit/uicollectionview/cellregistration/init(cellnib:handler:))

# init(cellNib:handler:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ (deprecated in 1.0)

Creates a cell registration with the specified registration handler and nib file.

## Declaration

```swift
init(cellNib: UINib, handler: @escaping UICollectionView.CellRegistration<Cell, Item>.Handler)
```

## See Also

### Creating a cell registration

- [init(handler:)](init%28handler_%29.md): Creates a cell registration with the specified registration handler.
- [UICollectionView.CellRegistration.Handler](handler.md): A closure that handles the cell registration and configuration.
