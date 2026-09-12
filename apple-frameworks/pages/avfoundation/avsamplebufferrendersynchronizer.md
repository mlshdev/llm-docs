> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer)

# AVSampleBufferRenderSynchronizer (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object used to synchronize multiple queued sample buffers to a single timeline.

## Declaration

```swift
class AVSampleBufferRenderSynchronizer
```

## Mentioned In

- [Implementing flexible enhanced buffering for your content](implementing-flexible-enhanced-buffering-for-your-content.md)
- [Supporting AirPlay in your app](supporting-airplay-in-your-app.md)

<a id="overview"></a>

## Overview

This class synchronizes multiple objects that conform to [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md) to a single timeline.

## Topics

### Managing renderers

- [renderers](avsamplebufferrendersynchronizer/renderers.md): Deprecated. An array of queued sample buffer renderers currently attached to the synchronizer.
- [addRenderer(\_:)](avsamplebufferrendersynchronizer/addrenderer%28__%29.md): Deprecated. Adds a renderer to the list of renderers under the synchronizer’s control.
- [removeRenderer(\_:at:completionHandler:)](avsamplebufferrendersynchronizer/removerenderer%28__at_completionhandler_%29.md): Deprecated. Removes a renderer from the synchronizer.

### Accessing time information

- [currentTime()](avsamplebufferrendersynchronizer/currenttime%28%29.md): Returns the current time of the synchronizer.
- [timebase](avsamplebufferrendersynchronizer/timebase.md): The synchronizer’s rendering timebase which determines how it interprets timestamps.
- [rate](avsamplebufferrendersynchronizer/rate.md): The current playback rate.
- [setRate(\_:time:)](avsamplebufferrendersynchronizer/setrate%28__time_%29.md): Sets the renderer’s time and rate.
- [setRate(\_:time:atHostTime:)](avsamplebufferrendersynchronizer/setrate%28__time_athosttime_%29.md): Sets the playback rate and the relationship between the current time and host time.
- [rateDidChangeNotification](avsamplebufferrendersynchronizer/ratedidchangenotification.md): The synchronizer’s rendering rate changed.
- [delaysRateChangeUntilHasSufficientMediaData](avsamplebufferrendersynchronizer/delaysratechangeuntilhassufficientmediadata.md): A Boolean value that Indicates whether the playback should start immediately on rate change requests.

### Observing time

- [addPeriodicTimeObserver(forInterval:queue:using:)](avsamplebufferrendersynchronizer/addperiodictimeobserver%28forinterval_queue_using_%29.md): Requests invocation of a block during rendering at specified time intervals.
- [addBoundaryTimeObserver(forTimes:queue:using:)](avsamplebufferrendersynchronizer/addboundarytimeobserver%28fortimes_queue_using_%29.md): Requests invocation of a block when specified times are traversed during normal rendering.
- [removeTimeObserver(\_:)](avsamplebufferrendersynchronizer/removetimeobserver%28__%29.md): Cancels the specified time observer.

### Configuring audio behavior

- [intendedSpatialAudioExperience](avsamplebufferrendersynchronizer/intendedspatialaudioexperience-3z7d3.md): The synchronizer’s intended Spatial Audio experience.

### Instance Methods

- [removeReceiver(\_:at:)](avsamplebufferrendersynchronizer/removereceiver%28__at_%29-3rrnp.md): Removes a receiver and its renderer from the synchronizer.
- [removeReceiver(\_:at:)](avsamplebufferrendersynchronizer/removereceiver%28__at_%29-3yxub.md): Removes a receiver and its renderer from the synchronizer.
- [sampleBufferReceiver(adding:)](avsamplebufferrendersynchronizer/samplebufferreceiver%28adding_%29-5dw84.md): Adds a renderer to the list of renderers under the synchronizer’s control and returns a sample buffer receiver to enqueue samples.
- [sampleBufferReceiver(adding:)](avsamplebufferrendersynchronizer/samplebufferreceiver%28adding_%29-rxap.md): Adds a renderer to the list of renderers under the synchronizer’s control and returns a sample buffer receiver to enqueue samples.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presentation

- [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md): Deprecated. Methods you can implement to enqueue sample buffers for presentation.
- [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md): An object that displays compressed or uncompressed video frames.
- [AVSampleBufferVideoRenderer](avsamplebuffervideorenderer.md): An object that enqueues video sample buffers for rendering.
- [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md): An object used to decompress audio and play compressed or uncompressed audio.

# AVSampleBufferRenderSynchronizer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object used to synchronize multiple queued sample buffers to a single timeline.

## Declaration

```objectivec
@interface AVSampleBufferRenderSynchronizer : NSObject
```

## Mentioned In

- [Implementing flexible enhanced buffering for your content](implementing-flexible-enhanced-buffering-for-your-content.md)
- [Supporting AirPlay in your app](supporting-airplay-in-your-app.md)

<a id="overview"></a>

## Overview

This class synchronizes multiple objects that conform to [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md) to a single timeline.

## Topics

### Managing renderers

- [renderers](avsamplebufferrendersynchronizer/renderers.md): Deprecated. An array of queued sample buffer renderers currently attached to the synchronizer.
- [addRenderer:](avsamplebufferrendersynchronizer/addrenderer%28__%29.md): Deprecated. Adds a renderer to the list of renderers under the synchronizer’s control.
- [removeRenderer:atTime:completionHandler:](avsamplebufferrendersynchronizer/removerenderer%28__at_completionhandler_%29.md): Deprecated. Removes a renderer from the synchronizer.

### Accessing time information

- [currentTime](avsamplebufferrendersynchronizer/currenttime%28%29.md): Returns the current time of the synchronizer.
- [timebase](avsamplebufferrendersynchronizer/timebase.md): The synchronizer’s rendering timebase which determines how it interprets timestamps.
- [rate](avsamplebufferrendersynchronizer/rate.md): The current playback rate.
- [setRate:time:](avsamplebufferrendersynchronizer/setrate%28__time_%29.md): Sets the renderer’s time and rate.
- [setRate:time:atHostTime:](avsamplebufferrendersynchronizer/setrate%28__time_athosttime_%29.md): Sets the playback rate and the relationship between the current time and host time.
- [AVSampleBufferRenderSynchronizerRateDidChangeNotification](avsamplebufferrendersynchronizer/ratedidchangenotification.md): The synchronizer’s rendering rate changed.
- [delaysRateChangeUntilHasSufficientMediaData](avsamplebufferrendersynchronizer/delaysratechangeuntilhassufficientmediadata.md): A Boolean value that Indicates whether the playback should start immediately on rate change requests.

### Observing time

- [addPeriodicTimeObserverForInterval:queue:usingBlock:](avsamplebufferrendersynchronizer/addperiodictimeobserver%28forinterval_queue_using_%29.md): Requests invocation of a block during rendering at specified time intervals.
- [addBoundaryTimeObserverForTimes:queue:usingBlock:](avsamplebufferrendersynchronizer/addboundarytimeobserver%28fortimes_queue_using_%29.md): Requests invocation of a block when specified times are traversed during normal rendering.
- [removeTimeObserver:](avsamplebufferrendersynchronizer/removetimeobserver%28__%29.md): Cancels the specified time observer.

### Configuring audio behavior

- [intendedSpatialAudioExperience](avsamplebufferrendersynchronizer/intendedspatialaudioexperience-2wthu.md): The intended spatial audio experience applied to all AVSampleBufferAudioRenderers within this synchronizer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Presentation

- [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md): Deprecated. Methods you can implement to enqueue sample buffers for presentation.
- [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md): An object that displays compressed or uncompressed video frames.
- [AVSampleBufferVideoRenderer](avsamplebuffervideorenderer.md): An object that enqueues video sample buffers for rendering.
- [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md): An object used to decompress audio and play compressed or uncompressed audio.
