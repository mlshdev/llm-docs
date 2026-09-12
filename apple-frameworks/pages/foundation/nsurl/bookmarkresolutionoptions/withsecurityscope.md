> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/bookmarkresolutionoptions/withsecurityscope](https://developer.apple.com/documentation/foundation/nsurl/bookmarkresolutionoptions/withsecurityscope)

# withSecurityScope (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Specifies that the security scope, applied to the bookmark when it was created, should be used during resolution of the bookmark data.

## Declaration

```swift
static var withSecurityScope: NSURL.BookmarkResolutionOptions { get }
```

## See Also

### Constants

- [withoutUI](withoutui.md): Specifies that no UI feedback should accompany resolution of the bookmark data.
- [withoutMounting](withoutmounting.md): Specifies that no volume should be mounted during resolution of the bookmark data.
- [withoutImplicitStartAccessing](withoutimplicitstartaccessing.md): A property that specifies that resolution doesn’t implicitly start accessing the ephemeral security-scoped resource.

# NSURLBookmarkResolutionWithSecurityScope (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

Specifies that the security scope, applied to the bookmark when it was created, should be used during resolution of the bookmark data.

## Declaration

```objectivec
NSURLBookmarkResolutionWithSecurityScope
```

## See Also

### Constants

- [NSURLBookmarkResolutionWithoutUI](withoutui.md): Specifies that no UI feedback should accompany resolution of the bookmark data.
- [NSURLBookmarkResolutionWithoutMounting](withoutmounting.md): Specifies that no volume should be mounted during resolution of the bookmark data.
- [NSURLBookmarkResolutionWithoutImplicitStartAccessing](withoutimplicitstartaccessing.md): A property that specifies that resolution doesn’t implicitly start accessing the ephemeral security-scoped resource.
