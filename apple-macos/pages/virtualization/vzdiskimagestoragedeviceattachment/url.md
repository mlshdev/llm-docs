> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzdiskimagestoragedeviceattachment/url

# url (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The URL of the underlying disk image.

## Declaration

```swift
var url: URL { get }
```

## See Also

### Getting the disk image details

- [isReadOnly](isreadonly.md): A Boolean value that indicates whether the underlying disk image is read-only.
- [cachingMode](cachingmode.md): The current cacheing mode for the virtual disk image.
- [synchronizationMode](synchronizationmode.md): The mode in which the disk image synchronizes data with the underlying storage device.

# URL (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The URL of the underlying disk image.

## Declaration

```objectivec
@property (copy, readonly) NSURL * URL;
```

## See Also

### Getting the disk image details

- [readOnly](isreadonly.md): A Boolean value that indicates whether the underlying disk image is read-only.
- [cachingMode](cachingmode.md): The current cacheing mode for the virtual disk image.
- [synchronizationMode](synchronizationmode.md): The mode in which the disk image synchronizes data with the underlying storage device.
