> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/orientationsupported](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/orientationsupported)

# orientationSupported

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

Indicates whether the layer display supports changing the orientation.

> Use [supportsVideoOrientation](../avcaptureconnection/isvideoorientationsupported.md) ([AVCaptureConnection](../avcaptureconnection.md)) instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isOrientationSupported) BOOL orientationSupported;
```

## See Also

### Layer configuration

- [orientation](orientation.md): Deprecated. The layer’s orientation.
- [mirrored](mirrored.md): Deprecated. Indicates whether the layer display is mirrored.
- [mirroringSupported](mirroringsupported.md): Deprecated. Indicates whether the layer display supports mirroring.
- [automaticallyAdjustsMirroring](automaticallyadjustsmirroring.md): Deprecated. Indicates whether the layer display automatically adjusts mirroring.
