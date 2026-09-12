> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterfacealbumartwork/artworkwithurl:contenttype:size:](https://developer.apple.com/documentation/avkit/avinterfacealbumartwork/artworkwithurl:contenttype:size:)

# artworkWithURL:contentType:size:

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Type Method

Creates an artwork instance that references an image at the given URL.

## Declaration

```objectivec
+ (AVInterfaceURLAlbumArtwork *) artworkWithURL:(NSURL *) url contentType:(UTType *) type size:(CGSize) size;
```

## Parameters

- `url`: URL pointing to the artwork image resource.
- `type`: The uniform type identifier for the image data.
- `size`: The pixel dimensions of the artwork image.
