> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevice/productid](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevice/productid)

# productID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The USB product identifier associated with the external sync device.

## Declaration

```swift
var productID: UInt32 { get }
```

<a id="discussion"></a>

## Discussion

This `UInt32` value comes from the hardware vendor, and returns 0 if not available. Use this value in conjunction with the [vendorID](vendorid.md) to determine a specific product.

## See Also

### Inspecting a device

- [clock](clock.md): A clock representing the source of time from the external sync device.
- [signalCompensationDelay](signalcompensationdelay.md): Delay to wait before starting the frame capture.
- [status](status.md): The status of the externally connected device.
- [uuid](uuid.md): A unique identifier for an external sync device.
- [vendorID](vendorid.md): The USB vendor identifier associated with the external sync device.

# productID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The USB product identifier associated with the external sync device.

## Declaration

```objectivec
@property (nonatomic, readonly) UInt32 productID;
```

<a id="discussion"></a>

## Discussion

This `UInt32` value comes from the hardware vendor, and returns 0 if not available. Use this value in conjunction with the [vendorID](vendorid.md) to determine a specific product.

## See Also

### Inspecting a device

- [clock](clock.md): A clock representing the source of time from the external sync device.
- [signalCompensationDelay](signalcompensationdelay.md): Delay to wait before starting the frame capture.
- [status](status.md): The status of the externally connected device.
- [uuid](uuid.md): A unique identifier for an external sync device.
- [vendorID](vendorid.md): The USB vendor identifier associated with the external sync device.
