> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/applicationmusicplayer/transition](https://developer.apple.com/documentation/musickit/applicationmusicplayer/transition)

# transition

**Framework:** MusicKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The transition between items for the application music player.

## Declaration

```swift
var transition: MusicPlayer.Transition { get set }
```

<a id="discussion"></a>

## Discussion

By default, the `transition` is `.none` where there is no transition between playing items.

Your application should set the desired transition before setting the queue.

The player cannot apply transitions in all scenarios. For example, the player does not apply a transition between two consecutive tracks in an album.
