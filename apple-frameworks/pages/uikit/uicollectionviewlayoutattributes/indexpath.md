> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutattributes/indexpath](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutattributes/indexpath)

# indexPath (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The index path of the item in the collection view.

## Declaration

```swift
var indexPath: IndexPath { get set }
```

<a id="Discussion"></a>

## Discussion

The index path contains the index of the section and the index of the item within that section. These two values uniquely identify the position of the corresponding item in the collection view.

## See Also

### Identifying the referenced item

- [representedElementKind](representedelementkind.md): The layout-specific identifier for the target view.
- [representedElementCategory](representedelementcategory.md): The type of the item.
- [UICollectionView.ElementCategory](../uicollectionview/elementcategory.md): Constants specifying the type of view.

# indexPath (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The index path of the item in the collection view.

## Declaration

```objectivec
@property (nonatomic, strong) NSIndexPath * indexPath;
```

<a id="Discussion"></a>

## Discussion

The index path contains the index of the section and the index of the item within that section. These two values uniquely identify the position of the corresponding item in the collection view.

## See Also

### Identifying the referenced item

- [representedElementKind](representedelementkind.md): The layout-specific identifier for the target view.
- [representedElementCategory](representedelementcategory.md): The type of the item.
- [UICollectionElementCategory](../uicollectionview/elementcategory.md): Constants specifying the type of view.
