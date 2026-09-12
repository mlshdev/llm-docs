> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutlistconfiguration-c.class/contenthuggingelements](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-c.class/contenthuggingelements)

# contentHuggingElements

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A setting that determines which type of items tightly hug their content.

## Declaration

```objectivec
@property (nonatomic) UICollectionLayoutListContentHuggingElements contentHuggingElements;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UICollectionLayoutListContentHuggingElementsSupplementaryHeader](../uicollectionlayoutlistcontenthuggingelements/uicollectionlayoutlistcontenthuggingelementssupplementaryheader.md) in visionOS, and [UICollectionLayoutListContentHuggingElementsNone](../uicollectionlayoutlistcontenthuggingelements/uicollectionlayoutlistcontenthuggingelementsnone.md) on all other platforms.

When the value of this property is [UICollectionLayoutListContentHuggingElementsSupplementaryHeader](../uicollectionlayoutlistcontenthuggingelements/uicollectionlayoutlistcontenthuggingelementssupplementaryheader.md), header views tightly hug their content. This means header views don’t stretch to fill the width of the collection view if its content’s intrinsic content size is less than the collection view’s width.

## See Also

### Managing content-hugging behavior

- [UICollectionLayoutListContentHuggingElements](../uicollectionlayoutlistcontenthuggingelements.md): Constants that determine which types of items in a collection view tightly hug their content.
