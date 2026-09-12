> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-9he54/isplaying](https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-9he54/isplaying)

# isPlaying

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates whether playback is active.

## Declaration

```swift
@MainActor var isPlaying: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Setting this to `true` should start playback; setting it to `false` should pause it. This property reflects playback intent — it should remain `true` while [isBuffering](isbuffering.md) is `true`, indicating that playback should resume automatically once sufficient data is available.
