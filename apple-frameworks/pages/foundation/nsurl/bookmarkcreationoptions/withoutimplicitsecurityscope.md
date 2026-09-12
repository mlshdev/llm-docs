> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/bookmarkcreationoptions/withoutimplicitsecurityscope](https://developer.apple.com/documentation/foundation/nsurl/bookmarkcreationoptions/withoutimplicitsecurityscope)

# withoutImplicitSecurityScope (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Prevents inclusion of a bookmark’s implicit ephemeral security scope, when creating one without security scope.

## Declaration

```swift
static var withoutImplicitSecurityScope: NSURL.BookmarkCreationOptions { get }
```

<a id="Discussion"></a>

## Discussion

Bookmarks that you create without security scope automatically carry implicit ephemeral security scope. This security scope is valid until reboot at the latest, and confers access to the resource to any other process that resolves the bookmark. Using this option prevents inclusion of this ephemeral security scope.

When using this option, other processes can’t call [startAccessingSecurityScopedResource()](../startaccessingsecurityscopedresource%28%29.md) on the resolved URL. The option prevents providing unintended access to resources to other processes, and is also a performance optimization that reduces the size of the bookmark.

## See Also

### Options

- [minimalBookmark](minimalbookmark.md): Specifies that when creating a bookmark, it includes minimal information.
- [suitableForBookmarkFile](suitableforbookmarkfile.md): Specifies that the bookmark data includes the required properties for creating Finder alias files.
- [withSecurityScope](withsecurityscope.md): Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read/write access to a file-system resource.
- [securityScopeAllowOnlyReadAccess](securityscopeallowonlyreadaccess.md): Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read-only access to a file-system resource.
- [preferFileIDResolution](preferfileidresolution.md): Deprecated. Specifies that when creating a bookmark, upon resolution, its embedded file ID takes precedence over other sources of information (file system path, for example) when there’s a conflict.

# NSURLBookmarkCreationWithoutImplicitSecurityScope (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Prevents inclusion of a bookmark’s implicit ephemeral security scope, when creating one without security scope.

## Declaration

```objectivec
NSURLBookmarkCreationWithoutImplicitSecurityScope
```

<a id="Discussion"></a>

## Discussion

Bookmarks that you create without security scope automatically carry implicit ephemeral security scope. This security scope is valid until reboot at the latest, and confers access to the resource to any other process that resolves the bookmark. Using this option prevents inclusion of this ephemeral security scope.

When using this option, other processes can’t call [startAccessingSecurityScopedResource](../startaccessingsecurityscopedresource%28%29.md) on the resolved URL. The option prevents providing unintended access to resources to other processes, and is also a performance optimization that reduces the size of the bookmark.

## See Also

### Options

- [NSURLBookmarkCreationMinimalBookmark](minimalbookmark.md): Specifies that when creating a bookmark, it includes minimal information.
- [NSURLBookmarkCreationSuitableForBookmarkFile](suitableforbookmarkfile.md): Specifies that the bookmark data includes the required properties for creating Finder alias files.
- [NSURLBookmarkCreationWithSecurityScope](withsecurityscope.md): Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read/write access to a file-system resource.
- [NSURLBookmarkCreationSecurityScopeAllowOnlyReadAccess](securityscopeallowonlyreadaccess.md): Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read-only access to a file-system resource.
- [NSURLBookmarkCreationPreferFileIDResolution](preferfileidresolution.md): Deprecated. Specifies that when creating a bookmark, upon resolution, its embedded file ID takes precedence over other sources of information (file system path, for example) when there’s a conflict.
