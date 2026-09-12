> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocleanaperturekey](https://developer.apple.com/documentation/avfoundation/avvideocleanaperturekey)

# AVVideoCleanApertureKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A key that defines the region within the video dimension displayed during playback.

## Declaration

```swift
let AVVideoCleanApertureKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an instance of `NSDictionary` containing one or more of the following keys: [AVVideoCleanApertureWidthKey](avvideocleanaperturewidthkey.md), [AVVideoCleanApertureHeightKey](avvideocleanapertureheightkey.md), [AVVideoCleanApertureHorizontalOffsetKey](avvideocleanaperturehorizontaloffsetkey.md), or [AVVideoCleanApertureVerticalOffsetKey](avvideocleanapertureverticaloffsetkey.md). If no clean aperture region is specified, the playback displays the entire frame.

## See Also

### Clean aperture

- [AVVideoCleanApertureWidthKey](avvideocleanaperturewidthkey.md): A key to access the width of video that’s free from transition artifacts caused by signal encoding.
- [AVVideoCleanApertureHeightKey](avvideocleanapertureheightkey.md): A key to access the height of video that’s free from transition artifacts caused by signal encoding.
- [AVVideoCleanApertureVerticalOffsetKey](avvideocleanapertureverticaloffsetkey.md): A key to access the vertical offset of video that’s free from transition artifacts caused by signal encoding.
- [AVVideoCleanApertureHorizontalOffsetKey](avvideocleanaperturehorizontaloffsetkey.md): A key to access the horizontal offset of video that’s free from transition artifacts caused by signal encoding.

# AVVideoCleanApertureKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A key that defines the region within the video dimension displayed during playback.

## Declaration

```objectivec
extern NSString * const AVVideoCleanApertureKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an instance of `NSDictionary` containing one or more of the following keys: [AVVideoCleanApertureWidthKey](avvideocleanaperturewidthkey.md), [AVVideoCleanApertureHeightKey](avvideocleanapertureheightkey.md), [AVVideoCleanApertureHorizontalOffsetKey](avvideocleanaperturehorizontaloffsetkey.md), or [AVVideoCleanApertureVerticalOffsetKey](avvideocleanapertureverticaloffsetkey.md). If no clean aperture region is specified, the playback displays the entire frame.

## See Also

### Clean aperture

- [AVVideoCleanApertureWidthKey](avvideocleanaperturewidthkey.md): A key to access the width of video that’s free from transition artifacts caused by signal encoding.
- [AVVideoCleanApertureHeightKey](avvideocleanapertureheightkey.md): A key to access the height of video that’s free from transition artifacts caused by signal encoding.
- [AVVideoCleanApertureVerticalOffsetKey](avvideocleanapertureverticaloffsetkey.md): A key to access the vertical offset of video that’s free from transition artifacts caused by signal encoding.
- [AVVideoCleanApertureHorizontalOffsetKey](avvideocleanaperturehorizontaloffsetkey.md): A key to access the horizontal offset of video that’s free from transition artifacts caused by signal encoding.
