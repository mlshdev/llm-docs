> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/init(url:timeout:isforcedreadonly:synchronizationmode:)](https://developer.apple.com/documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/init(url:timeout:isforcedreadonly:synchronizationmode:))

# init(url:timeout:isForcedReadOnly:synchronizationMode:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Creates a new network block device storage attachment from an NBD Uniform Resource Indicator (URI) represented as a URL, timeout value, and read-only and synchronization modes that you provide.

## Declaration

```swift
init(url URL: URL, timeout: TimeInterval, isForcedReadOnly forcedReadOnly: Bool, synchronizationMode: VZDiskSynchronizationMode) throws
```

## Parameters

- `URL`: The NBD’s URI represented as a URL.
- `timeout`: The timeout value in seconds for the connection between the client and server. When the timeout expires, an attempt to reconnect with the server takes place.
- `forcedReadOnly`: If [true](https://developer.apple.com/documentation/swift/true), the framework forces the disk attachment to be read-only, regardless of whether or not the NBD server supports write requests.
- `synchronizationMode`: The mode in which the disk attachment synchronizes data with the underlying storage device.

<a id="Discussion"></a>

## Discussion

The `forcedReadOnly` parameter affects how framework exposes the NBD client to the guest operating system by the storage controller. As part of the NBD protocol, the NBD server advertises whether or not the disk exposed by the NBD client is read-only during the handshake phase of the protocol. Setting `forcedReadOnly` to [true](https://developer.apple.com/documentation/swift/true) forces the NBD client to show up as read-only to the guest regardless of whether or not the NBD server advertises itself as read-only.

## See Also

### Creating network block device attachments

- [init(url:)](init%28url_%29-6q4m7.md): Creates a new network block device (NBD) storage attachment from an NDB Uniform Resource Indicator (URI) represented as a URL that you provide.

# initWithURL:timeout:forcedReadOnly:synchronizationMode:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new network block device storage attachment from an NBD Uniform Resource Indicator (URI) represented as a URL, timeout value, and read-only and synchronization modes that you provide.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL timeout:(NSTimeInterval) timeout forcedReadOnly:(BOOL) forcedReadOnly synchronizationMode:(VZDiskSynchronizationMode) synchronizationMode error:(NSError **) error;
```

## Parameters

- `URL`: The NBD’s URI represented as a URL.
- `timeout`: The timeout value in seconds for the connection between the client and server. When the timeout expires, an attempt to reconnect with the server takes place.
- `forcedReadOnly`: If [true](https://developer.apple.com/documentation/swift/true), the framework forces the disk attachment to be read-only, regardless of whether or not the NBD server supports write requests.
- `synchronizationMode`: The mode in which the disk attachment synchronizes data with the underlying storage device.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

The `forcedReadOnly` parameter affects how framework exposes the NBD client to the guest operating system by the storage controller. As part of the NBD protocol, the NBD server advertises whether or not the disk exposed by the NBD client is read-only during the handshake phase of the protocol. Setting `forcedReadOnly` to [true](https://developer.apple.com/documentation/swift/true) forces the NBD client to show up as read-only to the guest regardless of whether or not the NBD server advertises itself as read-only.

## See Also

### Creating network block device attachments

- [initWithURL:error:](init%28url_%29-6q4m7.md): Creates a new network block device (NBD) storage attachment from an NDB Uniform Resource Indicator (URI) represented as a URL that you provide.
