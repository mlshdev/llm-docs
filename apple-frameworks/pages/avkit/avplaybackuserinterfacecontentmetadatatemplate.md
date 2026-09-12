> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacecontentmetadatatemplate](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacecontentmetadatatemplate)

# AVPlaybackUserInterfaceContentMetadataTemplate

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A mutable template for configuring media metadata before creating immutable metadata objects.

## Declaration

```objectivec
@interface AVPlaybackUserInterfaceContentMetadataTemplate : NSObject
```

<a id="overview"></a>

## Overview

Use this class to build and configure metadata for media content with full control over all properties. Once configured, create an immutable `AVPlaybackUserInterfaceContentMetadata` object using `initWithTemplate:` to provide stable metadata for playback interfaces.

This template provides a convenient way to incrementally build metadata information, allowing you to set properties individually before finalizing the metadata. All properties are mutable (readwrite), making it ideal for scenarios where metadata is constructed from multiple sources or updated over time.

Example usage:

AVPlaybackUserInterfaceContentMetadataTemplate \*template = \[\[AVPlaybackUserInterfaceContentMetadataTemplate alloc\] init\]; template.videoProperties = \[\[AVPlaybackUserInterfaceContentVideoProperties alloc\] initWithPresentationSize:CGSizeMake(1920, 1080)\]; template.title = @“Episode 5: The Journey Continues”; template.subtitle = @“Season 2”; template.artworkRepresentations = @\[artwork1, artwork2\];

AVPlaybackUserInterfaceContentMetadata \*metadata = \[\[AVPlaybackUserInterfaceContentMetadata alloc\] initWithTemplate:template\];

## Topics

### Instance Properties

- [artworkRepresentations](avplaybackuserinterfacecontentmetadatatemplate/artworkrepresentations.md): Array of available artwork representations in various formats and sizes for this media content. Multiple representations allow the system to choose the most appropriate artwork for different display contexts (thumbnails, full-screen, high-DPI displays). Each representation specifies its dimensions, format, and URL for optimal loading and display performance.
- [subtitle](avplaybackuserinterfacecontentmetadatatemplate/subtitle.md): Secondary descriptive text such as artist name, episode description, or additional context for the content. This provides supplementary information to help users identify and understand the content being played.
- [title](avplaybackuserinterfacecontentmetadatatemplate/title.md): Primary title or name of the media content for display in player UI and system interfaces. This should be the main identifying text for the content, such as a song title, episode name, or movie title.
- [videoProperties](avplaybackuserinterfacecontentmetadatatemplate/videoproperties.md): Properties describing the video content. `nil` if the content contains no video.

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
- [AVPlaybackUserInterfaceContentArtwork](avplaybackuserinterfacecontentartwork.md): Base class representing artwork or cover art for media content.
- [AVPlaybackUserInterfaceContentURLArtwork](avplaybackuserinterfacecontenturlartwork.md): An artwork subclass that references artwork via a URL and content type.
- [AVPlaybackUserInterfaceContentVideoProperties](avplaybackuserinterfacecontentvideoproperties.md): Properties specific to video content.
