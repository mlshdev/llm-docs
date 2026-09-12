> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskimagestoragedeviceattachment/cachingmode](https://developer.apple.com/documentation/virtualization/vzdiskimagestoragedeviceattachment/cachingmode)

# cachingMode (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The current cacheing mode for the virtual disk image.

## Declaration

```swift
var cachingMode: VZDiskImageCachingMode { get }
```

## See Also

### Getting the disk image details

- [url](url.md): The URL of the underlying disk image.
- [isReadOnly](isreadonly.md): A Boolean value that indicates whether the underlying disk image is read-only.
- [synchronizationMode](synchronizationmode.md): The mode in which the disk image synchronizes data with the underlying storage device.

# cachingMode (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The current cacheing mode for the virtual disk image.

## Declaration

```objectivec
@property (readonly) VZDiskImageCachingMode cachingMode;
```

## See Also

### Getting the disk image details

- [URL](url.md): The URL of the underlying disk image.
- [readOnly](isreadonly.md): A Boolean value that indicates whether the underlying disk image is read-only.
- [synchronizationMode](synchronizationmode.md): The mode in which the disk image synchronizes data with the underlying storage device.
