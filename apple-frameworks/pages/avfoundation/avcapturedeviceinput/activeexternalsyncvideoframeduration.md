> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceinput/activeexternalsyncvideoframeduration](https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/activeexternalsyncvideoframeduration)

# activeExternalSyncVideoFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The receiver’s external sync frame duration (the reciprocal of its frame rate) when being driven by an external sync device.

## Declaration

```swift
var activeExternalSyncVideoFrameDuration: CMTime { get }
```

<a id="discussion"></a>

## Discussion

Set up your input to follow an external sync device by calling [follow(\_:videoFrameDuration:delegate:)](follow%28__videoframeduration_delegate_%29.md).

> **Note**

> The value of this readonly property is `kCMTimeInvalid` unless the [AVExternalSyncDevice](../avexternalsyncdevice.md) is actively driving the [AVCaptureDeviceInput](../avcapturedeviceinput.md). This is reflected by the [status](../avexternalsyncdevice/status.md) being either `AVExternalSyncDeviceStatusActiveSync` or `AVExternalSyncDeviceStatusFreeRunSync`.

## See Also

### Synchronizing with external devices

- [isExternalSyncSupported](isexternalsyncsupported.md): Indicates whether the device input supports being configured to follow an external sync device.
- [follow(\_:videoFrameDuration:delegate:)](follow%28__videoframeduration_delegate_%29.md): Configures the the device input to follow an external sync device at the given frame duration.
- [unfollowExternalSyncDevice()](unfollowexternalsyncdevice%28%29.md): Discontinues external sync.
- [externalSyncDevice](externalsyncdevice.md): The external sync device currently being followed by this input.

# activeExternalSyncVideoFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The receiver’s external sync frame duration (the reciprocal of its frame rate) when being driven by an external sync device.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime activeExternalSyncVideoFrameDuration;
```

<a id="discussion"></a>

## Discussion

Set up your input to follow an external sync device by calling [followExternalSyncDevice:videoFrameDuration:delegate:](follow%28__videoframeduration_delegate_%29.md).

> **Note**

> The value of this readonly property is `kCMTimeInvalid` unless the [AVExternalSyncDevice](../avexternalsyncdevice.md) is actively driving the [AVCaptureDeviceInput](../avcapturedeviceinput.md). This is reflected by the [status](../avexternalsyncdevice/status.md) being either `AVExternalSyncDeviceStatusActiveSync` or `AVExternalSyncDeviceStatusFreeRunSync`.

## See Also

### Synchronizing with external devices

- [externalSyncSupported](isexternalsyncsupported.md): Indicates whether the device input supports being configured to follow an external sync device.
- [followExternalSyncDevice:videoFrameDuration:delegate:](follow%28__videoframeduration_delegate_%29.md): Configures the the device input to follow an external sync device at the given frame duration.
- [unfollowExternalSyncDevice](unfollowexternalsyncdevice%28%29.md): Discontinues external sync.
- [externalSyncDevice](externalsyncdevice.md): The external sync device currently being followed by this input.
