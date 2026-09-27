> Snapshot-pinned source payload for Apple watchOS snapshot-a3a5c01bb2da; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfacedevice/supportsaudiostreaming

# supportsAudioStreaming (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+

A Boolean value that indicates whether the device supports audio streaming.

## Declaration

```swift
var supportsAudioStreaming: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Check this value to determine if audio streaming is available on the current Apple Watch. watchOS supports audio streaming on Apple Watch Series 3 and later.

# supportsAudioStreaming (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+

A Boolean value that indicates whether the device supports audio streaming.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsAudioStreaming;
```

<a id="Discussion"></a>

## Discussion

Check this value to determine if audio streaming is available on the current Apple Watch. watchOS supports audio streaming on Apple Watch Series 3 and later.
