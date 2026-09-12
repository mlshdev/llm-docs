> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskblockdevicestoragedeviceattachment/filehandle](https://developer.apple.com/documentation/virtualization/vzdiskblockdevicestoragedeviceattachment/filehandle)

# fileHandle (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A file handle to a block device.

## Declaration

```swift
var fileHandle: FileHandle { get }
```

## See Also

### Getting the block storage device details

- [isReadOnly](isreadonly.md): A Boolean value that indicates whether this disk attachment is read-only; otherwise, if the file handle allows writes, the device can write data into it.
- [synchronizationMode](synchronizationmode.md): The value that defines how the disk synchronizes with the underlying storage when the guest operating system flushes data.

# fileHandle (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A file handle to a block device.

## Declaration

```objectivec
@property (strong, readonly) NSFileHandle * fileHandle;
```

## See Also

### Getting the block storage device details

- [readOnly](isreadonly.md): A Boolean value that indicates whether this disk attachment is read-only; otherwise, if the file handle allows writes, the device can write data into it.
- [synchronizationMode](synchronizationmode.md): The value that defines how the disk synchronizes with the underlying storage when the guest operating system flushes data.
