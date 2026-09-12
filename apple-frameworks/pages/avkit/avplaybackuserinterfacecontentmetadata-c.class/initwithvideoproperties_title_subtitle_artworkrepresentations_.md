> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacecontentmetadata-c.class/initwithvideoproperties:title:subtitle:artworkrepresentations:](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacecontentmetadata-c.class/initwithvideoproperties:title:subtitle:artworkrepresentations:)

# initWithVideoProperties:title:subtitle:artworkRepresentations:

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a new metadata object with the specified properties.

## Declaration

```objectivec
- (instancetype) initWithVideoProperties:(AVPlaybackUserInterfaceContentVideoProperties *) videoProperties title:(NSString *) title subtitle:(NSString *) subtitle artworkRepresentations:(NSArray<AVPlaybackUserInterfaceContentArtwork *> *) artworkRepresentations;
```

## Parameters

- `videoProperties`: Properties describing the video content, or `nil` for content without video.
- `title`: Primary title or name of the media content.
- `subtitle`: Secondary descriptive text such as artist name or episode description.
- `artworkRepresentations`: Array of available artwork representations in various formats and sizes.
