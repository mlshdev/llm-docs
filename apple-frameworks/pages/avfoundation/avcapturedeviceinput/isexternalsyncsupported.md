> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceinput/isexternalsyncsupported](https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/isexternalsyncsupported)

# isExternalSyncSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Indicates whether the device input supports being configured to follow an external sync device.

## Declaration

```swift
var isExternalSyncSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

See [follow(\_:videoFrameDuration:delegate:)](follow%28__videoframeduration_delegate_%29.md) for more information on external sync.

## See Also

### Synchronizing with external devices

- [follow(\_:videoFrameDuration:delegate:)](follow%28__videoframeduration_delegate_%29.md): Configures the the device input to follow an external sync device at the given frame duration.
- [unfollowExternalSyncDevice()](unfollowexternalsyncdevice%28%29.md): Discontinues external sync.
- [activeExternalSyncVideoFrameDuration](activeexternalsyncvideoframeduration.md): The receiver’s external sync frame duration (the reciprocal of its frame rate) when being driven by an external sync device.
- [externalSyncDevice](externalsyncdevice.md): The external sync device currently being followed by this input.

# externalSyncSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Indicates whether the device input supports being configured to follow an external sync device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isExternalSyncSupported) BOOL externalSyncSupported;
```

<a id="discussion"></a>

## Discussion

See [followExternalSyncDevice:videoFrameDuration:delegate:](follow%28__videoframeduration_delegate_%29.md) for more information on external sync.

## See Also

### Synchronizing with external devices

- [followExternalSyncDevice:videoFrameDuration:delegate:](follow%28__videoframeduration_delegate_%29.md): Configures the the device input to follow an external sync device at the given frame duration.
- [unfollowExternalSyncDevice](unfollowexternalsyncdevice%28%29.md): Discontinues external sync.
- [activeExternalSyncVideoFrameDuration](activeexternalsyncvideoframeduration.md): The receiver’s external sync frame duration (the reciprocal of its frame rate) when being driven by an external sync device.
- [externalSyncDevice](externalsyncdevice.md): The external sync device currently being followed by this input.
