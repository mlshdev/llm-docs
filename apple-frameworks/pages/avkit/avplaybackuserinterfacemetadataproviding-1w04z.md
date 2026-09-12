> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacemetadataproviding-1w04z](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemetadataproviding-1w04z)

# AVPlaybackUserInterfaceMetadataProviding

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Provides metadata information about media content including title, artwork, and content type.

## Declaration

```objectivec
@protocol AVPlaybackUserInterfaceMetadataProviding <NSObject>
```

## Topics

### Instance Properties

- [metadata](avplaybackuserinterfacemetadataproviding-1w04z/metadata.md): The metadata object containing information about the media content. Must be key-value observable.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-7ti30.md)

## See Also

### Metadata

- [AVPlaybackUserInterfaceContentMetadata](avplaybackuserinterfacecontentmetadata-c.class.md): Provides metadata information about media content including title, artwork, and content type.
- [AVPlaybackUserInterfaceContentMetadataTemplate](avplaybackuserinterfacecontentmetadatatemplate.md): A mutable template for configuring media metadata before creating immutable metadata objects.
- [AVPlaybackUserInterfaceContentArtwork](avplaybackuserinterfacecontentartwork.md): Base class representing artwork or cover art for media content.
- [AVPlaybackUserInterfaceContentURLArtwork](avplaybackuserinterfacecontenturlartwork.md): An artwork subclass that references artwork via a URL and content type.
- [AVPlaybackUserInterfaceContentVideoProperties](avplaybackuserinterfacecontentvideoproperties.md): Properties specific to video content.
