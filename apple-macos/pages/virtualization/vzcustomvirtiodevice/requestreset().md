> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevice/requestreset()](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevice/requestreset())

# requestReset() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

A request to reset the device.

## Declaration

```swift
func requestReset()
```

<a id="discussion"></a>

## Discussion

This method initiates a reset from the host by setting `DEVICE_NEEDS_RESET`, and the guest may or may not take action. The guest could also initiate a reset by itself. In both scenarios, the framework calls[customVirtioDeviceWillReset(\_:)](../vzcustomvirtiodevicedelegate/customvirtiodevicewillreset%28__%29.md) when the device should reset.

# requestDeviceReset (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

A request to reset the device.

## Declaration

```objectivec
- (void) requestDeviceReset;
```

<a id="discussion"></a>

## Discussion

This method initiates a reset from the host by setting `DEVICE_NEEDS_RESET`, and the guest may or may not take action. The guest could also initiate a reset by itself. In both scenarios, the framework calls[customVirtioDeviceWillReset:](../vzcustomvirtiodevicedelegate/customvirtiodevicewillreset%28__%29.md) when the device should reset.
