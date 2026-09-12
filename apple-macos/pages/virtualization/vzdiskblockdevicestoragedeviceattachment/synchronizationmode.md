> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskblockdevicestoragedeviceattachment/synchronizationmode](https://developer.apple.com/documentation/virtualization/vzdiskblockdevicestoragedeviceattachment/synchronizationmode)

# synchronizationMode (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The value that defines how the disk synchronizes with the underlying storage when the guest operating system flushes data.

## Declaration

```swift
var synchronizationMode: VZDiskSynchronizationMode { get }
```

## See Also

### Getting the block storage device details

- [fileHandle](filehandle.md): A file handle to a block device.
- [isReadOnly](isreadonly.md): A Boolean value that indicates whether this disk attachment is read-only; otherwise, if the file handle allows writes, the device can write data into it.

# synchronizationMode (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The value that defines how the disk synchronizes with the underlying storage when the guest operating system flushes data.

## Declaration

```objectivec
@property (readonly) VZDiskSynchronizationMode synchronizationMode;
```

## See Also

### Getting the block storage device details

- [fileHandle](filehandle.md): A file handle to a block device.
- [readOnly](isreadonly.md): A Boolean value that indicates whether this disk attachment is read-only; otherwise, if the file handle allows writes, the device can write data into it.
