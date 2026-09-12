> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlbookmarkcreationoptions/suitableforbookmarkfile](https://developer.apple.com/documentation/corefoundation/cfurlbookmarkcreationoptions/suitableforbookmarkfile)

# suitableForBookmarkFile (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the bookmark data include properties required to create Finder alias files.

## Declaration

```swift
static var suitableForBookmarkFile: CFURLBookmarkCreationOptions { get }
```

## See Also

### Constants

- [preferFileIDResolutionMask](preferfileidresolutionmask.md): Deprecated. Specifies that an alias created with the bookmark data prefers resolving with its embedded file ID.
- [minimalBookmarkMask](minimalbookmarkmask.md): Specifies that an alias created with the bookmark data be created with minimal information, which may make it smaller but still able to resolve in certain ways.
- [withSecurityScope](withsecurityscope.md): Specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read/write access to a file-system resource; for use in an app that adopts App Sandbox.
- [securityScopeAllowOnlyReadAccess](securityscopeallowonlyreadaccess.md): When combined with the [withSecurityScope](withsecurityscope.md) option, specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read-only access to a file-system resource; for use in an app that adopts App Sandbox.

# kCFURLBookmarkCreationSuitableForBookmarkFile (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the bookmark data include properties required to create Finder alias files.

## Declaration

```objectivec
kCFURLBookmarkCreationSuitableForBookmarkFile
```

## See Also

### Constants

- [kCFURLBookmarkCreationPreferFileIDResolutionMask](preferfileidresolutionmask.md): Deprecated. Specifies that an alias created with the bookmark data prefers resolving with its embedded file ID.
- [kCFURLBookmarkCreationMinimalBookmarkMask](minimalbookmarkmask.md): Specifies that an alias created with the bookmark data be created with minimal information, which may make it smaller but still able to resolve in certain ways.
- [kCFURLBookmarkCreationWithSecurityScope](withsecurityscope.md): Specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read/write access to a file-system resource; for use in an app that adopts App Sandbox.
- [kCFURLBookmarkCreationSecurityScopeAllowOnlyReadAccess](securityscopeallowonlyreadaccess.md): When combined with the [kCFURLBookmarkCreationWithSecurityScope](withsecurityscope.md) option, specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read-only access to a file-system resource; for use in an app that adopts App Sandbox.
