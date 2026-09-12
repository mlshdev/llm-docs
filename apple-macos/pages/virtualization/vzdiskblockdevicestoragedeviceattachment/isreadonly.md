> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskblockdevicestoragedeviceattachment/isreadonly](https://developer.apple.com/documentation/virtualization/vzdiskblockdevicestoragedeviceattachment/isreadonly)

# isReadOnly (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that indicates whether this disk attachment is read-only; otherwise, if the file handle allows writes, the device can write data into it.

## Declaration

```swift
var isReadOnly: Bool { get }
```

## See Also

### Getting the block storage device details

- [fileHandle](filehandle.md): A file handle to a block device.
- [synchronizationMode](synchronizationmode.md): The value that defines how the disk synchronizes with the underlying storage when the guest operating system flushes data.

# readOnly (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that indicates whether this disk attachment is read-only; otherwise, if the file handle allows writes, the device can write data into it.

## Declaration

```objectivec
@property (readonly, getter=isReadOnly) BOOL readOnly;
```

## See Also

### Getting the block storage device details

- [fileHandle](filehandle.md): A file handle to a block device.
- [synchronizationMode](synchronizationmode.md): The value that defines how the disk synchronizes with the underlying storage when the guest operating system flushes data.
