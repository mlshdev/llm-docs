> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbdevice/usbcontroller](https://developer.apple.com/documentation/virtualization/vzusbdevice/usbcontroller)

# usbController (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The USB controller that has an attachment to the device.

## Declaration

```swift
weak var usbController: VZUSBController? { get }
```

<a id="Discussion"></a>

## Discussion

If a USB device object that conforms to this protocol has a current attachment to a USB controller, this property includes a pointer to the device’s USB controller object. Otherwise, it’s `nil`.

## See Also

### Properties

- [uuid](uuid.md): The device’s unique identifier.

# usbController (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The USB controller that has an attachment to the device.

## Declaration

```objectivec
@property (weak, readonly, nullable) VZUSBController * usbController;
```

<a id="Discussion"></a>

## Discussion

If a USB device object that conforms to this protocol has a current attachment to a USB controller, this property includes a pointer to the device’s USB controller object. Otherwise, it’s `nil`.

## See Also

### Properties

- [uuid](uuid.md): The device’s unique identifier.
