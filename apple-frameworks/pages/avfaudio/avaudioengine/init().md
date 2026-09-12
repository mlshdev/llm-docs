> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/init()](https://developer.apple.com/documentation/avfaudio/avaudioengine/init())

# init() (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio engine instance for rendering in real time.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

A new `AVAudioEngine` instance.

<a id="Discussion"></a>

## Discussion

To operate in manual rendering mode, which removes real-time running constraints, see [enableManualRenderingMode(\_:format:maximumFrameCount:)](enablemanualrenderingmode%28__format_maximumframecount_%29.md).

# init (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio engine instance for rendering in real time.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

A new `AVAudioEngine` instance.

<a id="Discussion"></a>

## Discussion

To operate in manual rendering mode, which removes real-time running constraints, see [enableManualRenderingMode:format:maximumFrameCount:error:](enablemanualrenderingmode%28__format_maximumframecount_%29.md).
