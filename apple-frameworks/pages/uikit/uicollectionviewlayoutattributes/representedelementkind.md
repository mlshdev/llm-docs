> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutattributes/representedelementkind](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutattributes/representedelementkind)

# representedElementKind (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The layout-specific identifier for the target view.

## Declaration

```swift
var representedElementKind: String? { get }
```

<a id="Discussion"></a>

## Discussion

You can use the value in this property to identify the specific purpose of the supplementary or decoration view associated with the attributes. This property is `nil` if the [representedElementCategory](representedelementcategory.md) property contains the value [UICollectionView.ElementCategory.cell](../uicollectionview/elementcategory/cell.md).

## See Also

### Identifying the referenced item

- [indexPath](indexpath.md): The index path of the item in the collection view.
- [representedElementCategory](representedelementcategory.md): The type of the item.
- [UICollectionView.ElementCategory](../uicollectionview/elementcategory.md): Constants specifying the type of view.

# representedElementKind (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The layout-specific identifier for the target view.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * representedElementKind;
```

<a id="Discussion"></a>

## Discussion

You can use the value in this property to identify the specific purpose of the supplementary or decoration view associated with the attributes. This property is `nil` if the [representedElementCategory](representedelementcategory.md) property contains the value [UICollectionElementCategoryCell](../uicollectionview/elementcategory/cell.md).

## See Also

### Identifying the referenced item

- [indexPath](indexpath.md): The index path of the item in the collection view.
- [representedElementCategory](representedelementcategory.md): The type of the item.
- [UICollectionElementCategory](../uicollectionview/elementcategory.md): Constants specifying the type of view.
