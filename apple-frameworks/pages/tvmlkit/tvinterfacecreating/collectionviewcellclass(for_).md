> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvinterfacecreating/collectionviewcellclass(for:)](https://developer.apple.com/documentation/tvmlkit/tvinterfacecreating/collectionviewcellclass(for:))

# collectionViewCellClass(for:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Returns a collection view cell for the specified element.

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func collectionViewCellClass(for element: TVViewElement) -> AnyClass?
```

## Parameters

- `element`: The element a collection view cell is created for.

<a id="return-value"></a>

## Return Value

The new collection view cell associated with the given element name.

<a id="Discussion"></a>

## Discussion

The collection view cell must be in a list, shelf, or grid. This method is called once per unique element name as a common cell class is used for all elements that share the same name in a collection. Return `nil` for default handling.

## See Also

### Updating View Information

- [makeViewController(element:existingViewController:)](makeviewcontroller%28element_existingviewcontroller_%29.md): Deprecated. Returns a view controller for a view element.
- [makeView(element:existingView:)](makeview%28element_existingview_%29.md): Deprecated. Returns a view for a view element.
- [playerViewController(for:)](playerviewcontroller%28for_%29.md): Deprecated. Returns the custom player user interface for a custom player.

# collectionViewCellClassForElement: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Returns a collection view cell for the specified element.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (Class) collectionViewCellClassForElement:(TVViewElement *) element;
```

## Parameters

- `element`: The element a collection view cell is created for.

<a id="return-value"></a>

## Return Value

The new collection view cell associated with the given element name.

<a id="Discussion"></a>

## Discussion

The collection view cell must be in a list, shelf, or grid. This method is called once per unique element name as a common cell class is used for all elements that share the same name in a collection. Return `nil` for default handling.

## See Also

### Updating View Information

- [viewControllerForElement:existingViewController:](makeviewcontroller%28element_existingviewcontroller_%29.md): Deprecated. Returns a view controller for a view element.
- [viewForElement:existingView:](makeview%28element_existingview_%29.md): Deprecated. Returns a view for a view element.
- [playerViewControllerForPlayer:](playerviewcontroller%28for_%29.md): Deprecated. Returns the custom player user interface for a custom player.
