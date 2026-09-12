> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiofilesystemdevice/share](https://developer.apple.com/documentation/virtualization/vzvirtiofilesystemdevice/share)

# share (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A value that defines the directory share the host exposes to the guest VM.

## Declaration

```swift
var share: VZDirectoryShare? { get set }
```

## See Also

### Related Documentation

- [VZSingleDirectoryShare](../vzsingledirectoryshare.md): An object that defines the directory share for a single directory.
- [VZMultipleDirectoryShare](../vzmultipledirectoryshare.md): An object that describes a directory share for multiple directories.

### Accessing directory properties

- [tag](tag.md): A string that identifies the device.

# share (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A value that defines the directory share the host exposes to the guest VM.

## Declaration

```objectivec
@property (strong, nullable) VZDirectoryShare * share;
```

## See Also

### Related Documentation

- [VZSingleDirectoryShare](../vzsingledirectoryshare.md): An object that defines the directory share for a single directory.
- [VZMultipleDirectoryShare](../vzmultipledirectoryshare.md): An object that describes a directory share for multiple directories.

### Accessing directory properties

- [tag](tag.md): A string that identifies the device.
