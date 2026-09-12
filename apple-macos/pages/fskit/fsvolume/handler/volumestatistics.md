> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/volumestatistics](https://developer.apple.com/documentation/fskit/fsvolume/handler/volumestatistics)

# volumeStatistics (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A property that provides up-to-date statistics of the volume.

## Declaration

```swift
var volumeStatistics: FSStatFSResult { get }
```

## See Also

### Inspecting required volume properties

- [supportedVolumeCapabilities](supportedvolumecapabilities.md)
- [FSVolume.SupportedCapabilities](../supportedcapabilities.md): A type that represents capabilities supported by a volume, such as hard and symbolic links, journaling, and large file sizes.
- [FSStatFSResult](../../fsstatfsresult.md): A type used to report a volume’s statistics.

# volumeStatistics (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A property that provides up-to-date statistics of the volume.

## Declaration

```objectivec
@property (nonatomic, readonly) FSStatFSResult * volumeStatistics;
```

## See Also

### Inspecting required volume properties

- [supportedVolumeCapabilities](supportedvolumecapabilities.md)
- [FSVolumeSupportedCapabilities](../supportedcapabilities.md): A type that represents capabilities supported by a volume, such as hard and symbolic links, journaling, and large file sizes.
- [FSStatFSResult](../../fsstatfsresult.md): A type used to report a volume’s statistics.
