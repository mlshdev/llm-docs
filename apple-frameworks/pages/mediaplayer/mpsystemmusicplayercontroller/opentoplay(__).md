> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpsystemmusicplayercontroller/opentoplay(_:)](https://developer.apple.com/documentation/mediaplayer/mpsystemmusicplayercontroller/opentoplay(_:))

# openToPlay(\_:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Opens the Music app and plays the designated videos.

## Declaration

```swift
func openToPlay(_ queueDescriptor: MPMusicPlayerQueueDescriptor)
```

## Parameters

- `queueDescriptor`: The queue descriptor that contains the video items to play.

<a id="Discussion"></a>

## Discussion

This method launches the user’s Music app, opens to the Now Playing screen, and begins playback of the video. If the Music app isn’t installed on the device, the system ignores this method and doesn’t play the videos.

# openToPlayQueueDescriptor: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Opens the Music app and plays the designated videos.

## Declaration

```objectivec
- (void) openToPlayQueueDescriptor:(MPMusicPlayerQueueDescriptor *) queueDescriptor;
```

## Parameters

- `queueDescriptor`: The queue descriptor that contains the video items to play.

<a id="Discussion"></a>

## Discussion

This method launches the user’s Music app, opens to the Now Playing screen, and begins playback of the video. If the Music app isn’t installed on the device, the system ignores this method and doesn’t play the videos.
