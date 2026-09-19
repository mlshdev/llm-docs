> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/interstitialeventmonitorwithprimaryplayer:

# interstitialEventMonitorWithPrimaryPlayer:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A convenience initializer that creates an observer with a player item.

## Declaration

```objectivec
+ (instancetype) interstitialEventMonitorWithPrimaryPlayer:(AVPlayer *) primaryPlayer;
```

## Parameters

- `primaryPlayer`: An object that plays the primary content.

## See Also

### Creating a monitor

- [initWithPrimaryPlayer:](init%28primaryplayer_%29.md): Creates an observer with a player item.
