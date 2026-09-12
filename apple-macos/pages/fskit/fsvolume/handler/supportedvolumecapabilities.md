> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/supportedvolumecapabilities](https://developer.apple.com/documentation/fskit/fsvolume/handler/supportedvolumecapabilities)

# supportedVolumeCapabilities (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

## Declaration

```swift
var supportedVolumeCapabilities: FSVolume.SupportedCapabilities { get }
```

## See Also

### Inspecting required volume properties

- [FSVolume.SupportedCapabilities](../supportedcapabilities.md): A type that represents capabilities supported by a volume, such as hard and symbolic links, journaling, and large file sizes.
- [volumeStatistics](volumestatistics.md): A property that provides up-to-date statistics of the volume.
- [FSStatFSResult](../../fsstatfsresult.md): A type used to report a volume’s statistics.

# supportedVolumeCapabilities (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

## Declaration

```objectivec
@property (nonatomic, readonly) FSVolumeSupportedCapabilities * supportedVolumeCapabilities;
```

## See Also

### Inspecting required volume properties

- [FSVolumeSupportedCapabilities](../supportedcapabilities.md): A type that represents capabilities supported by a volume, such as hard and symbolic links, journaling, and large file sizes.
- [volumeStatistics](volumestatistics.md): A property that provides up-to-date statistics of the volume.
- [FSStatFSResult](../../fsstatfsresult.md): A type used to report a volume’s statistics.
