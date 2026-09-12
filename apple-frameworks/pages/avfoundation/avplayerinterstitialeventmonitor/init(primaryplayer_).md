> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventmonitor/init(primaryplayer:)](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/init(primaryplayer:))

# init(primaryPlayer:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an observer with a player item.

## Declaration

```swift
init(primaryPlayer: AVPlayer)
```

## Parameters

- `primaryPlayer`: An object that plays the primary content.

# initWithPrimaryPlayer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an observer with a player item.

## Declaration

```objectivec
- (instancetype) initWithPrimaryPlayer:(AVPlayer *) primaryPlayer;
```

## Parameters

- `primaryPlayer`: An object that plays the primary content.

## See Also

### Creating a monitor

- [interstitialEventMonitorWithPrimaryPlayer:](interstitialeventmonitorwithprimaryplayer_.md): A convenience initializer that creates an observer with a player item.
