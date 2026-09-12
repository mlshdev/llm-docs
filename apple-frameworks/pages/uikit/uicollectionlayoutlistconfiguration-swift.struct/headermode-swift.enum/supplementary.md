> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/headermode-swift.enum/supplementary](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/headermode-swift.enum/supplementary)

# UICollectionLayoutListConfiguration.HeaderMode.supplementary

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A header mode that uses supplementary views to show headers.

## Declaration

```swift
case supplementary
```

<a id="Discussion"></a>

## Discussion

Choose this header mode to use supplementary views with [elementKindSectionHeader](../../uicollectionview/elementkindsectionheader.md) as the section header.

By default, lists that use the [UICollectionLayoutListConfiguration.Appearance.plain](../appearance-swift.enum/plain.md) and [UICollectionLayoutListConfiguration.Appearance.sidebarPlain](../appearance-swift.enum/sidebarplain.md) list appearances use pinned headers. You must use this header mode if you want to opt into this default pinning behavior.

## See Also

### Header modes

- [UICollectionLayoutListConfiguration.HeaderMode.none](none.md): No headers are shown.
- [UICollectionLayoutListConfiguration.HeaderMode.firstItemInSection](firstiteminsection.md): A header mode that styles the first item in a section as a header.
