> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photosui/photospickeritem/encodingdisambiguationpolicy/automatic

# automatic

**Framework:** PhotosUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

An encoding policy that chooses the best encoding.

## Declaration

```swift
static let automatic: PhotosPickerItem.EncodingDisambiguationPolicy
```

## See Also

### Getting standard encoding policies

- [current](current.md): An encoding policy that chooses the current encoding to avoid transcoding, if possible.
- [compatible](compatible.md): An encoding policy that chooses the most compatible encoding even if transcoding is necessary.
