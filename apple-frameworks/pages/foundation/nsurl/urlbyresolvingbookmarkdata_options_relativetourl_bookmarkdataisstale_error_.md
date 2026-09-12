> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/urlbyresolvingbookmarkdata:options:relativetourl:bookmarkdataisstale:error:](https://developer.apple.com/documentation/foundation/nsurl/urlbyresolvingbookmarkdata:options:relativetourl:bookmarkdataisstale:error:)

# URLByResolvingBookmarkData:options:relativeToURL:bookmarkDataIsStale:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new URL made by resolving bookmark data.

## Declaration

```objectivec
+ (instancetype) URLByResolvingBookmarkData:(NSData *) bookmarkData options:(NSURLBookmarkResolutionOptions) options relativeToURL:(NSURL *) relativeURL bookmarkDataIsStale:(BOOL *) isStale error:(NSError **) error;
```

## Parameters

- `bookmarkData`: The bookmark data the URL is derived from.
- `options`: Options taken into account when resolving the bookmark data.

  To resolve a security-scoped bookmark to support App Sandbox, you must include (by way of bitwise `OR` operators with any other options in this parameter) the [NSURLBookmarkResolutionWithSecurityScope](bookmarkresolutionoptions/withsecurityscope.md) option.
- `relativeURL`: The base URL that the bookmark data is relative to.

  If you are resolving a security-scoped bookmark to obtain a security-scoped URL, use this parameter as follows:

  - To resolve an app-scoped bookmark, use a value of `nil`.
  - To resolve a document-scoped bookmark, use the *absolute* path (despite this parameter’s name) to the document from which you retrieved the bookmark.

  App Sandbox does not restrict which URL values may be passed to this parameter.
- `isStale`: On return, if [true](https://developer.apple.com/documentation/swift/true), the bookmark data is stale. Your app should create a new bookmark using the returned URL and use it in place of any stored copies of the existing bookmark.
- `error`: The error that occurred in the case that the URL cannot be created.

<a id="return-value"></a>

## Return Value

A new URL made by resolving `bookmarkData`.

<a id="Discussion"></a>

## Discussion

This method fails if the original file or directory could not be located or is on a volume that could not be mounted. If this method fails, you can use the [resourceValuesForKeys:fromBookmarkData:](resourcevalues%28forkeys_frombookmarkdata_%29.md) method to obtain information about the bookmark, such as the last known path ([NSURLPathKey](../urlresourcekey/pathkey.md)) to help the user decide how to proceed.

To obtain a security-scoped URL from a security-scoped bookmark, call this method using the [NSURLBookmarkResolutionWithSecurityScope](bookmarkresolutionoptions/withsecurityscope.md) option. In addition, to use security scope, you must first have enabled the appropriate entitlements for your app, as described in [Enabling Security-Scoped Bookmark and URL Access](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/EntitlementKeyReference/Chapters/EnablingAppSandbox.html#//apple_ref/doc/uid/TP40011195-CH4-SW18).

To then obtain access to the file-system resource pointed to by a security-scoped URL (in other words, to bring the resource into your app’s sandbox), call the [startAccessingSecurityScopedResource](startaccessingsecurityscopedresource%28%29.md) method (or its Core Foundation equivalent, the [CFURLStartAccessingSecurityScopedResource](../../corefoundation/cfurlstartaccessingsecurityscopedresource%28__%29.md) function) on the URL.

For an app-scoped bookmark, no sandboxed app other than the one that created the bookmark can obtain access to the file-system resource that the URL (obtained from the bookmark) points to.

For a document-scoped bookmark, any sandboxed app that has access to the bookmark data itself, and has access to the document that owns the bookmark, can obtain access to the resource.

> **Version note**

>  Security-scoped bookmarks are not available in versions of macOS prior to OS X v10.7.3.

## See Also

### Related Documentation

- [bookmarkDataWithOptions:includingResourceValuesForKeys:relativeToURL:error:](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.

### Creating a URL object

- [URLWithString:](urlwithstring_.md): Creates and returns an NSURL object initialized with a provided URL string.
- [initWithString:](init%28string_%29.md): Initializes an NSURL object with a provided URL string.
- [URLWithString:encodingInvalidCharacters:](urlwithstring_encodinginvalidcharacters_.md): Creates and returns an instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [initWithString:encodingInvalidCharacters:](init%28string_encodinginvalidcharacters_%29.md): Creates an instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [URLWithString:relativeToURL:](urlwithstring_relativetourl_.md): Creates and returns an NSURL object initialized with a base URL and a relative string.
- [initWithString:relativeToURL:](init%28string_relativeto_%29.md): Initializes an NSURL object with a base URL and a relative string.
- [fileURLWithPath:isDirectory:](fileurl%28withpath_isdirectory_%29.md): Initializes and returns a newly created NSURL object as a file URL with a specified path.
- [initFileURLWithPath:isDirectory:](init%28fileurlwithpath_isdirectory_%29.md): Initializes a newly created NSURL referencing the local file or directory at `path`.
- [fileURLWithPath:relativeToURL:](fileurl%28withpath_relativeto_%29.md): Initializes and returns a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [initFileURLWithPath:relativeToURL:](init%28fileurlwithpath_relativeto_%29.md): Initializes a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [fileURLWithPath:isDirectory:relativeToURL:](fileurl%28withpath_isdirectory_relativeto_%29.md): Initializes and returns a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [initFileURLWithPath:isDirectory:relativeToURL:](init%28fileurlwithpath_isdirectory_relativeto_%29.md): Initializes a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [fileURLWithPath:](fileurl%28withpath_%29.md): Initializes and returns a newly created NSURL object as a file URL with a specified path.
- [initFileURLWithPath:](init%28fileurlwithpath_%29.md): Initializes a newly created NSURL referencing the local file or directory at `path`.
- [fileURLWithPathComponents:](fileurl%28withpathcomponents_%29.md): Initializes and returns a newly created NSURL object as a file URL with specified path components.
