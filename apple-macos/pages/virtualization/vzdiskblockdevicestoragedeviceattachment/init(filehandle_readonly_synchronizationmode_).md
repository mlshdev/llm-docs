> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskblockdevicestoragedeviceattachment/init(filehandle:readonly:synchronizationmode:)](https://developer.apple.com/documentation/virtualization/vzdiskblockdevicestoragedeviceattachment/init(filehandle:readonly:synchronizationmode:))

# init(fileHandle:readOnly:synchronizationMode:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Creates a new block storage device attachment from a file handle and with the specified access mode, synchronization mode, and error object that you provide.

## Declaration

```swift
init(fileHandle: FileHandle, readOnly: Bool, synchronizationMode: VZDiskSynchronizationMode) throws
```

## Parameters

- `fileHandle`: The [FileHandle](https://developer.apple.com/documentation/foundation/filehandle) to a block device to attach to this VM.
- `readOnly`: A Boolean value that indicates whether this disk attachment is read-only; otherwise, if the file handle allows writes, the device can write data into it.
- `synchronizationMode`: The [VZDiskSynchronizationMode](../vzdisksynchronizationmode.md) value that defines how the disk synchronizes with the underlying storage when the guest operating system flushes data.

<a id="Discussion"></a>

## Discussion

> **Note**

>  The disk attachment retains the file handle, and the handle must be open when the virtual machine starts.

The `readOnly` parameter affects how the Virtualization framework exposes the disk to the guest operating system by the storage controller. If you intend to use the disk in read-only mode, it’s also a best practice to open the file handle as read-only.

# initWithFileHandle:readOnly:synchronizationMode:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new block storage device attachment from a file handle and with the specified access mode, synchronization mode, and error object that you provide.

## Declaration

```objectivec
- (instancetype) initWithFileHandle:(NSFileHandle *) fileHandle readOnly:(BOOL) readOnly synchronizationMode:(VZDiskSynchronizationMode) synchronizationMode error:(NSError **) error;
```

## Parameters

- `fileHandle`: The [NSFileHandle](https://developer.apple.com/documentation/foundation/filehandle) to a block device to attach to this VM.
- `readOnly`: A Boolean value that indicates whether this disk attachment is read-only; otherwise, if the file handle allows writes, the device can write data into it.
- `synchronizationMode`: The [VZDiskSynchronizationMode](../vzdisksynchronizationmode.md) value that defines how the disk synchronizes with the underlying storage when the guest operating system flushes data.
- `error`: If not `nil`, the framework assigns an [NSError](https://developer.apple.com/documentation/foundation/nserror) if the initialization fails.

<a id="Discussion"></a>

## Discussion

> **Note**

>  The disk attachment retains the file handle, and the handle must be open when the virtual machine starts.

The `readOnly` parameter affects how the Virtualization framework exposes the disk to the guest operating system by the storage controller. If you intend to use the disk in read-only mode, it’s also a best practice to open the file handle as read-only.
