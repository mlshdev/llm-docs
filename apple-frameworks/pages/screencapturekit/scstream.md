> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstream](https://developer.apple.com/documentation/screencapturekit/scstream)

# SCStream (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

An instance that represents a stream of shareable content.

## Declaration

```swift
class SCStream
```

<a id="overview"></a>

## Overview

Use a stream to capture video of screen content like apps and windows. Create a content stream by passing it an instance of [SCContentFilter](sccontentfilter.md) and an [SCStreamConfiguration](scstreamconfiguration.md) object. The stream uses the filter to determine which screen content to capture, and uses the configuration data to configure the output.

## Topics

### Creating a stream

- [init(filter:configuration:delegate:)](scstream/init%28filter_configuration_delegate_%29.md): Creates a stream with a content filter and configuration.

### Updating stream configuration

- [updateConfiguration(\_:completionHandler:)](scstream/updateconfiguration%28__completionhandler_%29.md): Updates the stream with a new configuration.
- [updateContentFilter(\_:completionHandler:)](scstream/updatecontentfilter%28__completionhandler_%29.md): Updates the stream by applying a new content filter.

### Adding and removing stream output

- [addStreamOutput(\_:type:sampleHandlerQueue:)](scstream/addstreamoutput%28__type_samplehandlerqueue_%29.md): Adds a destination that receives the stream output.
- [removeStreamOutput(\_:type:)](scstream/removestreamoutput%28__type_%29.md): Removes a destination from receiving stream output.

### Adding and removing recording output

- [addRecordingOutput(\_:)](scstream/addrecordingoutput%28__%29.md)
- [removeRecordingOutput(\_:)](scstream/removerecordingoutput%28__%29.md)
- [SCRecordingOutput](screcordingoutput.md)

### Starting and stopping a stream

- [startCapture(completionHandler:)](scstream/startcapture%28completionhandler_%29.md): Starts the stream with a callback to indicate whether it successfully starts.
- [stopCapture(completionHandler:)](scstream/stopcapture%28completionhandler_%29.md): Stops the stream.

### Stream synchronization

- [synchronizationClock](scstream/synchronizationclock.md): A clock to use for output synchronization.

### Instance Properties

- [isCapturing](scstream/iscapturing.md)

### Instance Methods

- [addClipBufferingOutput(\_:)](scstream/addclipbufferingoutput%28__%29.md)
- [addVideoEffectOutput(\_:)](scstream/addvideoeffectoutput%28__%29.md)
- [removeClipBufferingOutput(\_:)](scstream/removeclipbufferingoutput%28__%29.md)
- [removeVideoEffectOutput(\_:)](scstream/removevideoeffectoutput%28__%29.md)

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

## See Also

### Content capture

- [SCStreamConfiguration](scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCContentFilter](sccontentfilter.md): An instance that filters the content a stream captures.
- [SCStreamDelegate](scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotManager](scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotConfiguration](scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](scvideoeffectoutput.md)

# SCStream (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

An instance that represents a stream of shareable content.

## Declaration

```objectivec
@interface SCStream : NSObject
```

<a id="overview"></a>

## Overview

Use a stream to capture video of screen content like apps and windows. Create a content stream by passing it an instance of [SCContentFilter](sccontentfilter.md) and an [SCStreamConfiguration](scstreamconfiguration.md) object. The stream uses the filter to determine which screen content to capture, and uses the configuration data to configure the output.

## Topics

### Creating a stream

- [initWithFilter:configuration:delegate:](scstream/init%28filter_configuration_delegate_%29.md): Creates a stream with a content filter and configuration.

### Updating stream configuration

- [updateConfiguration:completionHandler:](scstream/updateconfiguration%28__completionhandler_%29.md): Updates the stream with a new configuration.
- [updateContentFilter:completionHandler:](scstream/updatecontentfilter%28__completionhandler_%29.md): Updates the stream by applying a new content filter.

### Adding and removing stream output

- [addStreamOutput:type:sampleHandlerQueue:error:](scstream/addstreamoutput%28__type_samplehandlerqueue_%29.md): Adds a destination that receives the stream output.
- [removeStreamOutput:type:error:](scstream/removestreamoutput%28__type_%29.md): Removes a destination from receiving stream output.

### Adding and removing recording output

- [addRecordingOutput:error:](scstream/addrecordingoutput%28__%29.md)
- [removeRecordingOutput:error:](scstream/removerecordingoutput%28__%29.md)
- [SCRecordingOutput](screcordingoutput.md)

### Starting and stopping a stream

- [startCaptureWithCompletionHandler:](scstream/startcapture%28completionhandler_%29.md): Starts the stream with a callback to indicate whether it successfully starts.
- [stopCaptureWithCompletionHandler:](scstream/stopcapture%28completionhandler_%29.md): Stops the stream.

### Stream synchronization

- [synchronizationClock](scstream/synchronizationclock.md): A clock to use for output synchronization.

### Instance Properties

- [capturing](scstream/iscapturing.md)

### Instance Methods

- [addClipBufferingOutput:error:](scstream/addclipbufferingoutput%28__%29.md)
- [addVideoEffectOutput:error:](scstream/addvideoeffectoutput%28__%29.md)
- [removeClipBufferingOutput:error:](scstream/removeclipbufferingoutput%28__%29.md)
- [removeVideoEffectOutput:error:](scstream/removevideoeffectoutput%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Content capture

- [SCStreamConfiguration](scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCContentFilter](sccontentfilter.md): An instance that filters the content a stream captures.
- [SCStreamDelegate](scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotManager](scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotConfiguration](scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](scvideoeffectoutput.md)
