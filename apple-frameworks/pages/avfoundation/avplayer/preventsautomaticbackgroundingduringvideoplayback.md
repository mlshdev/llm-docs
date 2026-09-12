> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/preventsautomaticbackgroundingduringvideoplayback](https://developer.apple.com/documentation/avfoundation/avplayer/preventsautomaticbackgroundingduringvideoplayback)

# preventsAutomaticBackgroundingDuringVideoPlayback (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether video playback prevents the system from automatically backgrounding the app.

## Declaration

```swift
nonisolated var preventsAutomaticBackgroundingDuringVideoPlayback: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), which indicates the system doesn’t automatically background an app while it’s actively playing video. A user may still choose to background an app.

## See Also

### Preventing sleep and backgrounding

- [preventsDisplaySleepDuringVideoPlayback](preventsdisplaysleepduringvideoplayback.md): A Boolean value that indicates whether video playback prevents display and device sleep.

# preventsAutomaticBackgroundingDuringVideoPlayback (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether video playback prevents the system from automatically backgrounding the app.

## Declaration

```objectivec
@property (nonatomic) BOOL preventsAutomaticBackgroundingDuringVideoPlayback;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), which indicates the system doesn’t automatically background an app while it’s actively playing video. A user may still choose to background an app.

## See Also

### Preventing sleep and backgrounding

- [preventsDisplaySleepDuringVideoPlayback](preventsdisplaysleepduringvideoplayback.md): A Boolean value that indicates whether video playback prevents display and device sleep.
