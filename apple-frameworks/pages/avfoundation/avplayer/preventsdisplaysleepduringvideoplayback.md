> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/preventsdisplaysleepduringvideoplayback](https://developer.apple.com/documentation/avfoundation/avplayer/preventsdisplaysleepduringvideoplayback)

# preventsDisplaySleepDuringVideoPlayback (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+

A Boolean value that indicates whether video playback prevents display and device sleep.

## Declaration

```swift
nonisolated var preventsDisplaySleepDuringVideoPlayback: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true) in iOS, tvOS and Mac Catalyst apps, and [false](https://developer.apple.com/documentation/swift/false) in macOS.

Setting this property to [false](https://developer.apple.com/documentation/swift/false) doesn’t force the display to sleep, it only stops preventing display sleep. Other apps, or frameworks within your app may still prevent display sleep for various reasons.

> **Note**

>  Before macOS 13, iOS 16, tvOS 16, and watchOS 9, you can only access this property from the main thread or queue.

## See Also

### Preventing sleep and backgrounding

- [preventsAutomaticBackgroundingDuringVideoPlayback](preventsautomaticbackgroundingduringvideoplayback.md): A Boolean value that indicates whether video playback prevents the system from automatically backgrounding the app.

# preventsDisplaySleepDuringVideoPlayback (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+

A Boolean value that indicates whether video playback prevents display and device sleep.

## Declaration

```objectivec
@property (nonatomic) BOOL preventsDisplaySleepDuringVideoPlayback;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true) in iOS, tvOS and Mac Catalyst apps, and [false](https://developer.apple.com/documentation/swift/false) in macOS.

Setting this property to [false](https://developer.apple.com/documentation/swift/false) doesn’t force the display to sleep, it only stops preventing display sleep. Other apps, or frameworks within your app may still prevent display sleep for various reasons.

> **Note**

>  Before macOS 13, iOS 16, tvOS 16, and watchOS 9, you can only access this property from the main thread or queue.

## See Also

### Preventing sleep and backgrounding

- [preventsAutomaticBackgroundingDuringVideoPlayback](preventsautomaticbackgroundingduringvideoplayback.md): A Boolean value that indicates whether video playback prevents the system from automatically backgrounding the app.
