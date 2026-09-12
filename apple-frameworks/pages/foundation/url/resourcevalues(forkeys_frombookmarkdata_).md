> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/resourcevalues(forkeys:frombookmarkdata:)](https://developer.apple.com/documentation/foundation/url/resourcevalues(forkeys:frombookmarkdata:))

# resourceValues(forKeys:fromBookmarkData:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.

## Declaration

```swift
static func resourceValues(forKeys keys: Set<URLResourceKey>, fromBookmarkData data: Data) -> URLResourceValues?
```

<a id="Discussion"></a>

## Discussion

If the result dictionary does not contain a resource value for one or more of the requested resource keys, it means those resource properties are not available in the bookmark data.

## See Also

### Creating bookmarks

- [bookmarkData(options:includingResourceValuesForKeys:relativeTo:)](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns bookmark data for the URL, created with specified options and resource values.
- [bookmarkData(withContentsOf:)](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [writeBookmarkData(\_:to:)](writebookmarkdata%28__to_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [URL.BookmarkCreationOptions](bookmarkcreationoptions.md): An alias for bookmark creation options.
- [NSURL.BookmarkCreationOptions](../nsurl/bookmarkcreationoptions.md): Options used when creating bookmark data.
