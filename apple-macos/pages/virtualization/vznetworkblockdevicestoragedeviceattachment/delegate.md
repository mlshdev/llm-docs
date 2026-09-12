> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/delegate](https://developer.apple.com/documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/delegate)

# delegate (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The object that receives messages about changes to the network block device attachment.

## Declaration

```swift
weak var delegate: (any VZNetworkBlockDeviceStorageDeviceAttachmentDelegate)? { get set }
```

## See Also

### Observing changes to the network block device

- [VZNetworkBlockDeviceStorageDeviceAttachmentDelegate](../vznetworkblockdevicestoragedeviceattachmentdelegate.md): Methods you implement to respond to changes to a network block device attachment.

# delegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The object that receives messages about changes to the network block device attachment.

## Declaration

```objectivec
@property (weak, nullable) id<VZNetworkBlockDeviceStorageDeviceAttachmentDelegate> delegate;
```

## See Also

### Observing changes to the network block device

- [VZNetworkBlockDeviceStorageDeviceAttachmentDelegate](../vznetworkblockdevicestoragedeviceattachmentdelegate.md): Methods you implement to respond to changes to a network block device attachment.
