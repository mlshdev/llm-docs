> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayervideooutput/configuration/datachanneldescription](https://developer.apple.com/documentation/avfoundation/avplayervideooutput/configuration/datachanneldescription)

# dataChannelDescription

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

An array of data channels selected for this configuration.

## Declaration

```swift
var dataChannelDescription: [[CMTag]] { get }
```

## See Also

### Inspecting the configuration

- [sourcePlayerItem](sourceplayeritem.md): The player item that’s the source of this configuration.
- [activationTime](activationtime.md): The host time this configuration became active on its associated player object.
- [preferredTransform](preferredtransform.md): The preferred transform of the visual media.
