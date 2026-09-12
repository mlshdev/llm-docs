> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbcontroller/detach(device:completionhandler:)](https://developer.apple.com/documentation/virtualization/vzusbcontroller/detach(device:completionhandler:))

# detach(device:completionHandler:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Detaches a USB device from the controller.

## Declaration

```swift
func detach(device: any VZUSBDevice, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
func detach(device: any VZUSBDevice) async throws
```

## Parameters

- `device`: The USB device to detach.
- `completionHandler`: A block the framework calls after the device detaches, or on an error. The error parameter that passes to the block is `nil` if detaching the device is successful. The framework calls the block on a VM’s queue.

<a id="Discussion"></a>

## Discussion

If the device successfully detaches from the controller, it disappears from the [usbDevices](usbdevices.md) property, the framework sets its [usbController](../vzusbdevice/usbcontroller.md) property to `nil,` and the completion handler returns `nil`.

If the device doesn’t have an attachment to the controller at the time of calling the detach method, the process fails with [VZError.Code.deviceNotFound](../vzerror/code/devicenotfound.md).

You need to call this method on the virtual machine’s queue.

## See Also

### Related Documentation

- [VZUSBDevice](../vzusbdevice.md): A protocol that represents a USB device in a VM.

### Attaching and detaching devices

- [attach(device:completionHandler:)](attach%28device_completionhandler_%29.md): Attaches a USB device to the controller.

# detachDevice:completionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Detaches a USB device from the controller.

## Declaration

```objectivec
- (void) detachDevice:(id<VZUSBDevice>) device completionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## Parameters

- `device`: The USB device to detach.
- `completionHandler`: A block the framework calls after the device detaches, or on an error. The error parameter that passes to the block is `nil` if detaching the device is successful. The framework calls the block on a VM’s queue.

<a id="Discussion"></a>

## Discussion

If the device successfully detaches from the controller, it disappears from the [usbDevices](usbdevices.md) property, the framework sets its [usbController](../vzusbdevice/usbcontroller.md) property to `nil,` and the completion handler returns `nil`.

If the device doesn’t have an attachment to the controller at the time of calling the detach method, the process fails with [VZErrorDeviceNotFound](../vzerror/code/devicenotfound.md).

You need to call this method on the virtual machine’s queue.

## See Also

### Related Documentation

- [VZUSBDevice](../vzusbdevice.md): A protocol that represents a USB device in a VM.

### Attaching and detaching devices

- [attachDevice:completionHandler:](attach%28device_completionhandler_%29.md): Attaches a USB device to the controller.
