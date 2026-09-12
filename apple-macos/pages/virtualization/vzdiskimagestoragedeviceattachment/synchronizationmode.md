> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskimagestoragedeviceattachment/synchronizationmode](https://developer.apple.com/documentation/virtualization/vzdiskimagestoragedeviceattachment/synchronizationmode)

# synchronizationMode (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The mode in which the disk image synchronizes data with the underlying storage device.

## Declaration

```swift
var synchronizationMode: VZDiskImageSynchronizationMode { get }
```

## See Also

### Getting the disk image details

- [url](url.md): The URL of the underlying disk image.
- [isReadOnly](isreadonly.md): A Boolean value that indicates whether the underlying disk image is read-only.
- [cachingMode](cachingmode.md): The current cacheing mode for the virtual disk image.

# synchronizationMode (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The mode in which the disk image synchronizes data with the underlying storage device.

## Declaration

```objectivec
@property (readonly) VZDiskImageSynchronizationMode synchronizationMode;
```

## See Also

### Getting the disk image details

- [URL](url.md): The URL of the underlying disk image.
- [readOnly](isreadonly.md): A Boolean value that indicates whether the underlying disk image is read-only.
- [cachingMode](cachingmode.md): The current cacheing mode for the virtual disk image.
