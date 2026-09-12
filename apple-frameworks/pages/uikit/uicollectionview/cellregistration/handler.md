> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/cellregistration/handler](https://developer.apple.com/documentation/uikit/uicollectionview/cellregistration/handler)

# UICollectionView.CellRegistration.Handler

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A closure that handles the cell registration and configuration.

## Declaration

```swift
typealias Handler = (Cell, IndexPath, Item) -> Void
```

<a id="discussion"></a>

## Discussion

The closure takes the following parameters:

- **`cell`**: The [UICollectionViewCell](../../uicollectionviewcell.md) or subclass instance to configure.
- **`indexPath`**: The [IndexPath](../../../foundation/indexpath.md) of the cell to configure.
- **`item`**: The data item you provide in [dequeueConfiguredReusableCell(using:for:item:)](../dequeueconfiguredreusablecell%28using_for_item_%29.md).

## See Also

### Creating a cell registration

- [init(handler:)](init%28handler_%29.md): Creates a cell registration with the specified registration handler.
- [init(cellNib:handler:)](init%28cellnib_handler_%29.md): Deprecated. Creates a cell registration with the specified registration handler and nib file.
