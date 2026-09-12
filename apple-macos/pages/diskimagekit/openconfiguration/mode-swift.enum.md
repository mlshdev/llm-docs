> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/openconfiguration/mode-swift.enum](https://developer.apple.com/documentation/diskimagekit/openconfiguration/mode-swift.enum)

# OpenConfiguration.Mode

**Framework:** DiskImageKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Open modes for disk images.

## Declaration

```swift
enum Mode
```

## Topics

### Enumeration Cases

- [OpenConfiguration.Mode.automatic](mode-swift.enum/automatic.md): Try to open the disk image as read-write, and fallback to read-only if there’s no read-write access.
- [OpenConfiguration.Mode.readOnly](mode-swift.enum/readonly.md): Open the disk image in read-only mode.
- [OpenConfiguration.Mode.readWrite](mode-swift.enum/readwrite.md): Open the disk-image with read-write permissions.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Essential Types

- [DiskImage](../diskimage.md): The representation of an open disk image
- [StackedImage](../stackedimage.md): The protocol for stacked disk images that contain multiple layers.
- [OpenConfigurationProtocol](../openconfigurationprotocol.md): The protocol for disk image open configurations.
- [OpenConfiguration](../openconfiguration.md): A configuration to use for opening existing disk images.
