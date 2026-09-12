> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/mirrored](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/mirrored)

# mirrored

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

Indicates whether the layer display is mirrored.

> Use [videoMirrored](../avcaptureconnection/isvideomirrored.md) ([AVCaptureConnection](../avcaptureconnection.md)) instead.

## Declaration

```objectivec
@property (nonatomic, getter=isMirrored) BOOL mirrored;
```

<a id="Discussion"></a>

## Discussion

To change the value of this property, the value of [automaticallyAdjustsMirroring](automaticallyadjustsmirroring.md) must be [false](https://developer.apple.com/documentation/swift/false).

Mirroring is not supported on all hardware configurations. You should check the value of [supportsVideoMirroring](../avcaptureconnection/isvideomirroringsupported.md) (`AVCaptureConnection`) before attempting to change this value.

## See Also

### Layer configuration

- [orientation](orientation.md): Deprecated. The layer’s orientation.
- [orientationSupported](orientationsupported.md): Deprecated. Indicates whether the layer display supports changing the orientation.
- [mirroringSupported](mirroringsupported.md): Deprecated. Indicates whether the layer display supports mirroring.
- [automaticallyAdjustsMirroring](automaticallyadjustsmirroring.md): Deprecated. Indicates whether the layer display automatically adjusts mirroring.
