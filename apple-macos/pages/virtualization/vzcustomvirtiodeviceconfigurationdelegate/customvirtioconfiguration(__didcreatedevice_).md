> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodeviceconfigurationdelegate/customvirtioconfiguration(_:didcreatedevice:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodeviceconfigurationdelegate/customvirtioconfiguration(_:didcreatedevice:))

# customVirtioConfiguration(\_:didCreateDevice:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

A method the framework calls when it creates a custom Virtio device from a custom Virtio device configuration.

## Declaration

```swift
optional func customVirtioConfiguration(_ deviceConfiguration: VZCustomVirtioDeviceConfiguration, didCreateDevice device: VZCustomVirtioDevice)
```

## Parameters

- `deviceConfiguration`: The configuration calling the delegate method.
- `device`: The [VZCustomVirtioDevice](../vzcustomvirtiodevice.md) that the framework created.

<a id="discussion"></a>

## Discussion

The Virtualization framework creates a [VZCustomVirtioDevice](../vzcustomvirtiodevice.md) when you call [init(configuration:)](../vzvirtualmachine/init%28configuration_%29.md) and calls this method on the serial queue of the guest’s [VZVirtualMachine](../vzvirtualmachine.md) instance.

# customVirtioConfiguration:didCreateDevice: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

A method the framework calls when it creates a custom Virtio device from a custom Virtio device configuration.

## Declaration

```objectivec
- (void) customVirtioConfiguration:(VZCustomVirtioDeviceConfiguration *) deviceConfiguration didCreateDevice:(VZCustomVirtioDevice *) device;
```

## Parameters

- `deviceConfiguration`: The configuration calling the delegate method.
- `device`: The [VZCustomVirtioDevice](../vzcustomvirtiodevice.md) that the framework created.

<a id="discussion"></a>

## Discussion

The Virtualization framework creates a [VZCustomVirtioDevice](../vzcustomvirtiodevice.md) when you call [initWithConfiguration:](../vzvirtualmachine/init%28configuration_%29.md) and calls this method on the serial queue of the guest’s [VZVirtualMachine](../vzvirtualmachine.md) instance.
