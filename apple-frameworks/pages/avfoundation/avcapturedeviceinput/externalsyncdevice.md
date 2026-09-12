> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceinput/externalsyncdevice](https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/externalsyncdevice)

# externalSyncDevice (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The external sync device currently being followed by this input.

## Declaration

```swift
var externalSyncDevice: AVExternalSyncDevice? { get }
```

<a id="discussion"></a>

## Discussion

This readonly property returns the [AVExternalSyncDevice](../avexternalsyncdevice.md) instance you provided in [follow(\_:videoFrameDuration:delegate:)](follow%28__videoframeduration_delegate_%29.md). This property returns `nil` when an external sync device is disconnected or fails to calibrate.

## See Also

### Synchronizing with external devices

- [isExternalSyncSupported](isexternalsyncsupported.md): Indicates whether the device input supports being configured to follow an external sync device.
- [follow(\_:videoFrameDuration:delegate:)](follow%28__videoframeduration_delegate_%29.md): Configures the the device input to follow an external sync device at the given frame duration.
- [unfollowExternalSyncDevice()](unfollowexternalsyncdevice%28%29.md): Discontinues external sync.
- [activeExternalSyncVideoFrameDuration](activeexternalsyncvideoframeduration.md): The receiver’s external sync frame duration (the reciprocal of its frame rate) when being driven by an external sync device.

# externalSyncDevice (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The external sync device currently being followed by this input.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVExternalSyncDevice * externalSyncDevice;
```

<a id="discussion"></a>

## Discussion

This readonly property returns the [AVExternalSyncDevice](../avexternalsyncdevice.md) instance you provided in [followExternalSyncDevice:videoFrameDuration:delegate:](follow%28__videoframeduration_delegate_%29.md). This property returns `nil` when an external sync device is disconnected or fails to calibrate.

## See Also

### Synchronizing with external devices

- [externalSyncSupported](isexternalsyncsupported.md): Indicates whether the device input supports being configured to follow an external sync device.
- [followExternalSyncDevice:videoFrameDuration:delegate:](follow%28__videoframeduration_delegate_%29.md): Configures the the device input to follow an external sync device at the given frame duration.
- [unfollowExternalSyncDevice](unfollowexternalsyncdevice%28%29.md): Discontinues external sync.
- [activeExternalSyncVideoFrameDuration](activeexternalsyncvideoframeduration.md): The receiver’s external sync frame duration (the reciprocal of its frame rate) when being driven by an external sync device.
