> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkblockdevicestoragedeviceattachmentdelegate/attachmentwasconnected(_:)](https://developer.apple.com/documentation/virtualization/vznetworkblockdevicestoragedeviceattachmentdelegate/attachmentwasconnected(_:))

# attachmentWasConnected(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

The method the attachment object calls when the NBD client successfully connects or reconnects with the server.

## Declaration

```swift
optional func attachmentWasConnected(_ attachment: VZNetworkBlockDeviceStorageDeviceAttachment)
```

## Parameters

- `attachment`: The attachment object calling the delegate method.

<a id="Discussion"></a>

## Discussion

Connection with the server takes place when the VM is first started, and reconnection attempts take place when the connection times out or when the NBD client has encountered a recoverable error, such as an I/O error from the server. The Virtualization framework may call this method multiple times during a VM’s life cycle. Reconnections are transparent to the guest.

## See Also

### Responding to connectivity changes

- [attachment(\_:didEncounterError:)](attachment%28__didencountererror_%29.md): The method the attachment object calls when the NBD client encounters a nonrecoverable error.

# attachmentWasConnected: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

The method the attachment object calls when the NBD client successfully connects or reconnects with the server.

## Declaration

```objectivec
- (void) attachmentWasConnected:(VZNetworkBlockDeviceStorageDeviceAttachment *) attachment;
```

## Parameters

- `attachment`: The attachment object calling the delegate method.

<a id="Discussion"></a>

## Discussion

Connection with the server takes place when the VM is first started, and reconnection attempts take place when the connection times out or when the NBD client has encountered a recoverable error, such as an I/O error from the server. The Virtualization framework may call this method multiple times during a VM’s life cycle. Reconnections are transparent to the guest.

## See Also

### Responding to connectivity changes

- [attachment:didEncounterError:](attachment%28__didencountererror_%29.md): The method the attachment object calls when the NBD client encounters a nonrecoverable error.
