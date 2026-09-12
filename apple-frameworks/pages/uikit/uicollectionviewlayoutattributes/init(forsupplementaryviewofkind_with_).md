> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutattributes/init(forsupplementaryviewofkind:with:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutattributes/init(forsupplementaryviewofkind:with:))

# init(forSupplementaryViewOfKind:with:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns a layout attributes object that represents the specified supplementary view.

## Declaration

```swift
convenience init(forSupplementaryViewOfKind elementKind: String, with indexPath: IndexPath)
```

## Parameters

- `elementKind`: A string that identifies the type of supplementary view.
- `indexPath`: The index path of the view.

<a id="return-value"></a>

## Return Value

A new layout attributes object whose precise type matches the type of the class used to call this method.

<a id="Discussion"></a>

## Discussion

Use this method to create a layout attributes object for a supplementary view in the collection view. Like cells, supplementary views present data that is managed by the collection view’s data source. But unlike cells, supplementary views are typically designed for a special purpose. For example, header and footer views are laid out differently than cells and can be provided for individual sections or for the collection view as a whole.

It is up to you to decide how to use the `indexPath` parameter to identify a given supplementary view. Typically, you use the `elementKind` parameter to identify the type of the supplementary view and the `indexPath` information to distinguish between different instances of that view.

## See Also

### Creating layout attributes

- [init(forCellWith:)](init%28forcellwith_%29.md): Creates and returns a layout attributes object that represents a cell with the specified index path.
- [init(forDecorationViewOfKind:with:)](init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object that represents the specified decoration view.

# layoutAttributesForSupplementaryViewOfKind:withIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns a layout attributes object that represents the specified supplementary view.

## Declaration

```objectivec
+ (instancetype) layoutAttributesForSupplementaryViewOfKind:(NSString *) elementKind withIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `elementKind`: A string that identifies the type of supplementary view.
- `indexPath`: The index path of the view.

<a id="return-value"></a>

## Return Value

A new layout attributes object whose precise type matches the type of the class used to call this method.

<a id="Discussion"></a>

## Discussion

Use this method to create a layout attributes object for a supplementary view in the collection view. Like cells, supplementary views present data that is managed by the collection view’s data source. But unlike cells, supplementary views are typically designed for a special purpose. For example, header and footer views are laid out differently than cells and can be provided for individual sections or for the collection view as a whole.

It is up to you to decide how to use the `indexPath` parameter to identify a given supplementary view. Typically, you use the `elementKind` parameter to identify the type of the supplementary view and the `indexPath` information to distinguish between different instances of that view.

## See Also

### Creating layout attributes

- [layoutAttributesForCellWithIndexPath:](init%28forcellwith_%29.md): Creates and returns a layout attributes object that represents a cell with the specified index path.
- [layoutAttributesForDecorationViewOfKind:withIndexPath:](init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object that represents the specified decoration view.
