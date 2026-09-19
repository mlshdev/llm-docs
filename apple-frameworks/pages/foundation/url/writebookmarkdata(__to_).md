> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/url/writebookmarkdata(_:to:)

# writeBookmarkData(\_:to:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an alias file on disk at a specified location with specified bookmark data.

## Declaration

```swift
static func writeBookmarkData(_ data: Data, to url: URL) throws
```

<a id="Discussion"></a>

## Discussion

The `data` must have been created with the [suitableForBookmarkFile](../nsurl/bookmarkcreationoptions/suitableforbookmarkfile.md) option. The `url` must either refer to an existing file (which will be overwritten), or to location in an existing directory.

## See Also

### Creating bookmarks

- [bookmarkData(options:includingResourceValuesForKeys:relativeTo:)](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns bookmark data for the URL, created with specified options and resource values.
- [bookmarkData(withContentsOf:)](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [resourceValues(forKeys:fromBookmarkData:)](resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [URL.BookmarkCreationOptions](bookmarkcreationoptions.md): An alias for bookmark creation options.
- [NSURL.BookmarkCreationOptions](../nsurl/bookmarkcreationoptions.md): Options used when creating bookmark data.
