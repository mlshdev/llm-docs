> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicewillreset(_:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicewillreset(_:))

# customVirtioDeviceWillReset(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when a device resets.

## Declaration

```swift
optional func customVirtioDeviceWillReset(_ device: VZCustomVirtioDevice)
```

## Parameters

- `device`: The device invoking the delegate method.

<a id="discussion"></a>

## Discussion

You can initiate a reset by calling the [requestReset()](../vzcustomvirtiodevice/requestreset%28%29.md) method, and the guest driver can also initiate the reset by itself. The framework calls this method when the reset completes for either scenario.

# customVirtioDeviceWillReset: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when a device resets.

## Declaration

```objectivec
- (void) customVirtioDeviceWillReset:(VZCustomVirtioDevice *) device;
```

## Parameters

- `device`: The device invoking the delegate method.

<a id="discussion"></a>

## Discussion

You can initiate a reset by calling the [requestDeviceReset](../vzcustomvirtiodevice/requestreset%28%29.md) method, and the guest driver can also initiate the reset by itself. The framework calls this method when the reset completes for either scenario.
