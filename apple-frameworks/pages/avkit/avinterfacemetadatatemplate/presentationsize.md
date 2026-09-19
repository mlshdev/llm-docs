> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacemetadatatemplate/presentationsize

# presentationSize

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

The natural pixel dimensions of the video content for display purposes. This represents the encoded size of the video stream and can be used to determine aspect ratio and optimal presentation layout. For audio-only content, this value is CGSizeZero.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGSize presentationSize;
```
