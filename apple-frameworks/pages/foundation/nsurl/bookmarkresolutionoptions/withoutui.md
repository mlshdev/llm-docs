> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/bookmarkresolutionoptions/withoutui](https://developer.apple.com/documentation/foundation/nsurl/bookmarkresolutionoptions/withoutui)

# withoutUI (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that no UI feedback should accompany resolution of the bookmark data.

## Declaration

```swift
static var withoutUI: NSURL.BookmarkResolutionOptions { get }
```

## See Also

### Constants

- [withoutMounting](withoutmounting.md): Specifies that no volume should be mounted during resolution of the bookmark data.
- [withSecurityScope](withsecurityscope.md): Specifies that the security scope, applied to the bookmark when it was created, should be used during resolution of the bookmark data.
- [withoutImplicitStartAccessing](withoutimplicitstartaccessing.md): A property that specifies that resolution doesn’t implicitly start accessing the ephemeral security-scoped resource.

# NSURLBookmarkResolutionWithoutUI (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that no UI feedback should accompany resolution of the bookmark data.

## Declaration

```objectivec
NSURLBookmarkResolutionWithoutUI
```

## See Also

### Constants

- [NSURLBookmarkResolutionWithoutMounting](withoutmounting.md): Specifies that no volume should be mounted during resolution of the bookmark data.
- [NSURLBookmarkResolutionWithSecurityScope](withsecurityscope.md): Specifies that the security scope, applied to the bookmark when it was created, should be used during resolution of the bookmark data.
- [NSURLBookmarkResolutionWithoutImplicitStartAccessing](withoutimplicitstartaccessing.md): A property that specifies that resolution doesn’t implicitly start accessing the ephemeral security-scoped resource.
