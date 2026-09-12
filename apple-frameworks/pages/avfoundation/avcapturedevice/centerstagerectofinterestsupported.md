> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/centerstagerectofinterestsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/centerstagerectofinterestsupported)

# centerStageRectOfInterestSupported

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCenterStageRectOfInterestSupported) BOOL centerStageRectOfInterestSupported;
```

<a id="discussion"></a>

## Discussion

Indicates whether the device supports the Center Stage Rect of Interest feature.

This property returns YES if the device supports Center Stage Rect of Interest.

## See Also

### Configuring Center Stage

- [centerStageActive](iscenterstageactive.md): A Boolean value that indicates whether Center Stage is active on a device.
- [centerStageEnabled](iscenterstageenabled.md): A Boolean value that indicates whether a user or an app enabled Center Stage on a device.
- [centerStageRectOfInterest](centerstagerectofinterest.md): The effective region within the output pixel buffer to perform Center Stage framing.
- [centerStageControlMode](centerstagecontrolmode-swift.type.property.md): A value that indicates the current mode of Center Stage control.
- [AVCaptureCenterStageControlMode](centerstagecontrolmode-swift.enum.md): Constants that indicate the current Center Stage control mode.
