> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/outputvolume](https://developer.apple.com/documentation/avfaudio/avaudiosession/outputvolume)

# outputVolume (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The systemwide output volume set by the user.

## Declaration

```swift
var outputVolume: Float { get }
```

<a id="Discussion"></a>

## Discussion

This property returns a value in the range `0.0` to `1.0`, with `0.0` representing the minimum volume, and `1.0` representing the maximum volume.

Only the user can directly set the system volume. Provide a volume control in your app, using [MPVolumeView](../../mediaplayer/mpvolumeview.md), to provide the interface to adjust the system volume.

You can observe changes to the value of this property by using [Key-value observing](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KVO.html#//apple_ref/doc/uid/TP40008195-CH16).

# outputVolume (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The systemwide output volume set by the user.

## Declaration

```objectivec
@property (readonly) float outputVolume;
```

<a id="Discussion"></a>

## Discussion

This property returns a value in the range `0.0` to `1.0`, with `0.0` representing the minimum volume, and `1.0` representing the maximum volume.

Only the user can directly set the system volume. Provide a volume control in your app, using [MPVolumeView](../../mediaplayer/mpvolumeview.md), to provide the interface to adjust the system volume.

You can observe changes to the value of this property by using [Key-value observing](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KVO.html#//apple_ref/doc/uid/TP40008195-CH16).
