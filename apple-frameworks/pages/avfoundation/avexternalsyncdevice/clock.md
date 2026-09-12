> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevice/clock](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevice/clock)

# clock (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A clock representing the source of time from the external sync device.

## Declaration

```swift
var clock: CMClock? { get }
```

<a id="discussion"></a>

## Discussion

This property returns `NULL` until the [status](status.md) reaches `AVExternalSyncDeviceStatusActiveSync`.

## See Also

### Inspecting a device

- [productID](productid.md): The USB product identifier associated with the external sync device.
- [signalCompensationDelay](signalcompensationdelay.md): Delay to wait before starting the frame capture.
- [status](status.md): The status of the externally connected device.
- [uuid](uuid.md): A unique identifier for an external sync device.
- [vendorID](vendorid.md): The USB vendor identifier associated with the external sync device.

# clock (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A clock representing the source of time from the external sync device.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CMClockRef clock;
```

<a id="discussion"></a>

## Discussion

This property returns `NULL` until the [status](status.md) reaches `AVExternalSyncDeviceStatusActiveSync`.

## See Also

### Inspecting a device

- [productID](productid.md): The USB product identifier associated with the external sync device.
- [signalCompensationDelay](signalcompensationdelay.md): Delay to wait before starting the frame capture.
- [status](status.md): The status of the externally connected device.
- [uuid](uuid.md): A unique identifier for an external sync device.
- [vendorID](vendorid.md): The USB vendor identifier associated with the external sync device.
