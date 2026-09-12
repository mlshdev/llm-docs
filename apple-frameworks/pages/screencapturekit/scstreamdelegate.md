> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamdelegate](https://developer.apple.com/documentation/screencapturekit/scstreamdelegate)

# SCStreamDelegate (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A delegate protocol your app implements to respond to stream events.

## Declaration

```swift
protocol SCStreamDelegate : NSObjectProtocol
```

## Topics

### Responding to Presenter Overlay

- [outputVideoEffectDidStart(for:)](scstreamdelegate/outputvideoeffectdidstart%28for_%29.md): Tells the delegate that Presenter Overlay started.
- [outputVideoEffectDidStop(for:)](scstreamdelegate/outputvideoeffectdidstop%28for_%29.md): Tells the delegate that Presenter Overlay stopped.

### Responding to stream stoppage

- [stream(\_:didStopWithError:)](scstreamdelegate/stream%28__didstopwitherror_%29.md): Tells the delegate that the stream stopped with an error.

### Instance Methods

- [outputVideoEffectDidFail(for:withError:)](scstreamdelegate/outputvideoeffectdidfail%28for_witherror_%29.md)
- [streamDidBecomeActive(\_:)](scstreamdelegate/streamdidbecomeactive%28__%29.md)
- [streamDidBecomeInactive(\_:)](scstreamdelegate/streamdidbecomeinactive%28__%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Content capture

- [SCStream](scstream.md): An instance that represents a stream of shareable content.
- [SCStreamConfiguration](scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCContentFilter](sccontentfilter.md): An instance that filters the content a stream captures.
- [SCScreenshotManager](scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotConfiguration](scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](scvideoeffectoutput.md)

# SCStreamDelegate (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A delegate protocol your app implements to respond to stream events.

## Declaration

```objectivec
@protocol SCStreamDelegate <NSObject>
```

## Topics

### Responding to Presenter Overlay

- [outputVideoEffectDidStartForStream:](scstreamdelegate/outputvideoeffectdidstart%28for_%29.md): Tells the delegate that Presenter Overlay started.
- [outputVideoEffectDidStopForStream:](scstreamdelegate/outputvideoeffectdidstop%28for_%29.md): Tells the delegate that Presenter Overlay stopped.

### Responding to stream stoppage

- [stream:didStopWithError:](scstreamdelegate/stream%28__didstopwitherror_%29.md): Tells the delegate that the stream stopped with an error.

### Instance Methods

- [outputVideoEffectDidFailForStream:withError:](scstreamdelegate/outputvideoeffectdidfail%28for_witherror_%29.md)
- [streamDidBecomeActive:](scstreamdelegate/streamdidbecomeactive%28__%29.md)
- [streamDidBecomeInactive:](scstreamdelegate/streamdidbecomeinactive%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Content capture

- [SCStream](scstream.md): An instance that represents a stream of shareable content.
- [SCStreamConfiguration](scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCContentFilter](sccontentfilter.md): An instance that filters the content a stream captures.
- [SCScreenshotManager](scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotConfiguration](scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](scvideoeffectoutput.md)
