> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/openconfiguration](https://developer.apple.com/documentation/diskimagekit/openconfiguration)

# OpenConfiguration

**Framework:** DiskImageKit  
**Kind:** Structure  
**Availability:** macOS 27.0+

A configuration to use for opening existing disk images.

## Declaration

```swift
struct OpenConfiguration
```

## Topics

### Initializers

- [init(url:mode:)](openconfiguration/init%28url_mode_%29.md): Creates a configuration for opening a disk image.

### Instance Properties

- [mode](openconfiguration/mode-swift.property.md): The mode in which to open the disk image.
- [url](openconfiguration/url.md): The URL of the disk image to open.

### Enumerations

- [OpenConfiguration.Mode](openconfiguration/mode-swift.enum.md): Open modes for disk images.

## Relationships

### Conforms To

- [OpenConfigurationProtocol](openconfigurationprotocol.md)

## See Also

### Essential Types

- [DiskImage](diskimage.md): The representation of an open disk image
- [StackedImage](stackedimage.md): The protocol for stacked disk images that contain multiple layers.
- [OpenConfigurationProtocol](openconfigurationprotocol.md): The protocol for disk image open configurations.
- [OpenConfiguration.Mode](openconfiguration/mode-swift.enum.md): Open modes for disk images.
