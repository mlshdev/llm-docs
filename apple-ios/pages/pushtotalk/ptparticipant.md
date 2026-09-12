> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptparticipant](https://developer.apple.com/documentation/pushtotalk/ptparticipant)

# PTParticipant (Swift)

**Framework:** Push to Talk  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that represents a participant.

## Declaration

```swift
class PTParticipant
```

<a id="overview"></a>

## Overview

Use a [PTParticipant](ptparticipant.md) object with [setActiveRemoteParticipant(\_:channelUUID:completionHandler:)](ptchannelmanager/setactiveremoteparticipant%28__channeluuid_completionhandler_%29.md) to update the [name](ptparticipant/name.md) and `imageFileURL` the system displays in the user interface.

## Topics

### Creating a participant

- [init(name:image:)](ptparticipant/init%28name_image_%29.md): Creates a participant with the name and image you specify.

### Inspecting a participant

- [name](ptparticipant/name.md): The name of the participant.
- [image](ptparticipant/image.md): The image file you associate with the participant.

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

# PTParticipant (Objective-C)

**Framework:** Push to Talk  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that represents a participant.

## Declaration

```objectivec
@interface PTParticipant : NSObject
```

<a id="overview"></a>

## Overview

Use a [PTParticipant](ptparticipant.md) object with [setActiveRemoteParticipant:forChannelUUID:completionHandler:](ptchannelmanager/setactiveremoteparticipant%28__channeluuid_completionhandler_%29.md) to update the [name](ptparticipant/name.md) and `imageFileURL` the system displays in the user interface.

## Topics

### Creating a participant

- [initWithName:image:](ptparticipant/init%28name_image_%29.md): Creates a participant with the name and image you specify.

### Inspecting a participant

- [name](ptparticipant/name.md): The name of the participant.
- [image](ptparticipant/image.md): The image file you associate with the participant.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
