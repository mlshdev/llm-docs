> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpplaybackconfiguration/elapsedtime

# elapsedTime (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The elapsed time since the start of playback.

## Declaration

```swift
var elapsedTime: CMTime { get }
```

<a id="discussion"></a>

## Discussion

For a paused item, this value represents the amount of the media file already played. For live-streamed content, this value might represent the amount of time from the beginning of the event or the point at which someone joined the stream. The system uses this value and the value in the [duration](duration.md) property to determine the playback progress.

# elapsedTime (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The elapsed time since the start of playback.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CMTime elapsedTime;
```

<a id="discussion"></a>

## Discussion

For a paused item, this value represents the amount of the media file already played. For live-streamed content, this value might represent the amount of time from the beginning of the event or the point at which someone joined the stream. The system uses this value and the value in the [duration](duration.md) property to determine the playback progress.
