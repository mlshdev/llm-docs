> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpfeedbackcommandevent](https://developer.apple.com/documentation/mediaplayer/mpfeedbackcommandevent)

# MPFeedbackCommandEvent (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

An event requesting a change in the feedback setting.

## Declaration

```swift
class MPFeedbackCommandEvent
```

## Topics

### Determining the type of feedback action

- [isNegative](mpfeedbackcommandevent/isnegative.md): A Boolean value that indicates whether an app should perform a negative command appropriate to the target.

## Relationships

### Inherits From

- [MPRemoteCommandEvent](mpremotecommandevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to feedback and rating events

- [MPFeedbackCommand](mpfeedbackcommand.md): An object that reflects the feedback state for the playing item.
- [MPRatingCommand](mpratingcommand.md): An object that provides a detailed rating for the playing item.
- [MPRatingCommandEvent](mpratingcommandevent.md): An event requesting a change in the rating.

# MPFeedbackCommandEvent (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

An event requesting a change in the feedback setting.

## Declaration

```objectivec
@interface MPFeedbackCommandEvent : MPRemoteCommandEvent
```

## Topics

### Determining the type of feedback action

- [negative](mpfeedbackcommandevent/isnegative.md): A Boolean value that indicates whether an app should perform a negative command appropriate to the target.

## Relationships

### Inherits From

- [MPRemoteCommandEvent](mpremotecommandevent.md)

## See Also

### Responding to feedback and rating events

- [MPFeedbackCommand](mpfeedbackcommand.md): An object that reflects the feedback state for the playing item.
- [MPRatingCommand](mpratingcommand.md): An object that provides a detailed rating for the playing item.
- [MPRatingCommandEvent](mpratingcommandevent.md): An event requesting a change in the rating.
