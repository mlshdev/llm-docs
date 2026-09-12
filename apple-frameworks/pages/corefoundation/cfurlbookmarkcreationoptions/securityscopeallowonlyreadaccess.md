> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlbookmarkcreationoptions/securityscopeallowonlyreadaccess](https://developer.apple.com/documentation/corefoundation/cfurlbookmarkcreationoptions/securityscopeallowonlyreadaccess)

# securityScopeAllowOnlyReadAccess (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

When combined with the [withSecurityScope](withsecurityscope.md) option, specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read-only access to a file-system resource; for use in an app that adopts App Sandbox.

## Declaration

```swift
static var securityScopeAllowOnlyReadAccess: CFURLBookmarkCreationOptions { get }
```

## See Also

### Constants

- [preferFileIDResolutionMask](preferfileidresolutionmask.md): Deprecated. Specifies that an alias created with the bookmark data prefers resolving with its embedded file ID.
- [minimalBookmarkMask](minimalbookmarkmask.md): Specifies that an alias created with the bookmark data be created with minimal information, which may make it smaller but still able to resolve in certain ways.
- [suitableForBookmarkFile](suitableforbookmarkfile.md): Specifies that the bookmark data include properties required to create Finder alias files.
- [withSecurityScope](withsecurityscope.md): Specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read/write access to a file-system resource; for use in an app that adopts App Sandbox.

# kCFURLBookmarkCreationSecurityScopeAllowOnlyReadAccess (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

When combined with the [kCFURLBookmarkCreationWithSecurityScope](withsecurityscope.md) option, specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read-only access to a file-system resource; for use in an app that adopts App Sandbox.

## Declaration

```objectivec
kCFURLBookmarkCreationSecurityScopeAllowOnlyReadAccess
```

## See Also

### Constants

- [kCFURLBookmarkCreationPreferFileIDResolutionMask](preferfileidresolutionmask.md): Deprecated. Specifies that an alias created with the bookmark data prefers resolving with its embedded file ID.
- [kCFURLBookmarkCreationMinimalBookmarkMask](minimalbookmarkmask.md): Specifies that an alias created with the bookmark data be created with minimal information, which may make it smaller but still able to resolve in certain ways.
- [kCFURLBookmarkCreationSuitableForBookmarkFile](suitableforbookmarkfile.md): Specifies that the bookmark data include properties required to create Finder alias files.
- [kCFURLBookmarkCreationWithSecurityScope](withsecurityscope.md): Specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read/write access to a file-system resource; for use in an app that adopts App Sandbox.
