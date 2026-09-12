> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/bookmarkresolutionoptions/withoutimplicitstartaccessing](https://developer.apple.com/documentation/foundation/nsurl/bookmarkresolutionoptions/withoutimplicitstartaccessing)

# withoutImplicitStartAccessing (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS 11.2+ · tvOS 14.2+ · visionOS 1.0+ · watchOS 7.2+

A property that specifies that resolution doesn’t implicitly start accessing the ephemeral security-scoped resource.

## Declaration

```swift
static var withoutImplicitStartAccessing: NSURL.BookmarkResolutionOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option causes an implicit call to [startAccessingSecurityScopedResource()](../startaccessingsecurityscopedresource%28%29.md) on the returned URL when it’s ready to use the resource.

This option isn’t applicable to security-scoped bookmarks.

## See Also

### Constants

- [withoutUI](withoutui.md): Specifies that no UI feedback should accompany resolution of the bookmark data.
- [withoutMounting](withoutmounting.md): Specifies that no volume should be mounted during resolution of the bookmark data.
- [withSecurityScope](withsecurityscope.md): Specifies that the security scope, applied to the bookmark when it was created, should be used during resolution of the bookmark data.

# NSURLBookmarkResolutionWithoutImplicitStartAccessing (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS 11.2+ · tvOS 14.2+ · visionOS 1.0+ · watchOS 7.2+

A property that specifies that resolution doesn’t implicitly start accessing the ephemeral security-scoped resource.

## Declaration

```objectivec
NSURLBookmarkResolutionWithoutImplicitStartAccessing
```

<a id="Discussion"></a>

## Discussion

This option causes an implicit call to [startAccessingSecurityScopedResource](../startaccessingsecurityscopedresource%28%29.md) on the returned URL when it’s ready to use the resource.

This option isn’t applicable to security-scoped bookmarks.

## See Also

### Constants

- [NSURLBookmarkResolutionWithoutUI](withoutui.md): Specifies that no UI feedback should accompany resolution of the bookmark data.
- [NSURLBookmarkResolutionWithoutMounting](withoutmounting.md): Specifies that no volume should be mounted during resolution of the bookmark data.
- [NSURLBookmarkResolutionWithSecurityScope](withsecurityscope.md): Specifies that the security scope, applied to the bookmark when it was created, should be used during resolution of the bookmark data.
