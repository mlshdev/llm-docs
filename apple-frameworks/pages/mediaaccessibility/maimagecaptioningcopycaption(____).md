> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/maimagecaptioningcopycaption(_:_:)](https://developer.apple.com/documentation/mediaaccessibility/maimagecaptioningcopycaption(_:_:))

# MAImageCaptioningCopyCaption(\_:\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Returns an accessibility caption from an image’s metadata.

## Declaration

```swift
func MAImageCaptioningCopyCaption(_ url: CFURL, _ error: UnsafeMutablePointer<CFError?>?) -> CFString?
```

## See Also

### Image captioning settings

- [MAImageCaptioningSetCaption(\_:\_:\_:)](maimagecaptioningsetcaption%28______%29.md): Sets the accessibility caption for an image’s metadata.
- [MAImageCaptioningCopyMetadataTagPath()](maimagecaptioningcopymetadatatagpath%28%29.md): Returns the metadata tag path.

# MAImageCaptioningCopyCaption (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Returns an accessibility caption from an image’s metadata.

## Declaration

```objectivec
extern CFStringRefMAImageCaptioningCopyCaption(CFURLRef url, CFErrorRef*error);
```

## See Also

### Image captioning settings

- [MAImageCaptioningSetCaption](maimagecaptioningsetcaption%28______%29.md): Sets the accessibility caption for an image’s metadata.
- [MAImageCaptioningCopyMetadataTagPath](maimagecaptioningcopymetadatatagpath%28%29.md): Returns the metadata tag path.
