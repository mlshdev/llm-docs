> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/bookmarkcreationoptions/suitableforbookmarkfile](https://developer.apple.com/documentation/foundation/nsurl/bookmarkcreationoptions/suitableforbookmarkfile)

# suitableForBookmarkFile (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the bookmark data includes the required properties for creating Finder alias files.

## Declaration

```swift
static var suitableForBookmarkFile: NSURL.BookmarkCreationOptions { get }
```

## See Also

### Options

- [minimalBookmark](minimalbookmark.md): Specifies that when creating a bookmark, it includes minimal information.
- [withSecurityScope](withsecurityscope.md): Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read/write access to a file-system resource.
- [securityScopeAllowOnlyReadAccess](securityscopeallowonlyreadaccess.md): Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read-only access to a file-system resource.
- [withoutImplicitSecurityScope](withoutimplicitsecurityscope.md): Prevents inclusion of a bookmark’s implicit ephemeral security scope, when creating one without security scope.
- [preferFileIDResolution](preferfileidresolution.md): Deprecated. Specifies that when creating a bookmark, upon resolution, its embedded file ID takes precedence over other sources of information (file system path, for example) when there’s a conflict.

# NSURLBookmarkCreationSuitableForBookmarkFile (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the bookmark data includes the required properties for creating Finder alias files.

## Declaration

```objectivec
NSURLBookmarkCreationSuitableForBookmarkFile
```

## See Also

### Options

- [NSURLBookmarkCreationMinimalBookmark](minimalbookmark.md): Specifies that when creating a bookmark, it includes minimal information.
- [NSURLBookmarkCreationWithSecurityScope](withsecurityscope.md): Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read/write access to a file-system resource.
- [NSURLBookmarkCreationSecurityScopeAllowOnlyReadAccess](securityscopeallowonlyreadaccess.md): Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read-only access to a file-system resource.
- [NSURLBookmarkCreationWithoutImplicitSecurityScope](withoutimplicitsecurityscope.md): Prevents inclusion of a bookmark’s implicit ephemeral security scope, when creating one without security scope.
- [NSURLBookmarkCreationPreferFileIDResolution](preferfileidresolution.md): Deprecated. Specifies that when creating a bookmark, upon resolution, its embedded file ID takes precedence over other sources of information (file system path, for example) when there’s a conflict.
