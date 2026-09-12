> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/allowscaptureofclearkeyvideo](https://developer.apple.com/documentation/avfoundation/avplayer/allowscaptureofclearkeyvideo)

# allowsCaptureOfClearKeyVideo (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Indicates whether the video output of ClearKey Encrypted Video can be captured

## Declaration

```swift
nonisolated var allowsCaptureOfClearKeyVideo: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to YES, and the video being played by AVPlayer is Clear Key encrypted, allows video to be captured in screenshots and screen recordings, and via APIs like AVPlayerItemVideoOutput and ScreenCaptureKit. When NO, Clear Key encrypted video will not be included in such captured video. This property has no effect on content protected by FairPlay Streaming. Default is NO.

# allowsCaptureOfClearKeyVideo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Indicates whether the video output of ClearKey Encrypted Video can be captured

## Declaration

```objectivec
@property (nonatomic) BOOL allowsCaptureOfClearKeyVideo;
```

<a id="discussion"></a>

## Discussion

When set to YES, and the video being played by AVPlayer is Clear Key encrypted, allows video to be captured in screenshots and screen recordings, and via APIs like AVPlayerItemVideoOutput and ScreenCaptureKit. When NO, Clear Key encrypted video will not be included in such captured video. This property has no effect on content protected by FairPlay Streaming. Default is NO.
