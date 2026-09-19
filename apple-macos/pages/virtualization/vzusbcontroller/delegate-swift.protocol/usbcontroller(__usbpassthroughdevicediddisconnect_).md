> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzusbcontroller/delegate-swift.protocol/usbcontroller(_:usbpassthroughdevicediddisconnect:)

# usbController(\_:usbPassthroughDeviceDidDisconnect:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```swift
optional func usbController(_ usbController: VZUSBController, usbPassthroughDeviceDidDisconnect device: VZUSBPassthroughDevice)
```

## Parameters

- `usbController`: The VZUSBController invoking the delegate method.
- `device`: The VZUSBPassthroughDevice that disconnected.

<a id="discussion"></a>

## Discussion

Invoked when a USB device’s IOService is terminated.

When invoked, the framework has detached the corresponding VZUSBPassthroughDevice from its VZUSBController and removed the device from the VZUSBController.usbDevices array.

# usbController:usbPassthroughDeviceDidDisconnect: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```objectivec
- (void) usbController:(VZUSBController *) usbController usbPassthroughDeviceDidDisconnect:(VZUSBPassthroughDevice *) device;
```

## Parameters

- `usbController`: The VZUSBController invoking the delegate method.
- `device`: The VZUSBPassthroughDevice that disconnected.

<a id="discussion"></a>

## Discussion

Invoked when a USB device’s IOService is terminated.

When invoked, the framework has detached the corresponding VZUSBPassthroughDevice from its VZUSBController and removed the device from the VZUSBController.usbDevices array.
