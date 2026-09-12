> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayervideooutput/configuration](https://developer.apple.com/documentation/avfoundation/avplayervideooutput/configuration)

# AVPlayerVideoOutput.Configuration (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

An object that provides configuration information for the related player item.

## Declaration

```swift
class Configuration
```

## Topics

### Inspecting the configuration

- [sourcePlayerItem](configuration/sourceplayeritem.md): The player item that’s the source of this configuration.
- [dataChannelDescription](configuration/datachanneldescription.md): An array of data channels selected for this configuration.
- [activationTime](configuration/activationtime.md): The host time this configuration became active on its associated player object.
- [preferredTransform](configuration/preferredtransform.md): The preferred transform of the visual media.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing video data

- [sample(forHostTime:)](sample%28forhosttime_%29.md): Retrieves a video sample along with auxiliary information for display at the specified host time.
- [AVPlayerVideoOutput.Sample](sample.md): A video frame along with auxiliary information for display at the specified presentation time.
- [taggedBuffers(forHostTime:)](taggedbuffers%28forhosttime_%29.md): Deprecated.

# AVPlayerVideoOutputConfiguration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

An object that provides configuration information for the related player item.

## Declaration

```objectivec
@interface AVPlayerVideoOutputConfiguration : NSObject
```

## Topics

### Inspecting the configuration

- [sourcePlayerItem](configuration/sourceplayeritem.md): The player item that’s the source of this configuration.
- [dataChannelDescriptions](../avplayervideooutputconfiguration/datachanneldescriptions.md): An array of data channels selected for this configuration.
- [activationTime](configuration/activationtime.md): The host time this configuration became active on its associated player object.
- [preferredTransform](configuration/preferredtransform.md): The preferred transform of the visual media.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Accessing video data

- [copyTaggedBufferGroupForHostTime:presentationTimeStamp:activeConfiguration:](copytaggedbuffergroupforhosttime_presentationtimestamp_activeconfiguration_.md)
