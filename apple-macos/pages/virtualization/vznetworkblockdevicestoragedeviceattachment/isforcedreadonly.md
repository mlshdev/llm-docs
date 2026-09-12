> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/isforcedreadonly](https://developer.apple.com/documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/isforcedreadonly)

# isForcedReadOnly (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Returns a Boolean value that indicates whether the underlying disk attachment network is in a read-only state.

## Declaration

```swift
var isForcedReadOnly: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The `forcedReadOnly` parameter affects how the Virtualization framework exposes the network block device (NBD) client to the guest operating system by the storage controller.

As part of the NBD protocol, during the handshake phase, the server advertises whether or not the disk the server exposes is read-only. Setting `forcedReadOnly` to [true](https://developer.apple.com/documentation/swift/true) forces the NBD client to show up as read-only to the guest regardless of whether or not the NBD server advertises itself as read-only.

## See Also

### Getting information about the attachment point

- [synchronizationMode](synchronizationmode.md): The mode in which the NBD client synchronizes data with the NBD server.
- [timeout](timeout.md): The timeout value in seconds for the connection between the client and server.
- [url](url.md): The URL that refers to the NBD server to which the NBD client will connect.

# forcedReadOnly (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Returns a Boolean value that indicates whether the underlying disk attachment network is in a read-only state.

## Declaration

```objectivec
@property (readonly, getter=isForcedReadOnly) BOOL forcedReadOnly;
```

<a id="Discussion"></a>

## Discussion

The `forcedReadOnly` parameter affects how the Virtualization framework exposes the network block device (NBD) client to the guest operating system by the storage controller.

As part of the NBD protocol, during the handshake phase, the server advertises whether or not the disk the server exposes is read-only. Setting `forcedReadOnly` to [true](https://developer.apple.com/documentation/swift/true) forces the NBD client to show up as read-only to the guest regardless of whether or not the NBD server advertises itself as read-only.

## See Also

### Getting information about the attachment point

- [synchronizationMode](synchronizationmode.md): The mode in which the NBD client synchronizes data with the NBD server.
- [timeout](timeout.md): The timeout value in seconds for the connection between the client and server.
- [URL](url.md): The URL that refers to the NBD server to which the NBD client will connect.
