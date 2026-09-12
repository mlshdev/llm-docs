> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat/streamdescription](https://developer.apple.com/documentation/avfaudio/avaudioformat/streamdescription)

# streamDescription (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio format properties of a stream of audio data.

## Declaration

```swift
var streamDescription: UnsafePointer<AudioStreamBasicDescription> { get }
```

<a id="Discussion"></a>

## Discussion

Returns an [AudioStreamBasicDescription](../../coreaudiotypes/audiostreambasicdescription.md) that you use with lower-level audio APIs.

# streamDescription (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio format properties of a stream of audio data.

## Declaration

```objectivec
@property (nonatomic, readonly) const AudioStreamBasicDescription * streamDescription;
```

<a id="Discussion"></a>

## Discussion

Returns an [AudioStreamBasicDescription](../../coreaudiotypes/audiostreambasicdescription.md) that you use with lower-level audio APIs.
