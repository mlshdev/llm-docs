> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/preventsdisplaysleepduringvideoplayback](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/preventsdisplaysleepduringvideoplayback)

# preventsDisplaySleepDuringVideoPlayback (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+

A Boolean value that indicates whether the layer prevents the system from sleeping during video playback.

## Declaration

```swift
var preventsDisplaySleepDuringVideoPlayback: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to [false](https://developer.apple.com/documentation/swift/false) doesn’t force the display to sleep; it only stops preventing display sleep. Other apps or frameworks within your app may still be preventing display sleep for various reasons.

The default value is [true](https://developer.apple.com/documentation/swift/true) in iOS, tvOS, and Mac Catalyst. The default value in macOS is [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  If you enqueue sample buffers for playback at the user’s request, you should ensure that you set the value of this property to [true](https://developer.apple.com/documentation/swift/true). If your app isn’t displaying video as part of the user’s primary focus, set the value of this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Preventing backgrounding

- [preventsAutomaticBackgroundingDuringVideoPlayback](preventsautomaticbackgroundingduringvideoplayback.md): A Boolean value that indicates whether video playback prevents the system from automatically backgrounding an app.

# preventsDisplaySleepDuringVideoPlayback (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+

A Boolean value that indicates whether the layer prevents the system from sleeping during video playback.

## Declaration

```objectivec
@property (nonatomic) BOOL preventsDisplaySleepDuringVideoPlayback;
```

<a id="Discussion"></a>

## Discussion

Setting this property to [false](https://developer.apple.com/documentation/swift/false) doesn’t force the display to sleep; it only stops preventing display sleep. Other apps or frameworks within your app may still be preventing display sleep for various reasons.

The default value is [true](https://developer.apple.com/documentation/swift/true) in iOS, tvOS, and Mac Catalyst. The default value in macOS is [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  If you enqueue sample buffers for playback at the user’s request, you should ensure that you set the value of this property to [true](https://developer.apple.com/documentation/swift/true). If your app isn’t displaying video as part of the user’s primary focus, set the value of this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Preventing backgrounding

- [preventsAutomaticBackgroundingDuringVideoPlayback](preventsautomaticbackgroundingduringvideoplayback.md): A Boolean value that indicates whether video playback prevents the system from automatically backgrounding an app.
