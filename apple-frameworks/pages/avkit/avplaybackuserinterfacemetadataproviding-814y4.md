> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacemetadataproviding-814y4](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemetadataproviding-814y4)

# AVPlaybackUserInterfaceMetadataProviding

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Provides metadata information about media content including title, artwork, and content type.

## Declaration

```swift
@MainActor protocol AVPlaybackUserInterfaceMetadataProviding : AnyObject, Observable
```

## Topics

### Instance Properties

- [metadata](avplaybackuserinterfacemetadataproviding-814y4/metadata.md): The metadata object containing information about the media content.

## Relationships

### Inherits From

- [Observable](https://developer.apple.com/documentation/observation/observable)

### Inherited By

- [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md)

## See Also

### Metadata

- [AVPlaybackUserInterfaceContentMetadata](avplaybackuserinterfacecontentmetadata-swift.struct.md): A Swift-friendly structure representing media metadata.
- [AVPlaybackUserInterfaceContentArtwork](avplaybackuserinterfacecontentartwork.md): Base class representing artwork or cover art for media content.
- [AVPlaybackUserInterfaceContentURLArtwork](avplaybackuserinterfacecontenturlartwork.md): An artwork subclass that references artwork via a URL and content type.
