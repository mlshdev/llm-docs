> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptpushresult](https://developer.apple.com/documentation/pushtotalk/ptpushresult)

# PTPushResult (Swift)

**Framework:** Push to Talk  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that represents a push result.

## Declaration

```swift
class PTPushResult
```

## Mentioned In

- [Creating a Push to Talk app](creating-a-push-to-talk-app.md)

<a id="overview"></a>

## Overview

When an app receives an Apple Push Notification service payload, return a [PTPushResult](ptpushresult.md) object as part of the delegate method. Use [activeRemoteParticipant(\_:)](ptpushresult/activeremoteparticipant%28__%29.md) to show the latest participant information in the system user interface. Create a push result with [leaveChannel](ptpushresult/leavechannel.md) to remove a user from the channel.

```swift
func incomingPushResult(channelManager: PTChannelManager,
                        channelUUID: UUID,
                        pushPayload: [String: Any]) -> PTPushResult {
    guard let activeSpeaker = pushPayload["activeSpeaker"] as? String else {
        // Report that there's no active speaker, so leave the channel.
        return .leaveChannel
    }

    let activeSpeakerImage = // Get the cached image for the active speaker.
    let participant = PTParticipant(name: activeSpeaker,
                                    image: activeSpeakerImage)
    // Report the active participant information to the system.
    return .activeRemoteParticipant(participant)
}
```

## Topics

### Updating the active participant

- [activeRemoteParticipant(\_:)](ptpushresult/activeremoteparticipant%28__%29.md): Creates a push result for reporting that a remote participant started to speak.

### Leaving the channel

- [leaveChannel](ptpushresult/leavechannel.md): Creates a push result for leaving a channel.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# PTPushResult (Objective-C)

**Framework:** Push to Talk  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that represents a push result.

## Declaration

```objectivec
@interface PTPushResult : NSObject
```

## Mentioned In

- [Creating a Push to Talk app](creating-a-push-to-talk-app.md)

<a id="overview"></a>

## Overview

When an app receives an Apple Push Notification service payload, return a [PTPushResult](ptpushresult.md) object as part of the delegate method. Use [pushResultForActiveRemoteParticipant:](ptpushresult/activeremoteparticipant%28__%29.md) to show the latest participant information in the system user interface. Create a push result with [leaveChannelPushResult](ptpushresult/leavechannel.md) to remove a user from the channel.

```swift
func incomingPushResult(channelManager: PTChannelManager,
                        channelUUID: UUID,
                        pushPayload: [String: Any]) -> PTPushResult {
    guard let activeSpeaker = pushPayload["activeSpeaker"] as? String else {
        // Report that there's no active speaker, so leave the channel.
        return .leaveChannel
    }

    let activeSpeakerImage = // Get the cached image for the active speaker.
    let participant = PTParticipant(name: activeSpeaker,
                                    image: activeSpeakerImage)
    // Report the active participant information to the system.
    return .activeRemoteParticipant(participant)
}
```

## Topics

### Updating the active participant

- [pushResultForActiveRemoteParticipant:](ptpushresult/activeremoteparticipant%28__%29.md): Creates a push result for reporting that a remote participant started to speak.

### Leaving the channel

- [leaveChannelPushResult](ptpushresult/leavechannel.md): Creates a push result for leaving a channel.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
