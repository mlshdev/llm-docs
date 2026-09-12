> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzstoragedeviceconfiguration/attachment](https://developer.apple.com/documentation/virtualization/vzstoragedeviceconfiguration/attachment)

# attachment (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The attachment object that provides the underlying storage for the device.

## Declaration

```swift
var attachment: VZStorageDeviceAttachment { get }
```

<a id="Discussion"></a>

## Discussion

The attachment object defines which local resource on the host computer appears as a disk in the virtual machine.

# attachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The attachment object that provides the underlying storage for the device.

## Declaration

```objectivec
@property (strong, readonly) VZStorageDeviceAttachment * attachment;
```

<a id="Discussion"></a>

## Discussion

The attachment object defines which local resource on the host computer appears as a disk in the virtual machine.
