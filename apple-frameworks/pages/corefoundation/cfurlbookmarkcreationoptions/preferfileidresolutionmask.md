> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlbookmarkcreationoptions/preferfileidresolutionmask](https://developer.apple.com/documentation/corefoundation/cfurlbookmarkcreationoptions/preferfileidresolutionmask)

# preferFileIDResolutionMask (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 4.0+ (deprecated in 7.0) · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Specifies that an alias created with the bookmark data prefers resolving with its embedded file ID.

> kCFURLBookmarkCreationPreferFileIDResolutionMask does nothing and has no effect on bookmark resolution

## Declaration

```swift
static var preferFileIDResolutionMask: CFURLBookmarkCreationOptions { get }
```

## See Also

### Constants

- [minimalBookmarkMask](minimalbookmarkmask.md): Specifies that an alias created with the bookmark data be created with minimal information, which may make it smaller but still able to resolve in certain ways.
- [suitableForBookmarkFile](suitableforbookmarkfile.md): Specifies that the bookmark data include properties required to create Finder alias files.
- [withSecurityScope](withsecurityscope.md): Specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read/write access to a file-system resource; for use in an app that adopts App Sandbox.
- [securityScopeAllowOnlyReadAccess](securityscopeallowonlyreadaccess.md): When combined with the [withSecurityScope](withsecurityscope.md) option, specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read-only access to a file-system resource; for use in an app that adopts App Sandbox.

# kCFURLBookmarkCreationPreferFileIDResolutionMask (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.9) · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Specifies that an alias created with the bookmark data prefers resolving with its embedded file ID.

> kCFURLBookmarkCreationPreferFileIDResolutionMask does nothing and has no effect on bookmark resolution

## Declaration

```objectivec
kCFURLBookmarkCreationPreferFileIDResolutionMask
```

## See Also

### Constants

- [kCFURLBookmarkCreationMinimalBookmarkMask](minimalbookmarkmask.md): Specifies that an alias created with the bookmark data be created with minimal information, which may make it smaller but still able to resolve in certain ways.
- [kCFURLBookmarkCreationSuitableForBookmarkFile](suitableforbookmarkfile.md): Specifies that the bookmark data include properties required to create Finder alias files.
- [kCFURLBookmarkCreationWithSecurityScope](withsecurityscope.md): Specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read/write access to a file-system resource; for use in an app that adopts App Sandbox.
- [kCFURLBookmarkCreationSecurityScopeAllowOnlyReadAccess](securityscopeallowonlyreadaccess.md): When combined with the [kCFURLBookmarkCreationWithSecurityScope](withsecurityscope.md) option, specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read-only access to a file-system resource; for use in an app that adopts App Sandbox.
