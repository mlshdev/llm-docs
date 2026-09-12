> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventcontroller/interstitialeventcontrollerwithprimaryplayer:](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventcontroller/interstitialeventcontrollerwithprimaryplayer:)

# interstitialEventControllerWithPrimaryPlayer:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A convenience initializer that creates an event controller with a player item.

## Declaration

```objectivec
+ (instancetype) interstitialEventControllerWithPrimaryPlayer:(AVPlayer *) primaryPlayer;
```

## Parameters

- `primaryPlayer`: A player that plays primary content. The system raises an exception you specify an interstitial player for this argument.

## See Also

### Creating an event controller

- [initWithPrimaryPlayer:](init%28primaryplayer_%29.md): Creates an event controller with a player item.
