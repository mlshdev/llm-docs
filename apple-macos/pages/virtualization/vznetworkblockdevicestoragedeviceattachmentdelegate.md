> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkblockdevicestoragedeviceattachmentdelegate](https://developer.apple.com/documentation/virtualization/vznetworkblockdevicestoragedeviceattachmentdelegate)

# VZNetworkBlockDeviceStorageDeviceAttachmentDelegate (Swift)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 14.0+

Methods you implement to respond to changes to a network block device attachment.

## Declaration

```swift
protocol VZNetworkBlockDeviceStorageDeviceAttachmentDelegate : NSObjectProtocol
```

## Topics

### Responding to connectivity changes

- [attachment(\_:didEncounterError:)](vznetworkblockdevicestoragedeviceattachmentdelegate/attachment%28__didencountererror_%29.md): The method the attachment object calls when the NBD client encounters a nonrecoverable error.
- [attachmentWasConnected(\_:)](vznetworkblockdevicestoragedeviceattachmentdelegate/attachmentwasconnected%28__%29.md): The method the attachment object calls when the NBD client successfully connects or reconnects with the server.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Observing changes to the network block device

- [delegate](vznetworkblockdevicestoragedeviceattachment/delegate.md): The object that receives messages about changes to the network block device attachment.

# VZNetworkBlockDeviceStorageDeviceAttachmentDelegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 14.0+

Methods you implement to respond to changes to a network block device attachment.

## Declaration

```objectivec
@protocol VZNetworkBlockDeviceStorageDeviceAttachmentDelegate <NSObject>
```

## Topics

### Responding to connectivity changes

- [attachment:didEncounterError:](vznetworkblockdevicestoragedeviceattachmentdelegate/attachment%28__didencountererror_%29.md): The method the attachment object calls when the NBD client encounters a nonrecoverable error.
- [attachmentWasConnected:](vznetworkblockdevicestoragedeviceattachmentdelegate/attachmentwasconnected%28__%29.md): The method the attachment object calls when the NBD client successfully connects or reconnects with the server.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Observing changes to the network block device

- [delegate](vznetworkblockdevicestoragedeviceattachment/delegate.md): The object that receives messages about changes to the network block device attachment.
