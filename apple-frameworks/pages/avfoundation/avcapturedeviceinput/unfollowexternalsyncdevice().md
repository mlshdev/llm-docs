> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceinput/unfollowexternalsyncdevice()](https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/unfollowexternalsyncdevice())

# unfollowExternalSyncDevice() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Discontinues external sync.

## Declaration

```swift
func unfollowExternalSyncDevice()
```

<a id="discussion"></a>

## Discussion

This method stops your input from syncing to the external sync device you specified in [follow(\_:videoFrameDuration:delegate:)](follow%28__videoframeduration_delegate_%29.md).

## See Also

### Synchronizing with external devices

- [isExternalSyncSupported](isexternalsyncsupported.md): Indicates whether the device input supports being configured to follow an external sync device.
- [follow(\_:videoFrameDuration:delegate:)](follow%28__videoframeduration_delegate_%29.md): Configures the the device input to follow an external sync device at the given frame duration.
- [activeExternalSyncVideoFrameDuration](activeexternalsyncvideoframeduration.md): The receiver’s external sync frame duration (the reciprocal of its frame rate) when being driven by an external sync device.
- [externalSyncDevice](externalsyncdevice.md): The external sync device currently being followed by this input.

# unfollowExternalSyncDevice (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Discontinues external sync.

## Declaration

```objectivec
- (void) unfollowExternalSyncDevice;
```

<a id="discussion"></a>

## Discussion

This method stops your input from syncing to the external sync device you specified in [followExternalSyncDevice:videoFrameDuration:delegate:](follow%28__videoframeduration_delegate_%29.md).

## See Also

### Synchronizing with external devices

- [externalSyncSupported](isexternalsyncsupported.md): Indicates whether the device input supports being configured to follow an external sync device.
- [followExternalSyncDevice:videoFrameDuration:delegate:](follow%28__videoframeduration_delegate_%29.md): Configures the the device input to follow an external sync device at the given frame duration.
- [activeExternalSyncVideoFrameDuration](activeexternalsyncvideoframeduration.md): The receiver’s external sync frame duration (the reciprocal of its frame rate) when being driven by an external sync device.
- [externalSyncDevice](externalsyncdevice.md): The external sync device currently being followed by this input.
