> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/parentalcontrolscontentfilter/sitewhitelistitem](https://developer.apple.com/documentation/devicemanagement/parentalcontrolscontentfilter/sitewhitelistitem)

# ParentalControlsContentFilter.SiteWhitelistItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+ (deprecated in 15.2)

A dictionary defining a site for the allow list.

## Declaration

```
object ParentalControlsContentFilter.SiteWhitelistItem
```

## Properties

- `address` — `string` (required): The site prefix, including http(s) scheme.

  Deprecated: macOS 15.2+
- `pageTitle` — `string`: The site page title.

  Deprecated: macOS 15.2+

## See Also

### Objects

- [ParentalControlsContentFilter.SiteAllowListItem](siteallowlistitem.md): A dictionary defining a site for the allow list.
