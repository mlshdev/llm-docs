> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/footermode-swift.enum/supplementary](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/footermode-swift.enum/supplementary)

# UICollectionLayoutListConfiguration.FooterMode.supplementary

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A footer mode that uses supplementary views to show footers.

## Declaration

```swift
case supplementary
```

<a id="Discussion"></a>

## Discussion

Choose this footer mode to use supplementary views with [elementKindSectionFooter](../../uicollectionview/elementkindsectionfooter.md) as the section footer.

By default, lists that use the [UICollectionLayoutListConfiguration.Appearance.plain](../appearance-swift.enum/plain.md) and [UICollectionLayoutListConfiguration.Appearance.sidebarPlain](../appearance-swift.enum/sidebarplain.md) list appearances use pinned footers. You must use this footer mode if you want to opt into this default pinning behavior.

## See Also

### Footer modes

- [UICollectionLayoutListConfiguration.FooterMode.none](none.md): No footers are shown.
