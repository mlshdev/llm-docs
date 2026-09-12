> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterfacealbumartwork](https://developer.apple.com/documentation/avkit/avinterfacealbumartwork)

# AVInterfaceAlbumArtwork

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Class

Base class representing album artwork or cover art for media content.

## Declaration

```objectivec
@interface AVInterfaceAlbumArtwork : NSObject
```

<a id="overview"></a>

## Overview

Use a concrete subclass such as @c AVInterfaceURLAlbumArtwork to create artwork instances.

## Topics

### Creating album artwork

- [initWithURL:contentType:size:](avinterfacealbumartwork/initwithurl_contenttype_size_.md): Initializes a new album artwork object with the specified image resource information.

### Inspecting the artwork

- [url](avinterfacealbumartwork/url.md): URL pointing to the album artwork image resource.
- [contentType](avinterfacealbumartwork/contenttype.md): The uniform type identifier for the artwork image data.
- [size](avinterfacealbumartwork/size.md): The pixel dimensions of the artwork image.

### Type Methods

- [artworkWithURL:contentType:size:](avinterfacealbumartwork/artworkwithurl_contenttype_size_.md): Creates an artwork instance that references an image at the given URL.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVInterfaceURLAlbumArtwork](avinterfaceurlalbumartwork.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
