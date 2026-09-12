> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/webcontentfilter/allowlistbookmarksitem](https://developer.apple.com/documentation/devicemanagement/webcontentfilter/allowlistbookmarksitem)

# WebContentFilter.AllowListBookmarksItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.1+

The bookmark in the allow list of the web content filter.

## Declaration

```
object WebContentFilter.AllowListBookmarksItem
```

## Properties

- `Title` — `string` (required): The title of the bookmark.
- `URL` — `string` (required): The URL of the bookmark in the allow list.

## See Also

### Objects

- [WebContentFilter.URLFilterParameters](urlfilterparameters-data.dictionary.md): A dictionary containing URL filter parameters.
- [WebContentFilter.VendorConfig](vendorconfig-data.dictionary.md): A custom dictionary for the filtering service plug-in.
- [WebContentFilter.WhitelistedBookmarksItem](whitelistedbookmarksitem.md): Deprecated. The bookmark in the allow list of the web content filter.
