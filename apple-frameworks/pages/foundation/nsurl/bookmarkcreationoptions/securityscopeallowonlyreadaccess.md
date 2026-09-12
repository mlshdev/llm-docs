> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/bookmarkcreationoptions/securityscopeallowonlyreadaccess](https://developer.apple.com/documentation/foundation/nsurl/bookmarkcreationoptions/securityscopeallowonlyreadaccess)

# securityScopeAllowOnlyReadAccess (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read-only access to a file-system resource.

## Declaration

```swift
static var securityScopeAllowOnlyReadAccess: NSURL.BookmarkCreationOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option is only meaningful when used along with the [withSecurityScope](withsecurityscope.md) option,

Use this option in an app that adopts App Sandbox. For more information, see [App Sandbox Design Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html#//apple_ref/doc/uid/TP40011183).

## See Also

### Options

- [minimalBookmark](minimalbookmark.md): Specifies that when creating a bookmark, it includes minimal information.
- [suitableForBookmarkFile](suitableforbookmarkfile.md): Specifies that the bookmark data includes the required properties for creating Finder alias files.
- [withSecurityScope](withsecurityscope.md): Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read/write access to a file-system resource.
- [withoutImplicitSecurityScope](withoutimplicitsecurityscope.md): Prevents inclusion of a bookmark’s implicit ephemeral security scope, when creating one without security scope.
- [preferFileIDResolution](preferfileidresolution.md): Deprecated. Specifies that when creating a bookmark, upon resolution, its embedded file ID takes precedence over other sources of information (file system path, for example) when there’s a conflict.

# NSURLBookmarkCreationSecurityScopeAllowOnlyReadAccess (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read-only access to a file-system resource.

## Declaration

```objectivec
NSURLBookmarkCreationSecurityScopeAllowOnlyReadAccess
```

<a id="Discussion"></a>

## Discussion

This option is only meaningful when used along with the [NSURLBookmarkCreationWithSecurityScope](withsecurityscope.md) option,

Use this option in an app that adopts App Sandbox. For more information, see [App Sandbox Design Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html#//apple_ref/doc/uid/TP40011183).

## See Also

### Options

- [NSURLBookmarkCreationMinimalBookmark](minimalbookmark.md): Specifies that when creating a bookmark, it includes minimal information.
- [NSURLBookmarkCreationSuitableForBookmarkFile](suitableforbookmarkfile.md): Specifies that the bookmark data includes the required properties for creating Finder alias files.
- [NSURLBookmarkCreationWithSecurityScope](withsecurityscope.md): Specifies that when creating a security-scoped bookmark, upon resolution, it provides a security-scoped URL allowing read/write access to a file-system resource.
- [NSURLBookmarkCreationWithoutImplicitSecurityScope](withoutimplicitsecurityscope.md): Prevents inclusion of a bookmark’s implicit ephemeral security scope, when creating one without security scope.
- [NSURLBookmarkCreationPreferFileIDResolution](preferfileidresolution.md): Deprecated. Specifies that when creating a bookmark, upon resolution, its embedded file ID takes precedence over other sources of information (file system path, for example) when there’s a conflict.
