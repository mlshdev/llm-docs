> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutattributes/representedelementcategory](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutattributes/representedelementcategory)

# representedElementCategory (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The type of the element.

## Declaration

```swift
var representedElementCategory: NSCollectionElementCategory { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to distinguish whether the layout attributes apply to an item, a supplementary view, a decoration view, or another type of element presented by the collection view.

## See Also

### Identifying the Element

- [indexPath](indexpath.md): The index path of the element.
- [representedElementKind](representedelementkind.md): The identifier for specific elements of your collection view interface.
- [elementKindInterItemGapIndicator](../nscollectionview/elementkindinteritemgapindicator.md): The element kind string assigned to the attributes object when it represents an inter-item gap.
- [elementKindSectionFooter](../nscollectionview/elementkindsectionfooter.md): A supplementary view that acts as a footer for a given section.
- [elementKindSectionHeader](../nscollectionview/elementkindsectionheader.md): A supplementary view that acts as a header for a given section.

# representedElementCategory (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The type of the element.

## Declaration

```objectivec
@property (readonly) NSCollectionElementCategory representedElementCategory;
```

<a id="Discussion"></a>

## Discussion

Use this property to distinguish whether the layout attributes apply to an item, a supplementary view, a decoration view, or another type of element presented by the collection view.

## See Also

### Identifying the Element

- [indexPath](indexpath.md): The index path of the element.
- [representedElementKind](representedelementkind.md): The identifier for specific elements of your collection view interface.
- [NSCollectionElementKindInterItemGapIndicator](../nscollectionview/elementkindinteritemgapindicator.md): The element kind string assigned to the attributes object when it represents an inter-item gap.
- [NSCollectionElementKindSectionFooter](../nscollectionview/elementkindsectionfooter.md): A supplementary view that acts as a footer for a given section.
- [NSCollectionElementKindSectionHeader](../nscollectionview/elementkindsectionheader.md): A supplementary view that acts as a header for a given section.
