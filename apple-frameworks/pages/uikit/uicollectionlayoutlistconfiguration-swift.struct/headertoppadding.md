> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/headertoppadding

# headerTopPadding

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The amount of padding above each section header.

## Declaration

```swift
var headerTopPadding: CGFloat? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which indicates automatic padding.

## See Also

### Configuring headers and footers

- [headerMode](headermode-swift.property.md): The type of header to use for the list.
- [footerMode](footermode-swift.property.md): The type of footer to use for the list.
- [UICollectionLayoutListConfiguration.HeaderMode](headermode-swift.enum.md): Constants that describe the list’s header mode.
- [UICollectionLayoutListConfiguration.FooterMode](footermode-swift.enum.md): Constants that describe the list’s footer mode.
