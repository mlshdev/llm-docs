> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/bookmarkcreationoptions/withsecurityscope](https://developer.apple.com/documentation/foundation/nsurl/bookmarkcreationoptions/withsecurityscope)

# withSecurityScope (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read/write access to a file-system resource.

## Declaration

```swift
static var withSecurityScope: NSURL.BookmarkCreationOptions { get }
```

<a id="Discussion"></a>

## Discussion

For use in an app that adopts App Sandbox. For more information, see [App Sandbox Design Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html#//apple_ref/doc/uid/TP40011183).

> **Note**

>  This flag can’t be used in conjunction with either [minimalBookmark](minimalbookmark.md) or [suitableForBookmarkFile](suitableforbookmarkfile.md).

## See Also

### Options

- [minimalBookmark](minimalbookmark.md): Specifies that when creating a bookmark, it includes minimal information.
- [suitableForBookmarkFile](suitableforbookmarkfile.md): Specifies that the bookmark data includes the required properties for creating Finder alias files.
- [securityScopeAllowOnlyReadAccess](securityscopeallowonlyreadaccess.md): Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read-only access to a file-system resource.
- [withoutImplicitSecurityScope](withoutimplicitsecurityscope.md): Prevents inclusion of a bookmark’s implicit ephemeral security scope, when creating one without security scope.
- [preferFileIDResolution](preferfileidresolution.md): Deprecated. Specifies that when creating a bookmark, upon resolution, its embedded file ID takes precedence over other sources of information (file system path, for example) when there’s a conflict.

# NSURLBookmarkCreationWithSecurityScope (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read/write access to a file-system resource.

## Declaration

```objectivec
NSURLBookmarkCreationWithSecurityScope
```

<a id="Discussion"></a>

## Discussion

For use in an app that adopts App Sandbox. For more information, see [App Sandbox Design Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html#//apple_ref/doc/uid/TP40011183).

> **Note**

>  This flag can’t be used in conjunction with either [NSURLBookmarkCreationMinimalBookmark](minimalbookmark.md) or [NSURLBookmarkCreationSuitableForBookmarkFile](suitableforbookmarkfile.md).

## See Also

### Options

- [NSURLBookmarkCreationMinimalBookmark](minimalbookmark.md): Specifies that when creating a bookmark, it includes minimal information.
- [NSURLBookmarkCreationSuitableForBookmarkFile](suitableforbookmarkfile.md): Specifies that the bookmark data includes the required properties for creating Finder alias files.
- [NSURLBookmarkCreationSecurityScopeAllowOnlyReadAccess](securityscopeallowonlyreadaccess.md): Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read-only access to a file-system resource.
- [NSURLBookmarkCreationWithoutImplicitSecurityScope](withoutimplicitsecurityscope.md): Prevents inclusion of a bookmark’s implicit ephemeral security scope, when creating one without security scope.
- [NSURLBookmarkCreationPreferFileIDResolution](preferfileidresolution.md): Deprecated. Specifies that when creating a bookmark, upon resolution, its embedded file ID takes precedence over other sources of information (file system path, for example) when there’s a conflict.
