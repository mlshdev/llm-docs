> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/bookmarkresolutionoptions](https://developer.apple.com/documentation/foundation/nsurl/bookmarkresolutionoptions)

# NSURL.BookmarkResolutionOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options used when resolving bookmark data.

## Declaration

```swift
struct BookmarkResolutionOptions
```

<a id="overview"></a>

## Overview

When resolving a bookmark, use bitwise `OR` operators to combine the options you want to specify, and provide them to the `options` parameter of the [URLByResolvingBookmarkData:options:relativeToURL:bookmarkDataIsStale:error:](urlbyresolvingbookmarkdata_options_relativetourl_bookmarkdataisstale_error_.md) method.

<a id="Version-Notes"></a>

### Version-Notes

Security-scoped bookmarks are not available in versions of macOS prior to OS X 10.7.3.

## Topics

### Initializers

- [init(rawValue:)](bookmarkresolutionoptions/init%28rawvalue_%29.md): Initializes a new resolution options structure.

### Constants

- [withoutUI](bookmarkresolutionoptions/withoutui.md): Specifies that no UI feedback should accompany resolution of the bookmark data.
- [withoutMounting](bookmarkresolutionoptions/withoutmounting.md): Specifies that no volume should be mounted during resolution of the bookmark data.
- [withSecurityScope](bookmarkresolutionoptions/withsecurityscope.md): Specifies that the security scope, applied to the bookmark when it was created, should be used during resolution of the bookmark data.
- [withoutImplicitStartAccessing](bookmarkresolutionoptions/withoutimplicitstartaccessing.md): A property that specifies that resolution doesn’t implicitly start accessing the ephemeral security-scoped resource.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Working with Bookmark Data

- [bookmarkData(withContentsOf:)](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [bookmarkData(options:includingResourceValuesForKeys:relativeTo:)](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.
- [resourceValues(forKeys:fromBookmarkData:)](resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [writeBookmarkData(\_:to:options:)](writebookmarkdata%28__to_options_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [startAccessingSecurityScopedResource()](startaccessingsecurityscopedresource%28%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
- [NSURL.BookmarkFileCreationOptions](bookmarkfilecreationoptions.md): Options used when creating file bookmark data
- [NSURL.BookmarkCreationOptions](bookmarkcreationoptions.md): Options used when creating bookmark data.

# NSURLBookmarkResolutionOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options used when resolving bookmark data.

## Declaration

```objectivec
enum NSURLBookmarkResolutionOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

When resolving a bookmark, use bitwise `OR` operators to combine the options you want to specify, and provide them to the `options` parameter of the [URLByResolvingBookmarkData:options:relativeToURL:bookmarkDataIsStale:error:](urlbyresolvingbookmarkdata_options_relativetourl_bookmarkdataisstale_error_.md) method.

<a id="Version-Notes"></a>

### Version-Notes

Security-scoped bookmarks are not available in versions of macOS prior to OS X 10.7.3.

## Topics

### Constants

- [NSURLBookmarkResolutionWithoutUI](bookmarkresolutionoptions/withoutui.md): Specifies that no UI feedback should accompany resolution of the bookmark data.
- [NSURLBookmarkResolutionWithoutMounting](bookmarkresolutionoptions/withoutmounting.md): Specifies that no volume should be mounted during resolution of the bookmark data.
- [NSURLBookmarkResolutionWithSecurityScope](bookmarkresolutionoptions/withsecurityscope.md): Specifies that the security scope, applied to the bookmark when it was created, should be used during resolution of the bookmark data.
- [NSURLBookmarkResolutionWithoutImplicitStartAccessing](bookmarkresolutionoptions/withoutimplicitstartaccessing.md): A property that specifies that resolution doesn’t implicitly start accessing the ephemeral security-scoped resource.

## See Also

### Working with Bookmark Data

- [bookmarkDataWithContentsOfURL:error:](bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [bookmarkDataWithOptions:includingResourceValuesForKeys:relativeToURL:error:](bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns a bookmark for the URL, created with specified options and resource values.
- [resourceValuesForKeys:fromBookmarkData:](resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [writeBookmarkData:toURL:options:error:](writebookmarkdata%28__to_options_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [startAccessingSecurityScopedResource](startaccessingsecurityscopedresource%28%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [stopAccessingSecurityScopedResource](stopaccessingsecurityscopedresource%28%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
- [NSURLBookmarkFileCreationOptions](bookmarkfilecreationoptions.md): Options used when creating file bookmark data
- [NSURLBookmarkCreationOptions](bookmarkcreationoptions.md): Options used when creating bookmark data.
