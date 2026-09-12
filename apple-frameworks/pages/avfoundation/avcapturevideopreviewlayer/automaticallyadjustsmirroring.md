> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/automaticallyadjustsmirroring](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/automaticallyadjustsmirroring)

# automaticallyAdjustsMirroring

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

Indicates whether the layer display automatically adjusts mirroring.

> Use [automaticallyAdjustsVideoMirroring](../avcaptureconnection/automaticallyadjustsvideomirroring.md) ([AVCaptureConnection](../avcaptureconnection.md)) instead.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyAdjustsMirroring;
```

<a id="Discussion"></a>

## Discussion

For some session configurations, preview will be mirrored by default.

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the value of [mirrored](mirrored.md) may change depending on the configuration of the session, for example after switching to a different capture device input.

## See Also

### Layer configuration

- [orientation](orientation.md): Deprecated. The layer’s orientation.
- [orientationSupported](orientationsupported.md): Deprecated. Indicates whether the layer display supports changing the orientation.
- [mirrored](mirrored.md): Deprecated. Indicates whether the layer display is mirrored.
- [mirroringSupported](mirroringsupported.md): Deprecated. Indicates whether the layer display supports mirroring.
