> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/photospickeritem/encodingdisambiguationpolicy/compatible](https://developer.apple.com/documentation/photosui/photospickeritem/encodingdisambiguationpolicy/compatible)

# compatible

**Framework:** PhotosUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

An encoding policy that chooses the most compatible encoding even if transcoding is necessary.

## Declaration

```swift
static let compatible: PhotosPickerItem.EncodingDisambiguationPolicy
```

## See Also

### Getting standard encoding policies

- [automatic](automatic.md): An encoding policy that chooses the best encoding.
- [current](current.md): An encoding policy that chooses the current encoding to avoid transcoding, if possible.
