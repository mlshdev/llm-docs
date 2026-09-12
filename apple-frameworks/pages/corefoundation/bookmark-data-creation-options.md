> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/bookmark-data-creation-options](https://developer.apple.com/documentation/corefoundation/bookmark-data-creation-options)

# Bookmark Data Creation Options (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Options used when creating bookmark data.

<a id="overview"></a>

## Overview

When creating a bookmark, use bitwise `OR` operators to combine the options you want to specify, and provide them to the `options` parameter of the [CFURLCreateBookmarkData(\_:\_:\_:\_:\_:\_:)](cfurlcreatebookmarkdata%28____________%29.md) method.

<a id="Version-Notes"></a>

### Version-Notes

Security-scoped bookmarks are not available in versions of macOS prior to OS X v10.7.3.

## Topics

### Constants

- [preferFileIDResolutionMask](cfurlbookmarkcreationoptions/preferfileidresolutionmask.md): Deprecated. Specifies that an alias created with the bookmark data prefers resolving with its embedded file ID.
- [minimalBookmarkMask](cfurlbookmarkcreationoptions/minimalbookmarkmask.md): Specifies that an alias created with the bookmark data be created with minimal information, which may make it smaller but still able to resolve in certain ways.
- [suitableForBookmarkFile](cfurlbookmarkcreationoptions/suitableforbookmarkfile.md): Specifies that the bookmark data include properties required to create Finder alias files.
- [withSecurityScope](cfurlbookmarkcreationoptions/withsecurityscope.md): Specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read/write access to a file-system resource; for use in an app that adopts App Sandbox.
- [securityScopeAllowOnlyReadAccess](cfurlbookmarkcreationoptions/securityscopeallowonlyreadaccess.md): When combined with the [withSecurityScope](cfurlbookmarkcreationoptions/withsecurityscope.md) option, specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read-only access to a file-system resource; for use in an app that adopts App Sandbox.

## See Also

### Bookmark Data Constants

- [Bookmark Data Resolution Options](bookmark-data-resolution-options.md): Options used when resolving bookmark data.

# Bookmark Data Creation Options (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Options used when creating bookmark data.

<a id="overview"></a>

## Overview

When creating a bookmark, use bitwise `OR` operators to combine the options you want to specify, and provide them to the `options` parameter of the [CFURLCreateBookmarkData](cfurlcreatebookmarkdata%28____________%29.md) method.

<a id="Version-Notes"></a>

### Version-Notes

Security-scoped bookmarks are not available in versions of macOS prior to OS X v10.7.3.

## Topics

### Constants

- [kCFURLBookmarkCreationPreferFileIDResolutionMask](cfurlbookmarkcreationoptions/preferfileidresolutionmask.md): Deprecated. Specifies that an alias created with the bookmark data prefers resolving with its embedded file ID.
- [kCFURLBookmarkCreationMinimalBookmarkMask](cfurlbookmarkcreationoptions/minimalbookmarkmask.md): Specifies that an alias created with the bookmark data be created with minimal information, which may make it smaller but still able to resolve in certain ways.
- [kCFURLBookmarkCreationSuitableForBookmarkFile](cfurlbookmarkcreationoptions/suitableforbookmarkfile.md): Specifies that the bookmark data include properties required to create Finder alias files.
- [kCFURLBookmarkCreationWithSecurityScope](cfurlbookmarkcreationoptions/withsecurityscope.md): Specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read/write access to a file-system resource; for use in an app that adopts App Sandbox.
- [kCFURLBookmarkCreationSecurityScopeAllowOnlyReadAccess](cfurlbookmarkcreationoptions/securityscopeallowonlyreadaccess.md): When combined with the [kCFURLBookmarkCreationWithSecurityScope](cfurlbookmarkcreationoptions/withsecurityscope.md) option, specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read-only access to a file-system resource; for use in an app that adopts App Sandbox.

## See Also

### Bookmark Data Constants

- [Bookmark Data Resolution Options](bookmark-data-resolution-options.md): Options used when resolving bookmark data.
