> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicedidacceptdriverok(_:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicedidacceptdriverok(_:))

# customVirtioDeviceDidAcceptDriverOk(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when the device and driver successfully complete Virtio negotiation.

## Declaration

```swift
optional func customVirtioDeviceDidAcceptDriverOk(_ device: VZCustomVirtioDevice)
```

## Parameters

- `device`: The device invoking the delegate method.

<a id="discussion"></a>

## Discussion

The guest driver sets the status to the value `DRIVER_OK`.

# customVirtioDeviceDidAcceptDriverOk: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when the device and driver successfully complete Virtio negotiation.

## Declaration

```objectivec
- (void) customVirtioDeviceDidAcceptDriverOk:(VZCustomVirtioDevice *) device;
```

## Parameters

- `device`: The device invoking the delegate method.

<a id="discussion"></a>

## Discussion

The guest driver sets the status to the value `DRIVER_OK`.
