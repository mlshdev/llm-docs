> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photosui/photospickeritem/encodingdisambiguationpolicy

# PhotosPickerItem.EncodingDisambiguationPolicy

**Framework:** PhotosUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

A type that determines the encoding to use when multiple encodings are available, based on the content type.

## Declaration

```swift
struct EncodingDisambiguationPolicy
```

## Topics

### Getting standard encoding policies

- [automatic](encodingdisambiguationpolicy/automatic.md): An encoding policy that chooses the best encoding.
- [current](encodingdisambiguationpolicy/current.md): An encoding policy that chooses the current encoding to avoid transcoding, if possible.
- [compatible](encodingdisambiguationpolicy/compatible.md): An encoding policy that chooses the most compatible encoding even if transcoding is necessary.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
