> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/startaccessingsecurityscopedresource()](https://developer.apple.com/documentation/foundation/nsurl/startaccessingsecurityscopedresource())

# startAccessingSecurityScopedResource() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.

## Declaration

```swift
func startAccessingSecurityScopedResource() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the request to access the resource succeeded; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When you obtain a security-scoped URL, such as by resolving a security-scoped bookmark, you can’t immediately use the resource it points to. To make the resource available to your app, by way of adding its location to your app’s sandbox, call this method on the security-scoped URL. You can also use Core Foundation equivalent, the [CFURLStartAccessingSecurityScopedResource(\_:)](../../corefoundation/cfurlstartaccessingsecurityscopedresource%28__%29.md) function.

If this method returns [true](https://developer.apple.com/documentation/swift/true), then you must relinquish access as soon as you finish using the resource. Call the [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md) method to relinquish access. You must balance each call to [startAccessingSecurityScopedResource()](startaccessingsecurityscopedresource%28%29.md) for a given security-scoped URL with a call to [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md). When you make the last balanced call to [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md), you immediately lose access to the resource in question.

> **Warning**

>  If you fail to relinquish your access to file-system resources when you no longer need them, your app leaks kernel resources. If sufficient kernel resources leak, your app loses its ability to add file-system locations to its sandbox, such as with Powerbox or security-scoped bookmarks, until relaunched.

> **Version note**

>  Security-scoped bookmarks aren’t available in versions of macOS prior to OS X 10.7.3.

## See Also

### Working with Bookmark Data

- [bookmarkData(withContentsOf:)](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [bookmarkData(options:includingResourceValuesForKeys:relativeTo:)](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.
- [resourceValues(forKeys:fromBookmarkData:)](resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [writeBookmarkData(\_:to:options:)](writebookmarkdata%28__to_options_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
- [NSURL.BookmarkFileCreationOptions](bookmarkfilecreationoptions.md): Options used when creating file bookmark data
- [NSURL.BookmarkCreationOptions](bookmarkcreationoptions.md): Options used when creating bookmark data.
- [NSURL.BookmarkResolutionOptions](bookmarkresolutionoptions.md): Options used when resolving bookmark data.

# startAccessingSecurityScopedResource (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.

## Declaration

```objectivec
- (BOOL) startAccessingSecurityScopedResource;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the request to access the resource succeeded; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When you obtain a security-scoped URL, such as by resolving a security-scoped bookmark, you can’t immediately use the resource it points to. To make the resource available to your app, by way of adding its location to your app’s sandbox, call this method on the security-scoped URL. You can also use Core Foundation equivalent, the [CFURLStartAccessingSecurityScopedResource](../../corefoundation/cfurlstartaccessingsecurityscopedresource%28__%29.md) function.

If this method returns [true](https://developer.apple.com/documentation/swift/true), then you must relinquish access as soon as you finish using the resource. Call the [stopAccessingSecurityScopedResource](stopaccessingsecurityscopedresource%28%29.md) method to relinquish access. You must balance each call to [startAccessingSecurityScopedResource](startaccessingsecurityscopedresource%28%29.md) for a given security-scoped URL with a call to [stopAccessingSecurityScopedResource](stopaccessingsecurityscopedresource%28%29.md). When you make the last balanced call to [stopAccessingSecurityScopedResource](stopaccessingsecurityscopedresource%28%29.md), you immediately lose access to the resource in question.

> **Warning**

>  If you fail to relinquish your access to file-system resources when you no longer need them, your app leaks kernel resources. If sufficient kernel resources leak, your app loses its ability to add file-system locations to its sandbox, such as with Powerbox or security-scoped bookmarks, until relaunched.

> **Version note**

>  Security-scoped bookmarks aren’t available in versions of macOS prior to OS X 10.7.3.

## See Also

### Related Documentation

- [URLByResolvingBookmarkData:options:relativeToURL:bookmarkDataIsStale:error:](urlbyresolvingbookmarkdata_options_relativetourl_bookmarkdataisstale_error_.md): Returns a new URL made by resolving bookmark data.

### Working with Bookmark Data

- [bookmarkDataWithContentsOfURL:error:](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [bookmarkDataWithOptions:includingResourceValuesForKeys:relativeToURL:error:](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.
- [resourceValuesForKeys:fromBookmarkData:](resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [writeBookmarkData:toURL:options:error:](writebookmarkdata%28__to_options_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [stopAccessingSecurityScopedResource](stopaccessingsecurityscopedresource%28%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
- [NSURLBookmarkFileCreationOptions](bookmarkfilecreationoptions.md): Options used when creating file bookmark data
- [NSURLBookmarkCreationOptions](bookmarkcreationoptions.md): Options used when creating bookmark data.
- [NSURLBookmarkResolutionOptions](bookmarkresolutionoptions.md): Options used when resolving bookmark data.
