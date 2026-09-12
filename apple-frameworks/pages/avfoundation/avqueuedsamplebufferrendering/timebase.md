> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueuedsamplebufferrendering/timebase](https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/timebase)

# timebase (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The timebase for a renderer.

> Use an AVSampleBufferVideoRenderer or AVSampleBufferAudioRenderer with a render synchronizer instead

## Declaration

```swift
var timebase: CMTimebase { get }
```

<a id="Discussion"></a>

## Discussion

The timebase governs how time stamps are interpreted by the renderer.

# timebase (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The timebase for a renderer.

## Declaration

```objectivec
@property (retain, readonly) CMTimebaseRef timebase;
```

<a id="Discussion"></a>

## Discussion

The timebase governs how time stamps are interpreted by the renderer.
