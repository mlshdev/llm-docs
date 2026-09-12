> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioblockdeviceconfiguration/init(attachment:)](https://developer.apple.com/documentation/virtualization/vzvirtioblockdeviceconfiguration/init(attachment:))

# init(attachment:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a block device configuration object that uses the specified storage medium.

## Declaration

```swift
init(attachment: VZStorageDeviceAttachment)
```

## Parameters

- `attachment`: The attachment object that provides the storage for the device. For example, specify a [VZDiskImageStorageDeviceAttachment](../vzdiskimagestoragedeviceattachment.md) object to implement the storage using a local disk image on the host computer.

<a id="return-value"></a>

## Return Value

A block storage device configuration object to include in your virtual machine’s configuration.

# initWithAttachment: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates a block device configuration object that uses the specified storage medium.

## Declaration

```objectivec
- (instancetype) initWithAttachment:(VZStorageDeviceAttachment *) attachment;
```

## Parameters

- `attachment`: The attachment object that provides the storage for the device. For example, specify a [VZDiskImageStorageDeviceAttachment](../vzdiskimagestoragedeviceattachment.md) object to implement the storage using a local disk image on the host computer.

<a id="return-value"></a>

## Return Value

A block storage device configuration object to include in your virtual machine’s configuration.
