> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkblockdevicestoragedeviceattachment](https://developer.apple.com/documentation/virtualization/vznetworkblockdevicestoragedeviceattachment)

# VZNetworkBlockDeviceStorageDeviceAttachment (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

A storage device attachment backed by a Network Block Device (NBD) client.

## Declaration

```swift
class VZNetworkBlockDeviceStorageDeviceAttachment
```

<a id="overview"></a>

## Overview

This storage device attachment provides a Network Block Device (NBD) client implementation. The NBD client connects to an NBD server referred to by an NBD Uniform Resource Indicator (URI), represented as an URL in this API. The NBD server runs outside of and isn’t controlled by the Virtualization framework. The NBD client forwards the guest’s I/O operations to the NBD server, which handles the I/O operations.

The NBD client attempts to connect to the NBD server referred to by the URL used when you started the VM with [start()](vzvirtualmachine/start%28%29.md). However, it’s important to note that a connection attempt isn’t made when the framework initializes the attachment object.

Reconnection attempts take place throughout the life cycle of the VM when the NBD client encounters a recoverable error such as connection timeout and unexpected connection errors. The NBD client disconnects from the server when the VM shuts down.

Using this attachment requires the app to have the [com.apple.security.network.client](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.network.client) entitlement because this attachment opens an outgoing network connection.

To create a device that uses an NBD service, first initialize a `VZNetworkBlockDeviceStorageDeviceAttachment` with the URI of an NBD server, then use the attachment to configure a [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md) as shown in the example below (the attachment works with any subclass of [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md), not just [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md)):

**Swift**

```swift
    let url = try URL(string: "nbd://localhost:10809/myDisk")
    let attachment = try VZNetworkBlockDeviceStorageDeviceAttachment(url: url, timeout: 5.0, isForcedReadOnly: false, synchronizationMode: .full)
    let blockDevice = VZVirtioBlockDeviceConfiguration(attachment: attachment)
```

**Objective-C**

```objc
    NSURL *url = [[NSURL alloc] initWithString:@"nbd://localhost:10809/myDisk"]
    NSError *error = nil;
    VZNetworkBlockDeviceStorageDeviceAttachment *attachment =
        [[VZNetworkBlockDeviceStorageDeviceAttachment alloc] initWithURL:url
                                                                 timeout:5.0
                                                          forcedReadOnly:NO
                                                     synchronizationMode:VZDiskSynchronizationModeFull
                                                                   error:&error];
    if (!attachment) {
        // Handle the error.
    }

    VZVirtioBlockDeviceConfiguration *blockDevice = [[VZVirtioBlockDeviceConfiguration alloc] initWithAttachment:attachment];

```

For more information about Network Block Devices, see the [Network Block Device Specification](https://github.com/NetworkBlockDevice/nbd/blob/master/doc/proto.md) on GitHub.

For more information about the NBD URL format, see the [Network Block Device URL specification](https://github.com/NetworkBlockDevice/nbd/blob/master/doc/uri.md) on GitHub.

## Topics

### Creating network block device attachments

- [init(url:)](vznetworkblockdevicestoragedeviceattachment/init%28url_%29-6q4m7.md): Creates a new network block device (NBD) storage attachment from an NDB Uniform Resource Indicator (URI) represented as a URL that you provide.
- [init(url:timeout:isForcedReadOnly:synchronizationMode:)](vznetworkblockdevicestoragedeviceattachment/init%28url_timeout_isforcedreadonly_synchronizationmode_%29.md): Creates a new network block device storage attachment from an NBD Uniform Resource Indicator (URI) represented as a URL, timeout value, and read-only and synchronization modes that you provide.

### Validating a network block device’s URL

- [validate(\_:)](vznetworkblockdevicestoragedeviceattachment/validate%28__%29.md): Checks if the URL is a valid network block device URL.

### Getting information about the attachment point

- [isForcedReadOnly](vznetworkblockdevicestoragedeviceattachment/isforcedreadonly.md): Returns a Boolean value that indicates whether the underlying disk attachment network is in a read-only state.
- [synchronizationMode](vznetworkblockdevicestoragedeviceattachment/synchronizationmode.md): The mode in which the NBD client synchronizes data with the NBD server.
- [timeout](vznetworkblockdevicestoragedeviceattachment/timeout.md): The timeout value in seconds for the connection between the client and server.
- [url](vznetworkblockdevicestoragedeviceattachment/url.md): The URL that refers to the NBD server to which the NBD client will connect.

### Observing changes to the network block device

- [delegate](vznetworkblockdevicestoragedeviceattachment/delegate.md): The object that receives messages about changes to the network block device attachment.
- [VZNetworkBlockDeviceStorageDeviceAttachmentDelegate](vznetworkblockdevicestoragedeviceattachmentdelegate.md): Methods you implement to respond to changes to a network block device attachment.

### Initializers

- [init(URL:)](vznetworkblockdevicestoragedeviceattachment/init%28url_%29-9emt.md)
- [init(URL:timeout:forcedReadOnly:synchronizationMode:)](vznetworkblockdevicestoragedeviceattachment/init%28url_timeout_forcedreadonly_synchronizationmode_%29.md)

## Relationships

### Inherits From

- [VZStorageDeviceAttachment](vzstoragedeviceattachment.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Attachment points

- [VZDiskBlockDeviceStorageDeviceAttachment](vzdiskblockdevicestoragedeviceattachment.md): A storage device attachment that uses a disk to store data.
- [VZDiskImageStorageDeviceAttachment](vzdiskimagestoragedeviceattachment.md): A device that stores content in a disk image.
- [VZStorageDeviceAttachment](vzstoragedeviceattachment.md): The common behaviors for storage devices in the guest system.

# VZNetworkBlockDeviceStorageDeviceAttachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

A storage device attachment backed by a Network Block Device (NBD) client.

## Declaration

```objectivec
@interface VZNetworkBlockDeviceStorageDeviceAttachment : VZStorageDeviceAttachment
```

<a id="overview"></a>

## Overview

This storage device attachment provides a Network Block Device (NBD) client implementation. The NBD client connects to an NBD server referred to by an NBD Uniform Resource Indicator (URI), represented as an URL in this API. The NBD server runs outside of and isn’t controlled by the Virtualization framework. The NBD client forwards the guest’s I/O operations to the NBD server, which handles the I/O operations.

The NBD client attempts to connect to the NBD server referred to by the URL used when you started the VM with [startWithCompletionHandler:](vzvirtualmachine/start%28%29.md). However, it’s important to note that a connection attempt isn’t made when the framework initializes the attachment object.

Reconnection attempts take place throughout the life cycle of the VM when the NBD client encounters a recoverable error such as connection timeout and unexpected connection errors. The NBD client disconnects from the server when the VM shuts down.

Using this attachment requires the app to have the [com.apple.security.network.client](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.network.client) entitlement because this attachment opens an outgoing network connection.

To create a device that uses an NBD service, first initialize a `VZNetworkBlockDeviceStorageDeviceAttachment` with the URI of an NBD server, then use the attachment to configure a [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md) as shown in the example below (the attachment works with any subclass of [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md), not just [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md)):

**Swift**

```swift
    let url = try URL(string: "nbd://localhost:10809/myDisk")
    let attachment = try VZNetworkBlockDeviceStorageDeviceAttachment(url: url, timeout: 5.0, isForcedReadOnly: false, synchronizationMode: .full)
    let blockDevice = VZVirtioBlockDeviceConfiguration(attachment: attachment)
```

**Objective-C**

```objc
    NSURL *url = [[NSURL alloc] initWithString:@"nbd://localhost:10809/myDisk"]
    NSError *error = nil;
    VZNetworkBlockDeviceStorageDeviceAttachment *attachment =
        [[VZNetworkBlockDeviceStorageDeviceAttachment alloc] initWithURL:url
                                                                 timeout:5.0
                                                          forcedReadOnly:NO
                                                     synchronizationMode:VZDiskSynchronizationModeFull
                                                                   error:&error];
    if (!attachment) {
        // Handle the error.
    }

    VZVirtioBlockDeviceConfiguration *blockDevice = [[VZVirtioBlockDeviceConfiguration alloc] initWithAttachment:attachment];

```

For more information about Network Block Devices, see the [Network Block Device Specification](https://github.com/NetworkBlockDevice/nbd/blob/master/doc/proto.md) on GitHub.

For more information about the NBD URL format, see the [Network Block Device URL specification](https://github.com/NetworkBlockDevice/nbd/blob/master/doc/uri.md) on GitHub.

## Topics

### Creating network block device attachments

- [initWithURL:error:](vznetworkblockdevicestoragedeviceattachment/init%28url_%29-6q4m7.md): Creates a new network block device (NBD) storage attachment from an NDB Uniform Resource Indicator (URI) represented as a URL that you provide.
- [initWithURL:timeout:forcedReadOnly:synchronizationMode:error:](vznetworkblockdevicestoragedeviceattachment/init%28url_timeout_isforcedreadonly_synchronizationmode_%29.md): Creates a new network block device storage attachment from an NBD Uniform Resource Indicator (URI) represented as a URL, timeout value, and read-only and synchronization modes that you provide.

### Validating a network block device’s URL

- [validateURL:error:](vznetworkblockdevicestoragedeviceattachment/validate%28__%29.md): Checks if the URL is a valid network block device URL.

### Getting information about the attachment point

- [forcedReadOnly](vznetworkblockdevicestoragedeviceattachment/isforcedreadonly.md): Returns a Boolean value that indicates whether the underlying disk attachment network is in a read-only state.
- [synchronizationMode](vznetworkblockdevicestoragedeviceattachment/synchronizationmode.md): The mode in which the NBD client synchronizes data with the NBD server.
- [timeout](vznetworkblockdevicestoragedeviceattachment/timeout.md): The timeout value in seconds for the connection between the client and server.
- [URL](vznetworkblockdevicestoragedeviceattachment/url.md): The URL that refers to the NBD server to which the NBD client will connect.

### Observing changes to the network block device

- [delegate](vznetworkblockdevicestoragedeviceattachment/delegate.md): The object that receives messages about changes to the network block device attachment.
- [VZNetworkBlockDeviceStorageDeviceAttachmentDelegate](vznetworkblockdevicestoragedeviceattachmentdelegate.md): Methods you implement to respond to changes to a network block device attachment.

## Relationships

### Inherits From

- [VZStorageDeviceAttachment](vzstoragedeviceattachment.md)

## See Also

### Attachment points

- [VZDiskBlockDeviceStorageDeviceAttachment](vzdiskblockdevicestoragedeviceattachment.md): A storage device attachment that uses a disk to store data.
- [VZDiskImageStorageDeviceAttachment](vzdiskimagestoragedeviceattachment.md): A device that stores content in a disk image.
- [VZStorageDeviceAttachment](vzstoragedeviceattachment.md): The common behaviors for storage devices in the guest system.
