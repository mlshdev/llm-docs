> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutattributes/init(fordecorationviewofkind:with:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutattributes/init(fordecorationviewofkind:with:))

# init(forDecorationViewOfKind:with:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns a layout attributes object that represents the specified decoration view.

## Declaration

```swift
convenience init(forDecorationViewOfKind decorationViewKind: String, with indexPath: IndexPath)
```

## Parameters

- `decorationViewKind`: The kind identifier for the specified decoration view.
- `indexPath`: An index path related to the decoration view.

<a id="return-value"></a>

## Return Value

A new layout attributes object whose precise type matches the type of the class used to call this method.

<a id="Discussion"></a>

## Discussion

Use this method to create a layout attributes object for a decoration view in the collection view. Decoration views are a type of supplementary view but do not present data that is managed by the collection view’s data source. Instead, they mostly present visual adornments for a section or for the entire collection view.

It is up to you to decide how to use the `indexPath` parameter to identify a given decoration view. Typically, you use the `decorationViewKind` parameter to identify the type of the decoration view and the `indexPath` information to distinguish between different instances of that view.

## See Also

### Creating layout attributes

- [init(forCellWith:)](init%28forcellwith_%29.md): Creates and returns a layout attributes object that represents a cell with the specified index path.
- [init(forSupplementaryViewOfKind:with:)](init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object that represents the specified supplementary view.

# layoutAttributesForDecorationViewOfKind:withIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns a layout attributes object that represents the specified decoration view.

## Declaration

```objectivec
+ (instancetype) layoutAttributesForDecorationViewOfKind:(NSString *) decorationViewKind withIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `decorationViewKind`: The kind identifier for the specified decoration view.
- `indexPath`: An index path related to the decoration view.

<a id="return-value"></a>

## Return Value

A new layout attributes object whose precise type matches the type of the class used to call this method.

<a id="Discussion"></a>

## Discussion

Use this method to create a layout attributes object for a decoration view in the collection view. Decoration views are a type of supplementary view but do not present data that is managed by the collection view’s data source. Instead, they mostly present visual adornments for a section or for the entire collection view.

It is up to you to decide how to use the `indexPath` parameter to identify a given decoration view. Typically, you use the `decorationViewKind` parameter to identify the type of the decoration view and the `indexPath` information to distinguish between different instances of that view.

## See Also

### Creating layout attributes

- [layoutAttributesForCellWithIndexPath:](init%28forcellwith_%29.md): Creates and returns a layout attributes object that represents a cell with the specified index path.
- [layoutAttributesForSupplementaryViewOfKind:withIndexPath:](init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object that represents the specified supplementary view.
