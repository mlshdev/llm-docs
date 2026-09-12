> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/orientation](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/orientation)

# orientation

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

The layer’s orientation.

> Use [videoOrientation](../avcaptureconnection/videoorientation.md) ([AVCaptureConnection](../avcaptureconnection.md)) instead.

## Declaration

```objectivec
@property (nonatomic) AVCaptureVideoOrientation orientation;
```

<a id="Discussion"></a>

## Discussion

Changes in orientation are not supported on all hardware configurations. You should check the value of [supportsVideoOrientation](../avcaptureconnection/isvideoorientationsupported.md) (`AVCaptureConnection`) before attempting to change the orientation of the receiver. An exception is raised if this requirement is ignored.

## See Also

### Layer configuration

- [orientationSupported](orientationsupported.md): Deprecated. Indicates whether the layer display supports changing the orientation.
- [mirrored](mirrored.md): Deprecated. Indicates whether the layer display is mirrored.
- [mirroringSupported](mirroringsupported.md): Deprecated. Indicates whether the layer display supports mirroring.
- [automaticallyAdjustsMirroring](automaticallyadjustsmirroring.md): Deprecated. Indicates whether the layer display automatically adjusts mirroring.
