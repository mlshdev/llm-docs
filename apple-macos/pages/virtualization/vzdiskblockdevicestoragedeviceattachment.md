> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskblockdevicestoragedeviceattachment](https://developer.apple.com/documentation/virtualization/vzdiskblockdevicestoragedeviceattachment)

# VZDiskBlockDeviceStorageDeviceAttachment (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

A storage device attachment that uses a disk to store data.

## Declaration

```swift
class VZDiskBlockDeviceStorageDeviceAttachment
```

<a id="overview"></a>

## Overview

The disk block device implements a storage attachment by using an actual disk rather than a disk image on a file system.

> **Warning**

>  Handle the disk passed to this attachment with caution. If the disk has a file system formatted on it, the guest can destroy data in a way that isn’t recoverable.

In the following example, a disk device at `/dev/rdisk42` executes the I/O operations directly on that disk rather than through a file system:

**Swift**

```swift
    let fileHandle = FileHandle(forUpdatingAtPath: myDiskUrl)
    let attachment = try VZDiskBlockDeviceStorageDeviceAttachment(fileHandle: fileHandle!, readOnly: false, synchronizationMode: .full)
    let blockDevice = VZVirtioBlockDeviceConfiguration(attachment: attachment)
```

**Objective-C**

```objc
NSFileHandle *fileHandle = [NSFileHandle fileHandleForReadingAtPath:@"/dev/rdisk42"];
    if (!fileHandle) {
        // Handle errors.
    }

    NSError *error;
    VZDiskBlockDeviceStorageDeviceAttachment *attachment =
        [[VZDiskBlockDeviceStorageDeviceAttachment alloc] initWithFileHandle:fileHandle
                                                          readOnly:YES
                                                          synchronizationMode:VZDiskSynchronizationModeFull
                                                          error:error];
    if (!attachment) {
        // Handle errors.
    }
```

By default, only the `root` user can access the disk file handle. Running virtual machines as `root` isn’t recommended. The best practice is to open the file in a separate process that has `root` privileges, then pass the open file descriptor using XPC or a Unix socket to a non-`root` process running Virtualization. For more information about Unix sockets, see [Streams, Sockets, and Ports](https://developer.apple.com/documentation/foundation/streams-sockets-and-ports); for more information on XPC services, see the [XPC](https://developer.apple.com/documentation/xpc) framework documentation.

> **Important**

>  You can’t use this method of privilege escalation in apps distributed on the Mac App Store.

## Topics

### Initializers

- [init(fileHandle:readOnly:synchronizationMode:)](vzdiskblockdevicestoragedeviceattachment/init%28filehandle_readonly_synchronizationmode_%29.md): Creates a new block storage device attachment from a file handle and with the specified access mode, synchronization mode, and error object that you provide.

### Getting the block storage device details

- [fileHandle](vzdiskblockdevicestoragedeviceattachment/filehandle.md): A file handle to a block device.
- [isReadOnly](vzdiskblockdevicestoragedeviceattachment/isreadonly.md): A Boolean value that indicates whether this disk attachment is read-only; otherwise, if the file handle allows writes, the device can write data into it.
- [synchronizationMode](vzdiskblockdevicestoragedeviceattachment/synchronizationmode.md): The value that defines how the disk synchronizes with the underlying storage when the guest operating system flushes data.

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

### Related Documentation

- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md): The configuration object that requests the creation of a virtual storage device in the guest system.

### Attachment points

- [VZDiskImageStorageDeviceAttachment](vzdiskimagestoragedeviceattachment.md): A device that stores content in a disk image.
- [VZNetworkBlockDeviceStorageDeviceAttachment](vznetworkblockdevicestoragedeviceattachment.md): A storage device attachment backed by a Network Block Device (NBD) client.
- [VZStorageDeviceAttachment](vzstoragedeviceattachment.md): The common behaviors for storage devices in the guest system.

# VZDiskBlockDeviceStorageDeviceAttachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

A storage device attachment that uses a disk to store data.

## Declaration

```objectivec
@interface VZDiskBlockDeviceStorageDeviceAttachment : VZStorageDeviceAttachment
```

<a id="overview"></a>

## Overview

The disk block device implements a storage attachment by using an actual disk rather than a disk image on a file system.

> **Warning**

>  Handle the disk passed to this attachment with caution. If the disk has a file system formatted on it, the guest can destroy data in a way that isn’t recoverable.

In the following example, a disk device at `/dev/rdisk42` executes the I/O operations directly on that disk rather than through a file system:

**Swift**

```swift
    let fileHandle = FileHandle(forUpdatingAtPath: myDiskUrl)
    let attachment = try VZDiskBlockDeviceStorageDeviceAttachment(fileHandle: fileHandle!, readOnly: false, synchronizationMode: .full)
    let blockDevice = VZVirtioBlockDeviceConfiguration(attachment: attachment)
```

**Objective-C**

```objc
NSFileHandle *fileHandle = [NSFileHandle fileHandleForReadingAtPath:@"/dev/rdisk42"];
    if (!fileHandle) {
        // Handle errors.
    }

    NSError *error;
    VZDiskBlockDeviceStorageDeviceAttachment *attachment =
        [[VZDiskBlockDeviceStorageDeviceAttachment alloc] initWithFileHandle:fileHandle
                                                          readOnly:YES
                                                          synchronizationMode:VZDiskSynchronizationModeFull
                                                          error:error];
    if (!attachment) {
        // Handle errors.
    }
```

By default, only the `root` user can access the disk file handle. Running virtual machines as `root` isn’t recommended. The best practice is to open the file in a separate process that has `root` privileges, then pass the open file descriptor using XPC or a Unix socket to a non-`root` process running Virtualization. For more information about Unix sockets, see [Streams, Sockets, and Ports](https://developer.apple.com/documentation/foundation/streams-sockets-and-ports); for more information on XPC services, see the [XPC](https://developer.apple.com/documentation/xpc) framework documentation.

> **Important**

>  You can’t use this method of privilege escalation in apps distributed on the Mac App Store.

## Topics

### Initializers

- [initWithFileHandle:readOnly:synchronizationMode:error:](vzdiskblockdevicestoragedeviceattachment/init%28filehandle_readonly_synchronizationmode_%29.md): Creates a new block storage device attachment from a file handle and with the specified access mode, synchronization mode, and error object that you provide.

### Getting the block storage device details

- [fileHandle](vzdiskblockdevicestoragedeviceattachment/filehandle.md): A file handle to a block device.
- [readOnly](vzdiskblockdevicestoragedeviceattachment/isreadonly.md): A Boolean value that indicates whether this disk attachment is read-only; otherwise, if the file handle allows writes, the device can write data into it.
- [synchronizationMode](vzdiskblockdevicestoragedeviceattachment/synchronizationmode.md): The value that defines how the disk synchronizes with the underlying storage when the guest operating system flushes data.

## Relationships

### Inherits From

- [VZStorageDeviceAttachment](vzstoragedeviceattachment.md)

## See Also

### Related Documentation

- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md): The configuration object that requests the creation of a virtual storage device in the guest system.

### Attachment points

- [VZDiskImageStorageDeviceAttachment](vzdiskimagestoragedeviceattachment.md): A device that stores content in a disk image.
- [VZNetworkBlockDeviceStorageDeviceAttachment](vznetworkblockdevicestoragedeviceattachment.md): A storage device attachment backed by a Network Block Device (NBD) client.
- [VZStorageDeviceAttachment](vzstoragedeviceattachment.md): The common behaviors for storage devices in the guest system.
