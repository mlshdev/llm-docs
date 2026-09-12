> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznvmexpresscontrollerdeviceconfiguration/init(attachment:)](https://developer.apple.com/documentation/virtualization/vznvmexpresscontrollerdeviceconfiguration/init(attachment:))

# init(attachment:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Creates a new NVM Express controller configuration with the storage device attachment you provide.

## Declaration

```swift
init(attachment: VZStorageDeviceAttachment)
```

## Parameters

- `attachment`: The storage device attachment. This defines how the virtualized device operates on the host side.

## See Also

### Related Documentation

- [VZDiskImageStorageDeviceAttachment](../vzdiskimagestoragedeviceattachment.md): A device that stores content in a disk image.

# initWithAttachment: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new NVM Express controller configuration with the storage device attachment you provide.

## Declaration

```objectivec
- (instancetype) initWithAttachment:(VZStorageDeviceAttachment *) attachment;
```

## Parameters

- `attachment`: The storage device attachment. This defines how the virtualized device operates on the host side.

## See Also

### Related Documentation

- [VZDiskImageStorageDeviceAttachment](../vzdiskimagestoragedeviceattachment.md): A device that stores content in a disk image.
