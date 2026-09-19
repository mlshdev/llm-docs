> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicedidacceptdriverok(_:)

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
