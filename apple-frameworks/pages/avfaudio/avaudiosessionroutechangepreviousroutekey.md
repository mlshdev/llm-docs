> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionroutechangepreviousroutekey](https://developer.apple.com/documentation/avfaudio/avaudiosessionroutechangepreviousroutekey)

# AVAudioSessionRouteChangePreviousRouteKey (Swift)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A user info key that’s used to retrieve the previously active audio session route.

## Declaration

```swift
let AVAudioSessionRouteChangePreviousRouteKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [AVAudioSessionRouteDescription](avaudiosessionroutedescription.md) object that describes the audio route settings prior to the route change.

## See Also

### User Info Keys

- [AVAudioSessionRouteChangeReasonKey](avaudiosessionroutechangereasonkey.md): A user info key that’s used to retrieve the route change reason.

# AVAudioSessionRouteChangePreviousRouteKey (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A user info key that’s used to retrieve the previously active audio session route.

## Declaration

```objectivec
extern NSString * const AVAudioSessionRouteChangePreviousRouteKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [AVAudioSessionRouteDescription](avaudiosessionroutedescription.md) object that describes the audio route settings prior to the route change.

## See Also

### User Info Keys

- [AVAudioSessionRouteChangeReasonKey](avaudiosessionroutechangereasonkey.md): A user info key that’s used to retrieve the route change reason.
