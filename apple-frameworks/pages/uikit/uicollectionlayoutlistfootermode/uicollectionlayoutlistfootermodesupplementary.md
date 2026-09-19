> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionlayoutlistfootermode/uicollectionlayoutlistfootermodesupplementary

# UICollectionLayoutListFooterModeSupplementary

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A footer mode that uses supplementary views to show footers.

## Declaration

```objectivec
UICollectionLayoutListFooterModeSupplementary
```

<a id="Discussion"></a>

## Discussion

Choose this footer mode to use supplementary views with [UICollectionElementKindSectionFooter](../uicollectionview/elementkindsectionfooter.md) as the section footer.

By default, lists that use the [UICollectionLayoutListAppearancePlain](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearanceplain.md) and [UICollectionLayoutListAppearanceSidebarPlain](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearancesidebarplain.md) list appearances use pinned footers. You must use this footer mode if you want to opt into this default pinning behavior.

## See Also

### Footer modes

- [UICollectionLayoutListFooterModeNone](uicollectionlayoutlistfootermodenone.md): No footers are shown.
