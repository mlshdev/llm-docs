> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayervideooutputconfiguration/datachanneldescriptions](https://developer.apple.com/documentation/avfoundation/avplayervideooutputconfiguration/datachanneldescriptions)

# dataChannelDescriptions

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

An array of data channels selected for this configuration.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray * dataChannelDescriptions;
```

## See Also

### Inspecting the configuration

- [sourcePlayerItem](../avplayervideooutput/configuration/sourceplayeritem.md): The player item that’s the source of this configuration.
- [activationTime](../avplayervideooutput/configuration/activationtime.md): The host time this configuration became active on its associated player object.
- [preferredTransform](../avplayervideooutput/configuration/preferredtransform.md): The preferred transform of the visual media.
