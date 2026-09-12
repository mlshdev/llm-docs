> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiochannel](https://developer.apple.com/documentation/avfoundation/avcaptureaudiochannel)

# AVCaptureAudioChannel (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

An object that monitors average and peak power levels for an audio channel in a capture connection.

## Declaration

```swift
class AVCaptureAudioChannel
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. Instead, an [AVCaptureConnection](avcaptureconnection.md) object that connects an audio input to an audio output provides an array of [AVCaptureAudioChannel](avcaptureaudiochannel.md) objects, one for each channel of audio available. You can poll for audio levels by iterating through these audio channel objects.

## Topics

### Configuring a channel

- [isEnabled](avcaptureaudiochannel/isenabled.md): A Boolean value that indicates whether the channel is in an enabled state.
- [volume](avcaptureaudiochannel/volume.md): The current volume (gain) of the channel.

### Accessing power levels

- [averagePowerLevel](avcaptureaudiochannel/averagepowerlevel.md): The instantaneous average power level in decibels.
- [peakHoldLevel](avcaptureaudiochannel/peakholdlevel.md): The peak hold power level in decibels.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Connecting inputs and outputs

- [connections](avcapturesession/connections.md): The connections between inputs and outputs that a capture session contains.
- [addConnection(\_:)](avcapturesession/addconnection%28__%29.md): Adds a connection to the capture session.
- [canAddConnection(\_:)](avcapturesession/canaddconnection%28__%29.md): Determines whether a you can add a connection to a capture session.
- [addInputWithNoConnections(\_:)](avcapturesession/addinputwithnoconnections%28__%29.md): Adds a capture input to a session without forming any connections.
- [addOutputWithNoConnections(\_:)](avcapturesession/addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [removeConnection(\_:)](avcapturesession/removeconnection%28__%29.md): Removes a capture connection from the session.

# AVCaptureAudioChannel (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

An object that monitors average and peak power levels for an audio channel in a capture connection.

## Declaration

```objectivec
@interface AVCaptureAudioChannel : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. Instead, an [AVCaptureConnection](avcaptureconnection.md) object that connects an audio input to an audio output provides an array of [AVCaptureAudioChannel](avcaptureaudiochannel.md) objects, one for each channel of audio available. You can poll for audio levels by iterating through these audio channel objects.

## Topics

### Configuring a channel

- [enabled](avcaptureaudiochannel/isenabled.md): A Boolean value that indicates whether the channel is in an enabled state.
- [volume](avcaptureaudiochannel/volume.md): The current volume (gain) of the channel.

### Accessing power levels

- [averagePowerLevel](avcaptureaudiochannel/averagepowerlevel.md): The instantaneous average power level in decibels.
- [peakHoldLevel](avcaptureaudiochannel/peakholdlevel.md): The peak hold power level in decibels.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Connecting inputs and outputs

- [connections](avcapturesession/connections.md): The connections between inputs and outputs that a capture session contains.
- [addConnection:](avcapturesession/addconnection%28__%29.md): Adds a connection to the capture session.
- [canAddConnection:](avcapturesession/canaddconnection%28__%29.md): Determines whether a you can add a connection to a capture session.
- [addInputWithNoConnections:](avcapturesession/addinputwithnoconnections%28__%29.md): Adds a capture input to a session without forming any connections.
- [addOutputWithNoConnections:](avcapturesession/addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [removeConnection:](avcapturesession/removeconnection%28__%29.md): Removes a capture connection from the session.
