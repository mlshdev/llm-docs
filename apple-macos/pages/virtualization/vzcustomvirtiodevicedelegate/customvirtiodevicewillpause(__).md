> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicewillpause(_:)

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
