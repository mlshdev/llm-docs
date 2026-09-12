> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer)

# AVSampleBufferDisplayLayer (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

An object that displays compressed or uncompressed video frames.

## Declaration

```swift
@MainActor class AVSampleBufferDisplayLayer
```

## Topics

### Accessing the video renderer

- [sampleBufferRenderer](avsamplebufferdisplaylayer/samplebufferrenderer.md): An object that enqueues video sample buffers for rendering.

### Configuring the layer

- [isReadyForDisplay](avsamplebufferdisplaylayer/isreadyfordisplay.md): A Boolean value that indicates whether the first video frame is ready for display.
- [controlTimebase](avsamplebufferdisplaylayer/controltimebase.md): A timebase that determines how the layer interprets timestamps.
- [videoGravity](avsamplebufferdisplaylayer/videogravity.md): A value that indicates how the layer displays video within its bounds.
- [AVLayerVideoGravity](avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.

### Protecting content

- [preventsCapture](avsamplebufferdisplaylayer/preventscapture.md): A Boolean value that indicates whether the layer protects against screen capture.
- [isOutputObscuredDueToInsufficientExternalProtection](avsamplebufferdisplaylayer/isoutputobscuredduetoinsufficientexternalprotection.md): A Boolean value that indicates whether the system obscures decoded output due to insufficient external protection on the current device.

### Preventing backgrounding

- [preventsDisplaySleepDuringVideoPlayback](avsamplebufferdisplaylayer/preventsdisplaysleepduringvideoplayback.md): A Boolean value that indicates whether the layer prevents the system from sleeping during video playback.
- [preventsAutomaticBackgroundingDuringVideoPlayback](avsamplebufferdisplaylayer/preventsautomaticbackgroundingduringvideoplayback.md): A Boolean value that indicates whether video playback prevents the system from automatically backgrounding an app.

### Handling errors

- [AVSampleBufferDisplayLayerFailedToDecode](../foundation/nsnotification/name-swift.struct/avsamplebufferdisplaylayerfailedtodecode.md): A notification the system posts when a sample buffer display layer fails to decode.
- [AVSampleBufferDisplayLayerFailedToDecodeNotificationErrorKey](avsamplebufferdisplaylayerfailedtodecodenotificationerrorkey.md): The key for the corresponding error.

### Deprecated

- [Deprecated symbols](avsamplebufferdisplaylayer-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [CALayer](../quartzcore/calayer.md)

### Conforms To

- [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md)
- [CAMediaTiming](../quartzcore/camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presentation

- [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md): Deprecated. Methods you can implement to enqueue sample buffers for presentation.
- [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md): An object used to synchronize multiple queued sample buffers to a single timeline.
- [AVSampleBufferVideoRenderer](avsamplebuffervideorenderer.md): An object that enqueues video sample buffers for rendering.
- [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md): An object used to decompress audio and play compressed or uncompressed audio.

# AVSampleBufferDisplayLayer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

An object that displays compressed or uncompressed video frames.

## Declaration

```objectivec
@interface AVSampleBufferDisplayLayer : CALayer
```

## Topics

### Accessing the video renderer

- [sampleBufferRenderer](avsamplebufferdisplaylayer/samplebufferrenderer.md): An object that enqueues video sample buffers for rendering.

### Configuring the layer

- [readyForDisplay](avsamplebufferdisplaylayer/isreadyfordisplay.md): A Boolean value that indicates whether the first video frame is ready for display.
- [controlTimebase](avsamplebufferdisplaylayer/controltimebase.md): A timebase that determines how the layer interprets timestamps.
- [videoGravity](avsamplebufferdisplaylayer/videogravity.md): A value that indicates how the layer displays video within its bounds.
- [AVLayerVideoGravity](avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.

### Protecting content

- [preventsCapture](avsamplebufferdisplaylayer/preventscapture.md): A Boolean value that indicates whether the layer protects against screen capture.
- [outputObscuredDueToInsufficientExternalProtection](avsamplebufferdisplaylayer/isoutputobscuredduetoinsufficientexternalprotection.md): A Boolean value that indicates whether the system obscures decoded output due to insufficient external protection on the current device.

### Preventing backgrounding

- [preventsDisplaySleepDuringVideoPlayback](avsamplebufferdisplaylayer/preventsdisplaysleepduringvideoplayback.md): A Boolean value that indicates whether the layer prevents the system from sleeping during video playback.
- [preventsAutomaticBackgroundingDuringVideoPlayback](avsamplebufferdisplaylayer/preventsautomaticbackgroundingduringvideoplayback.md): A Boolean value that indicates whether video playback prevents the system from automatically backgrounding an app.

### Handling errors

- [AVSampleBufferDisplayLayerFailedToDecodeNotification](avsamplebufferdisplaylayerfailedtodecodenotification.md): A notification the system posts when a sample buffer display layer fails to decode.
- [AVSampleBufferDisplayLayerFailedToDecodeNotificationErrorKey](avsamplebufferdisplaylayerfailedtodecodenotificationerrorkey.md): The key for the corresponding error.

### Deprecated

- [Deprecated symbols](avsamplebufferdisplaylayer-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [CALayer](../quartzcore/calayer.md)

### Conforms To

- [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md)

## See Also

### Presentation

- [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md): Deprecated. Methods you can implement to enqueue sample buffers for presentation.
- [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md): An object used to synchronize multiple queued sample buffers to a single timeline.
- [AVSampleBufferVideoRenderer](avsamplebuffervideorenderer.md): An object that enqueues video sample buffers for rendering.
- [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md): An object used to decompress audio and play compressed or uncompressed audio.
