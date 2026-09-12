> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/preventsautomaticbackgroundingduringvideoplayback](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/preventsautomaticbackgroundingduringvideoplayback)

# preventsAutomaticBackgroundingDuringVideoPlayback (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether video playback prevents the system from automatically backgrounding an app.

## Declaration

```swift
var preventsAutomaticBackgroundingDuringVideoPlayback: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), which indicates the system doesn’t automatically background an app while playing video. The value of this property doesn’t prevent the user from backgrounding an app.

> **Note**

>  When enqueuing sample buffers for playback at the user’s request, set the value to [true](https://developer.apple.com/documentation/swift/true), and when video playback isn’t the user’s primary focus, set it to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Preventing backgrounding

- [preventsDisplaySleepDuringVideoPlayback](preventsdisplaysleepduringvideoplayback.md): A Boolean value that indicates whether the layer prevents the system from sleeping during video playback.

# preventsAutomaticBackgroundingDuringVideoPlayback (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether video playback prevents the system from automatically backgrounding an app.

## Declaration

```objectivec
@property (nonatomic) BOOL preventsAutomaticBackgroundingDuringVideoPlayback;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), which indicates the system doesn’t automatically background an app while playing video. The value of this property doesn’t prevent the user from backgrounding an app.

> **Note**

>  When enqueuing sample buffers for playback at the user’s request, set the value to [true](https://developer.apple.com/documentation/swift/true), and when video playback isn’t the user’s primary focus, set it to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Preventing backgrounding

- [preventsDisplaySleepDuringVideoPlayback](preventsdisplaysleepduringvideoplayback.md): A Boolean value that indicates whether the layer prevents the system from sleeping during video playback.
