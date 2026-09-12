> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/cellregistration/init(handler:)](https://developer.apple.com/documentation/uikit/uicollectionview/cellregistration/init(handler:))

# init(handler:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a cell registration with the specified registration handler.

## Declaration

```swift
init(handler: @escaping UICollectionView.CellRegistration<Cell, Item>.Handler)
```

## See Also

### Creating a cell registration

- [init(cellNib:handler:)](init%28cellnib_handler_%29.md): Deprecated. Creates a cell registration with the specified registration handler and nib file.
- [UICollectionView.CellRegistration.Handler](handler.md): A closure that handles the cell registration and configuration.
