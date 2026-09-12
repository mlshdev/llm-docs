> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevice/status](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevice/status)

# status (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The status of the externally connected device.

## Declaration

```swift
var status: AVExternalSyncDeviceStatus { get }
```

<a id="discussion"></a>

## Discussion

Use this property to query the current connection status of the external sync device. This property is key-value observable.

## See Also

### Inspecting a device

- [clock](clock.md): A clock representing the source of time from the external sync device.
- [productID](productid.md): The USB product identifier associated with the external sync device.
- [signalCompensationDelay](signalcompensationdelay.md): Delay to wait before starting the frame capture.
- [uuid](uuid.md): A unique identifier for an external sync device.
- [vendorID](vendorid.md): The USB vendor identifier associated with the external sync device.

# status (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The status of the externally connected device.

## Declaration

```objectivec
@property (nonatomic, readonly) AVExternalSyncDeviceStatus status;
```

<a id="discussion"></a>

## Discussion

Use this property to query the current connection status of the external sync device. This property is key-value observable.

## See Also

### Inspecting a device

- [clock](clock.md): A clock representing the source of time from the external sync device.
- [productID](productid.md): The USB product identifier associated with the external sync device.
- [signalCompensationDelay](signalcompensationdelay.md): Delay to wait before starting the frame capture.
- [uuid](uuid.md): A unique identifier for an external sync device.
- [vendorID](vendorid.md): The USB vendor identifier associated with the external sync device.
