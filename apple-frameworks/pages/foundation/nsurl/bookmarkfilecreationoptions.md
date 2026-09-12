> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/bookmarkfilecreationoptions](https://developer.apple.com/documentation/foundation/nsurl/bookmarkfilecreationoptions)

# NSURL.BookmarkFileCreationOptions (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options used when creating file bookmark data

## Declaration

```swift
typealias BookmarkFileCreationOptions = Int
```

<a id="Discussion"></a>

## Discussion

See [NSURL.BookmarkCreationOptions](bookmarkcreationoptions.md) for more information.

## See Also

### Working with Bookmark Data

- [bookmarkData(withContentsOf:)](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [bookmarkData(options:includingResourceValuesForKeys:relativeTo:)](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.
- [resourceValues(forKeys:fromBookmarkData:)](resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [writeBookmarkData(\_:to:options:)](writebookmarkdata%28__to_options_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [startAccessingSecurityScopedResource()](startaccessingsecurityscopedresource%28%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
- [NSURL.BookmarkCreationOptions](bookmarkcreationoptions.md): Options used when creating bookmark data.
- [NSURL.BookmarkResolutionOptions](bookmarkresolutionoptions.md): Options used when resolving bookmark data.

# NSURLBookmarkFileCreationOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options used when creating file bookmark data

## Declaration

```objectivec
typedef NSUInteger NSURLBookmarkFileCreationOptions;
```

<a id="Discussion"></a>

## Discussion

See [NSURLBookmarkCreationOptions](bookmarkcreationoptions.md) for more information.

## See Also

### Working with Bookmark Data

- [bookmarkDataWithContentsOfURL:error:](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [bookmarkDataWithOptions:includingResourceValuesForKeys:relativeToURL:error:](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.
- [resourceValuesForKeys:fromBookmarkData:](resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [writeBookmarkData:toURL:options:error:](writebookmarkdata%28__to_options_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [startAccessingSecurityScopedResource](startaccessingsecurityscopedresource%28%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [stopAccessingSecurityScopedResource](stopaccessingsecurityscopedresource%28%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
- [NSURLBookmarkCreationOptions](bookmarkcreationoptions.md): Options used when creating bookmark data.
- [NSURLBookmarkResolutionOptions](bookmarkresolutionoptions.md): Options used when resolving bookmark data.
