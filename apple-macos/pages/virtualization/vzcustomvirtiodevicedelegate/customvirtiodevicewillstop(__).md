> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicewillstop(_:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicewillstop(_:))

# customVirtioDeviceWillStop(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when a device will be stopped.

## Declaration

```swift
optional func customVirtioDeviceWillStop(_ device: VZCustomVirtioDevice)
```

## Parameters

- `device`: The device invoking the delegate method.

<a id="discussion"></a>

## Discussion

A device is in a stopped state when its corresponding [VZVirtualMachine](../vzvirtualmachine.md) has stopped. This can happen when the guest performs a shutdown operation itself,  or when you call [requestStop()](../vzvirtualmachine/requeststop%28%29.md).

# customVirtioDeviceWillStop: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when a device will be stopped.

## Declaration

```objectivec
- (void) customVirtioDeviceWillStop:(VZCustomVirtioDevice *) device;
```

## Parameters

- `device`: The device invoking the delegate method.

<a id="discussion"></a>

## Discussion

A device is in a stopped state when its corresponding [VZVirtualMachine](../vzvirtualmachine.md) has stopped. This can happen when the guest performs a shutdown operation itself,  or when you call [requestStopWithError:](../vzvirtualmachine/requeststop%28%29.md).
