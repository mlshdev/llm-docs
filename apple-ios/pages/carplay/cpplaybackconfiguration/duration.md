> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpplaybackconfiguration/duration

# duration (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The duration of the media file in seconds.

## Declaration

```swift
var duration: CMTime { get }
```

<a id="discussion"></a>

## Discussion

The system uses this value and the value in the [elapsedTime](elapsedtime.md) property to determine the playback progress. If the duration of the media file is unknown or unavailable, the value of this property is `0`. For example, the value is typically `0` for live-streaming content.

# duration (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The duration of the media file in seconds.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CMTime duration;
```

<a id="discussion"></a>

## Discussion

The system uses this value and the value in the [elapsedTime](elapsedtime.md) property to determine the playback progress. If the duration of the media file is unknown or unavailable, the value of this property is `0`. For example, the value is typically `0` for live-streaming content.
