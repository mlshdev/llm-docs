> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/bookmarkdata(withcontentsof:)](https://developer.apple.com/documentation/foundation/nsurl/bookmarkdata(withcontentsof:))

# bookmarkData(withContentsOf:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.

## Declaration

```swift
class func bookmarkData(withContentsOf bookmarkFileURL: URL) throws -> Data
```

## Parameters

- `bookmarkFileURL`: The URL that points to a file containing bookmark data.

<a id="return-value"></a>

## Return Value

The bookmark data for the alias file.

<a id="Discussion"></a>

## Discussion

This method doesn’t check to see if `bookmarkFileURL` points to an alias file. This allows this method to work with any file containing bookmark data. If `bookmarkFileURL` refers to a file which does not contain bookmark data or to a non-file object, such as a directory or symbolic link, this method returns `nil` produces an error.

This method returns `nil` if bookmark data cannot be created.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Working with Bookmark Data

- [bookmarkData(options:includingResourceValuesForKeys:relativeTo:)](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.
- [resourceValues(forKeys:fromBookmarkData:)](resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [writeBookmarkData(\_:to:options:)](writebookmarkdata%28__to_options_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [startAccessingSecurityScopedResource()](startaccessingsecurityscopedresource%28%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
- [NSURL.BookmarkFileCreationOptions](bookmarkfilecreationoptions.md): Options used when creating file bookmark data
- [NSURL.BookmarkCreationOptions](bookmarkcreationoptions.md): Options used when creating bookmark data.
- [NSURL.BookmarkResolutionOptions](bookmarkresolutionoptions.md): Options used when resolving bookmark data.

# bookmarkDataWithContentsOfURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.

## Declaration

```objectivec
+ (NSData *) bookmarkDataWithContentsOfURL:(NSURL *) bookmarkFileURL error:(NSError **) error;
```

## Parameters

- `bookmarkFileURL`: The URL that points to a file containing bookmark data.
- `error`: The error that occurred in the case that the bookmark data cannot be derived.

<a id="return-value"></a>

## Return Value

The bookmark data for the alias file. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

This method doesn’t check to see if `bookmarkFileURL` points to an alias file. This allows this method to work with any file containing bookmark data. If `bookmarkFileURL` refers to a file which does not contain bookmark data or to a non-file object, such as a directory or symbolic link, this method returns `nil` produces an error.

This method returns `nil` if bookmark data cannot be created.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Working with Bookmark Data

- [bookmarkDataWithOptions:includingResourceValuesForKeys:relativeToURL:error:](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.
- [resourceValuesForKeys:fromBookmarkData:](resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [writeBookmarkData:toURL:options:error:](writebookmarkdata%28__to_options_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [startAccessingSecurityScopedResource](startaccessingsecurityscopedresource%28%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [stopAccessingSecurityScopedResource](stopaccessingsecurityscopedresource%28%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
- [NSURLBookmarkFileCreationOptions](bookmarkfilecreationoptions.md): Options used when creating file bookmark data
- [NSURLBookmarkCreationOptions](bookmarkcreationoptions.md): Options used when creating bookmark data.
- [NSURLBookmarkResolutionOptions](bookmarkresolutionoptions.md): Options used when resolving bookmark data.
