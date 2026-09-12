> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionroutechangereasonkey](https://developer.apple.com/documentation/avfaudio/avaudiosessionroutechangereasonkey)

# AVAudioSessionRouteChangeReasonKey (Swift)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A user info key that’s used to retrieve the route change reason.

## Declaration

```swift
let AVAudioSessionRouteChangeReasonKey: String
```

<a id="Discussion"></a>

## Discussion

The associated value is an unsigned integer, provided as an [NSNumber](../foundation/nsnumber.md) object, that identifies the reason why the route changed. For a list of possible values, see [AVAudioSession.RouteChangeReason](avaudiosession/routechangereason.md).

## See Also

### User Info Keys

- [AVAudioSessionRouteChangePreviousRouteKey](avaudiosessionroutechangepreviousroutekey.md): A user info key that’s used to retrieve the previously active audio session route.

# AVAudioSessionRouteChangeReasonKey (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A user info key that’s used to retrieve the route change reason.

## Declaration

```objectivec
extern NSString * const AVAudioSessionRouteChangeReasonKey;
```

<a id="Discussion"></a>

## Discussion

The associated value is an unsigned integer, provided as an [NSNumber](../foundation/nsnumber.md) object, that identifies the reason why the route changed. For a list of possible values, see [AVAudioSessionRouteChangeReason](avaudiosession/routechangereason.md).

## See Also

### User Info Keys

- [AVAudioSessionRouteChangePreviousRouteKey](avaudiosessionroutechangepreviousroutekey.md): A user info key that’s used to retrieve the previously active audio session route.
