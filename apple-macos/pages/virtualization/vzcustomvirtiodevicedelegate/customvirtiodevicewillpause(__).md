> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicewillpause(_:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicewillpause(_:))

# customVirtioDeviceWillPause(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when a device pauses.

## Declaration

```swift
optional func customVirtioDeviceWillPause(_ device: VZCustomVirtioDevice)
```

## Parameters

- `device`: The device invoking the delegate method.

<a id="discussion"></a>

## Discussion

A device is in a paused state when its corresponding [VZVirtualMachine](../vzvirtualmachine.md) is in a paused state. This happens when you call [pause()](../vzvirtualmachine/pause%28%29.md).

# customVirtioDeviceWillPause: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when a device pauses.

## Declaration

```objectivec
- (void) customVirtioDeviceWillPause:(VZCustomVirtioDevice *) device;
```

## Parameters

- `device`: The device invoking the delegate method.

<a id="discussion"></a>

## Discussion

A device is in a paused state when its corresponding [VZVirtualMachine](../vzvirtualmachine.md) is in a paused state. This happens when you call [pauseWithCompletionHandler:](../vzvirtualmachine/pause%28%29.md).
