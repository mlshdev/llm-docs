> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpplaybackconfiguration](https://developer.apple.com/documentation/carplay/cpplaybackconfiguration)

# CPPlaybackConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

## Declaration

```swift
@MainActor class CPPlaybackConfiguration
```

<a id="overview"></a>

## Overview

> **Note**

> The preferred presentation of playback may be used to prepare the system for playback of that content.

## Topics

### Initializers

- [init(coder:)](cpplaybackconfiguration/init%28coder_%29.md)
- [init(preferredPresentation:playbackAction:elapsedTime:duration:)](cpplaybackconfiguration/init%28preferredpresentation_playbackaction_elapsedtime_duration_%29.md): Initialize a description of the playable media content that is represented by template items.

### Instance Properties

- [duration](cpplaybackconfiguration/duration.md): The total duration of the media content as a CMTime value. Provide 0 if the duration of the content is unknown or unavailable, for example in live-streaming content.
- [elapsedTime](cpplaybackconfiguration/elapsedtime.md): The elapsed playback time as a CMTime value.
- [playbackAction](cpplaybackconfiguration/playbackaction.md): The playback action to perform on this item, such as play, pause, or replay.
- [preferredPresentation](cpplaybackconfiguration/preferredpresentation.md): The style of media presentation shown after selecting the item.

### Enumerations

- [CPPlaybackConfiguration.Action](cpplaybackconfiguration/action.md): The playback action to perform on the item.
- [CPPlaybackConfiguration.Presentation](cpplaybackconfiguration/presentation.md): The style of media presentation shown after selecting the item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CPPlaybackConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

## Declaration

```objectivec
@interface CPPlaybackConfiguration : NSObject
```

<a id="overview"></a>

## Overview

> **Note**

> The preferred presentation of playback may be used to prepare the system for playback of that content.

## Topics

### Instance Properties

- [duration](cpplaybackconfiguration/duration.md): The total duration of the media content as a CMTime value. Provide 0 if the duration of the content is unknown or unavailable, for example in live-streaming content.
- [elapsedTime](cpplaybackconfiguration/elapsedtime.md): The elapsed playback time as a CMTime value.
- [playbackAction](cpplaybackconfiguration/playbackaction.md): The playback action to perform on this item, such as play, pause, or replay.
- [preferredPresentation](cpplaybackconfiguration/preferredpresentation.md): The style of media presentation shown after selecting the item.

### Instance Methods

- [initWithPreferredPresentation:playbackAction:elapsedTime:duration:](cpplaybackconfiguration/init%28preferredpresentation_playbackaction_elapsedtime_duration_%29.md): Initialize a description of the playable media content that is represented by template items.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
