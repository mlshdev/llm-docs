> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevice/uuid](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevice/uuid)

# uuid (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A unique identifier for an external sync device.

## Declaration

```swift
var uuid: UUID { get }
```

<a id="discussion"></a>

## Discussion

Use this property to select a specific external sync device.

## See Also

### Inspecting a device

- [clock](clock.md): A clock representing the source of time from the external sync device.
- [productID](productid.md): The USB product identifier associated with the external sync device.
- [signalCompensationDelay](signalcompensationdelay.md): Delay to wait before starting the frame capture.
- [status](status.md): The status of the externally connected device.
- [vendorID](vendorid.md): The USB vendor identifier associated with the external sync device.

# uuid (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A unique identifier for an external sync device.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUUID * uuid;
```

<a id="discussion"></a>

## Discussion

Use this property to select a specific external sync device.

## See Also

### Inspecting a device

- [clock](clock.md): A clock representing the source of time from the external sync device.
- [productID](productid.md): The USB product identifier associated with the external sync device.
- [signalCompensationDelay](signalcompensationdelay.md): Delay to wait before starting the frame capture.
- [status](status.md): The status of the externally connected device.
- [vendorID](vendorid.md): The USB vendor identifier associated with the external sync device.
