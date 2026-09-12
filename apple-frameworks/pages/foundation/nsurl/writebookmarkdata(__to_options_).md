> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/writebookmarkdata(_:to:options:)](https://developer.apple.com/documentation/foundation/nsurl/writebookmarkdata(_:to:options:))

# writeBookmarkData(\_:to:options:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an alias file on disk at a specified location with specified bookmark data.

## Declaration

```swift
class func writeBookmarkData(_ bookmarkData: Data, to bookmarkFileURL: URL, options: NSURL.BookmarkFileCreationOptions) throws
```

## Parameters

- `bookmarkData`: The bookmark data containing information for the alias file.
- `bookmarkFileURL`: The desired location of the alias file.
- `options`: Options taken into account when creating the alias file.

<a id="Discussion"></a>

## Discussion

This method will produce an error if `bookmarkData` was not created with the `NSURLBookmarkCreationSuitableForBookmarkFile` option.

If `bookmarkFileURL` points to a directory, the alias file will be created in that directory with its name derived from the information in `bookmarkData`. If `bookmarkFileURL` points to a file, the alias file will be created with the location and name indicated by `bookmarkFileURL`, and its extension will be changed to `.alias` if it is not already.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Working with Bookmark Data

- [bookmarkData(withContentsOf:)](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [bookmarkData(options:includingResourceValuesForKeys:relativeTo:)](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.
- [resourceValues(forKeys:fromBookmarkData:)](resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [startAccessingSecurityScopedResource()](startaccessingsecurityscopedresource%28%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
- [NSURL.BookmarkFileCreationOptions](bookmarkfilecreationoptions.md): Options used when creating file bookmark data
- [NSURL.BookmarkCreationOptions](bookmarkcreationoptions.md): Options used when creating bookmark data.
- [NSURL.BookmarkResolutionOptions](bookmarkresolutionoptions.md): Options used when resolving bookmark data.

# writeBookmarkData:toURL:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an alias file on disk at a specified location with specified bookmark data.

## Declaration

```objectivec
+ (BOOL) writeBookmarkData:(NSData *) bookmarkData toURL:(NSURL *) bookmarkFileURL options:(NSURLBookmarkFileCreationOptions) options error:(NSError **) error;
```

## Parameters

- `bookmarkData`: The bookmark data containing information for the alias file.
- `bookmarkFileURL`: The desired location of the alias file.
- `options`: Options taken into account when creating the alias file.
- `error`: The error that occurred in the case that the alias file cannot be created.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the alias file is successfully created; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method will produce an error if `bookmarkData` was not created with the `NSURLBookmarkCreationSuitableForBookmarkFile` option.

If `bookmarkFileURL` points to a directory, the alias file will be created in that directory with its name derived from the information in `bookmarkData`. If `bookmarkFileURL` points to a file, the alias file will be created with the location and name indicated by `bookmarkFileURL`, and its extension will be changed to `.alias` if it is not already.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Working with Bookmark Data

- [bookmarkDataWithContentsOfURL:error:](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [bookmarkDataWithOptions:includingResourceValuesForKeys:relativeToURL:error:](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.
- [resourceValuesForKeys:fromBookmarkData:](resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [startAccessingSecurityScopedResource](startaccessingsecurityscopedresource%28%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [stopAccessingSecurityScopedResource](stopaccessingsecurityscopedresource%28%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
- [NSURLBookmarkFileCreationOptions](bookmarkfilecreationoptions.md): Options used when creating file bookmark data
- [NSURLBookmarkCreationOptions](bookmarkcreationoptions.md): Options used when creating bookmark data.
- [NSURLBookmarkResolutionOptions](bookmarkresolutionoptions.md): Options used when resolving bookmark data.
