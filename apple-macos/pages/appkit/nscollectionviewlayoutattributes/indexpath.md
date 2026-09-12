> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutattributes/indexpath](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutattributes/indexpath)

# indexPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The index path of the element.

## Declaration

```swift
var indexPath: IndexPath? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the index path to locate information about the item in your app’s data structures. For supplementary and decoration views, you must also use the [representedElementKind](representedelementkind.md) property to identify the element.

## See Also

### Identifying the Element

- [representedElementCategory](representedelementcategory.md): The type of the element.
- [representedElementKind](representedelementkind.md): The identifier for specific elements of your collection view interface.
- [elementKindInterItemGapIndicator](../nscollectionview/elementkindinteritemgapindicator.md): The element kind string assigned to the attributes object when it represents an inter-item gap.
- [elementKindSectionFooter](../nscollectionview/elementkindsectionfooter.md): A supplementary view that acts as a footer for a given section.
- [elementKindSectionHeader](../nscollectionview/elementkindsectionheader.md): A supplementary view that acts as a header for a given section.

# indexPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The index path of the element.

## Declaration

```objectivec
@property (strong, nullable) NSIndexPath * indexPath;
```

<a id="Discussion"></a>

## Discussion

Use the index path to locate information about the item in your app’s data structures. For supplementary and decoration views, you must also use the [representedElementKind](representedelementkind.md) property to identify the element.

## See Also

### Identifying the Element

- [representedElementCategory](representedelementcategory.md): The type of the element.
- [representedElementKind](representedelementkind.md): The identifier for specific elements of your collection view interface.
- [NSCollectionElementKindInterItemGapIndicator](../nscollectionview/elementkindinteritemgapindicator.md): The element kind string assigned to the attributes object when it represents an inter-item gap.
- [NSCollectionElementKindSectionFooter](../nscollectionview/elementkindsectionfooter.md): A supplementary view that acts as a footer for a given section.
- [NSCollectionElementKindSectionHeader](../nscollectionview/elementkindsectionheader.md): A supplementary view that acts as a header for a given section.
