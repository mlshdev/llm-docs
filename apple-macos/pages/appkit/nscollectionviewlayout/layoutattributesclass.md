> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/layoutattributesclass](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/layoutattributesclass)

# layoutAttributesClass (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the class to use for layout attribute objects

## Declaration

```swift
class var layoutAttributesClass: AnyClass { get }
```

<a id="return-value"></a>

## Return Value

The class to use for layout attribute objects.

<a id="Discussion"></a>

## Discussion

Override this method if you define a custom [NSCollectionViewLayoutAttributes](../nscollectionviewlayoutattributes.md) subclass for managing layout-related attributes. In your implementation, return the class object for your custom subclass.

You can call this method as needed to create new layout objects. A typical usage of this method is as follows:

**Swift**

```swift
let attributes = MyCustomLayout.layoutAttributesClass().init()
```

**Objective-C**

```objc
id attributes = [[[MyCustomLayout layoutAttributesClass] alloc] init];
```

## See Also

### Providing Layout Information

- [prepare()](prepare%28%29.md): Prepares the layout object to begin laying out content.
- [collectionViewContentSize](collectionviewcontentsize.md): The width and height of the collection view’s contents.
- [layoutAttributesForElements(in:)](layoutattributesforelements%28in_%29.md): Returns the layout attribute objects for all items and views in the specified rectangle.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): Returns the layout attributes for the item at the specified index path.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Returns the layout attributes of the supplementary view at the specified location in your layout.
- [layoutAttributesForDecorationView(ofKind:at:)](layoutattributesfordecorationview%28ofkind_at_%29.md): Returns the layout attributes of the decoration view at the specified location in your layout.
- [layoutAttributesForDropTarget(at:)](layoutattributesfordroptarget%28at_%29.md): Returns layout attributes for the drop target at the specified point.
- [layoutAttributesForInterItemGap(before:)](layoutattributesforinteritemgap%28before_%29.md): Returns layout attributes for the inter-item gap at the specified location in your layout.
- [targetContentOffset(forProposedContentOffset:)](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
- [targetContentOffset(forProposedContentOffset:withScrollingVelocity:)](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Returns the offset value to use for the collection view’s content at the end of scrolling.

# layoutAttributesClass (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the class to use for layout attribute objects

## Declaration

```objectivec
@property (class, readonly) Class layoutAttributesClass;
```

<a id="return-value"></a>

## Return Value

The class to use for layout attribute objects.

<a id="Discussion"></a>

## Discussion

Override this method if you define a custom [NSCollectionViewLayoutAttributes](../nscollectionviewlayoutattributes.md) subclass for managing layout-related attributes. In your implementation, return the class object for your custom subclass.

You can call this method as needed to create new layout objects. A typical usage of this method is as follows:

**Swift**

```swift
let attributes = MyCustomLayout.layoutAttributesClass().init()
```

**Objective-C**

```objc
id attributes = [[[MyCustomLayout layoutAttributesClass] alloc] init];
```

## See Also

### Providing Layout Information

- [prepareLayout](prepare%28%29.md): Prepares the layout object to begin laying out content.
- [collectionViewContentSize](collectionviewcontentsize.md): The width and height of the collection view’s contents.
- [layoutAttributesForElementsInRect:](layoutattributesforelements%28in_%29.md): Returns the layout attribute objects for all items and views in the specified rectangle.
- [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md): Returns the layout attributes for the item at the specified index path.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Returns the layout attributes of the supplementary view at the specified location in your layout.
- [layoutAttributesForDecorationViewOfKind:atIndexPath:](layoutattributesfordecorationview%28ofkind_at_%29.md): Returns the layout attributes of the decoration view at the specified location in your layout.
- [layoutAttributesForDropTargetAtPoint:](layoutattributesfordroptarget%28at_%29.md): Returns layout attributes for the drop target at the specified point.
- [layoutAttributesForInterItemGapBeforeIndexPath:](layoutattributesforinteritemgap%28before_%29.md): Returns layout attributes for the inter-item gap at the specified location in your layout.
- [targetContentOffsetForProposedContentOffset:](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
- [targetContentOffsetForProposedContentOffset:withScrollingVelocity:](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Returns the offset value to use for the collection view’s content at the end of scrolling.
