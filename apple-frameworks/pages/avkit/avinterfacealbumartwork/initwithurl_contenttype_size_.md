> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterfacealbumartwork/initwithurl:contenttype:size:](https://developer.apple.com/documentation/avkit/avinterfacealbumartwork/initwithurl:contenttype:size:)

# initWithURL:contentType:size:

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Method

Initializes a new album artwork object with the specified image resource information.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url contentType:(UTType *) contentType size:(CGSize) size;
```

## Parameters

- `url`: URL pointing to the album artwork image resource.
- `contentType`: The uniform type identifier for the artwork image data.
- `size`: The pixel dimensions of the artwork image.
