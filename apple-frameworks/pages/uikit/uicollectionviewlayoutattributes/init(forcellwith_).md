> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutattributes/init(forcellwith:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutattributes/init(forcellwith:))

# init(forCellWith:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns a layout attributes object that represents a cell with the specified index path.

## Declaration

```swift
convenience init(forCellWith indexPath: IndexPath)
```

## Parameters

- `indexPath`: The index path of the cell.

<a id="return-value"></a>

## Return Value

A new layout attributes object whose precise type matches the type of the class used to call this method.

<a id="Discussion"></a>

## Discussion

Use this method to create a layout attributes object for a cell in the collection view. Cells are the main type of view presented by a collection view. The index path for a cell typically includes both a section index and an item index for locating the cell’s contents in the collection view’s data source.

## See Also

### Creating layout attributes

- [init(forSupplementaryViewOfKind:with:)](init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object that represents the specified supplementary view.
- [init(forDecorationViewOfKind:with:)](init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object that represents the specified decoration view.

# layoutAttributesForCellWithIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns a layout attributes object that represents a cell with the specified index path.

## Declaration

```objectivec
+ (instancetype) layoutAttributesForCellWithIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path of the cell.

<a id="return-value"></a>

## Return Value

A new layout attributes object whose precise type matches the type of the class used to call this method.

<a id="Discussion"></a>

## Discussion

Use this method to create a layout attributes object for a cell in the collection view. Cells are the main type of view presented by a collection view. The index path for a cell typically includes both a section index and an item index for locating the cell’s contents in the collection view’s data source.

## See Also

### Creating layout attributes

- [layoutAttributesForSupplementaryViewOfKind:withIndexPath:](init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object that represents the specified supplementary view.
- [layoutAttributesForDecorationViewOfKind:withIndexPath:](init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object that represents the specified decoration view.
