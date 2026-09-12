> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacecontentvideoproperties](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacecontentvideoproperties)

# AVPlaybackUserInterfaceContentVideoProperties

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Properties specific to video content.

## Declaration

```objectivec
@interface AVPlaybackUserInterfaceContentVideoProperties : NSObject
```

## Topics

### Instance Properties

- [presentationSize](avplaybackuserinterfacecontentvideoproperties/presentationsize.md): The natural pixel dimensions of the video content for layout and aspect ratio calculations.

### Instance Methods

- [initWithPresentationSize:](avplaybackuserinterfacecontentvideoproperties/initwithpresentationsize_.md): Initializes a new video properties instance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Metadata

- [AVPlaybackUserInterfaceMetadataProviding](avplaybackuserinterfacemetadataproviding-1w04z.md): Provides metadata information about media content including title, artwork, and content type.
- [AVPlaybackUserInterfaceContentMetadata](avplaybackuserinterfacecontentmetadata-c.class.md): Provides metadata information about media content including title, artwork, and content type.
- [AVPlaybackUserInterfaceContentMetadataTemplate](avplaybackuserinterfacecontentmetadatatemplate.md): A mutable template for configuring media metadata before creating immutable metadata objects.
- [AVPlaybackUserInterfaceContentArtwork](avplaybackuserinterfacecontentartwork.md): Base class representing artwork or cover art for media content.
- [AVPlaybackUserInterfaceContentURLArtwork](avplaybackuserinterfacecontenturlartwork.md): An artwork subclass that references artwork via a URL and content type.
