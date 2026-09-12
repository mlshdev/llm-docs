> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkblockdevicestoragedeviceattachmentdelegate/attachment(_:didencountererror:)](https://developer.apple.com/documentation/virtualization/vznetworkblockdevicestoragedeviceattachmentdelegate/attachment(_:didencountererror:))

# attachment(\_:didEncounterError:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

The method the attachment object calls when the NBD client encounters a nonrecoverable error.

## Declaration

```swift
optional func attachment(_ attachment: VZNetworkBlockDeviceStorageDeviceAttachment, didEncounterError error: any Error)
```

## Parameters

- `attachment`: The attachment object calling the delegate method.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that describes the nonrecoverable error.

<a id="Discussion"></a>

## Discussion

After the attachment object calls this method, the NBD client is in a nonfunctional state.

## See Also

### Responding to connectivity changes

- [attachmentWasConnected(\_:)](attachmentwasconnected%28__%29.md): The method the attachment object calls when the NBD client successfully connects or reconnects with the server.

# attachment:didEncounterError: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

The method the attachment object calls when the NBD client encounters a nonrecoverable error.

## Declaration

```objectivec
- (void) attachment:(VZNetworkBlockDeviceStorageDeviceAttachment *) attachment didEncounterError:(NSError *) error;
```

## Parameters

- `attachment`: The attachment object calling the delegate method.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that describes the nonrecoverable error.

<a id="Discussion"></a>

## Discussion

After the attachment object calls this method, the NBD client is in a nonfunctional state.

## See Also

### Responding to connectivity changes

- [attachmentWasConnected:](attachmentwasconnected%28__%29.md): The method the attachment object calls when the NBD client successfully connects or reconnects with the server.
