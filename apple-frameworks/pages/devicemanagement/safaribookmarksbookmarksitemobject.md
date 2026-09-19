> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/safaribookmarksbookmarksitemobject

# SafariBookmarksBookmarksItemObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A bookmark that specifies a title, and either a URL for the bookmark, or a nested folder of bookmarks.

## Declaration

```
object SafariBookmarksBookmarksItemObject
```

## Properties

- `Folder` — `[SafariBookmarksBookmarksItemObject]`: An array of bookmarks for each bookmark in the folder. Folders can include bookmark items and bookmark folders.

  Only one of `URL` or `Folder` must be present.
- `Title` — `string` (required): The title of the bookmark shown in Safari.
- `URL` — `string`: The URL for the bookmark item.

  Only one of `URL` or `Folder` must be present.
