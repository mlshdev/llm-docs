> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevice/discoverysession/shared](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevice/discoverysession/shared)

# shared (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The singleton instance of the external sync source device discovery session.

## Declaration

```swift
class var shared: AVExternalSyncDevice.DiscoverySession? { get }
```

<a id="discussion"></a>

## Discussion

Access the one and only external sync device discovery session on this host device using this method. `sharedSession` returns `nil` if the host device doesn’t support external sync devices.

## See Also

### Accessing the shared instance

- [isSupported](issupported.md): Whether external sync devices are supported by this device.

# sharedSession (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The singleton instance of the external sync source device discovery session.

## Declaration

```objectivec
@property (class, readonly, nullable) AVExternalSyncDeviceDiscoverySession * sharedSession;
```

<a id="discussion"></a>

## Discussion

Access the one and only external sync device discovery session on this host device using this method. `sharedSession` returns `nil` if the host device doesn’t support external sync devices.

## See Also

### Accessing the shared instance

- [supported](issupported.md): Whether external sync devices are supported by this device.
