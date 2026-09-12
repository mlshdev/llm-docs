> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicewillresume(_:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicewillresume(_:))

# customVirtioDeviceWillResume(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when a device resumes.

## Declaration

```swift
optional func customVirtioDeviceWillResume(_ device: VZCustomVirtioDevice)
```

## Parameters

- `device`: The device invoking the delegate method.

<a id="discussion"></a>

## Discussion

A device is in a resumed state when its corresponding [VZVirtualMachine](../vzvirtualmachine.md) resumes from the paused state. This happens when you call [resume()](../vzvirtualmachine/resume%28%29.md).

# customVirtioDeviceWillResume: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when a device resumes.

## Declaration

```objectivec
- (void) customVirtioDeviceWillResume:(VZCustomVirtioDevice *) device;
```

## Parameters

- `device`: The device invoking the delegate method.

<a id="discussion"></a>

## Discussion

A device is in a resumed state when its corresponding [VZVirtualMachine](../vzvirtualmachine.md) resumes from the paused state. This happens when you call [resumeWithCompletionHandler:](../vzvirtualmachine/resume%28%29.md).
