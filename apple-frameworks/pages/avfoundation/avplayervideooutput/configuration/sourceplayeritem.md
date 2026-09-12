> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayervideooutput/configuration/sourceplayeritem](https://developer.apple.com/documentation/avfoundation/avplayervideooutput/configuration/sourceplayeritem)

# sourcePlayerItem (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

The player item that’s the source of this configuration.

## Declaration

```swift
weak var sourcePlayerItem: AVPlayerItem? { get }
```

## See Also

### Inspecting the configuration

- [dataChannelDescription](datachanneldescription.md): An array of data channels selected for this configuration.
- [activationTime](activationtime.md): The host time this configuration became active on its associated player object.
- [preferredTransform](preferredtransform.md): The preferred transform of the visual media.

# sourcePlayerItem (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

The player item that’s the source of this configuration.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) AVPlayerItem * sourcePlayerItem;
```

## See Also

### Inspecting the configuration

- [dataChannelDescriptions](../../avplayervideooutputconfiguration/datachanneldescriptions.md): An array of data channels selected for this configuration.
- [activationTime](activationtime.md): The host time this configuration became active on its associated player object.
- [preferredTransform](preferredtransform.md): The preferred transform of the visual media.
