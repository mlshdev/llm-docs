> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/resourcevalues(forkeys:frombookmarkdata:)](https://developer.apple.com/documentation/foundation/nsurl/resourcevalues(forkeys:frombookmarkdata:))

# resourceValues(forKeys:fromBookmarkData:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.

## Declaration

```swift
class func resourceValues(forKeys keys: [URLResourceKey], fromBookmarkData bookmarkData: Data) -> [URLResourceKey : Any]?
```

## Parameters

- `keys`: An array of names of URL resource properties. In addition to the standard, system-defined resource properties, you can also request any custom properties that you provided when you created the bookmark. See the [bookmarkData(options:includingResourceValuesForKeys:relativeTo:)](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md) method for details.
- `bookmarkData`: The bookmark data from which you want to retrieve resource values.

<a id="return-value"></a>

## Return Value

A dictionary of the requested resource values contained in `bookmarkData`.

## See Also

### Related Documentation

- [URLResourceKey](../urlresourcekey.md): Keys that apply to file system URLs.

### Working with Bookmark Data

- [bookmarkData(withContentsOf:)](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [bookmarkData(options:includingResourceValuesForKeys:relativeTo:)](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.
- [writeBookmarkData(\_:to:options:)](writebookmarkdata%28__to_options_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [startAccessingSecurityScopedResource()](startaccessingsecurityscopedresource%28%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
- [NSURL.BookmarkFileCreationOptions](bookmarkfilecreationoptions.md): Options used when creating file bookmark data
- [NSURL.BookmarkCreationOptions](bookmarkcreationoptions.md): Options used when creating bookmark data.
- [NSURL.BookmarkResolutionOptions](bookmarkresolutionoptions.md): Options used when resolving bookmark data.

# resourceValuesForKeys:fromBookmarkData: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.

## Declaration

```objectivec
+ (NSDictionary<NSString *,id> *) resourceValuesForKeys:(NSArray<NSString *> *) keys fromBookmarkData:(NSData *) bookmarkData;
```

## Parameters

- `keys`: An array of names of URL resource properties. In addition to the standard, system-defined resource properties, you can also request any custom properties that you provided when you created the bookmark. See the [bookmarkDataWithOptions:includingResourceValuesForKeys:relativeToURL:error:](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md) method for details.
- `bookmarkData`: The bookmark data from which you want to retrieve resource values.

<a id="return-value"></a>

## Return Value

A dictionary of the requested resource values contained in `bookmarkData`.

## See Also

### Related Documentation

- [NSURLResourceKey](../urlresourcekey.md): Keys that apply to file system URLs.

### Working with Bookmark Data

- [bookmarkDataWithContentsOfURL:error:](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [bookmarkDataWithOptions:includingResourceValuesForKeys:relativeToURL:error:](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.
- [writeBookmarkData:toURL:options:error:](writebookmarkdata%28__to_options_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [startAccessingSecurityScopedResource](startaccessingsecurityscopedresource%28%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [stopAccessingSecurityScopedResource](stopaccessingsecurityscopedresource%28%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
- [NSURLBookmarkFileCreationOptions](bookmarkfilecreationoptions.md): Options used when creating file bookmark data
- [NSURLBookmarkCreationOptions](bookmarkcreationoptions.md): Options used when creating bookmark data.
- [NSURLBookmarkResolutionOptions](bookmarkresolutionoptions.md): Options used when resolving bookmark data.
