> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aumessagechannel](https://developer.apple.com/documentation/audiotoolbox/aumessagechannel)

# AUMessageChannel (Swift)

**Framework:** Audio Toolbox  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A specification for a bidirectional communication message channel.

## Declaration

```swift
protocol AUMessageChannel
```

<a id="overview"></a>

## Overview

Audio units and their hosts have unique communication needs. For example, for better audio processing they can exchange musical context. An audio unit implements a class that conforms to [AUMessageChannel](aumessagechannel.md) and returns an instance from [messageChannel(for:)](auaudiounit/messagechannel%28for_%29.md). A host queries the instance through the channel name.

This protocol offers a method to send messages to an audio unit and a block to send messages to the host.

## Topics

### Sending a Message to an Audio Unit

- [callAudioUnit(\_:)](aumessagechannel/callaudiounit%28__%29.md): Sends an audio unit a custom data message.

### Sending a Message to a Host

- [callHostBlock](aumessagechannel/callhostblock.md): A callback for the audio unit to send a message to the host.

## See Also

### Messaging Channels

- [messageChannel(for:)](auaudiounit/messagechannel%28for_%29.md): Returns an object for bidirectional communication between an audio unit and its host.

# AUMessageChannel (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A specification for a bidirectional communication message channel.

## Declaration

```objectivec
@protocol AUMessageChannel
```

<a id="overview"></a>

## Overview

Audio units and their hosts have unique communication needs. For example, for better audio processing they can exchange musical context. An audio unit implements a class that conforms to [AUMessageChannel](aumessagechannel.md) and returns an instance from [messageChannelFor:](auaudiounit/messagechannel%28for_%29.md). A host queries the instance through the channel name.

This protocol offers a method to send messages to an audio unit and a block to send messages to the host.

## Topics

### Sending a Message to an Audio Unit

- [callAudioUnit:](aumessagechannel/callaudiounit%28__%29.md): Sends an audio unit a custom data message.

### Sending a Message to a Host

- [callHostBlock](aumessagechannel/callhostblock.md): A callback for the audio unit to send a message to the host.

## See Also

### Messaging Channels

- [messageChannelFor:](auaudiounit/messagechannel%28for_%29.md): Returns an object for bidirectional communication between an audio unit and its host.
