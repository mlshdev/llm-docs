> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/hassufficientmediadataforreliableplaybackstart](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/hassufficientmediadataforreliableplaybackstart)

# hasSufficientMediaDataForReliablePlaybackStart (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ (deprecated in 27.0) · iPadOS 14.5+ (deprecated in 27.0) · Mac Catalyst 14.5+ (deprecated in 27.0) · macOS 11.3+ (deprecated in 27.0) · tvOS 14.5+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates whether the enqueued media data meets the renderer’s preroll level.

> For smooth playback, attach the renderer to a render synchronizer and set the synchronizer's delaysRateChangeUntilHasSufficientMediaData property to true instead

## Declaration

```swift
var hasSufficientMediaDataForReliablePlaybackStart: Bool { get }
```

<a id="discussion"></a>

## Discussion

Clients should fetch the value of this property to learn if the renderer has had enough media data enqueued to start playback reliably. Starting playback when this property is NO may prevent smooth playback following an immediate start.

# hasSufficientMediaDataForReliablePlaybackStart (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Indicates whether the enqueued media data meets the renderer’s preroll level.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasSufficientMediaDataForReliablePlaybackStart;
```

<a id="discussion"></a>

## Discussion

Clients should fetch the value of this property to learn if the renderer has had enough media data enqueued to start playback reliably. Starting playback when this property is NO may prevent smooth playback following an immediate start.
