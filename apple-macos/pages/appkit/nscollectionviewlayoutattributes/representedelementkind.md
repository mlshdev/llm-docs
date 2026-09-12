> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutattributes/representedelementkind](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutattributes/representedelementkind)

# representedElementKind (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The identifier for specific elements of your collection view interface.

## Declaration

```swift
var representedElementKind: String? { get }
```

<a id="Discussion"></a>

## Discussion

For supplementary and decoration views, you use this string to distinguish between views in a given section. You also use this string to identify the intended purpose of the view in your collection view interface.

When the value of the [representedElementCategory](representedelementcategory.md) property is [NSCollectionElementCategory.item](../nscollectionelementcategory/item.md), this property is `nil`.

## See Also

### Identifying the Element

- [representedElementCategory](representedelementcategory.md): The type of the element.
- [indexPath](indexpath.md): The index path of the element.
- [elementKindInterItemGapIndicator](../nscollectionview/elementkindinteritemgapindicator.md): The element kind string assigned to the attributes object when it represents an inter-item gap.
- [elementKindSectionFooter](../nscollectionview/elementkindsectionfooter.md): A supplementary view that acts as a footer for a given section.
- [elementKindSectionHeader](../nscollectionview/elementkindsectionheader.md): A supplementary view that acts as a header for a given section.

# representedElementKind (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The identifier for specific elements of your collection view interface.

## Declaration

```objectivec
@property (readonly, nullable) NSString * representedElementKind;
```

<a id="Discussion"></a>

## Discussion

For supplementary and decoration views, you use this string to distinguish between views in a given section. You also use this string to identify the intended purpose of the view in your collection view interface.

When the value of the [representedElementCategory](representedelementcategory.md) property is [NSCollectionElementCategoryItem](../nscollectionelementcategory/item.md), this property is `nil`.

## See Also

### Identifying the Element

- [representedElementCategory](representedelementcategory.md): The type of the element.
- [indexPath](indexpath.md): The index path of the element.
- [NSCollectionElementKindInterItemGapIndicator](../nscollectionview/elementkindinteritemgapindicator.md): The element kind string assigned to the attributes object when it represents an inter-item gap.
- [NSCollectionElementKindSectionFooter](../nscollectionview/elementkindsectionfooter.md): A supplementary view that acts as a footer for a given section.
- [NSCollectionElementKindSectionHeader](../nscollectionview/elementkindsectionheader.md): A supplementary view that acts as a header for a given section.
