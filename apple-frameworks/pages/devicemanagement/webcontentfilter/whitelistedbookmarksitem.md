> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/webcontentfilter/whitelistedbookmarksitem](https://developer.apple.com/documentation/devicemanagement/webcontentfilter/whitelistedbookmarksitem)

# WebContentFilter.WhitelistedBookmarksItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 7.0+ (deprecated in 14.5) · iPadOS 7.0+ (deprecated in 14.5) · Mac Catalyst 7.0+ (deprecated in 14.5)

The bookmark in the allow list of the web content filter.

## Declaration

```
object WebContentFilter.WhitelistedBookmarksItem
```

## Properties

- `Title` — `string` (required): The title of the bookmark.

  Deprecated: iOS 14.5+ | iPadOS 14.5+
- `URL` — `string` (required): The URL of the bookmark in the allow list.

  Deprecated: iOS 14.5+ | iPadOS 14.5+

## See Also

### Objects

- [WebContentFilter.AllowListBookmarksItem](allowlistbookmarksitem.md): The bookmark in the allow list of the web content filter.
- [WebContentFilter.URLFilterParameters](urlfilterparameters-data.dictionary.md): A dictionary containing URL filter parameters.
- [WebContentFilter.VendorConfig](vendorconfig-data.dictionary.md): A custom dictionary for the filtering service plug-in.
