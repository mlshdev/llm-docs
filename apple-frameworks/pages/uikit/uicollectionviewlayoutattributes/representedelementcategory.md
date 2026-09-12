> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutattributes/representedelementcategory](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutattributes/representedelementcategory)

# representedElementCategory (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The type of the item.

## Declaration

```swift
var representedElementCategory: UICollectionView.ElementCategory { get }
```

<a id="Discussion"></a>

## Discussion

You can use the value in this property to distinguish whether the layout attributes are intended for a cell, supplementary view, or decoration view.

## See Also

### Identifying the referenced item

- [indexPath](indexpath.md): The index path of the item in the collection view.
- [representedElementKind](representedelementkind.md): The layout-specific identifier for the target view.
- [UICollectionView.ElementCategory](../uicollectionview/elementcategory.md): Constants specifying the type of view.

# representedElementCategory (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The type of the item.

## Declaration

```objectivec
@property (nonatomic, readonly) UICollectionElementCategory representedElementCategory;
```

<a id="Discussion"></a>

## Discussion

You can use the value in this property to distinguish whether the layout attributes are intended for a cell, supplementary view, or decoration view.

## See Also

### Identifying the referenced item

- [indexPath](indexpath.md): The index path of the item in the collection view.
- [representedElementKind](representedelementkind.md): The layout-specific identifier for the target view.
- [UICollectionElementCategory](../uicollectionview/elementcategory.md): Constants specifying the type of view.
