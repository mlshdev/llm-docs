> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/url](https://developer.apple.com/documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/url)

# url (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The URL that refers to the NBD server to which the NBD client will connect.

## Declaration

```swift
var url: URL { get }
```

## See Also

### Getting information about the attachment point

- [isForcedReadOnly](isforcedreadonly.md): Returns a Boolean value that indicates whether the underlying disk attachment network is in a read-only state.
- [synchronizationMode](synchronizationmode.md): The mode in which the NBD client synchronizes data with the NBD server.
- [timeout](timeout.md): The timeout value in seconds for the connection between the client and server.

# URL (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The URL that refers to the NBD server to which the NBD client will connect.

## Declaration

```objectivec
@property (copy, readonly) NSURL * URL;
```

## See Also

### Getting information about the attachment point

- [forcedReadOnly](isforcedreadonly.md): Returns a Boolean value that indicates whether the underlying disk attachment network is in a read-only state.
- [synchronizationMode](synchronizationmode.md): The mode in which the NBD client synchronizes data with the NBD server.
- [timeout](timeout.md): The timeout value in seconds for the connection between the client and server.
