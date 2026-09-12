> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/bookmarkdata(options:includingresourcevaluesforkeys:relativeto:)](https://developer.apple.com/documentation/foundation/url/bookmarkdata(options:includingresourcevaluesforkeys:relativeto:))

# bookmarkData(options:includingResourceValuesForKeys:relativeTo:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns bookmark data for the URL, created with specified options and resource values.

## Declaration

```swift
func bookmarkData(options: URL.BookmarkCreationOptions = [], includingResourceValuesForKeys keys: Set<URLResourceKey>? = nil, relativeTo url: URL? = nil) throws -> Data
```

## See Also

### Creating bookmarks

- [bookmarkData(withContentsOf:)](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [writeBookmarkData(\_:to:)](writebookmarkdata%28__to_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [resourceValues(forKeys:fromBookmarkData:)](resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [URL.BookmarkCreationOptions](bookmarkcreationoptions.md): An alias for bookmark creation options.
- [NSURL.BookmarkCreationOptions](../nsurl/bookmarkcreationoptions.md): Options used when creating bookmark data.
