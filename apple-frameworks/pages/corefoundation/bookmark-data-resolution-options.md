> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/bookmark-data-resolution-options](https://developer.apple.com/documentation/corefoundation/bookmark-data-resolution-options)

# Bookmark Data Resolution Options (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Options used when resolving bookmark data.

<a id="overview"></a>

## Overview

When resolving a bookmark to obtain a URL, use bitwise `OR` operators to combine the options you want to specify, and provide them to the `options` parameter of the [CFURLCreateByResolvingBookmarkData(\_:\_:\_:\_:\_:\_:\_:)](cfurlcreatebyresolvingbookmarkdata%28______________%29.md) function.

<a id="Version-Notes"></a>

### Version-Notes

Security-scoped bookmarks are not available in versions of macOS prior to OS X v10.7.3.

## Topics

### Constants

- [cfBookmarkResolutionWithoutUIMask](cfurlbookmarkresolutionoptions/cfbookmarkresolutionwithoutuimask.md): Specifies that no UI feedback accompany resolution of the bookmark data.
- [cfBookmarkResolutionWithoutMountingMask](cfurlbookmarkresolutionoptions/cfbookmarkresolutionwithoutmountingmask.md): Specifies that no volume should be mounted during resolution of the bookmark data.
- [cfurlBookmarkResolutionWithSecurityScope](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithsecurityscope.md): Specifies that the security scope, applied to the bookmark when it was created, should be used during resolution of the bookmark data.

## See Also

### Bookmark Data Constants

- [Bookmark Data Creation Options](bookmark-data-creation-options.md): Options used when creating bookmark data.

# Bookmark Data Resolution Options (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Options used when resolving bookmark data.

<a id="overview"></a>

## Overview

When resolving a bookmark to obtain a URL, use bitwise `OR` operators to combine the options you want to specify, and provide them to the `options` parameter of the [CFURLCreateByResolvingBookmarkData](cfurlcreatebyresolvingbookmarkdata%28______________%29.md) function.

<a id="Version-Notes"></a>

### Version-Notes

Security-scoped bookmarks are not available in versions of macOS prior to OS X v10.7.3.

## Topics

### Constants

- [kCFBookmarkResolutionWithoutUIMask](cfurlbookmarkresolutionoptions/cfbookmarkresolutionwithoutuimask.md): Specifies that no UI feedback accompany resolution of the bookmark data.
- [kCFBookmarkResolutionWithoutMountingMask](cfurlbookmarkresolutionoptions/cfbookmarkresolutionwithoutmountingmask.md): Specifies that no volume should be mounted during resolution of the bookmark data.
- [kCFURLBookmarkResolutionWithSecurityScope](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithsecurityscope.md): Specifies that the security scope, applied to the bookmark when it was created, should be used during resolution of the bookmark data.

## See Also

### Bookmark Data Constants

- [Bookmark Data Creation Options](bookmark-data-creation-options.md): Options used when creating bookmark data.
