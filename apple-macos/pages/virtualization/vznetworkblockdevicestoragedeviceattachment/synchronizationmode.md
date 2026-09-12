> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/synchronizationmode](https://developer.apple.com/documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/synchronizationmode)

# synchronizationMode (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The mode in which the NBD client synchronizes data with the NBD server.

## Declaration

```swift
var synchronizationMode: VZDiskSynchronizationMode { get }
```

<a id="Discussion"></a>

## Discussion

See [VZDiskSynchronizationMode](../vzdisksynchronizationmode.md) for details on how the specific mode affects data synchronization between the NBD client and server.

## See Also

### Getting information about the attachment point

- [isForcedReadOnly](isforcedreadonly.md): Returns a Boolean value that indicates whether the underlying disk attachment network is in a read-only state.
- [timeout](timeout.md): The timeout value in seconds for the connection between the client and server.
- [url](url.md): The URL that refers to the NBD server to which the NBD client will connect.

# synchronizationMode (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The mode in which the NBD client synchronizes data with the NBD server.

## Declaration

```objectivec
@property (readonly) VZDiskSynchronizationMode synchronizationMode;
```

<a id="Discussion"></a>

## Discussion

See [VZDiskSynchronizationMode](../vzdisksynchronizationmode.md) for details on how the specific mode affects data synchronization between the NBD client and server.

## See Also

### Getting information about the attachment point

- [forcedReadOnly](isforcedreadonly.md): Returns a Boolean value that indicates whether the underlying disk attachment network is in a read-only state.
- [timeout](timeout.md): The timeout value in seconds for the connection between the client and server.
- [URL](url.md): The URL that refers to the NBD server to which the NBD client will connect.
