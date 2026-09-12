> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/safaribookmarksbookmarkgroupobject](https://developer.apple.com/documentation/devicemanagement/safaribookmarksbookmarkgroupobject)

# SafariBookmarksBookmarkGroupObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A group of managed bookmarks.

## Declaration

```
object SafariBookmarksBookmarkGroupObject
```

## Properties

- `Bookmarks` — `[SafariBookmarksBookmarksItemObject]` (required): A list of bookmarks. Either a `URL` or `Folder` key must be present in each item.
- `GroupIdentifier` — `string` (required): A string that specifies the unique identifier for this group of managed bookmarks. Safari displays a separate managed bookmarks item for each set of unique managed bookmarks based on the value of this key. If multiple active configurations use the same value for this key, Safari displays a single group formed by merging the list of `Bookmarks` from each group.
- `Title` — `string` (required): The name of the bookmarks folder. Safari uses this as the title for the top-level managed bookmarks item.

## Topics

### Objects

- [SafariBookmarksBookmarksItemObject](safaribookmarksbookmarksitemobject.md): A bookmark that specifies a title, and either a URL for the bookmark, or a nested folder of bookmarks.
