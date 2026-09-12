> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofileresource/configuration-swift.struct](https://developer.apple.com/documentation/realitykit/audiofileresource/configuration-swift.struct)

# AudioFileResource.Configuration

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A container for various settings for loading an audio file resource.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration for an audio file resource

- [init(loadingStrategy:shouldLoop:shouldRandomizeStartTime:normalization:calibration:mixGroupName:)](configuration-swift.struct/init%28loadingstrategy_shouldloop_shouldrandomizestarttime_normalization_calibration_mixgroupname_%29.md): Initializes a new audio file resource configuration.

### Configuring the loading optimization strategy

- [loadingStrategy](configuration-swift.struct/loadingstrategy.md): Stores the strategy the system uses for handling an audio resource’s data before and during playback.

### Controlling the volume

- [normalization](configuration-swift.struct/normalization.md): Stores the normalization portion of the configuration.
- [calibration](configuration-swift.struct/calibration.md): Stores the calibration setting that the system applies to the audio resource, ensuring optimal playback quality.

### Customizing the playback

- [shouldRandomizeStartTime](configuration-swift.struct/shouldrandomizestarttime.md): Stores a Boolean indicating whether the playback begins from the start of the file, or from a random position.
- [shouldLoop](configuration-swift.struct/shouldloop.md): Stores a Boolean indicating whether the playback loops infinitely, until manually stopped or paused.

### Assigning an audio resource to a mix group

- [mixGroupName](configuration-swift.struct/mixgroupname.md): An arbitrary name that can assigns an audio resource to an audio mix group.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AudioFileResource.LoadingStrategy](loadingstrategy-swift.enum.md): A container for different strategies on how to handle resources’ data before and during playback.
