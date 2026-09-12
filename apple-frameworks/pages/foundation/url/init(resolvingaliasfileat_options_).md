> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/init(resolvingaliasfileat:options:)](https://developer.apple.com/documentation/foundation/url/init(resolvingaliasfileat:options:))

# init(resolvingAliasFileAt:options:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL that refers to the location specified by resolving an alias file.

## Declaration

```swift
init(resolvingAliasFileAt url: URL, options: URL.BookmarkResolutionOptions = []) throws
```

<a id="Discussion"></a>

## Discussion

If the `url` argument doesn’t refer to an alias file (as defined by the [isAliasFileKey](../urlresourcekey/isaliasfilekey.md) property), the returned URL is the same as the `url` argument.

This method throws an error in the following cases:

- The url argument is unreachable.
- The original file or directory is unknown or unreachable.
- The original file or directory is on a volume that the system can’t locate or can’t mount.

This method doesn’t support the [withSecurityScope](../nsurl/bookmarkresolutionoptions/withsecurityscope.md) option.

## See Also

### Creating a URL by resolving a bookmark

- [init(resolvingBookmarkData:options:relativeTo:bookmarkDataIsStale:)](init%28resolvingbookmarkdata_options_relativeto_bookmarkdataisstale_%29-3ic6f.md): Creates a URL that refers to a location specified by resolving bookmark data.
- [URL.BookmarkResolutionOptions](bookmarkresolutionoptions.md): An alias for the bookmark resolution options type.
- [NSURL.BookmarkResolutionOptions](../nsurl/bookmarkresolutionoptions.md): Options used when resolving bookmark data.
