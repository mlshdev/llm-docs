> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/maimagecaptioningsetcaption(_:_:_:)](https://developer.apple.com/documentation/mediaaccessibility/maimagecaptioningsetcaption(_:_:_:))

# MAImageCaptioningSetCaption(\_:\_:\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the accessibility caption for an image’s metadata.

## Declaration

```swift
func MAImageCaptioningSetCaption(_ url: CFURL, _ string: CFString?, _ error: UnsafeMutablePointer<CFError?>?) -> Bool
```

## See Also

### Image captioning settings

- [MAImageCaptioningCopyCaption(\_:\_:)](maimagecaptioningcopycaption%28____%29.md): Returns an accessibility caption from an image’s metadata.
- [MAImageCaptioningCopyMetadataTagPath()](maimagecaptioningcopymetadatatagpath%28%29.md): Returns the metadata tag path.

# MAImageCaptioningSetCaption (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the accessibility caption for an image’s metadata.

## Declaration

```objectivec
extern bool MAImageCaptioningSetCaption(CFURLRef url, CFStringRef string, CFErrorRef*error);
```

## See Also

### Image captioning settings

- [MAImageCaptioningCopyCaption](maimagecaptioningcopycaption%28____%29.md): Returns an accessibility caption from an image’s metadata.
- [MAImageCaptioningCopyMetadataTagPath](maimagecaptioningcopymetadatatagpath%28%29.md): Returns the metadata tag path.
