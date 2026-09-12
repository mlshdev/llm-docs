> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiotime/audiotimestamp](https://developer.apple.com/documentation/avfaudio/avaudiotime/audiotimestamp)

# audioTimeStamp (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time as an audio timestamp.

## Declaration

```swift
var audioTimeStamp: AudioTimeStamp { get }
```

<a id="Discussion"></a>

## Discussion

This is useful for compatibility with lower-level Core Audio and Audio Toolbox API.

# audioTimeStamp (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time as an audio timestamp.

## Declaration

```objectivec
@property (nonatomic, readonly) AudioTimeStamp audioTimeStamp;
```

<a id="Discussion"></a>

## Discussion

This is useful for compatibility with lower-level Core Audio and Audio Toolbox API.
