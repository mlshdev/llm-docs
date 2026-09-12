> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpfeedbackcommand](https://developer.apple.com/documentation/mediaplayer/mpfeedbackcommand)

# MPFeedbackCommand (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

An object that reflects the feedback state for the playing item.

## Declaration

```swift
class MPFeedbackCommand
```

<a id="overview"></a>

## Overview

The shared [MPRemoteCommandCenter](mpremotecommandcenter.md) object vends feedback objects for liking, disliking, and bookmarking media items. Use these objects to register handlers for the types of feedback your app supports and to perform the appropriate tasks when that feedback changes. When the currently playing item changes, you can also use this object to set the feedback state for the new item.

When the state of a feedback item changes, the system delivers an appropriate event to registered handlers of this object. Your handler code must determine which media item receives the feedback and then apply the update the feedback state for that item. You might also perform other tasks related to receiving feedback. For example, if the user likes the currently playing song, you might update the appropriate UI in your app or use the information to recommend similar songs.

## Topics

### Retrieving information about a feedback command

- [isActive](mpfeedbackcommand/isactive.md): A Boolean value that indicates whether the feedback’s action is on or off.
- [localizedTitle](mpfeedbackcommand/localizedtitle.md): A localized string used to describe the context of a command.
- [localizedShortTitle](mpfeedbackcommand/localizedshorttitle.md): A shortened version of the string used to describe the context of a command.

## Relationships

### Inherits From

- [MPRemoteCommand](mpremotecommand.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to feedback and rating events

- [MPFeedbackCommandEvent](mpfeedbackcommandevent.md): An event requesting a change in the feedback setting.
- [MPRatingCommand](mpratingcommand.md): An object that provides a detailed rating for the playing item.
- [MPRatingCommandEvent](mpratingcommandevent.md): An event requesting a change in the rating.

# MPFeedbackCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

An object that reflects the feedback state for the playing item.

## Declaration

```objectivec
@interface MPFeedbackCommand : MPRemoteCommand
```

<a id="overview"></a>

## Overview

The shared [MPRemoteCommandCenter](mpremotecommandcenter.md) object vends feedback objects for liking, disliking, and bookmarking media items. Use these objects to register handlers for the types of feedback your app supports and to perform the appropriate tasks when that feedback changes. When the currently playing item changes, you can also use this object to set the feedback state for the new item.

When the state of a feedback item changes, the system delivers an appropriate event to registered handlers of this object. Your handler code must determine which media item receives the feedback and then apply the update the feedback state for that item. You might also perform other tasks related to receiving feedback. For example, if the user likes the currently playing song, you might update the appropriate UI in your app or use the information to recommend similar songs.

## Topics

### Retrieving information about a feedback command

- [active](mpfeedbackcommand/isactive.md): A Boolean value that indicates whether the feedback’s action is on or off.
- [localizedTitle](mpfeedbackcommand/localizedtitle.md): A localized string used to describe the context of a command.
- [localizedShortTitle](mpfeedbackcommand/localizedshorttitle.md): A shortened version of the string used to describe the context of a command.

## Relationships

### Inherits From

- [MPRemoteCommand](mpremotecommand.md)

## See Also

### Responding to feedback and rating events

- [MPFeedbackCommandEvent](mpfeedbackcommandevent.md): An event requesting a change in the feedback setting.
- [MPRatingCommand](mpratingcommand.md): An object that provides a detailed rating for the playing item.
- [MPRatingCommandEvent](mpratingcommandevent.md): An event requesting a change in the rating.
