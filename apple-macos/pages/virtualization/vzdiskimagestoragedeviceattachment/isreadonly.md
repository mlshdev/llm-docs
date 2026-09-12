> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskimagestoragedeviceattachment/isreadonly](https://developer.apple.com/documentation/virtualization/vzdiskimagestoragedeviceattachment/isreadonly)

# isReadOnly (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the underlying disk image is read-only.

## Declaration

```swift
var isReadOnly: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the guest operating system may read the contents of the disk image, but may not write to it.

## See Also

### Getting the disk image details

- [url](url.md): The URL of the underlying disk image.
- [cachingMode](cachingmode.md): The current cacheing mode for the virtual disk image.
- [synchronizationMode](synchronizationmode.md): The mode in which the disk image synchronizes data with the underlying storage device.

# readOnly (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the underlying disk image is read-only.

## Declaration

```objectivec
@property (readonly, getter=isReadOnly) BOOL readOnly;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the guest operating system may read the contents of the disk image, but may not write to it.

## See Also

### Getting the disk image details

- [URL](url.md): The URL of the underlying disk image.
- [cachingMode](cachingmode.md): The current cacheing mode for the virtual disk image.
- [synchronizationMode](synchronizationmode.md): The mode in which the disk image synchronizes data with the underlying storage device.
