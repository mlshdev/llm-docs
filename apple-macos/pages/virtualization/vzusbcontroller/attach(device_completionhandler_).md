> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbcontroller/attach(device:completionhandler:)](https://developer.apple.com/documentation/virtualization/vzusbcontroller/attach(device:completionhandler:))

# attach(device:completionHandler:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Attaches a USB device to the controller.

## Declaration

```swift
func attach(device: any VZUSBDevice, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
func attach(device: any VZUSBDevice) async throws
```

## Parameters

- `device`: The USB device to attach.
- `completionHandler`: A block the framework calls after the device attaches, or on an error. The error parameter that passes to the block is `nil` if attaching is successful. The framework calls the block on a VM’s queue.

<a id="Discussion"></a>

## Discussion

If the device successfully attaches to the controller, it appears in the [usbDevices](usbdevices.md) property, the framework sets its [usbController](../vzusbdevice/usbcontroller.md) property to point to the attached USB controller, and the completion handler returns `nil`.

If the device has a previous attachment to the current USB controller, or to another USB controller, the attach function fails with [VZError.Code.deviceAlreadyAttached](../vzerror/code/devicealreadyattached.md). If the controller can’t initialize the device correctly, the attach function fails with [VZError.Code.deviceInitializationFailure](../vzerror/code/deviceinitializationfailure.md).

You need to call this method on the virtual machine’s queue.

## See Also

### Related Documentation

- [VZUSBDevice](../vzusbdevice.md): A protocol that represents a USB device in a VM.

### Attaching and detaching devices

- [detach(device:completionHandler:)](detach%28device_completionhandler_%29.md): Detaches a USB device from the controller.

# attachDevice:completionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Attaches a USB device to the controller.

## Declaration

```objectivec
- (void) attachDevice:(id<VZUSBDevice>) device completionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## Parameters

- `device`: The USB device to attach.
- `completionHandler`: A block the framework calls after the device attaches, or on an error. The error parameter that passes to the block is `nil` if attaching is successful. The framework calls the block on a VM’s queue.

<a id="Discussion"></a>

## Discussion

If the device successfully attaches to the controller, it appears in the [usbDevices](usbdevices.md) property, the framework sets its [usbController](../vzusbdevice/usbcontroller.md) property to point to the attached USB controller, and the completion handler returns `nil`.

If the device has a previous attachment to the current USB controller, or to another USB controller, the attach function fails with [VZErrorDeviceAlreadyAttached](../vzerror/code/devicealreadyattached.md). If the controller can’t initialize the device correctly, the attach function fails with [VZErrorDeviceInitializationFailure](../vzerror/code/deviceinitializationfailure.md).

You need to call this method on the virtual machine’s queue.

## See Also

### Related Documentation

- [VZUSBDevice](../vzusbdevice.md): A protocol that represents a USB device in a VM.

### Attaching and detaching devices

- [detachDevice:completionHandler:](detach%28device_completionhandler_%29.md): Detaches a USB device from the controller.
