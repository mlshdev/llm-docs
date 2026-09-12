> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/timeout](https://developer.apple.com/documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/timeout)

# timeout (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The timeout value in seconds for the connection between the client and server.

## Declaration

```swift
var timeout: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

When the timeout expires, the client attempts to reconnect with the server. If after several retries, the client can’t reestablish a connection to the server, the framework invokes the [attachment(\_:didEncounterError:)](../vznetworkblockdevicestoragedeviceattachmentdelegate/attachment%28__didencountererror_%29.md) delegate method.

## See Also

### Getting information about the attachment point

- [isForcedReadOnly](isforcedreadonly.md): Returns a Boolean value that indicates whether the underlying disk attachment network is in a read-only state.
- [synchronizationMode](synchronizationmode.md): The mode in which the NBD client synchronizes data with the NBD server.
- [url](url.md): The URL that refers to the NBD server to which the NBD client will connect.

# timeout (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The timeout value in seconds for the connection between the client and server.

## Declaration

```objectivec
@property (readonly) NSTimeInterval timeout;
```

<a id="Discussion"></a>

## Discussion

When the timeout expires, the client attempts to reconnect with the server. If after several retries, the client can’t reestablish a connection to the server, the framework invokes the [attachment:didEncounterError:](../vznetworkblockdevicestoragedeviceattachmentdelegate/attachment%28__didencountererror_%29.md) delegate method.

## See Also

### Getting information about the attachment point

- [forcedReadOnly](isforcedreadonly.md): Returns a Boolean value that indicates whether the underlying disk attachment network is in a read-only state.
- [synchronizationMode](synchronizationmode.md): The mode in which the NBD client synchronizes data with the NBD server.
- [URL](url.md): The URL that refers to the NBD server to which the NBD client will connect.
