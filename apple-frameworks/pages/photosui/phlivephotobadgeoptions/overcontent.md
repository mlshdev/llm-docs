> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotobadgeoptions/overcontent](https://developer.apple.com/documentation/photosui/phlivephotobadgeoptions/overcontent)

# overContent (Swift)

**Framework:** PhotosUI  
**Kind:** Type Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Return a variant icon for use on a variable background such as an animating Live Photo view.

## Declaration

```swift
static var overContent: PHLivePhotoBadgeOptions { get }
```

<a id="Discussion"></a>

## Discussion

By default, the [livePhotoBadgeImage(options:)](../phlivephotoview/livephotobadgeimage%28options_%29.md) returns a solid-color image suitable for use as a template image, which you can then tint for appropriate display against a specific background. If the background content is busy, animated, or unknown, add this option to instead obtain an icon (not suitable for use as a template image) that provides extra contrast for better readability.

## See Also

### Constants

- [liveOff](liveoff.md): Return an icon for identifying assets whose additional Live Photo content is disabled.

# PHLivePhotoBadgeOptionsOverContent (Objective-C)

**Framework:** PhotosUI  
**Kind:** Enumeration Case  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Return a variant icon for use on a variable background such as an animating Live Photo view.

## Declaration

```objectivec
PHLivePhotoBadgeOptionsOverContent
```

<a id="Discussion"></a>

## Discussion

By default, the [livePhotoBadgeImageWithOptions:](../phlivephotoview/livephotobadgeimage%28options_%29.md) returns a solid-color image suitable for use as a template image, which you can then tint for appropriate display against a specific background. If the background content is busy, animated, or unknown, add this option to instead obtain an icon (not suitable for use as a template image) that provides extra contrast for better readability.

## See Also

### Constants

- [PHLivePhotoBadgeOptionsLiveOff](liveoff.md): Return an icon for identifying assets whose additional Live Photo content is disabled.
