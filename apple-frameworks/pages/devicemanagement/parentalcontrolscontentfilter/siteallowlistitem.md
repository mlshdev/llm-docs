> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/parentalcontrolscontentfilter/siteallowlistitem

# ParentalControlsContentFilter.SiteAllowListItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 15.2+

A dictionary defining a site for the allow list.

## Declaration

```
object ParentalControlsContentFilter.SiteAllowListItem
```

## Properties

- `address` — `string` (required): The site prefix, including the `http(s)` scheme.
- `pageTitle` — `string`: The site page title.

## See Also

### Objects

- [ParentalControlsContentFilter.SiteWhitelistItem](sitewhitelistitem.md): Deprecated. A dictionary defining a site for the allow list.
