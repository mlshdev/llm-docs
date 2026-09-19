> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/contenthuggingelements-swift.property

# contentHuggingElements

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A setting that determines which type of items tightly hug their content.

## Declaration

```swift
var contentHuggingElements: UICollectionLayoutListConfiguration.ContentHuggingElements { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [supplementaryHeader](contenthuggingelements-swift.struct/supplementaryheader.md) in visionOS, and `[]` on all other platforms.

When the value of this property is [supplementaryHeader](contenthuggingelements-swift.struct/supplementaryheader.md), header views tightly hug their content. This means header views don’t stretch to fill the width of the collection view if its content’s intrinsic content size is less than the collection view’s width.

## See Also

### Managing content-hugging behavior

- [UICollectionLayoutListConfiguration.ContentHuggingElements](contenthuggingelements-swift.struct.md): Constants that determine which types of items in a collection view tightly hug their content.
